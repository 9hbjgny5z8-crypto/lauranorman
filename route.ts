typescript
    import { NextRequest, NextResponse } from 'next/server';
    import { randomUUID } from 'crypto';
    import { db } from '../../../lib/database';
    
    const D1APIURL = process.env.D1APIURL;
    
    export async function POST(request: NextRequest) {
      try {
        const data = await request.json();
    
        const required = ['fullname', 'email', 'phone', 'lookingtobuy', 'preferredlocations', 'minbudget', 'maxbudget', 'propertytype', 'minbedrooms', 'min_bathrooms'] as const;
        for (const field of required) {
          if (data[field] === undefined || data[field] === null || data[field] === '') {
            return NextResponse.json({ error: Missing required field: ${field} }, { status: 400 });
          }
        }
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
          return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
        }
    
        const minBudget = parseFloat(data.min_budget);
        const maxBudget = parseFloat(data.max_budget);
        const minBedrooms = parseInt(data.min_bedrooms);
        const minBathrooms = parseInt(data.min_bathrooms);
        
        if (isNaN(minBudget) || minBudget < 0) {
          return NextResponse.json({ error: 'min_budget must be a non-negative number' }, { status: 400 });
        }
        if (isNaN(maxBudget) || maxBudget < minBudget) {
          return NextResponse.json({ error: 'maxbudget must be greater than minbudget' }, { status: 400 });
        }
        if (isNaN(minBedrooms) || minBedrooms <= 0) {
          return NextResponse.json({ error: 'min_bedrooms must be a positive number' }, { status: 400 });
        }
        if (isNaN(minBathrooms) || minBathrooms <= 0) {
          return NextResponse.json({ error: 'min_bathrooms must be a positive number' }, { status: 400 });
        }
    
        const id = randomUUID();
        const createdAt = new Date();
        const createdatstr = createdAt.toISOString().replace('T', ' ').split('.')[0];
    
        const lead = {
          id,
          fullname: data.fullname,
          email: data.email,
          phone: data.phone,
          lookingtobuy: data.lookingtobuy,
          preferredlocations: data.preferredlocations,
          min_budget: minBudget,
          max_budget: maxBudget,
          propertytype: data.propertytype,
          min_bedrooms: minBedrooms,
          min_bathrooms: minBathrooms,
          musthaves: data.musthaves || null,
          additionalinfo: data.additionalinfo || null,
          utmsource: data.utmsource || '',
          utmmedium: data.utmmedium || '',
          utmcampaign: data.utmcampaign || '',
          utmterm: data.utmterm || '',
          utmcontent: data.utmcontent || '',
          status: 'new'
        };
    
        if (D1APIURL) {
          await fetch(D1APIURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type: 'buyer', ...lead })
          });
        } else {
          const stmt = db.prepare(
            'INSERT INTO buyerleads (id, createdat, fullname, email, phone, lookingtobuy, preferredlocations, minbudget, maxbudget, propertytype, minbedrooms, minbathrooms, musthaves, additionalinfo, utmsource, utmmedium, utmcampaign, utmterm, utmcontent) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
          );
          stmt.run(
            id,
            createdatstr,
            data.full_name,
            data.email,
            data.phone,
            data.lookingtobuy,
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
        }
    
        return NextResponse.json({ message: 'Buyer match request captured', id });
      } catch (error) {
        console.error('Buyer lead error:', error);
        return NextResponse.json({ error: 'Failed to capture lead' }, { status: 500 });
      }
    }

