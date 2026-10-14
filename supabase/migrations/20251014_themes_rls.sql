-- Enable Row-Level Security on public.themes (fixes Supabase advisor: rls_disabled_in_public)
--
-- The themes table stores saved MUI themes (id, name, theme_data, description,
-- is_public, created_at, ...). It was created outside this repo's migrations.
--
-- Policy: anyone may read themes flagged is_public = true. No INSERT/UPDATE/DELETE
-- policies exist, so writes via the anon/authenticated API roles are denied.
-- (The service role and direct SQL / dashboard edits bypass RLS.)
-- Add write policies here once an auth model for themes is decided.

ALTER TABLE public.themes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public read of public themes" ON public.themes;
CREATE POLICY "Allow public read of public themes"
  ON public.themes
  FOR SELECT
  TO anon, authenticated
  USING (is_public = true);
