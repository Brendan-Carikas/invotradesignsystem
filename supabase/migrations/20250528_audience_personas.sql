-- Create audience_personas table
CREATE TABLE IF NOT EXISTS audience_personas (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  demographics TEXT NOT NULL,
  goals TEXT NOT NULL,
  pain_points TEXT,
  motivations TEXT,
  behaviors TEXT,
  preferences TEXT,
  tech_proficiency TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Disable RLS for development (will be enabled in production)
ALTER TABLE audience_personas DISABLE ROW LEVEL SECURITY;

-- Create policies for audience_personas table
DROP POLICY IF EXISTS "Allow public access to audience_personas" ON audience_personas;
CREATE POLICY "Allow public access to audience_personas"
  ON audience_personas
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Enable RLS but with open policies for development
ALTER TABLE audience_personas ENABLE ROW LEVEL SECURITY;
