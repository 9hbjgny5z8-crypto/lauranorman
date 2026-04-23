# Advertising & Conversion Tracking Setup Guide

This guide will help you set up Facebook Ads, Google Ads, and conversion tracking for your Laura Norman real estate platform.

## 📊 New Landing Pages Created

You now have 4 dedicated landing pages optimized for advertising:

### 1. **Orlando Sellers Landing Page**
- URL: `https://lauranorman.me/landing/orlando-sellers`
- Target: Home sellers in Orlando
- CTA: Get FREE home valuation
- Use for: Facebook/Google ads targeting homeowners

### 2. **Orlando Buyers Landing Page**
- URL: `https://lauranorman.me/landing/orlando-buyers`
- Target: Home buyers looking in Orlando
- CTA: Find your dream home
- Use for: Facebook/Google ads targeting buyers

### 3. **Free Valuation Guide (Lead Magnet)**
- URL: `https://lauranorman.me/landing/free-valuation-guide`
- Offer: FREE downloadable home valuation guide
- Target: Sellers in research phase
- Use for: Facebook lead ads, Google search ads

### 4. **Buyer's Guide (Lead Magnet)**
- URL: `https://lauranorman.me/landing/buyers-guide`
- Offer: FREE Orlando home buyer's guide
- Target: First-time buyers and relocators
- Use for: Facebook lead ads, Google search ads

---

## 🎯 Step 1: Set Up Facebook Pixel

### Get Your Facebook Pixel ID

