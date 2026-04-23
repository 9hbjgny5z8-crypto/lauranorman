# Database Schema for Real Estate Leads

This application requires two tables in your Supabase database. Follow these instructions to set up your database.

## Setup Instructions

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Run the SQL commands below to create the necessary tables

## Table 1: valuation_leads

```sql
CREATE TABLE valuation_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  property_type TEXT NOT NULL,
  bedrooms INTEGER NOT NULL,
  bathrooms NUMERIC NOT NULL,
  square_feet INTEGER NOT NULL,
  year_built INTEGER,
  additional_info TEXT,
  -- CRM fields
  status TEXT DEFAULT 'new',
  priority TEXT DEFAULT 'medium',
  notes TEXT,
  last_contacted TIMESTAMP WITH TIME ZONE,
  follow_up_date DATE,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Enable Row Level Security
ALTER TABLE valuation_leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for the lead form)
CREATE POLICY "Allow public inserts" ON valuation_leads
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

-- Create policy to allow reads from anyone (for the dashboard)
-- NOTE: For production, you should add authentication and restrict this to authenticated users only
CREATE POLICY "Allow public reads" ON valuation_leads
  FOR SELECT TO anon, authenticated
  USING (true);

-- Create policy to allow updates from anyone (for CRM features)
-- NOTE: For production, restrict this to authenticated users only
CREATE POLICY "Allow public updates" ON valuation_leads
  FOR UPDATE TO anon, authenticated
  USING (true)
  WITH CHECK (true);
```

### Migration SQL for Existing Tables

If you already have the valuation_leads table, run this to add CRM fields:

```sql
ALTER TABLE valuation_leads
ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'new',
ADD COLUMN IF NOT EXISTS priority TEXT DEFAULT 'medium',
ADD COLUMN IF NOT EXISTS notes TEXT,
ADD COLUMN IF NOT EXISTS last_contacted TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS follow_up_date DATE,
ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW');
```

## Table 2: buyer_leads

```sql
CREATE TABLE buyer_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  looking_to_buy TEXT NOT NULL,
  preferred_locations TEXT NOT NULL,
  min_budget NUMERIC NOT NULL,
  max_budget NUMERIC NOT NULL,
  property_type TEXT NOT NULL,
  min_bedrooms INTEGER NOT NULL,
  min_bathrooms NUMERIC NOT NULL,
  must_haves TEXT,
  additional_info TEXT,
  -- CRM fields
  status TEXT DEFAULT 'new',
  priority TEXT DEFAULT 'medium',
  notes TEXT,
  last_contacted TIMESTAMP WITH TIME ZONE,
  follow_up_date DATE,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Enable Row Level Security
ALTER TABLE buyer_leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for the lead form)
CREATE POLICY "Allow public inserts" ON buyer_leads
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

-- Create policy to allow reads from anyone (for the dashboard)
-- NOTE: For production, you should add authentication and restrict this to authenticated users only
CREATE POLICY "Allow public reads" ON buyer_leads
  FOR SELECT TO anon, authenticated
  USING (true);

-- Create policy to allow updates from anyone (for CRM features)
-- NOTE: For production, restrict this to authenticated users only
CREATE POLICY "Allow public updates" ON buyer_leads
  FOR UPDATE TO anon, authenticated
  USING (true)
  WITH CHECK (true);
```

### Migration SQL for Existing Tables

If you already have the buyer_leads table, run this to add CRM fields:

```sql
ALTER TABLE buyer_leads
ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'new',
ADD COLUMN IF NOT EXISTS priority TEXT DEFAULT 'medium',
ADD COLUMN IF NOT EXISTS notes TEXT,
ADD COLUMN IF NOT EXISTS last_contacted TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS follow_up_date DATE,
ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW');
```

## Environment Variables

After creating your Supabase project and tables, add these environment variables to your `.env.local` file:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

You can find these values in your Supabase project settings under API.

## Security Note

This MVP allows public read access to leads for simplicity. For production use, you should:

1. Add authentication (e.g., Supabase Auth, NextAuth.js)
2. Update RLS policies to restrict SELECT to authenticated users only
3. Protect the dashboard route with authentication middleware
4. Consider adding API rate limiting
