import Database from 'better-sqlite3';
import { join } from 'path';
import { mkdirSync } from 'fs';

const DATA_DIR = join(process.cwd(), 'data');
mkdirSync(DATA_DIR, { recursive: true });

const DB_PATH = join(DATA_DIR, 'leads.db');

const db = new Database(DB_PATH);
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

db.exec(
	'CREATE TABLE IF NOT EXISTS valuation_leads (' +
	'  id TEXT PRIMARY KEY,' +
	'  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,' +
	'  full_name TEXT NOT NULL,' +
	'  email TEXT NOT NULL,' +
	'  phone TEXT NOT NULL,' +
	'  address TEXT NOT NULL,' +
	'  city TEXT NOT NULL,' +
	'  state TEXT NOT NULL,' +
	'  zip_code TEXT NOT NULL,' +
	'  property_type TEXT NOT NULL,' +
	'  bedrooms INTEGER NOT NULL,' +
	'  bathrooms REAL NOT NULL,' +
	'  square_feet INTEGER NOT NULL,' +
	'  year_built INTEGER,' +
	'  additional_info TEXT,' +
	'  utm_source TEXT,' +
	'  utm_medium TEXT,' +
	'  utm_campaign TEXT,' +
	'  utm_term TEXT,' +
	'  utm_content TEXT' +
	');' +
	'CREATE TABLE IF NOT EXISTS buyer_leads (' +
	'  id TEXT PRIMARY KEY,' +
	'  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,' +
	'  full_name TEXT NOT NULL,' +
	'  email TEXT NOT NULL,' +
	'  phone TEXT NOT NULL,' +
	'  looking_to_buy TEXT NOT NULL,' +
	'  preferred_locations TEXT NOT NULL,' +
	'  min_budget REAL NOT NULL,' +
	'  max_budget REAL NOT NULL,' +
	'  property_type TEXT NOT NULL,' +
	'  min_bedrooms INTEGER NOT NULL,' +
	'  min_bathrooms INTEGER NOT NULL,' +
	'  must_haves TEXT,' +
	'  additional_info TEXT,' +
	'  utm_source TEXT,' +
	'  utm_medium TEXT,' +
	'  utm_campaign TEXT,' +
	'  utm_term TEXT,' +
	'  utm_content TEXT' +
	')'
);

export { db };
export function countValuationLeads() {
	const r = db.prepare('SELECT COUNT(*) as total FROM valuation_leads').get();
	return r as { total: number };
}
export function countBuyerLeads() {
	const r = db.prepare('SELECT COUNT(*) as total FROM buyer_leads').get();
	return r as { total: number };
}
export function getValuationLeads() {
	return db.prepare('SELECT * FROM valuation_leads ORDER BY created_at DESC').all();
}
export function getBuyerLeads() {
	return db.prepare('SELECT * FROM buyer_leads ORDER BY created_at DESC').all();
}
export function deleteValuationLead(id: string) {
	db.prepare('DELETE FROM valuation_leads WHERE id = ?').run(id);
}
export function deleteBuyerLead(id: string) {
	db.prepare('DELETE FROM buyer_leads WHERE id = ?').run(id);
}
export function getRecentValuationLeads(limit = 50) {
	return db.prepare('SELECT * FROM valuation_leads ORDER BY created_at DESC LIMIT ?').all(limit);
}
export function getRecentBuyerLeads(limit = 50) {
	return db.prepare('SELECT * FROM buyer_leads ORDER BY created_at DESC LIMIT ?').all(limit);
}
export function getLeadsSummary() {
	const vCount = db.prepare('SELECT COUNT(*) as total FROM valuation_leads').get() as { total: number };
	const bCount = db.prepare('SELECT COUNT(*) as total FROM buyer_leads').get() as { total: number };
	const total = vCount.total + bCount.total;
	
	const vRows = db.prepare('SELECT * FROM valuation_leads ORDER BY created_at DESC LIMIT 10').all();
	const bRows = db.prepare('SELECT * FROM buyer_leads ORDER BY created_at DESC LIMIT 10').all();
	
	return {
		totalLeads: total,
		valuationCount: vCount.total,
		buyerCount: bCount.total,
		recentValuationLeads: vRows,
		recentBuyerLeads: bRows,
	};
}
