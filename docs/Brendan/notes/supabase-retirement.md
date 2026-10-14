# Supabase retirement: notes to pick up later

Written 2026-10-14. Project is paused/archived and will restart in a few months.
Decision: remove the Supabase dependency now; come back and set up Supabase + Firebase
properly when the project restarts.

## Why

A Supabase Security Advisor review found the persona tables were effectively public.
Fixing it properly (Firebase login linked to Supabase) was more work than the paused
project justified, so the dependency was retired instead.

## What was done (code)

- `src/lib/supabase.ts` deleted. The old version is recoverable from git:
  `git show d09ea9b:src/lib/supabase.ts`
- New `src/lib/personaStore.ts`: same function names/signatures, but stores personas in
  the browser's localStorage (keys `ids.botPersonas`, `ids.audiencePersonas`). Data is
  per-browser and not shared between users. Built-in sample personas still appear.
- Imports switched to `@/lib/personaStore` in: BotPersonaTab, BotPersonaForm,
  AIAssistantEditForm, AudiencePersonaTab, ChatbotIndex.
- `@supabase/supabase-js` removed from package.json / package-lock.json.
- Supabase vars removed from `.env.example`. README updated.
- `npm run build` passes. (`tsc` reports one pre-existing, unrelated error in
  `src/types/AIAssistant.ts`: missing `ReactNode` import.)

## Left in place on purpose

- `supabase/` folder (README + migrations): the schema record for when we return.
- `.env` still contains `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` (not touched).
  Nothing reads them now.
- `bun.lockb` is stale (still lists supabase-js); bun isn't installed here. Regenerate
  with `bun install` if bun is used.
- `AudiencePersonaTab.tsx.bak` still imports the old supabase module; it is not compiled.
- Some local variable names in AudiencePersonaTab.tsx still say `supabasePersonas`.
  Cosmetic only.

## IMPORTANT: Supabase tables and data will be deleted (decided 2026-10-14)

Brendan is retiring the Supabase tables and their data in the Supabase project itself.
**On return, the database must be rebuilt from scratch**: the tables, triggers, policies
and any persona data will not exist. Recreate them from `supabase/migrations/` (fixing
the known issues below first), then re-enter or re-import any personas. Any CSV export
taken before deletion is the only copy of the data. The sample personas built into the
app (`src/types/BotPersona.ts`, `src/types/AudiencePersona.ts`) are not affected.

## Still to do on the live Supabase project (dashboard, not code)

1. **Export any persona data you want to keep** (Table Editor, `bot_personas` and
   `audience_personas`, export as CSV) **before deleting the tables**. The app no longer
   reads it.
2. **Delete the persona tables** (`bot_personas`, `audience_personas`). This removes
   the public exposure without needing the full fix. **Don't pause or delete the whole
   Supabase project** while `themes` (below) lives in it, as that would affect the other
   project.
3. **`themes` table: belongs to another project, leave it alone.** Confirmed by Brendan
   on 2026-10-14. It is NOT part of this project and does not need to be considered when
   this project is revived. It is noted here only because it originally lived in the same
   Supabase project/data as the persona tables. It holds MUI theme rows ("Arto Admin",
   "Arto Marketing", "TEST THEME 123", all `is_public = FALSE`). Nothing in this repo uses
   it. Its RLS was enabled during the advisor review (see `20251014_themes_rls.sql`
   below), so that other project's anon-key reads now only see rows with
   `is_public = true`; check that project still works.

## Migrations (reference for rebuilding the database)

Run order when recreating: the three originals (`20250527_bot_personas.sql`,
`20250527_fix_rls.sql`, `20250528_audience_personas.sql`), but note the issues in the next
section and skip the open-access RLS in favour of the authenticated policies from the
restore plan. The three `20251014_*` files were written during the advisor review and
may never have been run on the live project (they will be moot once the tables are
deleted):

- `20251014_enable_rls.sql`: enables RLS on bot_personas + audience_personas with open
  policies (clears "RLS disabled"; data stays publicly writable).
- `20251014_themes_rls.sql`: RLS on `themes` (another project's table, not this one),
  public read only where `is_public = true`, no writes via API. Not needed to revive
  this project. May hide the Arto rows from any anon-key reader in the other project.
- `20251014_fix_function_search_path.sql`: pins `search_path` on `update_updated_at`.

At the last advisor check: 0 errors, 3 warnings (2x "RLS policy always true" on the
persona tables, 1x "Postgres version has security patches": upgrade in Project Settings >
Infrastructure, causes a brief restart).

## Known issues in the old setup (fix when restoring)

- `bot_personas` has no `audience_personas` column in the migrations (only `audience`),
  but the old code wrote `audience_personas`. Saves would fail unless the live DB was
  changed by hand. Add a migration for it.
- `audience_personas` migration used `uuid_generate_v4()` (needs the uuid-ossp
  extension); use `gen_random_uuid()` like bot_personas.
- supabase/README.md still documents the old `audience` column.

## Plan to restore Supabase properly (when the project restarts)

Goal: only signed-in Firebase users can read/write personas.

0. **Rebuild the database** (tables will have been deleted; see above). Make a single
   clean migration: create `bot_personas` (include the `audience_personas` column) and
   `audience_personas` (use `gen_random_uuid()`), the `updated_at` trigger function with
   `SET search_path = ''`, and RLS enabled with **no policies yet** (blocks all API access
   until step 4; never create open `USING (true)` policies). Then do steps 1-3.
1. **Firebase:** give approved users the custom claim `role: "authenticated"`
   (Supabase ignores Firebase tokens without it). Simplest: a one-off Firebase Admin SDK
   script over an allowlist of accounts (e.g. chat@invotra.com, demo@invotra.com, admin
   accounts), which doubles as access control. Alternative: a Firebase blocking function
   (needs Blaze plan + Identity Platform; would grant it to any new signup).
   The app has an open `signup()` in `src/contexts/AuthContext.tsx`: decide whether to
   remove/lock it.
2. **Supabase dashboard:** Authentication > Sign In / Providers > Third-Party Auth >
   add Firebase, project ID `ids-project-597cc`.
3. **App code:** reinstall `@supabase/supabase-js`, restore a client with
   `createClient(url, anonKey, { accessToken: () => auth.currentUser?.getIdToken() })`
   (auth from `src/firebase.ts`), and either swap `personaStore.ts` back to Supabase calls
   (old code: `git show d09ea9b:src/lib/supabase.ts`) or have it wrap both.
4. **Policies (after 1-3 are deployed):** add `TO authenticated` policies on
   bot_personas / audience_personas, then test with a claimed account.
5. Re-run the Security Advisor; upgrade Postgres.

Open questions to settle first:
- Which accounts get access?
- Can demo/standard roles edit personas, or read only?
- Who has Firebase Admin / service-account access to run the claim script?
