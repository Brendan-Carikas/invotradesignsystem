-- Create the bot_personas table
CREATE TABLE IF NOT EXISTS bot_personas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  organization TEXT NOT NULL,
  audience TEXT,
  brand_tone TEXT,
  service_tasks TEXT,
  persuasive_tasks TEXT,
  channels TEXT,
  register JSONB NOT NULL DEFAULT '{"formal": false, "sincere": false, "serious": false, "subjective": false, "casual": false, "humorous": false}',
  age TEXT,
  gender TEXT,
  personality TEXT,
  backstory TEXT,
  geography TEXT,
  bot_tone TEXT,
  sounds_like TEXT,
  chats_like TEXT,
  other_identity TEXT,
  typical_phrases TEXT,
  introductions TEXT,
  acknowledgements TEXT,
  confirmations TEXT,
  apologies TEXT,
  other_vocabulary TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create an update trigger for updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at
BEFORE UPDATE ON bot_personas
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

-- Create RLS policies but make them public for testing
ALTER TABLE bot_personas ENABLE ROW LEVEL SECURITY;

-- Allow public access for testing
CREATE POLICY "Allow public access to bot_personas"
  ON bot_personas
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Note: In a production environment, you would want to restrict access
-- to authenticated users only. The above policy allows anonymous access
-- for testing purposes.
