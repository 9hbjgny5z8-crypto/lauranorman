-- Add UTM tracking columns to valuation_leads table
ALTER TABLE valuation_leads
ADD COLUMN IF NOT EXISTS utm_source TEXT,
ADD COLUMN IF NOT EXISTS utm_medium TEXT,
ADD COLUMN IF NOT EXISTS utm_campaign TEXT,
ADD COLUMN IF NOT EXISTS utm_term TEXT,
ADD COLUMN IF NOT EXISTS utm_content TEXT;

-- Add UTM tracking columns to buyer_leads table
ALTER TABLE buyer_leads
ADD COLUMN IF NOT EXISTS utm_source TEXT,
ADD COLUMN IF NOT EXISTS utm_medium TEXT,
ADD COLUMN IF NOT EXISTS utm_campaign TEXT,
ADD COLUMN IF NOT EXISTS utm_term TEXT,
ADD COLUMN IF NOT EXISTS utm_content TEXT;

-- Add indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_valuation_leads_utm_source ON valuation_leads(utm_source);
CREATE INDEX IF NOT EXISTS idx_valuation_leads_utm_campaign ON valuation_leads(utm_campaign);
CREATE INDEX IF NOT EXISTS idx_buyer_leads_utm_source ON buyer_leads(utm_source);
CREATE INDEX IF NOT EXISTS idx_buyer_leads_utm_campaign ON buyer_leads(utm_campaign);
