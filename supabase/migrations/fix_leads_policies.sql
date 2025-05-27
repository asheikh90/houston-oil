/*
  # Fix leads table policies

  1. Changes
    - Use IF NOT EXISTS for policy creation to avoid duplicate policy errors
    - Ensures policies are only created if they don't already exist
  
  2. Security
    - Maintains existing RLS policies for the leads table
*/

-- Check if the policy exists before creating it
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'leads' AND policyname = 'Anyone can insert leads'
    ) THEN
        CREATE POLICY "Anyone can insert leads"
          ON leads
          FOR INSERT
          TO anon, authenticated
          WITH CHECK (true);
    END IF;
    
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'leads' AND policyname = 'Authenticated users can read leads'
    ) THEN
        CREATE POLICY "Authenticated users can read leads"
          ON leads
          FOR SELECT
          TO authenticated
          USING (true);
    END IF;
END
$$;
