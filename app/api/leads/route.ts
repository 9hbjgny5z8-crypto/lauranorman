import { NextResponse } from 'next/server';
import { getLeadsSummary, getRecentValuationLeads, getRecentBuyerLeads, countValuationLeads, countBuyerLeads } from '../../../lib/database';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const type = url.searchParams.get('type') || 'overview';
  
  switch (type) {
    case 'overview': {
      const summary = getLeadsSummary();
      return NextResponse.json({
        totalLeads: summary.totalLeads,
        valuationCount: summary.valuationCount,
        buyerCount: summary.buyerCount,
        recentValuationLeads: summary.recentValuationLeads,
        recentBuyerLeads: summary.recentBuyerLeads,
      });
    }
    case 'valuation': {
      const leads = getRecentValuationLeads();
      return NextResponse.json({ leads });
    }
    case 'buyer': {
      const leads = getRecentBuyerLeads();
      return NextResponse.json({ leads });
    }
    case 'counts': {
      const vCount = countValuationLeads();
      const bCount = countBuyerLeads();
      return NextResponse.json({
        totalLeads: vCount.total + bCount.total,
        valuationCount: vCount.total,
        buyerCount: bCount.total,
      });
    }
    default:
      return NextResponse.json({ error: 'Unknown type' }, { status: 400 });
  }
}
