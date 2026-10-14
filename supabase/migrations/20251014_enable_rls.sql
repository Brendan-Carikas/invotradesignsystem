-- Enable Row-Level Security on all public tables (fixes Supabase advisor: rls_disabled_in_public)
--
-- NOTE: Authentication for this app is handled by Firebase, so Supabase sees every
-- request as the `anon` role. The policies below therefore keep the existing open
-- access behaviour. Data is still readable/writable by anyone with the project URL
-- and anon key. To lock this down, integrate Firebase as a Supabase third-party auth
-- provider and replace these policies with `authenticated` ones.

-- bot_personas
ALTER TABLE bot_personas ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public access to bot_personas" ON bot_personas;
CREATE POLICY "Allow public access to bot_personas"
  ON bot_personas
  FOR ALL
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

-- audience_personas
ALTER TABLE audience_personas ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public access to audience_personas" ON audience_personas;
CREATE POLICY "Allow public access to audience_personas"
  ON audience_personas
  FOR ALL
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);
