-- Create audience_personas table
CREATE TABLE IF NOT EXISTS audience_personas (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  demographics TEXT,
  goals TEXT,
  pain_points TEXT,
  preferences TEXT,
  behaviors TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Disable RLS for development
ALTER TABLE audience_personas DISABLE ROW LEVEL SECURITY;

-- Drop any existing policies
DROP POLICY IF EXISTS audience_personas_select_policy ON audience_personas;
DROP POLICY IF EXISTS audience_personas_insert_policy ON audience_personas;
DROP POLICY IF EXISTS audience_personas_update_policy ON audience_personas;
DROP POLICY IF EXISTS audience_personas_delete_policy ON audience_personas;

-- Create public access policies for development
CREATE POLICY audience_personas_select_policy ON audience_personas
  FOR SELECT USING (true);

CREATE POLICY audience_personas_insert_policy ON audience_personas
  FOR INSERT WITH CHECK (true);

CREATE POLICY audience_personas_update_policy ON audience_personas
  FOR UPDATE USING (true);

CREATE POLICY audience_personas_delete_policy ON audience_personas
  FOR DELETE USING (true);

-- Enable RLS but with public policies for development
ALTER TABLE audience_personas ENABLE ROW LEVEL SECURITY;
