import { describe, it, expect, beforeAll, afterAll, beforeEach, afterEach } from 'vitest';
import request from 'supertest';
import { existsSync, mkdirSync, unlinkSync } from 'fs';
import { join } from 'path';

const DB_DIR = join(process.cwd(), 'data');
const DB_PATH = join(DB_DIR, 'leads.db');

function resetDB() {
  // Remove any existing DB files
  [DB_PATH, DB_PATH + '-wal', DB_PATH + '-shm'].forEach(p => {
    if (existsSync(p)) unlinkSync(p);
  });
  // Create fresh DB by importing the module
  const { db } = require('/Users/crush/onyx-intelligence/laura-norman/lib/database');
  db.close();
}

function dbExists() {
  return existsSync(DB_PATH);
}

describe('Valuation API (/api/valuation)', () => {
  beforeEach(() => resetDB());
  afterEach(() => {
    if (dbExists()) {
      const { db } = require('/Users/crush/onyx-intelligence/laura-norman/lib/database');
      db.prepare('DELETE FROM valuation_leads').run();
      db.prepare('DELETE FROM buyer_leads').run();
      db.close();
    }
  });
  
  it('returns 200 with valid lead', async () => {
    const res = await request('http://127.0.0.1:5000')
      .post('/api/valuation')
      .set('Content-Type', 'application/json')
      .send({
        full_name: 'Test Seller',
        email: 'seller@test.com',
        phone: '555-0001',
        address: '123 Test St',
        city: 'Orlando',
        state: 'FL',
        zip_code: '32801',
        property_type: 'Single Family',
        bedrooms: 3,
        bathrooms: 2,
        square_feet: 1500,
      });
    
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('message', 'Lead captured successfully');
    expect(res.body).toHaveProperty('id');
    expect(res.body.id).toBeTruthy();
  });
  
  it('rejects missing required fields', async () => {
    const res = await request('http://127.0.0.1:5000')
      .post('/api/valuation')
      .set('Content-Type', 'application/json')
      .send({ full_name: 'Only Name' });
    
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
  
  it('rejects invalid email format', async () => {
    const testData = {
      full_name: 'Test', email: 'not-an-email', phone: '555-0002',
      address: '1 St', city: 'Orlando', state: 'FL', zip_code: '32801',
      property_type: 'Single Family', bedrooms: 3, bathrooms: 2, square_feet: 1500,
    };
    const res = await request('http://127.0.0.1:5000')
      .post('/api/valuation')
      .set('Content-Type', 'application/json')
      .send(testData);
    
    expect(res.status).toBe(400);
  });
  
  it('rejects non-positive bedrooms', async () => {
    const testData = {
      full_name: 'Test', email: 'test@test.com', phone: '555-0002',
      address: '1 St', city: 'Orlando', state: 'FL', zip_code: '32801',
      property_type: 'Single Family', bedrooms: -1, bathrooms: 2, square_feet: 1500,
    };
    const res = await request('http://127.0.0.1:5000')
      .post('/api/valuation')
      .set('Content-Type', 'application/json')
      .send(testData);
    
    expect(res.status).toBe(400);
  });
  
  it('persists lead to SQLite', async () => {
    const data = {
      full_name: 'Persist Test', email: 'persist@test.com', phone: '555-0003',
      address: '456 Persist Ave', city: 'Miami', state: 'FL', zip_code: '33101',
      property_type: 'Condo', bedrooms: 2, bathrooms: 2, square_feet: 1200,
    };
    
    await request('http://127.0.0.1:5000')
      .post('/api/valuation')
      .set('Content-Type', 'application/json')
      .send(data);
    
    // Verify in DB
    const { getRecentValuationLeads } = require('/Users/crush/onyx-intelligence/laura-norman/lib/database');
    const leads = getRecentValuationLeads(10);
    expect(leads.length).toBeGreaterThan(0);
    const lastLead = leads[0];
    expect(lastLead.full_name).toBe('Persist Test');
    expect(lastLead.email).toBe('persist@test.com');
    
    // Cleanup
    getRecentValuationLeads(10); // just to have the module loaded
    const db2 = require('/Users/crush/onyx-intelligence/laura-norman/lib/database').db;
    db2.prepare('DELETE FROM valuation_leads').run();
    db2.close();
  });
});

describe('Buyer-Match API (/api/buyer-match)', () => {
  beforeEach(() => resetDB());
  afterEach(() => {
    if (dbExists()) {
      const { db } = require('/Users/crush/onyx-intelligence/laura-norman/lib/database');
      db.prepare('DELETE FROM valuation_leads').run();
      db.prepare('DELETE FROM buyer_leads').run();
      db.close();
    }
  });
  
  it('returns 200 with valid lead', async () => {
    const res = await request('http://127.0.0.1:5000')
      .post('/api/buyer-match')
      .set('Content-Type', 'application/json')
      .send({
        full_name: 'Test Buyer',
        email: 'buyer@test.com',
        phone: '555-0004',
        looking_to_buy: 'Moving from Tampa to Orlando',
        preferred_locations: 'Lake Nona, Winter Park',
        min_budget: 400000,
        max_budget: 600000,
        property_type: 'Single Family',
        min_bedrooms: 3,
        min_bathrooms: 2,
      });
    
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('message', 'Buyer match request captured');
    expect(res.body).toHaveProperty('id');
  });
  
  it('rejects missing required fields', async () => {
    const res = await request('http://127.0.0.1:5000')
      .post('/api/buyer-match')
      .set('Content-Type', 'application/json')
      .send({ full_name: 'Only Name' });
    
    expect(res.status).toBe(400);
  });
  
  it('rejects invalid budget ranges', async () => {
    const data = {
      full_name: 'Test', email: 'buyer@test.com', phone: '555-0005',
      looking_to_buy: 'Looking', preferred_locations: 'Orlando',
      min_budget: -100, max_budget: 100, property_type: 'Single Family',
      min_bedrooms: 3, min_bathrooms: 2,
    };
    const res = await request('http://127.0.0.1:5000')
      .post('/api/buyer-match')
      .set('Content-Type', 'application/json')
      .send(data);
    
    expect(res.status).toBe(400);
  });
  
  it('rejects max_budget < min_budget', async () => {
    const data = {
      full_name: 'Test', email: 'buyer@test.com', phone: '555-0005',
      looking_to_buy: 'Looking', preferred_locations: 'Orlando',
      min_budget: 600000, max_budget: 400000, property_type: 'Single Family',
      min_bedrooms: 3, min_bathrooms: 2,
    };
    const res = await request('http://127.0.0.1:5000')
      .post('/api/buyer-match')
      .set('Content-Type', 'application/json')
      .send(data);
    
    expect(res.status).toBe(400);
  });
  
  it('rejects invalid bedroom counts', async () => {
    const data = {
      full_name: 'Test', email: 'buyer@test.com', phone: '555-0005',
      looking_to_buy: 'Looking', preferred_locations: 'Orlando',
      min_budget: 300000, max_budget: 500000, property_type: 'Single Family',
      min_bedrooms: 0, min_bathrooms: 2,
    };
    const res = await request('http://127.0.0.1:5000')
      .post('/api/buyer-match')
      .set('Content-Type', 'application/json')
      .send(data);
    
    expect(res.status).toBe(400);
  });
  
  it('persists buyer lead to SQLite', async () => {
    const data = {
      full_name: 'Persist Buyer', email: 'pb@test.com', phone: '555-0006',
      looking_to_buy: 'Relocating', preferred_locations: 'Lake Nona',
      min_budget: 300000, max_budget: 500000, property_type: 'Condo',
      min_bedrooms: 2, min_bathrooms: 2,
    };
    
    await request('http://127.0.0.1:5000')
      .post('/api/buyer-match')
      .set('Content-Type', 'application/json')
      .send(data);
    
    const { getRecentBuyerLeads } = require('/Users/crush/onyx-intelligence/laura-norman/lib/database');
    const leads = getRecentBuyerLeads(10);
    expect(leads.length).toBeGreaterThan(0);
    expect(leads[0].full_name).toBe('Persist Buyer');
    expect(leads[0].looking_to_buy).toBe('Relocating');
    
    // Cleanup
    const db2 = require('/Users/crush/onyx-intelligence/laura-norman/lib/database').db;
    db2.prepare('DELETE FROM buyer_leads').run();
    db2.close();
  });
});

describe('Leads Read API (/api/leads)', () => {
  beforeEach(() => resetDB());
  afterEach(() => {
    if (dbExists()) {
      const { db } = require('/Users/crush/onyx-intelligence/laura-norman/lib/database');
      db.prepare('DELETE FROM valuation_leads').run();
      db.prepare('DELETE FROM buyer_leads').run();
      db.close();
    }
  });
  
  beforeEach(async () => {
    // Pre-populate some leads for read tests
    await request('http://127.0.0.1:5000')
      .post('/api/valuation')
      .set('Content-Type', 'application/json')
      .send({
        full_name: 'Read Test Seller', email: 'read@test.com', phone: '555-0007',
        address: '200 Read St', city: 'Orlando', state: 'FL', zip_code: '32801',
        property_type: 'Single Family', bedrooms: 3, bathrooms: 2, square_feet: 1500,
      });
    await request('http://127.0.0.1:5000')
      .post('/api/buyer-match')
      .set('Content-Type', 'application/json')
      .send({
        full_name: 'Read Test Buyer', email: 'rb@test.com', phone: '555-0008',
        looking_to_buy: 'Looking', preferred_locations: 'Winter Park',
        min_budget: 350000, max_budget: 500000, property_type: 'Condo',
        min_bedrooms: 2, min_bathrooms: 2,
      });
  });
  
  it('returns overview with correct counts', async () => {
    const res = await request('http://127.0.0.1:5000')
      .get('/api/leads?type=overview');
    
    expect(res.status).toBe(200);
    expect(res.body.totalLeads).toBe(2);
    expect(res.body.valuationCount).toBe(1);
    expect(res.body.buyerCount).toBe(1);
  });
  
  it('returns counts type with correct data', async () => {
    const res = await request('http://127.0.0.1:5000')
      .get('/api/leads?type=counts');
    
    expect(res.status).toBe(200);
    expect(res.body.totalLeads).toBe(2);
    expect(res.body.valuationCount).toBe(1);
    expect(res.body.buyerCount).toBe(1);
  });
  
  it('rejects unknown type', async () => {
    const res = await request('http://127.0.0.1:5000')
      .get('/api/leads?type=unknown');
    
    expect(res.status).toBe(400);
  });
  
  it('returns correct lead data in overview', async () => {
    const res = await request('http://127.0.0.1:5000')
      .get('/api/leads?type=overview');
    
    expect(res.status).toBe(200);
    expect(res.body.recentValuationLeads).toHaveLength(1);
    expect(res.body.recentBuyerLeads).toHaveLength(1);
    expect(res.body.recentValuationLeads[0].full_name).toBe('Read Test Seller');
    expect(res.body.recentBuyerLeads[0].full_name).toBe('Read Test Buyer');
  });
});
