# Real Estate Lead Generation Platform

A modern dual-service real estate platform combining **My Home ROI** (home valuation) and **MoveMatch** (buyer matchmaking) to help real estate professionals capture and manage leads effectively.

## Features

🏠 **My Home ROI** - Professional home valuation service
- Capture property details and owner contact information
- Comprehensive property assessment forms
- Instant lead capture to database

👥 **MoveMatch** - Smart buyer matchmaking
- Buyer preference collection
- Budget and location filtering
- Property type and feature matching

📊 **Lead Dashboard**
- View all captured leads in one place
- Separate tabs for valuation and buyer leads
- Quick access to contact information
- Lead timestamps and details

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Supabase

1. Create a free account at [Supabase](https://supabase.com)
2. Create a new project
3. Copy your project URL and anon key

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

You can find these values in your Supabase project settings under API.

### 4. Set Up Database

1. Open your Supabase project dashboard
2. Navigate to SQL Editor
3. Run the SQL commands from `DATABASE_SCHEMA.md`

This will create:
- `valuation_leads` table
- `buyer_leads` table
- Row Level Security policies

### 5. Run the Application

```bash
npm run dev
```

Visit http://localhost:5000 to see your application.

## Project Structure

- `/app` - Next.js app router pages and API routes
- `/components` - Reusable UI components
- `/lib` - Utility functions and configurations
- `DATABASE_SCHEMA.md` - Complete database setup guide

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Forms**: React Hook Form + Zod
- **UI**: Custom components

## Usage

### For Property Owners
1. Click "Get Home Valuation" on homepage
2. Fill out property details
3. Submit to receive valuation within 24 hours

### For Buyers
1. Click "Find Your Dream Home" on homepage
2. Enter search preferences and budget
3. Receive personalized property recommendations

### For Agents (Dashboard)
1. Navigate to `/dashboard`
2. View all leads from both services
3. Access contact information for follow-up
4. Filter between valuation and buyer leads

## License

MIT

## Support

For issues or questions, please refer to the documentation in `DATABASE_SCHEMA.md` and `replit.md`.
