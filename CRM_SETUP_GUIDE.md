# CRM Setup Guide

## Important: Database Migration Required

Before you can use the new CRM features, you need to add the CRM fields to your Supabase database tables.

## Step-by-Step Migration Instructions

### 1. Log into Supabase

Go to [supabase.com](https://supabase.com) and open your project dashboard.

### 2. Navigate to SQL Editor

1. Click on "SQL Editor" in the left sidebar
2. Click "New Query"

### 3. Run the Migration SQL

Copy and paste this SQL into the editor and click "Run":

```sql
-- Add CRM fields to valuation_leads
ALTER TABLE valuation_leads
ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'new',
ADD COLUMN IF NOT EXISTS priority TEXT DEFAULT 'medium',
ADD COLUMN IF NOT EXISTS notes TEXT,
ADD COLUMN IF NOT EXISTS last_contacted TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS follow_up_date DATE,
ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW());

-- Add CRM fields to buyer_leads
ALTER TABLE buyer_leads
ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'new',
ADD COLUMN IF NOT EXISTS priority TEXT DEFAULT 'medium',
ADD COLUMN IF NOT EXISTS notes TEXT,
ADD COLUMN IF NOT EXISTS last_contacted TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS follow_up_date DATE,
ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW());

-- Create UPDATE policies for both tables
DROP POLICY IF EXISTS "Allow public updates" ON valuation_leads;
CREATE POLICY "Allow public updates" ON valuation_leads
  FOR UPDATE TO anon, authenticated
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public updates" ON buyer_leads;
CREATE POLICY "Allow public updates" ON buyer_leads
  FOR UPDATE TO anon, authenticated
  USING (true)
  WITH CHECK (true);
```

### 4. Verify the Migration

After running the SQL, you should see a success message. You can verify by:

1. Go to "Table Editor" in Supabase
2. Select "valuation_leads" table
3. You should now see new columns: `status`, `priority`, `notes`, `last_contacted`, `follow_up_date`, `updated_at`
4. Repeat for "buyer_leads" table

### 5. You're Done!

Your database is now ready to use all the CRM features!

## What's New?

### CRM Features Available:

1. **Lead Status Tracking**
   - New
   - Contacted
   - Qualified
   - Closed
   - Lost

2. **Priority Levels**
   - Low Priority
   - Medium Priority
   - High Priority

3. **Notes System**
   - Add detailed notes to each lead
   - Edit notes anytime
   - Keep track of conversations and important details

4. **Follow-up Dates**
   - Set reminder dates for each lead
   - Never miss a follow-up

5. **Quick Actions**
   - One-click email
   - One-click phone call
   - One-click SMS

6. **Search & Filtering**
   - Search by name, email, or phone
   - Filter by status
   - Filter by priority

7. **Analytics Dashboard**
   - Total leads count
   - Status breakdown
   - Priority tracking
   - Quick insights

## Troubleshooting

### Error: "relation 'valuation_leads' does not exist"

You haven't created the tables yet. Run the original table creation SQL from `DATABASE_SCHEMA.md` first.

### Error: "column already exists"

This is okay! The `IF NOT EXISTS` clause ensures this won't cause problems. The migration is safe to run multiple times.

### Can't update leads

Make sure you ran the UPDATE policy creation part of the migration SQL.

## Security Note

For production, you should update the RLS policies to restrict updates to authenticated users only. Replace the "Allow public updates" policies with:

```sql
DROP POLICY "Allow public updates" ON valuation_leads;
CREATE POLICY "Allow authenticated updates" ON valuation_leads
  FOR UPDATE TO authenticated
  USING (true)
  WITH CHECK (true);

DROP POLICY "Allow public updates" ON buyer_leads;
CREATE POLICY "Allow authenticated updates" ON buyer_leads
  FOR UPDATE TO authenticated
  USING (true)
  WITH CHECK (true);
```

Then use the Supabase Service Role Key (not the anon key) in your environment variables.
