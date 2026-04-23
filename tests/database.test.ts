import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { unlinkSync, readFileSync } from 'fs';
import { join } from 'path';

const DB_PATH = join(process.cwd(), 'data', 'leads.db');

// Clear the SQLite DB and force WAL checkpoint + close
function resetDB() {
  // Close any WAL files
  const wal = DB_PATH + '-wal';
  const shm = DB_PATH + '-shm';
  [DB_PATH, wal, shm].forEach(p => { try { unlinkSync(p); } catch {} });
  // Force create fresh DB by writing empty schema
  const { db, countValuationLeads, countBuyerLeads, getLeadsSummary, getRecentValuationLeads, getRecentBuyerLeads, getValuationLeads, getBuyerLeads, deleteValuationLead, deleteBuyerLead } = require('/Users/crush/onyx-intelligence/laura-norman/lib/database');
  // Delete all rows
  db.prepare('DELETE FROM valuation_leads').run();
  db.prepare('DELETE FROM buyer_leads').run();
  db.close();
  // Remove files again so lib/database creates fresh
  [DB_PATH, wal, shm].forEach(p => { try { unlinkSync(p); } catch {} });
}

describe('SQLite Database Layer', () => {
  let dbModule: any;
  
  beforeEach(() => {
    resetDB();
    dbModule = require('/Users/crush/onyx-intelligence/laura-norman/lib/database');
  });
  
  describe('Table schema', () => {
    it('creates valuation_leads table with all columns', () => {
      const stmt = dbModule.db.prepare("SELECT sql FROM sqlite_master WHERE type='table' AND name='valuation_leads'");
      const result = stmt.get();
      expect(result).toBeDefined();
      expect(result?.sql).toContain('id TEXT PRIMARY KEY');
      expect(result?.sql).toContain('full_name TEXT NOT NULL');
      expect(result?.sql).toContain('email TEXT NOT NULL');
      expect(result?.sql).toContain('phone TEXT NOT NULL');
      expect(result?.sql).toContain('address TEXT NOT NULL');
      expect(result?.sql).toContain('city TEXT NOT NULL');
      expect(result?.sql).toContain('state TEXT NOT NULL');
      expect(result?.sql).toContain('zip_code TEXT NOT NULL');
      expect(result?.sql).toContain('property_type TEXT NOT NULL');
      expect(result?.sql).toContain('bedrooms INTEGER NOT NULL');
      expect(result?.sql).toContain('bathrooms REAL NOT NULL');
      expect(result?.sql).toContain('square_feet INTEGER NOT NULL');
      expect(result?.sql).toContain('utm_source TEXT');
    });
    
    it('creates buyer_leads table with all columns', () => {
      const stmt = dbModule.db.prepare("SELECT sql FROM sqlite_master WHERE type='table' AND name='buyer_leads'");
      const result = stmt.get();
      expect(result).toBeDefined();
      expect(result?.sql).toContain('id TEXT PRIMARY KEY');
      expect(result?.sql).toContain('full_name TEXT NOT NULL');
      expect(result?.sql).toContain('email TEXT NOT NULL');
      expect(result?.sql).toContain('looking_to_buy TEXT NOT NULL');
      expect(result?.sql).toContain('preferred_locations TEXT NOT NULL');
      expect(result?.sql).toContain('min_budget REAL NOT NULL');
      expect(result?.sql).toContain('max_budget REAL NOT NULL');
      expect(result?.sql).toContain('utm_source TEXT');
    });
  });
  
  describe('countValuationLeads()', () => {
    it('returns zero count for empty table', () => {
      const result = dbModule.countValuationLeads();
      expect(result).toBeDefined();
      expect(result.total).toBe(0);
    });
    
    it('returns correct count after inserting leads', () => {
      dbModule.db.prepare('INSERT INTO valuation_leads (id, full_name, email, phone, address, city, state, zip_code, property_type, bedrooms, bathrooms, square_feet) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
        .run('test-1', 'John', 'john@test.com', '555-1111', '123 St', 'Orlando', 'FL', '32801', 'Single Family', 3, 2, 1500);
      
      dbModule.db.prepare('INSERT INTO valuation_leads (id, full_name, email, phone, address, city, state, zip_code, property_type, bedrooms, bathrooms, square_feet) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
        .run('test-2', 'Jane', 'jane@test.com', '555-2222', '456 Ave', 'Miami', 'FL', '33101', 'Condo', 2, 2, 1200);
      
      const result = dbModule.countValuationLeads();
      expect(result.total).toBe(2);
    });
  });
  
  describe('countBuyerLeads()', () => {
    it('returns zero count for empty table', () => {
      const result = dbModule.countBuyerLeads();
      expect(result).toBeDefined();
      expect(result.total).toBe(0);
    });
    
    it('returns correct count after inserting buyer leads', () => {
      dbModule.db.prepare('INSERT INTO buyer_leads (id, full_name, email, phone, looking_to_buy, preferred_locations, min_budget, max_budget, property_type, min_bedrooms, min_bathrooms) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
        .run('buyer-1', 'Bob', 'bob@test.com', '555-3333', 'Moving from Tampa', 'Lake Nona', 400000, 600000, 'Single Family', 3, 2);
      
      const result = dbModule.countBuyerLeads();
      expect(result.total).toBe(1);
    });
  });
  
  describe('getLeadsSummary()', () => {
    it('initially returns zero counts', () => {
      const summary = dbModule.getLeadsSummary();
      expect(summary.totalLeads).toBe(0);
      expect(summary.valuationCount).toBe(0);
      expect(summary.buyerCount).toBe(0);
      expect(summary.recentValuationLeads).toEqual([]);
      expect(summary.recentBuyerLeads).toEqual([]);
    });
    
    it('returns correct counts after inserting leads', () => {
      dbModule.db.prepare('INSERT INTO valuation_leads (id, full_name, email, phone, address, city, state, zip_code, property_type, bedrooms, bathrooms, square_feet) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
        .run('s1', 'TestSeller', 's@test.com', '555-4444', '100 Main', 'Orlando', 'FL', '32801', 'Single Family', 3, 2, 1500);
      
      dbModule.db.prepare('INSERT INTO buyer_leads (id, full_name, email, phone, looking_to_buy, preferred_locations, min_budget, max_budget, property_type, min_bedrooms, min_bathrooms) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
        .run('b1', 'TestBuyer', 'b@test.com', '555-5555', 'Looking to relocate', 'Winter Park', 350000, 500000, 'Condo', 2, 2);
      
      const summary = dbModule.getLeadsSummary();
      expect(summary.totalLeads).toBe(2);
      expect(summary.valuationCount).toBe(1);
      expect(summary.buyerCount).toBe(1);
      expect(summary.recentValuationLeads.length).toBeGreaterThan(0);
      expect(summary.recentBuyerLeads.length).toBeGreaterThan(0);
    });
  });
  
  describe('getRecentValuationLeads()', () => {
    it('returns limited number of rows', () => {
      // Insert 5 leads
      for (let i = 0; i < 5; i++) {
        dbModule.db.prepare('INSERT INTO valuation_leads (id, full_name, email, phone, address, city, state, zip_code, property_type, bedrooms, bathrooms, square_feet) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
          .run(`v-${i}`, `Seller${i}`, `s${i}@test.com`, '555-6666', `${i} St`, 'Orlando', 'FL', '32801', 'Single Family', 3, 2, 1500);
      }
      
      // Default limit is 50
      const all = dbModule.getRecentValuationLeads(50);
      expect(all.length).toBe(5);
      
      // With limit 2
      const limited = dbModule.getRecentValuationLeads(2);
      expect(limited.length).toBe(2);
    });
  });
  
  describe('getRecentBuyerLeads()', () => {
    it('returns limited number of rows', () => {
      for (let i = 0; i < 3; i++) {
        dbModule.db.prepare('INSERT INTO buyer_leads (id, full_name, email, phone, looking_to_buy, preferred_locations, min_budget, max_budget, property_type, min_bedrooms, min_bathrooms) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
          .run(`bl-${i}`, `Buyer${i}`, `bl${i}@test.com`, '555-7777', 'Relocating', 'Lake Nona', 300000, 500000, 'Single Family', 3, 2);
      }
      
      const all = dbModule.getRecentBuyerLeads(10);
      expect(all.length).toBe(3);
    });
  });
  
  describe('deleteValuationLead()', () => {
    it('removes a lead by ID', () => {
      const testId = 'del-1';
      dbModule.db.prepare('INSERT INTO valuation_leads (id, full_name, email, phone, address, city, state, zip_code, property_type, bedrooms, bathrooms, square_feet) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
        .run(testId, 'DeleteTest', 'd@test.com', '555-8888', '1 St', 'Orlando', 'FL', '32801', 'Single Family', 3, 2, 1500);
      
      expect(dbModule.countValuationLeads().total).toBe(1);
      
      dbModule.deleteValuationLead(testId);
      const result = dbModule.countValuationLeads();
      expect(result.total).toBe(0);
    });
  });
  
  describe('deleteBuyerLead()', () => {
    it('removes a lead by ID', () => {
      const testId = 'dblead-1';
      dbModule.db.prepare('INSERT INTO buyer_leads (id, full_name, email, phone, looking_to_buy, preferred_locations, min_budget, max_budget, property_type, min_bedrooms, min_bathrooms) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
        .run(testId, 'DelBuyer', 'db@test.com', '555-9999', 'Relocating', 'Winter Park', 400000, 600000, 'Condo', 2, 2);
      
      expect(dbModule.countBuyerLeads().total).toBe(1);
      
      dbModule.deleteBuyerLead(testId);
      const result = dbModule.countBuyerLeads();
      expect(result.total).toBe(0);
    });
  });
});
