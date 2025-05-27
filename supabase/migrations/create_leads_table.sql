/*
  # Create leads table

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `industry` (text)
      - `other_industry` (text)
      - `products` (text array)
      - `other_product` (text)
      - `fleet_size` (text)
      - `delivery_timeline` (text)
      - `first_name` (text)
      - `last_name` (text)
      - `company_name` (text)
      - `email` (text)
      - `phone` (text)
      - `additional_info` (text)
      - `created_at` (timestamp with time zone)
  2. Security
    - Enable RLS on `leads` table
    - Add policy for authenticated users to insert data
    - Add policy for authenticated users to read their own data
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  industry text NOT NULL,
  other_industry text,
  products text[] NOT NULL,
  other_product text,
  fleet_size text NOT NULL,
  delivery_timeline text NOT NULL,
  first_name text NOT NULL,
  last_name text NOT NULL,
  company_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  additional_info text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert leads"
  ON leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);
