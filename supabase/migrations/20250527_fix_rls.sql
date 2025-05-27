-- First, disable RLS for the bot_personas table for development
ALTER TABLE bot_personas DISABLE ROW LEVEL SECURITY;

-- Drop any existing policies
DROP POLICY IF EXISTS "Allow public access to bot_personas" ON bot_personas;
DROP POLICY IF EXISTS "Allow authenticated users to read bot_personas" ON bot_personas;
DROP POLICY IF EXISTS "Allow authenticated users to insert bot_personas" ON bot_personas;
DROP POLICY IF EXISTS "Allow authenticated users to update bot_personas" ON bot_personas;
DROP POLICY IF EXISTS "Allow authenticated users to delete bot_personas" ON bot_personas;

-- Note: For production, you would want to re-enable RLS and create appropriate policies
-- This configuration is for development purposes only