1. Go to [Facebook Events Manager](https://business.facebook.com/events_manager)
2. Click **Connect Data Sources** → **Web** → **Facebook Pixel**
3. Name your pixel (e.g., "Laura Norman Real Estate")
4. Copy your Pixel ID (it's a 15-16 digit number)

### Add Pixel ID to Your Site

1. In Replit, go to your **Secrets** panel
2. Click **Add new secret**
3. Key: `NEXT_PUBLIC_FB_PIXEL_ID`
4. Value: Your Facebook Pixel ID (just the numbers)
5. Click **Add secret**

### Verify Installation

1. Install [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/) Chrome extension
2. Visit your website
3. Click the extension - you should see your pixel firing

---

## 📈 Step 2: Set Up Google Analytics 4

### Create Google Analytics Property

1. Go to [Google Analytics](https://analytics.google.com)
2. Click **Admin** → **Create Property**
3. Name: "Laura Norman Real Estate"
4. Select your timezone and currency
5. Click **Create** → **Web**
6. Enter your website URL: `lauranorman.me`
7. Copy your **Measurement ID** (starts with G-)

### Add Measurement ID to Your Site

1. In Replit, go to your **Secrets** panel
2. Click **Add new secret**
3. Key: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
4. Value: Your Measurement ID (e.g., G-XXXXXXXXXX)
5. Click **Add secret**

### Verify Installation

1. In Google Analytics, go to **Reports** → **Realtime**
2. Visit your website
3. You should see yourself as an active user

---

## 🎯 Step 3: Running Facebook Ads

### Recommended Campaign Structure

#### Campaign 1: Orlando Home Sellers
- **Objective:** Lead Generation
- **Landing Page:** `/landing/orlando-sellers` or `/landing/free-valuation-guide`
- **Targeting:**
  - Location: Orlando, FL + 25 mile radius
  - Age: 35-65
  - Interests: Real estate, home improvement, homeownership
  - Custom Audience: Homeowners
- **Ad Copy Ideas:**
  - "Wondering what your Orlando home is worth?"
  - "Get a FREE professional home valuation"
  - "Orlando home values are up - find out yours!"

#### Campaign 2: Orlando Home Buyers
- **Objective:** Lead Generation
- **Landing Page:** `/landing/orlando-buyers` or `/landing/buyers-guide`
- **Targeting:**
  - Location: Orlando, FL + 50 mile radius (includes relocators)
  - Age: 25-55
  - Interests: Real estate, moving, first-time homebuyers
  - Life events: Recently moved, engaged, expecting a baby
- **Ad Copy Ideas:**
  - "Find your perfect Orlando home"
  - "Moving to Orlando? Get the FREE buyer's guide"
  - "I'll help you find your dream home in Orlando"

### Budget Recommendations

- Start with $10-20/day per campaign
- Run for at least 2 weeks to gather data
- Track cost per lead (aim for $15-40 per lead)

---

## 🔍 Step 4: Running Google Ads

### Recommended Campaign Structure

#### Campaign 1: Search - Home Valuation
- **Keywords:**
  - "home valuation orlando"
  - "orlando home value"
  - "what is my home worth orlando"
  - "orlando realtor free valuation"
- **Landing Page:** `/landing/free-valuation-guide`
- **Ad Headlines:**
  - "Free Orlando Home Valuation"
  - "Get Your Home's True Value"
  - "Expert Orlando Real Estate Agent"

#### Campaign 2: Search - Buyer Searches
- **Keywords:**
  - "orlando homes for sale"
  - "orlando realtor"
  - "buy a home in orlando"
  - "orlando real estate agent"
- **Landing Page:** `/landing/buyers-guide`
- **Ad Headlines:**
  - "Find Your Orlando Dream Home"
  - "Orlando Real Estate Expert"
  - "FREE Orlando Buyer's Guide"

### Budget Recommendations

- Start with $15-30/day per campaign
- Focus on highly targeted keywords first
- Track cost per conversion

---

## 📊 Step 5: Track Conversions

### What Gets Tracked Automatically

Your site now automatically tracks:

✅ **Page Views** - Every page visit
✅ **Lead Submissions** - All form fills on landing pages
✅ **Button Clicks** - CTA button clicks
✅ **Lead Source** - Which ad/campaign drove each lead

### View Your Lead Sources in Dashboard

1. Log into your dashboard at `/dashboard`
2. All leads will show their source
3. Look for UTM parameters in the lead details

### UTM Parameters Explained

When someone clicks your ad, use these UTM codes:

**For Facebook Ads:**
```
?utm_source=facebook&utm_medium=cpc&utm_campaign=orlando-sellers
```

**For Google Ads:**
```
?utm_source=google&utm_medium=cpc&utm_campaign=home-valuation
```

Most ad platforms add these automatically!

---

## 💡 Best Practices

### Landing Page Tips

1. **Use specific landing pages for each audience**
   - Sellers → `/landing/orlando-sellers`
   - Buyers → `/landing/orlando-buyers`

2. **Lead magnets for cold traffic**
   - Use guide downloads for people who aren't ready to contact you yet

3. **A/B test your ads**
   - Try different headlines, images, and CTAs

### Tracking Tips

1. **Check daily:**
   - Number of leads
   - Cost per lead
   - Conversion rate

2. **Optimize weekly:**
   - Pause underperforming ads
   - Increase budget on winning ads

3. **Monthly review:**
   - Which campaigns drove the most qualified leads?
   - Adjust targeting based on results

---

## 📊 Step 6: Add UTM Tracking to Database

To track which ads drive which leads, you need to add UTM columns to your database:

### Run the Migration

1. Log into your **Supabase** project (the same one your site uses)
2. Go to **SQL Editor**
3. Copy and paste the SQL from `UTM_TRACKING_MIGRATION.sql`
4. Click **Run**

This adds columns to track:
- `utm_source` (e.g., "facebook", "google")
- `utm_medium` (e.g., "cpc", "social")
- `utm_campaign` (e.g., "orlando-sellers")
- `utm_term` and `utm_content` for additional tracking

### View Lead Sources in Dashboard

Once migration is complete, all new leads will show their source in your CRM dashboard!

---

## 🚀 Next Steps

1. ✅ Set up Facebook Pixel
2. ✅ Set up Google Analytics
3. ✅ **Run UTM tracking migration** (see above)
4. ✅ Create your first Facebook ad campaign
5. ✅ Create your first Google search ad campaign
6. ✅ Monitor your dashboard for incoming leads
7. ✅ Follow up with leads within 24 hours!

---

## 📞 Need Help?

- [Facebook Ads Manager](https://business.facebook.com/adsmanager)
- [Google Ads](https://ads.google.com)
- [Facebook Ads Help](https://www.facebook.com/business/help)
- [Google Ads Help](https://support.google.com/google-ads)

---

**Your landing pages are live and ready for traffic!** 🎉

Start with small budgets, test different approaches, and scale what works.
