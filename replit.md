# Laura Norman - Orlando Real Estate Platform

An elegant, personalized lead-generation platform for Laura Norman, a real estate professional in Orlando, Florida. Features home valuation ("My Home ROI"), buyer matchmaking ("MoveMatch"), comprehensive educational guides, blog integration, and full CRM capabilities with sophisticated design and personal touch.

## Overview

This platform helps Laura Norman capture and manage leads through multiple touchpoints:

1. **My Home ROI** - Home valuation service where property owners can request professional market valuations
2. **MoveMatch** - Buyer matchmaking service connecting potential buyers with suitable properties
3. **Blog** - Manual Next.js blog system for market insights and Orlando real estate content (BlazeAI content copy/paste workflow)

## Technology Stack

- **Frontend**: Next.js 16 with App Router, React 19, TypeScript
- **Styling**: Tailwind CSS with custom elegant design system
- **Typography**: Playfair Display (serif headings) + Inter (body text)
- **Color Palette**: Black primary (#000000) with warm taupe/neutral tones (#7C6A5C, #9B8B7E) and gold accents (#D4A574)
- **Forms**: React Hook Form with Zod validation
- **Database**: Supabase (PostgreSQL)
- **Email**: Resend (transactional email notifications)
- **UI Components**: Custom components with elegant styling

## Project Structure

```
/
├── app/
│   ├── api/
│   │   ├── valuation/route.ts     # API endpoint for valuation leads (with UTM)
│   │   ├── buyer-match/route.ts   # API endpoint for buyer leads (with UTM)
│   │   ├── leads/
│   │   │   ├── update/route.ts    # API endpoint for CRM updates
│   │   │   └── delete/route.ts    # API endpoint for lead deletion
│   │   └── auth/                  # Authentication endpoints
│   ├── landing/                   # Advertising landing pages
│   │   ├── orlando-sellers/       # Seller-focused landing page
│   │   ├── orlando-buyers/        # Buyer-focused landing page
│   │   ├── free-valuation-guide/  # Valuation lead magnet
│   │   └── buyers-guide/          # Buyer lead magnet
│   ├── buying-guide/page.tsx      # Complete educational property buying guide
│   ├── selling-guide/page.tsx     # Complete educational property selling guide
│   ├── blog/page.tsx              # Blog page (WordPress integration ready)
│   ├── valuation/page.tsx         # Home valuation form (with tracking)
│   ├── buyer-match/page.tsx       # Buyer matching form (with tracking)
│   ├── dashboard/page.tsx         # CRM dashboard with full features
│   ├── login/page.tsx             # Dashboard login
│   ├── privacy/page.tsx           # Privacy policy page
│   ├── page.tsx                   # Homepage
│   ├── layout.tsx                 # Root layout
│   └── globals.css                # Global styles
├── components/
│   ├── TrackingScripts.tsx        # Google Ads, GA4, Facebook Pixel
│   └── ui/                        # Reusable UI components
├── data/
│   └── blog-posts.ts              # Blog post content (manual Next.js blog)
├── lib/
│   ├── supabase.ts                # Supabase client config with CRM types
│   ├── email.ts                   # Resend email notification functions
│   ├── analytics.ts               # Conversion tracking helpers
│   └── utils.ts                   # Utility functions
├── DATABASE_SCHEMA.md             # Database setup instructions
├── CRM_SETUP_GUIDE.md             # Step-by-step CRM migration guide
├── UTM_TRACKING_MIGRATION.sql     # Add UTM columns to lead tables
└── ADVERTISING_SETUP_GUIDE.md     # Complete advertising setup guide
```

## Features

### Completed
- ✅ Responsive homepage with hero sections for both services
- ✅ Home valuation form with comprehensive validation
- ✅ Buyer matchmaking form with search preferences
- ✅ Supabase database integration
- ✅ API routes for secure lead submission
- ✅ Lead dashboard for viewing all captured leads
- ✅ **Dashboard Authentication** - JWT-based secure login system
- ✅ **Full CRM System** - Status tracking, notes, priorities, follow-ups, lead deletion
- ✅ **Search & Filtering** - Find leads quickly by multiple criteria
- ✅ **Analytics Dashboard** - Real-time lead metrics and insights
- ✅ **Quick Actions** - One-click email, call, SMS, and delete
- ✅ **4 Advertising Landing Pages** - Dedicated pages for targeted campaigns
- ✅ **Conversion Tracking** - Google Ads, GA4, and Facebook Pixel integration
- ✅ **UTM Attribution** - Full campaign tracking across all lead forms
- ✅ Mobile-first responsive design
- ✅ Form validation with Zod schemas
- ✅ Success messages and user feedback
- ✅ Wemert Group Realty branding
- ✅ Family-friendly Orlando suburban imagery
- ✅ Replit development database configured
- ✅ Production build verified and passing
- ✅ **Security Hardening** - All credentials required from environment, no hardcoded secrets
- ✅ **Professional Logo Integration** - LN Real Estate logo across all pages
- ✅ **Educational Buying Guide** - Comprehensive property buying resource with Florida-specific sections (homeowner's insurance, HOA communities, property taxes, FIRPTA, post-closing checklist)
- ✅ **Educational Selling Guide** - Comprehensive 6-step property selling resource with Wemert Group broker-level content including:
  - **Pricing Enhancement**: Common pricing mistakes, net proceeds calculator, Florida closing costs breakdown, realistic $500k home example
  - **Escrow & Closing**: Understanding Florida escrow, detailed 30-day Orlando timeline, earnest money deposit (1-3%), what can delay closing, closing day experience (what to sign, how you get paid), comprehensive closing day checklist
  - **Post-Closing Guidance**: Complete "What Happens After Closing" section with immediate tasks (wire confirmation, insurance cancellation, utilities), first week tasks (mail forwarding, voter registration, DMV, IRS), first month tasks (document retention, tax exemptions, estate planning), and capital gains tax exclusion guidance
  - **Save Our Homes Portability**: Transfer up to $500k in tax benefits, 3-year window, Form DR-501T, upsizing/downsizing calculations, $1,500-$2,000 annual savings
  - **Title Insurance Reissue Credit**: 20-50% savings within 3 years on buyer's title insurance, ~$1,100 savings example on $500k home
  - **1031 Exchange**: Tax deferral for investment properties, 45/180-day deadlines, Qualified Intermediary requirements, $50k-$60k typical savings
  - **Comprehensive Moving Checklist**: 4-6 weeks timeline with Orlando donation partners (Goodwill, Salvation Army, Habitat ReStore), moving binder setup, color-coded packing system, pet planning; Smart Packing Tips with priority hierarchy and "open first" box; Pet Moving Tips with vet prep, microchip updates, and gradual introduction
- ✅ **Professional Headshot Integration** - Laura's photo on homepage, buying guide, selling guide, and all 4 landing pages for trust building
- ✅ **Privacy Policy** - Comprehensive privacy policy page with footer links across all pages
- ✅ **Professional Icons** - All text emojis replaced with Lucide React icons for sophisticated brand identity
- ✅ **Blog System** - Manual Next.js blog with BlazeAI content workflow
  - Two blog posts: "Discover the Hidden Gems of Central Florida Living!" (Nov 22) and "Keeping Your Cool During the Home Buying Rollercoaster" (Nov 29)
  - Individual blog post pages at `/blog/[slug]`
  - Elegant typography matching brand identity (Playfair Display + Inter)
  - Easy to add new posts by editing `data/blog-posts.ts`
- ✅ **Email Notifications** - Instant email alerts via Resend
  - Automatic notifications sent to laura@lauranorman.me for every new lead
  - Beautifully formatted HTML emails with all lead details
  - Includes UTM campaign attribution data
  - Separate email templates for valuation and buyer match requests

### Before Deployment

**IMPORTANT: You must complete these steps before publishing!**

1. **Run Database Migrations** (See guides for details)
   - Log into your production Supabase project
   - Go to SQL Editor
   - Run `CRM_SETUP_GUIDE.md` migration to add CRM fields (status, priority, notes, etc.)
   - Run `UTM_TRACKING_MIGRATION.sql` to add UTM tracking columns

2. **Add Deployment Secrets**
   
   When you click "Publish", you'll see a "Deployment secrets" section. Add these secrets:
   
   **Required for Dashboard:**
   - `ADMIN_EMAIL`: `laura@lauranorman.me`
   - `ADMIN_PASSWORD_HASH`: `$2b$10$dE9BfFnQBPZVtk7Mg7R3buXHaon57JbpDS0/t3qWxkwH0gvB/Mey6`
   
   **Required for Email Notifications:**
   - `RESEND_API_KEY`: Your Resend API key (re_...)
   - `EMAIL_FROM`: laura@lauranorman.me
   - `EMAIL_TO`: laura@lauranorman.me
   
   **Optional for Advertising** (add when ready to run campaigns):
   - `NEXT_PUBLIC_FB_PIXEL_ID`: Your Facebook Pixel ID (currently: 874618895129167)
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Your GA4 measurement ID (G-XXXXXXXXXX)
   - `NEXT_PUBLIC_GADS_VALUATION_CONVERSION`: Google Ads valuation conversion (AW-XXXXX/YYYYY)
   - `NEXT_PUBLIC_GADS_BUYER_CONVERSION`: Google Ads buyer conversion (AW-XXXXX/YYYYY)
   
   Note: Your existing Supabase and SESSION_SECRET secrets will automatically sync to the deployment.

3. **Ready to Deploy!**
   - ✅ Development database created
   - ✅ TypeScript compilation verified
   - ✅ All CRM features tested
   - ✅ 4 landing pages built and tested
   - ✅ Conversion tracking implemented
   - ✅ UTM attribution ready
   - ✅ Build passes without environment variables (checked at runtime)

## Environment Variables

**All environment variables are required - no defaults or fallbacks.** The application will fail to start if any required variable is missing.

Required environment variables:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
SESSION_SECRET=your_session_secret (auto-generated by Replit)
ADMIN_EMAIL=laura@lauranorman.me
ADMIN_PASSWORD_HASH=bcrypt_hashed_password
```

Optional advertising tracking variables (add when campaigns are ready):

```
NEXT_PUBLIC_FB_PIXEL_ID=your_facebook_pixel_id
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga4_measurement_id
NEXT_PUBLIC_GADS_VALUATION_CONVERSION=AW-XXXXX/YYYYY
NEXT_PUBLIC_GADS_BUYER_CONVERSION=AW-XXXXX/YYYYY
```

**Current Development Environment:**
- ✅ ADMIN_EMAIL: `laura@lauranorman.me`
- ✅ ADMIN_PASSWORD: `L3tsMak3S0m3M0n3y!` (hashed in ADMIN_PASSWORD_HASH)
- ✅ SESSION_SECRET: Auto-configured
- ✅ Supabase credentials: Configured as secrets

To change the admin password, generate a bcrypt hash and update `ADMIN_PASSWORD_HASH`.

## Database Setup

1. Create a Supabase project at https://supabase.com
2. Copy your project URL and anon key to `.env.local`
3. Run the SQL commands in `DATABASE_SCHEMA.md` in the Supabase SQL Editor
4. Tables will be created with Row Level Security enabled

## Development

- Run development server: `npm run dev`
- Build for production: `npm run build`
- Start production server: `npm start`

The application runs on port 5000 by default.

## Dashboard Access

The lead dashboard is password-protected with JWT-based authentication.

**Current Login Credentials**:
- Email: `laura@lauranorman.me`
- Password: `L3tsMak3S0m3M0n3y!`

**Access**: Navigate to `/login` or `/dashboard` (redirects to login)

**Security Features:**
- ✅ JWT tokens with 7-day expiration
- ✅ HTTP-only secure cookies
- ✅ All credentials required from environment (no hardcoded secrets)
- ✅ Lazy Supabase admin client (server-only, never exposed to browser)
- ✅ Protected API routes with authentication verification

**Important**: Before deploying to production:
1. Change the admin password by updating `ADMIN_PASSWORD_HASH`
2. Ensure all environment variables are set in production
3. Run the CRM database migration in your production Supabase project

## Design & Brand Guidelines

- **Brand**: Laura Norman - Orlando, Florida real estate professional
- **Style**: Elegant, sophisticated, professional with personal touch
- **Typography**: Serif fonts for headings (Playfair Display), clean sans-serif for body (Inter)
- **Colors**: Black primary (#000000) with warm taupe/neutral tones (#7C6A5C, #9B8B7E) and gold accents (#D4A574)
- **Voice**: Personal ("I" instead of "we") to build connection with clients
- **UI**: Clean shadows, smooth transitions, generous spacing
- **Mobile-first**: Fully responsive across all devices
