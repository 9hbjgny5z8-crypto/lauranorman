import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import { db } from '../../../lib/database';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    const required = ['full_name', 'email', 'phone', 'looking_to_buy', 'preferred_locations', 'min_budget', 'max_budget', 'property_type', 'min_bedrooms', 'min_bathrooms'] as const;
    for (const field of required) {
      if (data[field] === undefined || data[field] === null || data[field] === '') {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Validate numeric fields
    const minBudget = parseFloat(data.min_budget);
    const maxBudget = parseFloat(data.max_budget);
    const minBedrooms = parseInt(data.min_bedrooms);
    const minBathrooms = parseInt(data.min_bathrooms);
    
    if (isNaN(minBudget) || minBudget < 0) {
      return NextResponse.json({ error: 'min_budget must be a non-negative number' }, { status: 400 });
    }
    if (isNaN(maxBudget) || maxBudget < minBudget) {
      return NextResponse.json({ error: 'max_budget must be greater than min_budget' }, { status: 400 });
    }
    if (isNaN(minBedrooms) || minBedrooms <= 0) {
      return NextResponse.json({ error: 'min_bedrooms must be a positive number' }, { status: 400 });
    }
    if (isNaN(minBathrooms) || minBathrooms <= 0) {
      return NextResponse.json({ error: 'min_bathrooms must be a positive number' }, { status: 400 });
    }

    const id = randomUUID();
    const createdAt = new Date();
    const created_at_str = createdAt.toISOString().replace('T', ' ').split('.')[0];

    const stmt = db.prepare(
      'INSERT INTO buyer_leads (id, created_at, full_name, email, phone, looking_to_buy, preferred_locations, min_budget, max_budget, property_type, min_bedrooms, min_bathrooms, must_haves, additional_info, utm_source, utm_medium, utm_campaign, utm_term, utm_content) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
    );

    stmt.run(
      id,
      created_at_str,
      data.full_name,
      data.email,
      data.phone,
      data.looking_to_buy,
      data.preferred_locations,
      minBudget,
      maxBudget,
      data.property_type,
      minBedrooms,
      minBathrooms,
      data.must_haves || null,
      data.additional_info || null,
      data.utm_source || null,
      data.utm_medium || null,
      data.utm_campaign || null,
      data.utm_term || null,
      data.utm_content || null,
    );

    return NextResponse.json({ message: 'Buyer match request captured', id });
  } catch (error) {
    console.error('Buyer lead error:', error);
    return NextResponse.json({ error: 'Failed to capture lead' }, { status: 500 });
  }
}
