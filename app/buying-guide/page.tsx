import { Home, DollarSign, FileText, Key, CheckCircle, TrendingUp, AlertCircle, Clock, Shield, Building2, Globe, Award, RefreshCw } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { LinkButton } from "@/components/link-button"
import heroImage from "@/attached_assets/stock_images/modern_luxury_bedroo_972212df.jpg"

export const metadata = {
  title: "The Ultimate Property Buying Guide | Laura Norman Real Estate",
  description: "Everything you need to buy with confidence — from first tour to closing day. Expert guidance for Orlando home buyers."
}

export default function BuyingGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b border-slate-200/60 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Image 
                src="/images/logo.png" 
                alt="LN Real Estate Logo" 
                width={120} 
                height={120} 
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg font-serif font-bold text-primary tracking-tight">Laura Norman</span>
                <span className="text-xs text-slate-600 uppercase tracking-wider">Orlando, Florida</span>
              </div>
            </Link>
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section - Matching Reference Design */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <Image 
            src={heroImage} 
            alt="Modern bedroom in Orlando home" 
            fill
            sizes="100vw"
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-white/50 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              <span className="text-black font-light italic">The Ultimate</span>
              <br />
              <span className="text-black font-bold">PROPERTY</span>
              <br />
              <span className="text-black font-bold italic text-6xl md:text-8xl">Buying</span>
              <br />
              <span className="text-black font-bold text-5xl md:text-7xl">GUIDE</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 font-serif italic leading-relaxed">
              Everything you need to buy with confidence — from first tour to closing day.
            </p>
            <div className="pt-6 border-t border-slate-200 mt-8">
              <p className="text-sm text-slate-700">
                Presented by <span className="font-semibold">Laura Norman</span> — Your Trusted Orlando Realtor
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-16 bg-taupe text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center">What You'll Learn</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <a href="#step-1" className="flex items-start gap-3 p-4 rounded-lg hover:bg-white/10 transition-colors group">
                <span className="text-secondary text-xl font-bold">01</span>
                <span className="group-hover:text-secondary transition-colors">Getting Your Finances Ready</span>
              </a>
              <a href="#step-2" className="flex items-start gap-3 p-4 rounded-lg hover:bg-white/10 transition-colors group">
                <span className="text-secondary text-xl font-bold">02</span>
                <span className="group-hover:text-secondary transition-colors">Understanding the Orlando Market</span>
              </a>
              <a href="#step-3" className="flex items-start gap-3 p-4 rounded-lg hover:bg-white/10 transition-colors group">
                <span className="text-secondary text-xl font-bold">03</span>
                <span className="group-hover:text-secondary transition-colors">Finding the Perfect Property</span>
              </a>
              <a href="#step-4" className="flex items-start gap-3 p-4 rounded-lg hover:bg-white/10 transition-colors group">
                <span className="text-secondary text-xl font-bold">04</span>
                <span className="group-hover:text-secondary transition-colors">Making an Offer & Negotiating</span>
              </a>
              <a href="#step-5" className="flex items-start gap-3 p-4 rounded-lg hover:bg-white/10 transition-colors group">
                <span className="text-secondary text-xl font-bold">05</span>
                <span className="group-hover:text-secondary transition-colors">Home Inspection & Due Diligence</span>
              </a>
              <a href="#step-6" className="flex items-start gap-3 p-4 rounded-lg hover:bg-white/10 transition-colors group">
                <span className="text-secondary text-xl font-bold">06</span>
                <span className="group-hover:text-secondary transition-colors">Closing Day & Beyond</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">Your Journey to Homeownership</h2>
            <div className="prose prose-lg text-slate-700 leading-relaxed space-y-4">
              <p>
                Buying a home is one of the most exciting — and important — decisions you'll ever make. 
                Whether you're a first-time buyer or a seasoned homeowner, navigating Orlando's dynamic 
                real estate market requires knowledge, preparation, and the right guidance.
              </p>
              <p>
                I've helped hundreds of families find their dream homes in Orlando, and I've created this 
                comprehensive guide to share everything I've learned. From understanding mortgage options 
                to negotiating the best price, I'll walk you through each step of the process with clarity 
                and confidence.
              </p>
              <p className="text-primary font-semibold">
                Let's get started on your path to homeownership!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 1: Finances */}
      <section id="step-1" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-sm text-secondary font-bold uppercase tracking-wider">Step 01</span>
                <h2 className="text-3xl font-serif font-bold text-primary">Getting Your Finances Ready</h2>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-6">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Understand Your Budget</h3>
              <p className="text-slate-700 leading-relaxed">
                Before falling in love with a home, know what you can afford. The general rule is to spend 
                no more than 28% of your gross monthly income on housing costs.
              </p>

              <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded">
                <h4 className="font-bold text-primary mb-2">Quick Budget Calculator</h4>
                <p className="text-slate-700 mb-3">If your annual income is $75,000:</p>
                <ul className="space-y-2 text-slate-700">
                  <li>• Monthly gross income: $6,250</li>
                  <li>• Recommended housing budget: $1,750/month</li>
                  <li>• Approximate home price: $300,000 - $350,000</li>
                </ul>
              </div>

              <h3 className="text-2xl font-serif font-bold text-primary mb-4 pt-6">Get Pre-Approved for a Mortgage</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Pre-approval shows sellers you're a serious buyer and helps you understand your purchasing power. 
                Here's what you'll need:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Proof of income (pay stubs, W-2s, tax returns)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Credit report and score (aim for 620+ for conventional loans)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Bank statements showing assets and down payment funds</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Employment verification</span>
                </li>
              </ul>

              <h3 className="text-2xl font-serif font-bold text-primary mb-4 pt-6">Down Payment Options</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="border border-slate-200 p-4 rounded-lg">
                  <h4 className="font-bold text-primary mb-2">20% Down</h4>
                  <p className="text-sm text-slate-600">Avoid PMI, lower monthly payments, better rates</p>
                </div>
                <div className="border border-slate-200 p-4 rounded-lg">
                  <h4 className="font-bold text-primary mb-2">10-15% Down</h4>
                  <p className="text-sm text-slate-600">Balance between upfront costs and monthly payments</p>
                </div>
                <div className="border border-slate-200 p-4 rounded-lg">
                  <h4 className="font-bold text-primary mb-2">3-5% Down</h4>
                  <p className="text-sm text-slate-600">FHA and first-time buyer programs available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2: Orlando Market */}
      <section id="step-2" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-sm text-secondary font-bold uppercase tracking-wider">Step 02</span>
                <h2 className="text-3xl font-serif font-bold text-primary">Understanding the Orlando Market</h2>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-6">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Top Orlando Neighborhoods for Families</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="font-bold text-primary text-lg mb-2">Winter Park</h4>
                  <p className="text-slate-700 mb-2">
                    Charming downtown, excellent schools, tree-lined streets. Median price: $550,000+
                  </p>
                  <p className="text-sm text-slate-600">Best for: Families seeking walkability and top-rated schools</p>
                </div>

                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="font-bold text-primary text-lg mb-2">Lake Nona</h4>
                  <p className="text-slate-700 mb-2">
                    Master-planned community, modern homes, cutting-edge technology. Median price: $450,000+
                  </p>
                  <p className="text-sm text-slate-600">Best for: Tech-savvy families, medical professionals</p>
                </div>

                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="font-bold text-primary text-lg mb-2">Windermere</h4>
                  <p className="text-slate-700 mb-2">
                    Lakefront living, luxury homes, A-rated schools. Median price: $600,000+
                  </p>
                  <p className="text-sm text-slate-600">Best for: Buyers seeking upscale suburban lifestyle</p>
                </div>

                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="font-bold text-primary text-lg mb-2">Oviedo</h4>
                  <p className="text-slate-700 mb-2">
                    Family-friendly, great schools, parks and trails. Median price: $400,000+
                  </p>
                  <p className="text-sm text-slate-600">Best for: First-time buyers, growing families</p>
                </div>
              </div>

              <div className="bg-taupe/5 p-6 rounded-lg mt-8">
                <h4 className="font-bold text-primary mb-3">📊 Current Orlando Market Snapshot</h4>
                <ul className="space-y-2 text-slate-700">
                  <li>• Average days on market: 30-45 days</li>
                  <li>• Year-over-year appreciation: 4-6%</li>
                  <li>• Inventory levels: Moderate, favoring balanced market</li>
                  <li>• Best time to buy: Fall/Winter for less competition</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3: Finding Property */}
      <section id="step-3" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-sm text-secondary font-bold uppercase tracking-wider">Step 03</span>
                <h2 className="text-3xl font-serif font-bold text-primary">Finding the Perfect Property</h2>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-6">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Create Your Wish List</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Separate your "must-haves" from "nice-to-haves" to stay focused during your search.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-2 border-secondary rounded-lg p-6">
                  <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    Must-Haves
                  </h4>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>✓ Number of bedrooms/bathrooms</li>
                    <li>✓ Location/school district</li>
                    <li>✓ Maximum budget</li>
                    <li>✓ Essential features (garage, yard, etc.)</li>
                  </ul>
                </div>

                <div className="border-2 border-slate-200 rounded-lg p-6">
                  <h4 className="font-bold text-primary mb-3">Nice-to-Haves</h4>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• Pool</li>
                    <li>• Updated kitchen</li>
                    <li>• Home office</li>
                    <li>• Walk-in closets</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-serif font-bold text-primary mb-4 pt-6">What to Look For During Tours</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-primary">Foundation & Structure</h5>
                    <p className="text-slate-600 text-sm">Check for cracks, uneven floors, or settling issues</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-primary">Roof Condition</h5>
                    <p className="text-slate-600 text-sm">Ask about age and check for visible damage or repairs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-primary">HVAC & Systems</h5>
                    <p className="text-slate-600 text-sm">Verify age and functionality of major systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-primary">Water Damage</h5>
                    <p className="text-slate-600 text-sm">Especially important in Florida — check ceilings, walls, and windows</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 4: Making Offer */}
      <section id="step-4" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-sm text-secondary font-bold uppercase tracking-wider">Step 04</span>
                <h2 className="text-3xl font-serif font-bold text-primary">Making an Offer & Negotiating</h2>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-6">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Crafting Your Offer</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Your offer includes more than just price. Here are the key components:
              </p>

              <div className="space-y-4">
                <div className="bg-slate-50 p-5 rounded-lg">
                  <h4 className="font-bold text-primary mb-2">1. Purchase Price</h4>
                  <p className="text-slate-700 text-sm">
                    Based on comparable sales, market conditions, and your budget. I'll help you determine 
                    a competitive yet fair price.
                  </p>
                </div>

                <div className="bg-slate-50 p-5 rounded-lg">
                  <h4 className="font-bold text-primary mb-2">2. Earnest Money Deposit</h4>
                  <p className="text-slate-700 text-sm">
                    Typically 1-3% of purchase price, shows you're serious and goes toward your down payment.
                  </p>
                </div>

                <div className="bg-slate-50 p-5 rounded-lg">
                  <h4 className="font-bold text-primary mb-2">3. Contingencies</h4>
                  <p className="text-slate-700 text-sm mb-2">Protect yourself with these standard contingencies:</p>
                  <ul className="text-slate-600 text-sm space-y-1 ml-4">
                    <li>• Home inspection contingency</li>
                    <li>• Financing contingency</li>
                    <li>• Appraisal contingency</li>
                    <li>• Title contingency</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-5 rounded-lg">
                  <h4 className="font-bold text-primary mb-2">4. Closing Timeline</h4>
                  <p className="text-slate-700 text-sm">
                    Typically 30-45 days. A flexible timeline can make your offer more attractive.
                  </p>
                </div>
              </div>

              <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded mt-6">
                <h4 className="font-bold text-primary mb-2">💡 Pro Tip: Making Your Offer Stand Out</h4>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• Write a personal letter to the sellers</li>
                  <li>• Be flexible on closing date</li>
                  <li>• Increase earnest money deposit</li>
                  <li>• Get pre-approved (not just pre-qualified)</li>
                  <li>• Limit contingencies when appropriate</li>
                </ul>
              </div>

              <h3 className="text-2xl font-serif font-bold text-primary mb-4 pt-6">Negotiation Strategies</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                As your agent, I'll negotiate on your behalf to get you the best terms. Here's what we might negotiate:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">→</span>
                  <span>Purchase price based on inspection findings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">→</span>
                  <span>Seller concessions (closing costs, repairs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">→</span>
                  <span>Included appliances or furnishings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">→</span>
                  <span>Home warranty coverage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step 5: Inspection */}
      <section id="step-5" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-sm text-secondary font-bold uppercase tracking-wider">Step 05</span>
                <h2 className="text-3xl font-serif font-bold text-primary">Home Inspection & Due Diligence</h2>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-6">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Why Inspections Matter</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                A professional home inspection (typically $300-$500) can save you thousands by uncovering 
                hidden issues before you buy.
              </p>

              <div className="bg-taupe/5 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-3">Standard Inspection Includes:</h4>
                <div className="grid md:grid-cols-2 gap-3 text-slate-700 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Roof and attic</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Foundation and structure</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Plumbing systems</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Electrical systems</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>HVAC systems</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Windows and doors</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Exterior and grading</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Interior components</span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-serif font-bold text-primary mb-4 pt-6">Additional Inspections for Florida Homes</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="font-bold text-primary mb-2">🏊 Pool Inspection</h4>
                  <p className="text-slate-700 text-sm">
                    If the home has a pool, hire a specialist to check pumps, filters, heaters, and structural integrity.
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="font-bold text-primary mb-2">🐛 Termite/Pest Inspection</h4>
                  <p className="text-slate-700 text-sm">
                    Essential in Florida! Many lenders require this. Cost: $75-$150.
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="font-bold text-primary mb-2">🌊 Flood Risk Assessment</h4>
                  <p className="text-slate-700 text-sm">
                    Determine if you're in a flood zone and if flood insurance is required.
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="font-bold text-primary mb-2">🛡️ Mold Inspection</h4>
                  <p className="text-slate-700 text-sm">
                    Florida's humidity makes this important. Request if you see signs of water damage.
                  </p>
                </div>
              </div>

              <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded mt-6">
                <h4 className="font-bold text-primary mb-2">After the Inspection</h4>
                <p className="text-slate-700 text-sm mb-3">You have three options:</p>
                <ol className="space-y-2 text-slate-700 text-sm">
                  <li><strong>1. Accept the property as-is</strong> — Move forward with no changes</li>
                  <li><strong>2. Negotiate repairs or credits</strong> — Ask seller to fix issues or reduce price</li>
                  <li><strong>3. Walk away</strong> — If major issues are found, you can cancel within contingency period</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Florida-Specific: Home Insurance */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-primary">Homeowner&apos;s Insurance in Florida</h2>
              </div>
              
              <p className="text-slate-700 leading-relaxed">
                Florida homeowner&apos;s insurance is unique and often more expensive than other states due to 
                hurricane risk. Understanding your coverage options is essential before closing.
              </p>

              <div className="bg-taupe/5 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-3">What&apos;s Typically Covered:</h4>
                <div className="grid md:grid-cols-2 gap-3 text-slate-700 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Dwelling coverage (structure)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Personal property</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Liability protection</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Additional living expenses</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="font-bold text-primary mb-2">🌊 Flood Insurance</h4>
                  <p className="text-slate-700 text-sm">
                    Standard policies DON&apos;T cover flood damage. If you&apos;re in a flood zone, you&apos;ll need 
                    separate flood insurance through the National Flood Insurance Program (NFIP) or private carrier.
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="font-bold text-primary mb-2">🌀 Hurricane/Wind Coverage</h4>
                  <p className="text-slate-700 text-sm">
                    Many policies have separate wind/hurricane deductibles (often 2-5% of dwelling coverage). 
                    Make sure you understand your deductible before buying.
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="font-bold text-primary mb-2">🔨 Actual Cash Value vs. Replacement Cost</h4>
                  <p className="text-slate-700 text-sm">
                    Replacement cost coverage is more expensive but better protection. It pays to rebuild/replace 
                    without depreciation deductions.
                  </p>
                </div>
              </div>

              <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded">
                <h4 className="font-bold text-primary mb-2">💡 Insurance Shopping Tips</h4>
                <p className="text-slate-700 text-sm mb-3">
                  Your lender will require proof of insurance before closing. Start shopping 30 days before closing 
                  to compare quotes. Bundling with auto insurance can save 15-25%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Florida-Specific: HOA Communities */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-primary">Buying in an HOA Community</h2>
              </div>
              
              <p className="text-slate-700 leading-relaxed">
                Many Orlando communities have Homeowners Associations (HOAs). While they maintain common areas 
                and amenities, they also have rules and fees you need to understand before buying.
              </p>

              <div className="bg-taupe/5 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-3">What to Review Before Buying:</h4>
                <div className="space-y-3 text-slate-700 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-secondary mt-1">→</span>
                    <span><strong>HOA Fees:</strong> Monthly/quarterly costs for maintenance, amenities, insurance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-secondary mt-1">→</span>
                    <span><strong>Rules & Restrictions:</strong> Pet policies, rental restrictions, architectural guidelines</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-secondary mt-1">→</span>
                    <span><strong>Special Assessments:</strong> Unexpected fees for major repairs or improvements</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-secondary mt-1">→</span>
                    <span><strong>Reserve Fund:</strong> HOA savings for future maintenance (healthy fund = fewer surprises)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-secondary mt-1">→</span>
                    <span><strong>Meeting Minutes:</strong> Review recent meetings to understand community issues</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-secondary/10 p-5 rounded-lg border-l-4 border-secondary/40">
                  <h4 className="font-bold text-primary mb-2">✅ HOA Benefits</h4>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>• Maintained common areas</li>
                    <li>• Amenities (pool, gym, parks)</li>
                    <li>• Consistent property values</li>
                    <li>• Neighborhood standards</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-bold text-primary mb-2">⚠️ Potential Drawbacks</h4>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>• Monthly fees (can increase)</li>
                    <li>• Rules and restrictions</li>
                    <li>• Special assessments</li>
                    <li>• Limited home modifications</li>
                  </ul>
                </div>
              </div>

              <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded">
                <h4 className="font-bold text-primary mb-2">💡 My HOA Review Process</h4>
                <p className="text-slate-700 text-sm">
                  I&apos;ll request all HOA documents during your due diligence period, including financials, 
                  bylaws, and recent meeting minutes. We&apos;ll review them together to make sure the community 
                  is a good fit for your lifestyle and budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Florida-Specific: Tax Considerations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-primary">Florida Property Tax & Prorations</h2>
              </div>
              
              <p className="text-slate-700 leading-relaxed">
                Understanding Florida property taxes can save you thousands. Here&apos;s what you need to know 
                as a buyer in Orlando.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="font-bold text-primary mb-2">🏠 Save Our Homes (SOH) Benefit</h4>
                  <p className="text-slate-700 text-sm mb-2">
                    Florida&apos;s Save Our Homes caps annual property tax increases at 3% for your primary residence. 
                    This protects homeowners from dramatic tax increases.
                  </p>
                  <p className="text-slate-700 text-sm font-semibold">
                    Important: When you buy a home, the assessed value resets to market value. Your first year 
                    taxes may be higher than the seller&apos;s taxes.
                  </p>
                </div>
                
                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="font-bold text-primary mb-2">📋 Homestead Exemption</h4>
                  <p className="text-slate-700 text-sm mb-2">
                    File for homestead exemption after moving in to reduce your taxable value by up to $50,000. 
                    This saves most homeowners $750-$1,000 annually.
                  </p>
                  <p className="text-slate-700 text-sm">
                    <strong>Deadline:</strong> File by March 1st following the year you establish residency to get 
                    the exemption for that tax year.
                  </p>
                </div>

                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-secondary" />
                    Portability
                  </h4>
                  <p className="text-slate-700 text-sm">
                    If you&apos;re selling a Florida home with Save Our Homes benefits, you can transfer up to 
                    $500,000 of your tax savings to your new home. This must be done within 3 years.
                  </p>
                </div>
              </div>

              <div className="bg-taupe/5 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-3">Tax Prorations at Closing</h4>
                <p className="text-slate-700 text-sm mb-3">
                  In Florida, property taxes are paid in arrears (you pay current year&apos;s taxes in November). 
                  At closing, the seller pays their share of annual taxes, and you&apos;ll see a credit/debit on 
                  your closing statement.
                </p>
                <p className="text-slate-700 text-sm font-semibold">
                  Budget for your first full tax bill arriving about a year after closing.
                </p>
              </div>

              <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded">
                <h4 className="font-bold text-primary mb-2">💡 I&apos;ll Help You Plan</h4>
                <p className="text-slate-700 text-sm">
                  I&apos;ll provide estimated property tax information for any home you&apos;re considering, 
                  including what to expect after the homestead exemption. This helps you budget accurately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Florida-Specific: FIRPTA */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-primary">FIRPTA: Foreign Investment Considerations</h2>
              </div>
              
              <p className="text-slate-700 leading-relaxed">
                FIRPTA (Foreign Investment in Real Property Tax Act) is a tax withholding law that affects 
                transactions when the seller is a foreign person (non-U.S. citizen or resident).
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
                <h4 className="font-bold text-primary mb-2">⚠️ What Buyers Need to Know</h4>
                <p className="text-slate-700 text-sm mb-3">
                  If you&apos;re buying from a foreign seller, you (the buyer) may be required to withhold 15% 
                  of the purchase price and send it to the IRS unless the seller provides a FIRPTA exemption certificate.
                </p>
                <p className="text-slate-700 text-sm font-semibold">
                  Don&apos;t worry — I&apos;ll work with the title company and closing attorney to handle all 
                  FIRPTA requirements properly.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-5 rounded-lg">
                  <h4 className="font-bold text-primary mb-2">Common FIRPTA Exemptions:</h4>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>• Purchase price under $300,000 (buyer using as residence)</li>
                    <li>• Seller provides withholding certificate</li>
                    <li>• Seller is U.S. citizen or resident</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-5 rounded-lg">
                  <h4 className="font-bold text-primary mb-2">For Foreign Buyers:</h4>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>• ITIN required for tax purposes</li>
                    <li>• Larger down payments (often 30%+)</li>
                    <li>• Different mortgage requirements</li>
                  </ul>
                </div>
              </div>

              <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded">
                <h4 className="font-bold text-primary mb-2">💡 We Handle the Details</h4>
                <p className="text-slate-700 text-sm">
                  FIRPTA compliance is handled at closing by the title company. I&apos;ll ensure all necessary 
                  documentation is collected early to avoid closing delays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 6: Closing */}
      <section id="step-6" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <Key className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-sm text-secondary font-bold uppercase tracking-wider">Step 06</span>
                <h2 className="text-3xl font-serif font-bold text-primary">Closing Day & Beyond</h2>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-6">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">The Final Steps</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                You're almost there! Here's what happens in the final days before closing.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Final Walk-Through</h4>
                    <p className="text-slate-700 text-sm">
                      Schedule this 24-48 hours before closing to ensure agreed-upon repairs were made and 
                      the property is in expected condition.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Review Closing Disclosure</h4>
                    <p className="text-slate-700 text-sm">
                      You'll receive this at least 3 days before closing. Review all costs, loan terms, 
                      and ensure everything matches your expectations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Wire Funds</h4>
                    <p className="text-slate-700 text-sm">
                      You'll need to wire your down payment and closing costs. ALWAYS verify wiring 
                      instructions by calling your title company directly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Closing Day</h4>
                    <p className="text-slate-700 text-sm mb-2">
                      Bring your ID and be prepared to sign documents for about an hour. You'll receive:
                    </p>
                    <ul className="text-slate-600 text-sm space-y-1 ml-4">
                      <li>• House keys</li>
                      <li>• Garage door openers</li>
                      <li>• Security codes</li>
                      <li>• Deed and title documents</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-taupe/5 p-6 rounded-lg mt-8">
                <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-secondary" />
                  Typical Closing Costs (2-5% of Purchase Price)
                </h4>
                <div className="grid md:grid-cols-2 gap-3 text-slate-700 text-sm">
                  <div>• Loan origination fees</div>
                  <div>• Title insurance</div>
                  <div>• Appraisal fee</div>
                  <div>• Home inspection</div>
                  <div>• Property taxes (prorated)</div>
                  <div>• HOA fees (prorated)</div>
                  <div>• Recording fees</div>
                  <div>• Attorney fees</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens After Closing */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-primary">What Happens After Closing?</h2>
              </div>
              
              <p className="text-slate-700 leading-relaxed">
                Congratulations, you&apos;re officially a homeowner! Here&apos;s your checklist for the first 
                few weeks in your new Orlando home.
              </p>

              <div className="space-y-5">
                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="font-bold text-primary mb-2">📋 File for Homestead Exemption</h4>
                  <p className="text-slate-700 text-sm">
                    File with the Orange County Property Appraiser by March 1st to save $750-$1,000 annually 
                    on property taxes. You must establish this as your primary residence first.
                  </p>
                </div>

                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="font-bold text-primary mb-2">🔌 Transfer Utilities</h4>
                  <p className="text-slate-700 text-sm mb-2">
                    Set up accounts before moving in:
                  </p>
                  <ul className="text-slate-600 text-sm space-y-1 ml-4">
                    <li>• Electric (Orlando Utilities Commission or Duke Energy)</li>
                    <li>• Water & sewer (usually through city/county)</li>
                    <li>• Gas (if applicable)</li>
                    <li>• Internet & cable</li>
                    <li>• Trash/recycling service</li>
                  </ul>
                </div>

                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="font-bold text-primary mb-2">🔑 Change Locks & Security Codes</h4>
                  <p className="text-slate-700 text-sm">
                    Even if you received all keys, rekey locks or replace them entirely for security. Update 
                    garage door codes and alarm systems immediately.
                  </p>
                </div>

                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="font-bold text-primary mb-2">📬 Update Your Address</h4>
                  <p className="text-slate-700 text-sm mb-2">
                    File change of address with:
                  </p>
                  <ul className="text-slate-600 text-sm space-y-1 ml-4">
                    <li>• USPS (online at usps.com)</li>
                    <li>• Employer & payroll</li>
                    <li>• Banks and credit cards</li>
                    <li>• DMV (update driver&apos;s license)</li>
                    <li>• Voter registration</li>
                    <li>• Insurance companies</li>
                  </ul>
                </div>

                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="font-bold text-primary mb-2">🛠️ Locate & Document Important Items</h4>
                  <p className="text-slate-700 text-sm mb-2">
                    Find and photograph:
                  </p>
                  <ul className="text-slate-600 text-sm space-y-1 ml-4">
                    <li>• Main water shut-off valve</li>
                    <li>• Electrical panel</li>
                    <li>• HVAC filters (change every 1-3 months in Florida)</li>
                    <li>• Pool equipment and controls</li>
                    <li>• Sprinkler system timer</li>
                    <li>• Any warranties or manuals left by seller</li>
                  </ul>
                </div>

                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-secondary" />
                    Schedule Routine Maintenance
                  </h4>
                  <p className="text-slate-700 text-sm mb-2">
                    Florida&apos;s climate requires regular attention:
                  </p>
                  <ul className="text-slate-600 text-sm space-y-1 ml-4">
                    <li>• HVAC servicing (twice yearly recommended)</li>
                    <li>• Pool maintenance (weekly if applicable)</li>
                    <li>• Lawn care & pest control</li>
                    <li>• Roof inspection (especially before hurricane season)</li>
                    <li>• Gutter cleaning</li>
                  </ul>
                </div>

                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="font-bold text-primary mb-2">📝 Keep Important Documents</h4>
                  <p className="text-slate-700 text-sm">
                    Store safely: deed, title insurance, closing disclosure, home inspection report, 
                    HOA documents, warranties, and receipts for improvements (needed for tax basis when you sell).
                  </p>
                </div>

                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="font-bold text-primary mb-2">👋 Meet Your Neighbors</h4>
                  <p className="text-slate-700 text-sm">
                    Introduce yourself to neighbors, join community social media groups, and attend HOA 
                    meetings if applicable. They&apos;re great resources for local recommendations!
                  </p>
                </div>
              </div>

              <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded mt-6">
                <h4 className="font-bold text-primary mb-2">💡 I&apos;m Still Here to Help!</h4>
                <p className="text-slate-700 text-sm">
                  Even after closing, I&apos;m your resource for contractor recommendations, HOA questions, 
                  or advice about maintaining your home. And when you&apos;re ready to sell or buy again, 
                  I&apos;ll be here to guide you through that journey too.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-taupe text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Clock className="w-8 h-8 text-secondary" />
              <h2 className="text-3xl font-serif font-bold">Your Buying Timeline</h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-secondary font-bold text-lg w-32 flex-shrink-0">Weeks 1-2</div>
                <div>
                  <p className="font-semibold mb-1">Get Pre-Approved & Start Shopping</p>
                  <p className="text-slate-200 text-sm">Meet with lenders, tour homes, refine your wish list</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-secondary font-bold text-lg w-32 flex-shrink-0">Week 3</div>
                <div>
                  <p className="font-semibold mb-1">Make an Offer</p>
                  <p className="text-slate-200 text-sm">Submit offer, negotiate terms, sign contract</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-secondary font-bold text-lg w-32 flex-shrink-0">Week 4</div>
                <div>
                  <p className="font-semibold mb-1">Inspection & Appraisal</p>
                  <p className="text-slate-200 text-sm">Complete home inspection, lender orders appraisal</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-secondary font-bold text-lg w-32 flex-shrink-0">Weeks 5-6</div>
                <div>
                  <p className="font-semibold mb-1">Finalize Financing</p>
                  <p className="text-slate-200 text-sm">Submit final docs to lender, get clear to close</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-secondary font-bold text-lg w-32 flex-shrink-0">Week 7</div>
                <div>
                  <p className="font-semibold mb-1">Close & Move In!</p>
                  <p className="text-slate-200 text-sm">Final walk-through, sign papers, get your keys</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8">Common Mistakes to Avoid</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
                <h3 className="font-bold text-primary mb-2">❌ Skipping Pre-Approval</h3>
                <p className="text-slate-700 text-sm">
                  Shopping without pre-approval wastes time and you might lose your dream home to a prepared buyer.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
                <h3 className="font-bold text-primary mb-2">❌ Ignoring Additional Costs</h3>
                <p className="text-slate-700 text-sm">
                  Budget for HOA fees, property taxes, insurance, maintenance, and utilities — not just the mortgage.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
                <h3 className="font-bold text-primary mb-2">❌ Waiving Inspection</h3>
                <p className="text-slate-700 text-sm">
                  Even in competitive markets, an inspection protects you from expensive surprises.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
                <h3 className="font-bold text-primary mb-2">❌ Making Big Purchases</h3>
                <p className="text-slate-700 text-sm">
                  Don't buy a car, furniture, or make large charges before closing — it affects your loan approval.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
                <h3 className="font-bold text-primary mb-2">❌ Falling in Love Too Quickly</h3>
                <p className="text-slate-700 text-sm">
                  Stay objective during tours. Emotion can lead to overpaying or overlooking red flags.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
                <h3 className="font-bold text-primary mb-2">❌ Not Researching Neighborhoods</h3>
                <p className="text-slate-700 text-sm">
                  Visit at different times of day, check school ratings, and talk to neighbors before committing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Laura Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image 
                    src="/images/laura-headshot.png" 
                    alt="Laura Norman - Your Orlando Real Estate Guide" 
                    width={400}
                    height={500}
                    className="object-cover w-full"
                  />
                </div>
              </div>
              <div className="md:col-span-3">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                  Your Trusted Guide Through the Process
                </h2>
                <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                  As your Orlando real estate professional, I&apos;m committed to making your home buying 
                  experience smooth, informed, and successful.
                </p>
                <p className="text-base text-slate-600 mb-6 leading-relaxed">
                  The information in this guide comes from years of helping families navigate the Orlando market. 
                  Every step matters, and I&apos;m here to ensure you avoid common pitfalls while taking advantage 
                  of every opportunity.
                </p>
                <div className="bg-gradient-to-br from-taupe/10 to-secondary/10 p-6 rounded-xl border-l-4 border-secondary">
                  <p className="text-slate-700 italic mb-2">
                    &quot;My goal isn&apos;t just to help you buy a house — it&apos;s to help you find a home 
                    you&apos;ll love for years to come.&quot;
                  </p>
                  <p className="text-sm text-slate-600 font-semibold">— Laura Norman, Wemert Group Realty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-taupe text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Start Your Home Buying Journey?</h2>
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              I'm here to guide you through every step with personalized advice and expert market knowledge. 
              Let's find your perfect Orlando home together.
            </p>
            <div className="flex justify-center">
              <Link 
                href="mailto:laura@lauranorman.me"
                className="inline-flex items-center justify-center px-12 py-5 text-lg font-semibold bg-secondary hover:bg-secondary/90 text-primary rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Contact Me Directly
              </Link>
            </div>
            <p className="mt-8 text-slate-300">
              📧 laura@lauranorman.me
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Image 
                src="/images/logo.png" 
                alt="LN Real Estate" 
                width={50} 
                height={50} 
                className="object-contain"
              />
              <div>
                <p className="font-serif font-bold text-lg">Laura Norman</p>
                <p className="text-sm text-slate-400">Wemert Group Realty • Orlando, Florida</p>
              </div>
            </div>
            <div className="flex gap-8 text-sm">
              <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
              <Link href="/valuation" className="hover:text-secondary transition-colors">Get Valuation</Link>
              <Link href="/buyer-match" className="hover:text-secondary transition-colors">Find Homes</Link>
              <Link href="/dashboard" className="hover:text-secondary transition-colors">Dashboard</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
            <div className="mb-3">
              <Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            </div>
            <p>&copy; {new Date().getFullYear()} Laura Norman Real Estate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
