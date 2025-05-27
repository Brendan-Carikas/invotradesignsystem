# Supabase Integration for Bot Personas

## Setup Instructions

### 1. Create a Supabase Project

1. Go to [Supabase](https://supabase.com/) and sign up or log in
2. Create a new project
3. Note your project URL and anon key (public API key)

### 2. Set Up Environment Variables

Add the following variables to your `.env` file:

```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### 3. Create the Database Table

1. Go to the SQL Editor in your Supabase dashboard
2. Copy and paste the SQL from the `migrations/20250527_bot_personas.sql` file
3. Run the SQL to create the table and set up the necessary triggers and policies

### 4. Test the Connection

After setting up the environment variables and restarting your development server, you should be able to create, read, update, and delete bot personas using the application.

## Data Model

The `bot_personas` table has the following structure:

| Column            | Type        | Description                                |
|-------------------|-------------|--------------------------------------------|  
| id                | UUID        | Primary key, auto-generated                |
| name              | TEXT        | Name of the bot persona                    |
| organization      | TEXT        | Organization the bot belongs to            |
| audience          | TEXT        | Target audience for the bot                |
| brand_tone        | TEXT        | Tone of the brand                          |
| service_tasks     | TEXT        | Tasks related to service                   |
| persuasive_tasks  | TEXT        | Tasks related to persuasion                |
| channels          | TEXT        | Communication channels                     |
| register          | JSONB       | JSON object for formal/casual settings     |
| age               | TEXT        | Age representation of the bot              |
| gender            | TEXT        | Gender representation of the bot           |
| personality       | TEXT        | Personality traits                         |
| backstory         | TEXT        | Background story for the bot               |
| geography         | TEXT        | Geographic context                         |
| bot_tone          | TEXT        | Tone of voice for the bot                  |
| sounds_like       | TEXT        | Description of how the bot sounds          |
| chats_like        | TEXT        | Description of chat style                  |
| other_identity    | TEXT        | Other identity characteristics             |
| typical_phrases   | TEXT        | Common phrases used by the bot             |
| introductions     | TEXT        | How the bot introduces itself              |
| acknowledgements  | TEXT        | How the bot acknowledges user input        |
| confirmations     | TEXT        | How the bot confirms actions               |
| apologies         | TEXT        | How the bot apologizes                     |
| other_vocabulary  | TEXT        | Other vocabulary elements                  |
| created_at        | TIMESTAMPTZ | Creation timestamp, auto-generated         |
| updated_at        | TIMESTAMPTZ | Last update timestamp, auto-updated        |
