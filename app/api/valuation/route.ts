import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import { db } from '../../../lib/database';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    const required = ['full_name', 'email', 'phone', 'address', 'city', 'state', 'zip_code', 'property_type', 'bedrooms', 'bathrooms', 'square_feet'] as const;
    for (const field of required) {
      if (!data[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Validate numeric fields
    const bedrooms = parseInt(data.bedrooms);
    const bathrooms = parseFloat(data.bathrooms);
    const squareFeet = parseInt(data.square_feet);
    if (bedrooms <= 0 || bathrooms <= 0 || squareFeet <= 0) {
      return NextResponse.json({ error: 'Numeric fields must be positive numbers' }, { status: 400 });
    }

    const id = randomUUID();
    const createdAt = new Date();
    const created_at_str = createdAt.toISOString().replace('T', ' ').split('.')[0];

    const stmt = db.prepare(
      'INSERT INTO valuation_leads (id, created_at, full_name, email, phone, address, city, state, zip_code, property_type, bedrooms, bathrooms, square_feet, year_built, additional_info, utm_source, utm_medium, utm_campaign, utm_term, utm_content) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
    );

    stmt.run(
      id,
      created_at_str,
      data.full_name,
      data.email,
      data.phone,
      data.address,
      data.city,
      data.state,
      data.zip_code,
      data.property_type,
      bedrooms,
      bathrooms,
      squareFeet,
      data.year_built ? parseInt(data.year_built) : null,
      data.additional_info || null,
      data.utm_source || null,
      data.utm_medium || null,
      data.utm_campaign || null,
      data.utm_term || null,
      data.utm_content || null,
    );

    return NextResponse.json({ message: 'Lead captured successfully', id });
  } catch (error) {
    console.error('Valuation lead error:', error);
    return NextResponse.json({ error: 'Failed to capture lead' }, { status: 500 });
  }
}
