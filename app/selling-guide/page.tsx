import { Home, DollarSign, Camera, Users, FileText, Key, CheckCircle, TrendingUp, AlertCircle, Sparkles, RefreshCw, ScrollText, Repeat, Package, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { LinkButton } from "@/components/link-button"
import heroImage from "@/attached_assets/stock_images/modern_luxury_kitche_75ac9317.jpg"

export const metadata = {
  title: "The Ultimate Home Selling Guide | Laura Norman Real Estate",
  description: "Everything you need to sell your Orlando home for top dollar. Expert guidance from preparation to closing day."
}

export default function SellingGuidePage() {
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

      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <Image 
            src={heroImage} 
            alt="Modern luxury kitchen in Orlando home" 
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
              <span className="text-black font-bold">HOME</span>
              <br />
              <span className="text-black font-bold italic text-6xl md:text-8xl">Selling</span>
              <br />
              <span className="text-black font-bold text-5xl md:text-7xl">GUIDE</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 font-serif italic leading-relaxed">
              Everything you need to sell your Orlando home for maximum profit — from prep to closing day.
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
                <span className="group-hover:text-secondary transition-colors">Preparing Your Home to Sell</span>
              </a>
              <a href="#step-2" className="flex items-start gap-3 p-4 rounded-lg hover:bg-white/10 transition-colors group">
                <span className="text-secondary text-xl font-bold">02</span>
                <span className="group-hover:text-secondary transition-colors">Pricing Your Home Right</span>
              </a>
              <a href="#step-3" className="flex items-start gap-3 p-4 rounded-lg hover:bg-white/10 transition-colors group">
                <span className="text-secondary text-xl font-bold">03</span>
                <span className="group-hover:text-secondary transition-colors">Marketing & Photography</span>
              </a>
              <a href="#step-4" className="flex items-start gap-3 p-4 rounded-lg hover:bg-white/10 transition-colors group">
                <span className="text-secondary text-xl font-bold">04</span>
                <span className="group-hover:text-secondary transition-colors">Showings & Open Houses</span>
              </a>
              <a href="#step-5" className="flex items-start gap-3 p-4 rounded-lg hover:bg-white/10 transition-colors group">
                <span className="text-secondary text-xl font-bold">05</span>
                <span className="group-hover:text-secondary transition-colors">Reviewing & Negotiating Offers</span>
              </a>
              <a href="#step-6" className="flex items-start gap-3 p-4 rounded-lg hover:bg-white/10 transition-colors group">
                <span className="text-secondary text-xl font-bold">06</span>
                <span className="group-hover:text-secondary transition-colors">Closing the Sale</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">Your Journey to a Successful Sale</h2>
            <div className="prose prose-lg text-slate-700 leading-relaxed space-y-4">
              <p>
                Selling your home is a major financial transaction, and getting it right can mean tens of thousands 
                of dollars in your pocket. In Orlando's competitive market, success comes down to preparation, 
                pricing strategy, and expert marketing.
              </p>
              <p>
                I've helped hundreds of Orlando homeowners maximize their property value and achieve smooth, 
                profitable sales. This comprehensive guide shares the exact strategies I use to get my clients 
                top dollar while minimizing stress and timeline.
              </p>
              <p className="text-primary font-semibold">
                Let's get your home sold for the best possible price!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 1: Preparing Your Home */}
      <section id="step-1" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-sm text-secondary font-bold uppercase tracking-wider">Step 01</span>
                <h2 className="text-3xl font-serif font-bold text-primary">Preparing Your Home to Sell</h2>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-6">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">First Impressions Matter</h3>
              <p className="text-slate-700 leading-relaxed">
                Buyers decide within seconds of walking through the door. Your home needs to look its absolute 
                best to command top dollar. Here's your preparation checklist:
              </p>

              <div className="space-y-4">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">Deep Clean Everything</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Professional carpet cleaning or replacement if worn</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Windows (inside and out), baseboards, ceiling fans</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Kitchen appliances (ovens, refrigerator, dishwasher)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Bathrooms (grout, fixtures, mirrors spotless)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">Declutter & Depersonalize</h4>
                  <p className="text-slate-700 mb-3">
                    Buyers need to envision themselves in the space, not see your family photos and collections.
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Remove 50% of items from closets (makes them look bigger)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Clear kitchen counters (only keep essentials)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Pack away personal photos, collections, and memorabilia</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Rent a storage unit if needed for excess furniture</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">High-ROI Improvements</h4>
                  <p className="text-slate-700 mb-3">
                    These upgrades typically return 100%+ of their cost at closing:
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span><strong>Fresh paint</strong> - Neutral colors (greige, soft white) throughout</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span><strong>Curb appeal</strong> - Fresh mulch, trimmed landscaping, new front door hardware</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span><strong>Minor kitchen updates</strong> - New cabinet hardware, modern light fixtures</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span><strong>Bathroom refresh</strong> - New faucets, mirrors, updated lighting</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded">
                <h4 className="font-bold text-primary mb-2">💡 Laura's Pro Tip</h4>
                <p className="text-slate-700">
                  Don't over-improve! Focus on repairs and cosmetic updates that appeal to the broadest range of 
                  buyers. A $50,000 kitchen remodel rarely returns full value. Instead, invest in paint, 
                  cleaning, and minor fixes that make your home show its best.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2: Pricing */}
      <section id="step-2" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-sm text-secondary font-bold uppercase tracking-wider">Step 02</span>
                <h2 className="text-3xl font-serif font-bold text-primary">Pricing Your Home Right</h2>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-6">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">The #1 Factor in Selling Fast</h3>
              <p className="text-slate-700 leading-relaxed">
                Pricing is not guesswork. Price too high and your home sits on the market, becoming stale. 
                Price strategically and you'll create competition among buyers that drives up your final sale price.
              </p>

              <div className="bg-amber-50/50 border-l-4 border-amber-600/40 p-6 rounded">
                <h4 className="font-bold text-slate-800 mb-2">⚠️ The Biggest Mistake Sellers Make</h4>
                <p className="text-slate-700">
                  Overpricing to "leave room for negotiation." This backfires. Homes priced 5-10% above market 
                  value sit for 60+ days, get stigmatized, and ultimately sell for LESS than if they'd been 
                  priced correctly from day one.
                </p>
              </div>

              <h3 className="text-2xl font-serif font-bold text-primary mb-4 pt-6">How I Determine Your Home's Value</h3>
              
              <div className="space-y-4">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">1. Comparative Market Analysis (CMA)</h4>
                  <p className="text-slate-700 mb-3">
                    I analyze recently sold homes in your neighborhood that match your property:
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Similar square footage, beds/baths, lot size</li>
                    <li>• Sold within the last 3-6 months</li>
                    <li>• Within 0.5 miles of your property</li>
                    <li>• Adjusted for condition, updates, and features</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">2. Current Market Conditions</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Inventory levels (buyer's vs. seller's market)</li>
                    <li>• Average days on market in your area</li>
                    <li>• Interest rate trends affecting buyer demand</li>
                    <li>• Seasonal factors specific to Orlando</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">3. Your Home's Unique Features</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Recent upgrades (roof, HVAC, kitchen, baths)</li>
                    <li>• Premium lot (corner, waterfront, cul-de-sac)</li>
                    <li>• Top-rated school zones (huge in Orlando)</li>
                    <li>• Pool, outdoor living space, garage size</li>
                  </ul>
                </div>
              </div>

              <div className="bg-secondary/10 border-l-4 border-secondary/40 p-6 rounded">
                <h4 className="font-bold text-slate-800 mb-2">✅ The Strategic Pricing Sweet Spot</h4>
                <p className="text-slate-700 mb-3">
                  I price homes to attract the maximum number of buyers in the first two weeks. This creates:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>• Multiple showing requests within 48 hours</li>
                  <li>• Competitive offers (often above asking!)</li>
                  <li>• Faster closing timeline</li>
                  <li>• Less negotiation leverage for buyers</li>
                </ul>
              </div>

              <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded">
                <h4 className="font-bold text-primary mb-2">💡 Orlando Market Insight</h4>
                <p className="text-slate-700">
                  In Central Florida, homes in top school districts (Winter Park, Lake Nona, Oviedo) can command 
                  10-15% premiums. Location matters enormously. I'll show you exactly how your neighborhood 
                  compares and what that means for your pricing strategy.
                </p>
              </div>

              <h3 className="text-2xl font-serif font-bold text-primary mb-4 pt-8">Common Pricing Mistakes to Avoid</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-amber-50/50 p-5 rounded-lg border-l-4 border-amber-600/40">
                  <h4 className="font-bold text-slate-800 mb-2">❌ Overpricing</h4>
                  <p className="text-slate-700 text-sm">
                    Scares off buyers, leads to fewer showings, property sits, requires price cuts later, 
                    and creates appraisal issues even when you get an offer.
                  </p>
                </div>

                <div className="bg-amber-50/50 p-5 rounded-lg border-l-4 border-amber-600/40">
                  <h4 className="font-bold text-slate-800 mb-2">❌ Emotional Pricing</h4>
                  <p className="text-slate-700 text-sm">
                    Pricing based on what you need or what you paid. Buyers don't care about your memories 
                    or original cost—they care about current market value.
                  </p>
                </div>

                <div className="bg-amber-50/50 p-5 rounded-lg border-l-4 border-amber-600/40">
                  <h4 className="font-bold text-slate-800 mb-2">❌ Using Outdated Comps</h4>
                  <p className="text-slate-700 text-sm">
                    Markets shift quickly. Use sales from the last 3-6 months only. Homes that sold a year 
                    ago are irrelevant in today's market.
                  </p>
                </div>

                <div className="bg-amber-50/50 p-5 rounded-lg border-l-4 border-amber-600/40">
                  <h4 className="font-bold text-slate-800 mb-2">❌ Wrong Comps</h4>
                  <p className="text-slate-700 text-sm">
                    Comparing your home to dissimilar properties in different neighborhoods, sizes, or 
                    conditions creates unrealistic expectations.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-serif font-bold text-primary mb-4 pt-8">Understanding Your Net Proceeds</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Your sale price isn't what you take home. Factor in closing costs to understand your actual profit:
              </p>

              <div className="bg-taupe/5 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-secondary" />
                  Typical Seller Closing Costs in Florida
                </h4>
                <div className="space-y-3 text-slate-700 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span><strong>Realtor Commissions</strong></span>
                    <span className="text-primary font-semibold">5-6% of sale price</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span><strong>Documentary Stamp Tax (Transfer Tax)</strong></span>
                    <span className="text-primary font-semibold">0.7% of sale price</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span><strong>Title Insurance (Owner's Policy)</strong></span>
                    <span className="text-primary font-semibold">Varies by county</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span><strong>Prorated Property Taxes</strong></span>
                    <span className="text-primary font-semibold">Your share through closing</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span><strong>HOA Transfer/Capital Fees</strong></span>
                    <span className="text-primary font-semibold">If applicable</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span><strong>Recording Fees</strong></span>
                    <span className="text-primary font-semibold">~$100-$200</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span><strong>Typical Total Closing Costs</strong></span>
                    <span className="text-primary font-bold text-base">~7-9% of sale price</span>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/10 border-l-4 border-secondary/40 p-6 rounded mt-6">
                <h4 className="font-bold text-slate-800 mb-3">📊 Example: Selling a $500,000 Orlando Home</h4>
                <div className="space-y-2 text-slate-700 text-sm">
                  <p className="font-semibold">Sale Price: $500,000</p>
                  <p className="ml-4">Commissions (5.5%): -$27,500</p>
                  <p className="ml-4">Transfer Tax (0.7%): -$3,500</p>
                  <p className="ml-4">Title Insurance: -$2,100</p>
                  <p className="ml-4">Other Closing Costs: -$1,500</p>
                  <p className="ml-4">Outstanding Mortgage: -$350,000 <span className="text-xs italic">(illustrative)</span></p>
                  <p className="mt-3 pt-3 border-t border-secondary/40 font-bold text-base">
                    <strong>Your Net Proceeds:</strong> ~$115,400
                  </p>
                  <p className="mt-2 text-xs italic text-secondary/80">
                    *This example assumes a $350k mortgage balance. Your actual net proceeds will depend on 
                    your specific mortgage payoff, closing costs, and any seller credits or repairs.
                  </p>
                </div>
              </div>

              <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded mt-6">
                <h4 className="font-bold text-primary mb-2">💡 I'll Prepare a Detailed Net Sheet For You</h4>
                <p className="text-slate-700 text-sm">
                  Before you list, I'll provide a complete net proceeds estimate showing exactly what you'll 
                  receive at closing based on different sale price scenarios. No surprises—you'll know your 
                  bottom line before we go to market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3: Marketing */}
      <section id="step-3" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <Camera className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-sm text-secondary font-bold uppercase tracking-wider">Step 03</span>
                <h2 className="text-3xl font-serif font-bold text-primary">Marketing & Photography</h2>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-6">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Stand Out in the Market</h3>
              <p className="text-slate-700 leading-relaxed">
                90% of buyers start their search online. Your home's first impression happens on a screen, 
                not in person. Professional marketing is non-negotiable if you want top dollar.
              </p>

              <h3 className="text-2xl font-serif font-bold text-primary mb-4 pt-4">Professional Photography Package</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                I invest in professional photography for every listing because it works. Homes with 
                professional photos sell 32% faster and for 47% more than amateur photos.
              </p>

              <div className="space-y-4">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">What's Included:</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-3">
                      <Camera className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span><strong>Professional HDR Photography</strong> - 30-50 stunning interior and exterior shots</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Camera className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span><strong>Aerial Drone Footage</strong> - Showcases your property, lot, and neighborhood</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Camera className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span><strong>Virtual 3D Tour</strong> - Interactive walkthrough buyers can explore 24/7</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Camera className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span><strong>Twilight Photos</strong> - Premium homes get dramatic dusk shots</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-serif font-bold text-primary mb-4 pt-6">Multi-Channel Marketing Strategy</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                I don't just list your home on MLS and wait. I create a comprehensive marketing campaign 
                that reaches buyers everywhere they're looking:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-bold text-primary mb-2">Online Presence</h4>
                  <ul className="space-y-1 text-slate-700 text-sm">
                    <li>• MLS (feeds to all major sites)</li>
                    <li>• Zillow, Realtor.com, Redfin</li>
                    <li>• Social media campaigns</li>
                    <li>• Targeted Facebook/Instagram ads</li>
                    <li>• Email to my buyer database</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-bold text-primary mb-2">Traditional Outreach</h4>
                  <ul className="space-y-1 text-slate-700 text-sm">
                    <li>• Professional yard signage</li>
                    <li>• Neighbor door-knocking</li>
                    <li>• Agent-to-agent networking</li>
                    <li>• Print flyers and brochures</li>
                    <li>• Broker open house events</li>
                  </ul>
                </div>
              </div>

              <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded">
                <h4 className="font-bold text-primary mb-2">💡 Laura's Pro Tip</h4>
                <p className="text-slate-700">
                  The first 14 days on market are critical. I front-load all marketing efforts to create 
                  maximum buzz and urgency. This is when you'll get your best offers, so everything needs 
                  to be perfect from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 4: Showings */}
      <section id="step-4" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-sm text-secondary font-bold uppercase tracking-wider">Step 04</span>
                <h2 className="text-3xl font-serif font-bold text-primary">Showings & Open Houses</h2>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-6">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Making It Easy for Buyers</h3>
              <p className="text-slate-700 leading-relaxed">
                The more accessible your home is for showings, the faster it sells. Buyers often make 
                decisions within 24-48 hours, so flexibility is key.
              </p>

              <div className="space-y-4">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">Showing Best Practices</h4>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span><strong>Be flexible with timing</strong> - Accept evening and weekend showings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span><strong>Leave during showings</strong> - Buyers want to explore freely and talk openly</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span><strong>Keep it show-ready</strong> - Maintain cleaning standards daily</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span><strong>Pets secured</strong> - Arrange for pets to be elsewhere or safely contained</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span><strong>Create ambiance</strong> - Open curtains for natural light, comfortable temperature</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">Open House Strategy</h4>
                  <p className="text-slate-700 mb-3">
                    I host strategic open houses to create buzz and urgency, typically during the first 
                    weekend on market:
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Broker's Open</strong> - Invite agents to see your home first, spread the word to their buyers</li>
                    <li>• <strong>Public Open House</strong> - Saturday/Sunday afternoon, professionally hosted</li>
                    <li>• <strong>Neighbor Preview</strong> - Neighbors are your secret weapon (they know potential buyers!)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50/50 border-l-4 border-amber-600/40 p-6 rounded">
                <h4 className="font-bold text-slate-800 mb-2">❌ What NOT to Do During Showings</h4>
                <ul className="space-y-2 text-slate-700">
                  <li>• Don't follow buyers around or hover</li>
                  <li>• Don't leave dirty dishes, clutter, or unmade beds</li>
                  <li>• Don't have strong cooking smells or air freshener overload</li>
                  <li>• Don't make it hard to schedule (same-day showings are best!)</li>
                </ul>
              </div>

              <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded">
                <h4 className="font-bold text-primary mb-2">💡 Laura's Pro Tip</h4>
                <p className="text-slate-700">
                  I use electronic lockboxes that notify me every time an agent shows your home. I follow 
                  up with every showing to get feedback, gauge interest, and nudge agents whose clients 
                  are considering an offer. This personal touch helps close deals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 5: Offers */}
      <section id="step-5" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-sm text-secondary font-bold uppercase tracking-wider">Step 05</span>
                <h2 className="text-3xl font-serif font-bold text-primary">Reviewing & Negotiating Offers</h2>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-6">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">More Than Just the Price</h3>
              <p className="text-slate-700 leading-relaxed">
                When offers start coming in, it's tempting to grab the highest number. But the "best" offer 
                isn't always the biggest—it's the one with the best terms, strongest buyer, and highest 
                likelihood of closing.
              </p>

              <h3 className="text-2xl font-serif font-bold text-primary mb-4 pt-4">What I Analyze in Every Offer</h3>

              <div className="space-y-4">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">1. Purchase Price & Net Proceeds</h4>
                  <p className="text-slate-700 mb-3">
                    I calculate your actual net (what you walk away with) after:
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Agent commissions</li>
                    <li>• Seller concessions or credits</li>
                    <li>• Closing costs and prorations</li>
                    <li>• Any agreed-upon repairs</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">2. Buyer Financing Strength</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li>✅ <strong>Cash offers</strong> - Fastest, most certain</li>
                    <li>✅ <strong>Pre-approved (not just pre-qualified)</strong> - Shows serious buyer</li>
                    <li>⚠️ <strong>Conventional loan</strong> - Good if well-qualified</li>
                    <li>⚠️ <strong>FHA/VA loans</strong> - More conditions, but often solid</li>
                    <li>❌ <strong>No pre-approval</strong> - High risk of falling through</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">3. Contingencies</h4>
                  <p className="text-slate-700 mb-3">
                    Fewer contingencies = stronger offer:
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Inspection contingency</strong> - Standard, but watch the timeline</li>
                    <li>• <strong>Appraisal contingency</strong> - Necessary for financed buyers</li>
                    <li>• <strong>Home sale contingency</strong> - Risky (they need to sell first)</li>
                    <li>• <strong>Financing contingency</strong> - Standard protection for buyers</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">4. Timeline</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li>• How quickly can they close?</li>
                    <li>• Do you need a rent-back period?</li>
                    <li>• Inspection and due diligence deadlines</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-serif font-bold text-primary mb-4 pt-6">Negotiation Strategy</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                As your advocate, I negotiate to maximize your net proceeds while keeping the deal on track. 
                I've closed hundreds of transactions and know exactly when to push, when to compromise, and 
                when to walk away.
              </p>

              <div className="bg-secondary/10 border-l-4 border-secondary/40 p-6 rounded">
                <h4 className="font-bold text-slate-800 mb-2">✅ Multiple Offer Scenarios</h4>
                <p className="text-slate-700">
                  When we receive multiple offers (common with strategic pricing!), I create a competitive 
                  environment. This often results in buyers bidding ABOVE asking price, waiving contingencies, 
                  or offering better terms. These situations are where expert negotiation pays for itself.
                </p>
              </div>

              <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded">
                <h4 className="font-bold text-primary mb-2">💡 Laura's Pro Tip</h4>
                <p className="text-slate-700">
                  I present all offers to you with a detailed analysis and recommendation. You make the final 
                  decision, but I'll tell you exactly what I'd do if it were my home. My job is to ensure 
                  you have all the information to choose wisely.
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
                <h2 className="text-3xl font-serif font-bold text-primary">Closing the Sale</h2>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-6">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">The Final Stretch</h3>
              <p className="text-slate-700 leading-relaxed">
                You've accepted an offer—congratulations! But we're not done yet. The closing period 
                typically takes 30-45 days, and I manage every detail to ensure a smooth path to closing day.
              </p>

              <h3 className="text-2xl font-serif font-bold text-primary mb-4 pt-4">What Happens Next</h3>

              <div className="space-y-4">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">Week 1-2: Due Diligence Period</h4>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span><strong>Home Inspection</strong> - Buyer's inspector evaluates the property</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span><strong>Repair Negotiations</strong> - I help you respond to inspection requests strategically</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span><strong>Appraisal Ordered</strong> - Lender sends appraiser to verify value</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">Week 2-3: Processing</h4>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span><strong>Title Search</strong> - Title company ensures clean ownership transfer</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span><strong>Buyer's Financing</strong> - Lender processes loan (I stay in contact)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span><strong>HOA Documents</strong> - If applicable, association paperwork provided</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">Week 4: Final Preparations</h4>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span><strong>Final Walkthrough</strong> - Buyer confirms property condition before closing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span><strong>Complete Agreed Repairs</strong> - Finish any negotiated work</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span><strong>Clear to Close</strong> - Lender gives final approval</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-secondary/10 p-6 rounded-lg border-2 border-secondary/40">
                  <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-secondary" />
                    Closing Day!
                  </h4>
                  <p className="text-slate-700 mb-3">
                    You'll sign final documents at the title company (or remotely), and the buyer's funds 
                    are transferred. Usually within 24 hours, your proceeds are wired to your bank account.
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>What to bring:</strong> Photo ID, keys, garage remotes, HOA documents</li>
                    <li>• <strong>Duration:</strong> 30-60 minutes to sign paperwork</li>
                    <li>• <strong>What you receive:</strong> Closing statement, your net proceeds</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-serif font-bold text-primary mb-4 pt-8">Understanding Escrow in Florida</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                In Florida, "escrow" refers to the period between contract acceptance and closing when the 
                title company holds the earnest money deposit and ensures all conditions are met before 
                transferring ownership.
              </p>

              <div className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                  <h4 className="font-bold text-primary mb-3">🏦 What is Earnest Money Deposit?</h4>
                  <p className="text-slate-700 text-sm mb-3">
                    When a buyer makes an offer, they submit earnest money (typically 1-3% of purchase price 
                    in Orlando) to show they're serious. This deposit is held by the title company or escrow 
                    agent and applied to the buyer's closing costs or down payment.
                  </p>
                  <p className="text-slate-700 text-sm font-semibold">
                    If the buyer backs out without a valid contingency, you may be entitled to keep this deposit.
                  </p>
                </div>

                <div className="bg-taupe/5 p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">📋 Orlando Escrow Timeline (Typical 30-Day Contract)</h4>
                  <div className="space-y-3 text-slate-700 text-sm">
                    <div className="border-l-4 border-secondary pl-4">
                      <p className="font-semibold">Days 1-3: Contract Executed</p>
                      <p className="ml-4">• Buyer delivers earnest money deposit to title company</p>
                      <p className="ml-4">• Title company opens escrow and begins title search</p>
                    </div>
                    
                    <div className="border-l-4 border-secondary pl-4">
                      <p className="font-semibold">Days 5-10: Inspection Period</p>
                      <p className="ml-4">• Buyer conducts home inspection, pest inspection, etc.</p>
                      <p className="ml-4">• Buyer may request repairs or credits</p>
                      <p className="ml-4">• We negotiate any inspection items</p>
                    </div>
                    
                    <div className="border-l-4 border-secondary pl-4">
                      <p className="font-semibold">Days 10-15: Appraisal</p>
                      <p className="ml-4">• Lender orders appraisal to verify property value</p>
                      <p className="ml-4">• If appraisal comes in low, we may need to renegotiate</p>
                    </div>
                    
                    <div className="border-l-4 border-secondary pl-4">
                      <p className="font-semibold">Days 15-25: Processing</p>
                      <p className="ml-4">• Title company prepares ownership documents</p>
                      <p className="ml-4">• Buyer's lender processes loan application</p>
                      <p className="ml-4">• HOA documents and estoppel letter (if applicable)</p>
                    </div>
                    
                    <div className="border-l-4 border-secondary pl-4">
                      <p className="font-semibold">Days 26-29: Pre-Closing</p>
                      <p className="ml-4">• Buyer receives Closing Disclosure (3 days before closing)</p>
                      <p className="ml-4">• You receive estimated seller proceeds statement</p>
                      <p className="ml-4">• Final walkthrough scheduled (usually day before closing)</p>
                    </div>
                    
                    <div className="border-l-4 border-secondary/40 pl-4">
                      <p className="font-semibold text-slate-800">Day 30: Closing Day</p>
                      <p className="ml-4 text-slate-700">• Sign all documents at title company</p>
                      <p className="ml-4 text-slate-700">• Transfer keys and remotes to buyer</p>
                      <p className="ml-4 text-slate-700">• Funds disburse (your proceeds wired within 24 hours)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
                  <h4 className="font-bold text-primary mb-3">⚠️ What Can Delay Closing</h4>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• <strong>Title issues</strong> (liens, disputes, HOA violations)</li>
                    <li>• <strong>Appraisal delays or low appraisal</strong></li>
                    <li>• <strong>Buyer financing problems</strong> (credit issues, job change)</li>
                    <li>• <strong>Inspection repair negotiations</strong> taking longer than expected</li>
                    <li>• <strong>Missing HOA documents</strong> or estoppel letter</li>
                  </ul>
                  <p className="text-slate-700 text-sm mt-3 font-semibold">
                    Don't worry—I'll proactively address these issues to keep your closing on schedule!
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-serif font-bold text-primary mb-4 pt-8">Your Closing Day Experience</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Closing day is when ownership officially transfers to the buyer. In Orlando, most closings 
                happen at the title company's office, though remote/mobile closings are becoming more common.
              </p>

              <div className="space-y-4">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">📝 What You'll Sign</h4>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• <strong>Deed</strong> - Transfers property ownership to buyer</li>
                    <li>• <strong>Closing Disclosure / Settlement Statement (HUD-1)</strong> - Itemizes all costs</li>
                    <li>• <strong>Bill of Sale</strong> - Transfers personal property (appliances, fixtures)</li>
                    <li>• <strong>Affidavits</strong> - Confirms property condition, occupancy status</li>
                    <li>• <strong>FIRPTA</strong> - IRS form for foreign sellers (or exemption if U.S. citizen)</li>
                    <li>• <strong>HOA documents</strong> - If applicable, transfer of HOA membership</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-secondary" />
                    How You Get Paid
                  </h4>
                  <p className="text-slate-700 text-sm mb-3">
                    After all documents are signed and recorded, the title company disburses funds:
                  </p>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>1. <strong>Mortgage payoff</strong> sent to your lender</li>
                    <li>2. <strong>Closing costs</strong> paid (commissions, title insurance, taxes)</li>
                    <li>3. <strong>Your net proceeds</strong> wired to your bank account (usually within 24 hours)</li>
                  </ul>
                  <p className="text-slate-700 text-sm mt-3 font-semibold">
                    Bring your bank wiring instructions to closing so funds can be transferred immediately!
                  </p>
                </div>

                <div className="bg-secondary/10 border-l-4 border-secondary/40 p-6 rounded">
                  <h4 className="font-bold text-slate-800 mb-3">✅ Closing Day Checklist</h4>
                  <div className="space-y-2 text-slate-700 text-sm">
                    <p className="font-semibold">Bring to closing:</p>
                    <ul className="ml-4 space-y-1">
                      <li>□ Government-issued photo ID (driver's license, passport)</li>
                      <li>□ All house keys, garage remotes, gate clickers</li>
                      <li>□ Mailbox keys</li>
                      <li>□ Security codes / alarm information</li>
                      <li>□ Appliance manuals and warranties</li>
                      <li>□ HOA documents, pool passes, amenity cards</li>
                      <li>□ Bank wiring instructions for proceeds</li>
                    </ul>
                    
                    <p className="font-semibold mt-3">Leave behind for new owner:</p>
                    <ul className="ml-4 space-y-1">
                      <li>□ Extra copies of keys</li>
                      <li>□ Paint colors and leftover paint</li>
                      <li>□ Garage door openers (all remotes)</li>
                      <li>□ HOA contact information</li>
                      <li>□ Utility company contact information</li>
                      <li>□ Instructions for home systems (pool, sprinklers, HVAC)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded mt-6">
                <h4 className="font-bold text-primary mb-2">💡 I'll Be There With You</h4>
                <p className="text-slate-700 text-sm">
                  Throughout the closing period, I coordinate with all parties—title company, lenders, 
                  inspectors, and agents—to keep everything on track. You'll get regular updates, and 
                  I'll handle any issues that arise so you can focus on your move. On closing day, I'll 
                  either attend with you or be available by phone to answer any questions.
                </p>
              </div>

              <h3 className="text-2xl font-serif font-bold text-primary mb-4 pt-8">What Happens After Closing</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Congratulations—you've officially sold your home! Here's what to do in the first few days 
                and weeks after closing to ensure a smooth transition:
              </p>

              <div className="space-y-4">
                <div className="bg-secondary/10 border-l-4 border-secondary/40 p-6 rounded">
                  <h4 className="font-bold text-primary mb-3">✅ Immediately After Closing</h4>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• <strong>Confirm wire receipt</strong> - Check that your proceeds arrived in your bank account (usually within 24 hours)</li>
                    <li>• <strong>Cancel homeowner's insurance</strong> - Notify your insurance company the property sold (pro-rated refund coming)</li>
                    <li>• <strong>Final utility readings</strong> - Contact all utilities to confirm final meter readings and account closures</li>
                    <li>• <strong>Keep closing documents safe</strong> - Store deed, settlement statement, and title policy in fireproof safe or safe deposit box</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                  <h4 className="font-bold text-primary mb-3">📬 Within First Week</h4>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• <strong>Confirm USPS mail forwarding</strong> is active (takes 7-10 days to start)</li>
                    <li>• <strong>Update voter registration</strong> with new address</li>
                    <li>• <strong>Update driver's license</strong> at Florida DMV (or your new state)</li>
                    <li>• <strong>Notify IRS & Florida DOR</strong> of address change (Form 8822)</li>
                    <li>• <strong>Check for utility refunds</strong> - deposits, prepaid amounts, final bills</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
                  <h4 className="font-bold text-primary mb-3">📋 Within First Month</h4>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• <strong>Save title insurance policy</strong> - You'll need this if title issues arise or for future property sales</li>
                    <li>• <strong>Save settlement statement</strong> - Required for tax returns (capital gains calculations)</li>
                    <li>• <strong>File for property tax exemptions</strong> at new home (homestead, senior, veteran, etc.)</li>
                    <li>• <strong>Update estate planning documents</strong> - Will, trust, beneficiary designations</li>
                    <li>• <strong>Consult tax professional</strong> - Discuss capital gains tax implications and exclusions</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded">
                  <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-secondary" />
                    Tax Considerations
                  </h4>
                  <p className="text-slate-700 text-sm mb-3">
                    <strong>Capital Gains Tax Exclusion:</strong> If you lived in the home as your primary residence 
                    for at least 2 of the last 5 years, you may exclude up to $250,000 (single) or $500,000 (married) 
                    in capital gains from federal taxes.
                  </p>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• <strong>Keep all closing documents</strong> for your tax records</li>
                    <li>• <strong>Calculate capital gains</strong> = Sale price - (Purchase price + improvements + selling costs)</li>
                    <li>• <strong>Report on Schedule D</strong> of your tax return even if fully excluded</li>
                    <li>• <strong>Consult CPA</strong> if you don't qualify for full exclusion or sold investment property</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Florida-Specific: Portability */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-primary">Save Our Homes Portability</h2>
              </div>
              
              <p className="text-slate-700 leading-relaxed">
                If you're moving to another Florida home, you can transfer (or "port") your Save Our Homes 
                tax benefits to your new property—potentially saving thousands on property taxes.
              </p>

              <div className="bg-secondary/10 border-l-4 border-secondary/40 p-6 rounded">
                <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-secondary" />
                  What Is Portability?
                </h4>
                <p className="text-slate-700 text-sm mb-3">
                  Portability allows you to transfer up to $500,000 of your accumulated Save Our Homes 
                  benefit from your old home to your new Florida home. This protects you from dramatic 
                  property tax increases when you move.
                </p>
                <p className="text-slate-700 text-sm font-semibold">
                  Example: If your old home's market value was $400,000 but assessed at $300,000, you 
                  have a $100,000 SOH benefit that can transfer to your new home.
                </p>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="font-bold text-primary mb-2">📋 Eligibility Requirements</h4>
                  <ul className="text-slate-700 text-sm space-y-2">
                    <li>• Must have had homestead exemption in any of the 3 preceding tax years</li>
                    <li>• Apply by March 1st (late applications accepted up to 25 days after August tax notices)</li>
                    <li>• Submit Form DR-501T to your county Property Appraiser</li>
                    <li>• Must abandon homestead at prior property</li>
                  </ul>
                </div>

                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="font-bold text-primary mb-2">🏠 Upsizing vs. Downsizing</h4>
                  <p className="text-slate-700 text-sm mb-2">
                    <strong>Upsizing:</strong> If your new home's value is higher, you can transfer 
                    your full SOH benefit (up to $500,000).
                  </p>
                  <p className="text-slate-700 text-sm">
                    <strong>Downsizing:</strong> If your new home's value is lower, you transfer a 
                    percentage of your benefit based on the ratio of new home value to old home value.
                  </p>
                </div>
              </div>

              <div className="bg-taupe/5 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-3">📊 Portability Calculation Example</h4>
                <div className="space-y-2 text-slate-700 text-sm">
                  <p><strong>Your current home:</strong></p>
                  <p className="ml-4">• Market value: $400,000</p>
                  <p className="ml-4">• Assessed value: $300,000</p>
                  <p className="ml-4">• <strong>SOH Benefit: $100,000</strong></p>
                  
                  <p className="mt-3"><strong>Your new home:</strong></p>
                  <p className="ml-4">• Market value: $500,000</p>
                  <p className="ml-4">• Portable benefit applied: -$100,000</p>
                  <p className="ml-4">• <strong>New assessed value: $400,000</strong></p>
                  
                  <p className="mt-3 font-semibold text-primary">
                    Annual tax savings: ~$1,500-$2,000 depending on millage rate
                  </p>
                </div>
              </div>

              <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded">
                <h4 className="font-bold text-primary mb-2">💡 I'll Help You Maximize Your Savings</h4>
                <p className="text-slate-700 text-sm">
                  I'll calculate your potential portability benefit and guide you through the application 
                  process. We'll also use a FREE online portability calculator to see exactly how much 
                  you can save on your new home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Florida-Specific: Title Insurance Reissue Credit */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <ScrollText className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-primary">Title Insurance Reissue Credit</h2>
              </div>
              
              <p className="text-slate-700 leading-relaxed">
                If you're selling within 3 years of purchase, you may qualify for a reissue credit on 
                title insurance—saving 20-50% on this closing cost.
              </p>

              <div className="bg-secondary/10 border-l-4 border-secondary/40 p-6 rounded">
                <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-secondary" />
                  What Is a Reissue Credit?
                </h4>
                <p className="text-slate-700 text-sm mb-3">
                  When you bought your home, you (or the seller) paid for an owner's title insurance policy. 
                  If you're selling within 3 years, the title company can offer a discounted rate on the 
                  new owner's policy—potentially saving you $500-$1,500.
                </p>
                <p className="text-slate-700 text-sm font-semibold">
                  Since sellers typically pay for the buyer's title insurance in Florida, this credit 
                  saves YOU money at closing.
                </p>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="font-bold text-primary mb-2">✅ Eligibility Requirements</h4>
                  <ul className="text-slate-700 text-sm space-y-2">
                    <li>• Your original owner's policy must be <strong>less than 3 years old</strong></li>
                    <li>• You must provide a complete copy of the prior policy to the title agent</li>
                    <li>• Works with any title company (doesn't have to be the same one)</li>
                    <li>• <strong>Exception:</strong> Vacant/unimproved land qualifies indefinitely</li>
                  </ul>
                </div>

                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="font-bold text-primary mb-2">💵 How Much Can You Save?</h4>
                  <p className="text-slate-700 text-sm mb-2">
                    <strong>Standard rates:</strong>
                  </p>
                  <p className="text-slate-700 text-sm ml-4">• $5.75 per $1,000 (first $100k)</p>
                  <p className="text-slate-700 text-sm ml-4">• $5.00 per $1,000 ($100k-$1M)</p>
                  
                  <p className="text-slate-700 text-sm mt-3 mb-2">
                    <strong>Reissue rates (discounted):</strong>
                  </p>
                  <p className="text-slate-700 text-sm ml-4">• $3.30 per $1,000 (first $100k)</p>
                  <p className="text-slate-700 text-sm ml-4">• $3.00 per $1,000 ($100k-$1M)</p>
                </div>
              </div>

              <div className="bg-taupe/5 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-3">📊 Savings Example</h4>
                <div className="space-y-2 text-slate-700 text-sm">
                  <p><strong>Selling a $500,000 home purchased 2 years ago for $450,000</strong></p>
                  <p className="ml-4">• Standard title insurance: ~$2,750</p>
                  <p className="ml-4">• With reissue credit: ~$1,650</p>
                  <p className="ml-4 font-semibold text-primary">• <strong>Your savings: ~$1,100</strong></p>
                  
                  <p className="mt-3 text-xs text-slate-600">
                    *Reissue credit applies to the portion covered by your original policy. Any increase 
                    in property value beyond original purchase price is charged at regular rates.
                  </p>
                </div>
              </div>

              <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded">
                <h4 className="font-bold text-primary mb-2">💡 I'll Handle This For You</h4>
                <p className="text-slate-700 text-sm">
                  I'll request your original title policy during our listing process and coordinate 
                  with the title company to ensure you receive every discount you qualify for. Many 
                  sellers don't even know this credit exists—but I make sure you benefit from it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Florida-Specific: 1031 Exchange */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Repeat className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-primary">1031 Exchange for Investment Properties</h2>
              </div>
              
              <p className="text-slate-700 leading-relaxed">
                If you're selling an investment or rental property, a 1031 exchange allows you to defer 
                capital gains taxes by reinvesting proceeds into another investment property.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                <h4 className="font-bold text-primary mb-2">🏢 What Is a 1031 Exchange?</h4>
                <p className="text-slate-700 text-sm mb-3">
                  Named after IRS Section 1031, this tax strategy lets you sell investment real estate 
                  and reinvest the proceeds into "like-kind" property while <strong>deferring federal 
                  capital gains taxes</strong>—potentially saving 25-30% in taxes.
                </p>
                <p className="text-slate-700 text-sm font-semibold">
                  Florida has no state capital gains tax, so you only defer federal taxes—but that 
                  could still mean tens of thousands saved!
                </p>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="font-bold text-primary mb-2">✅ Requirements for a Valid 1031 Exchange</h4>
                  <ul className="text-slate-700 text-sm space-y-2">
                    <li>• <strong>Investment/business property only</strong> (not primary residences)</li>
                    <li>• <strong>Like-kind</strong>: Any real estate for any real estate (residential, commercial, land)</li>
                    <li>• <strong>Equal or greater value</strong>: Replacement property must be ≥ sold property value</li>
                    <li>• <strong>Use a Qualified Intermediary (QI)</strong>: You cannot touch the sale proceeds</li>
                    <li>• <strong>45-day identification deadline</strong>: Identify up to 3 replacement properties</li>
                    <li>• <strong>180-day closing deadline</strong>: Close on replacement property within 180 days</li>
                  </ul>
                </div>

                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="font-bold text-primary mb-2">⚠️ Critical Deadlines (No Extensions!)</h4>
                  <p className="text-slate-700 text-sm mb-2">
                    <strong>Day 1:</strong> Your investment property sale closes → proceeds go to QI
                  </p>
                  <p className="text-slate-700 text-sm mb-2">
                    <strong>Day 45:</strong> Submit written list of up to 3 replacement properties to QI
                  </p>
                  <p className="text-slate-700 text-sm">
                    <strong>Day 180:</strong> Close on replacement property (includes the 45-day period)
                  </p>
                </div>
              </div>

              <div className="bg-taupe/5 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-secondary" />
                  Tax Savings Example
                </h4>
                <div className="space-y-3 text-slate-700 text-sm">
                  <div>
                    <p className="font-semibold">Without 1031 Exchange:</p>
                    <p className="ml-4">• Sell rental property: $600,000</p>
                    <p className="ml-4">• Capital gains: $200,000</p>
                    <p className="ml-4">• Federal taxes (25-30%): <span className="text-red-600 font-bold">-$50,000 to -$60,000</span></p>
                    <p className="ml-4">• Net to reinvest: ~$540,000</p>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-300">
                    <p className="font-semibold">With 1031 Exchange:</p>
                    <p className="ml-4">• Sell rental property: $600,000</p>
                    <p className="ml-4">• Capital gains taxes: <span className="text-secondary font-bold">$0 (deferred)</span></p>
                    <p className="ml-4">• Full amount reinvested: $600,000</p>
                    <p className="ml-4 mt-2 font-semibold text-primary">
                      Extra $60,000 working for you = more income & appreciation
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
                <h4 className="font-bold text-primary mb-2">⚠️ Common 1031 Mistakes to Avoid</h4>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>❌ Touching the sale proceeds (automatic disqualification)</li>
                  <li>❌ Missing the 45-day identification deadline</li>
                  <li>❌ Not using a qualified intermediary</li>
                  <li>❌ Trying to exchange personal residence (must be investment property)</li>
                  <li>❌ Not reinvesting all proceeds (creates taxable "boot")</li>
                </ul>
              </div>

              <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded">
                <h4 className="font-bold text-primary mb-2">💡 I Work With 1031 Exchange Specialists</h4>
                <p className="text-slate-700 text-sm">
                  If you're selling investment property, I'll connect you with qualified intermediaries 
                  and tax professionals who specialize in 1031 exchanges. We'll coordinate timing, identify 
                  suitable replacement properties, and ensure all deadlines are met for a successful exchange.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Checklist */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Package className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-primary">Your Moving Checklist</h2>
              </div>
              
              <p className="text-slate-700 leading-relaxed">
                Congratulations—your home is sold! Now it's time to prepare for your move. Here's your 
                comprehensive checklist to ensure a smooth transition to your new home.
              </p>

              <div className="space-y-6">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                  <h4 className="font-bold text-primary mb-3">📅 4-6 Weeks Before Closing</h4>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">□</span>
                      <span><strong>Hire professional movers</strong> or reserve moving truck (peak season books early!)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">□</span>
                      <span><strong>Start decluttering</strong> - donate unwanted items to Goodwill, Salvation Army, or Habitat for Humanity ReStore in Orlando</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">□</span>
                      <span><strong>Create moving binder</strong> - folder for all moving documents, receipts, contracts, inventory lists</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">□</span>
                      <span><strong>Collect packing supplies</strong> - boxes (color-code by room!), tape, bubble wrap, permanent markers, labels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">□</span>
                      <span><strong>Create inventory</strong> of valuable items for insurance purposes (photos, serial numbers)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">□</span>
                      <span><strong>Plan for pets</strong> - research pet transport, vet records, new vet in destination city, pet-friendly hotels if needed</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-secondary/10 border-l-4 border-secondary/40 p-6 rounded">
                  <h4 className="font-bold text-primary mb-3">📋 2-3 Weeks Before Closing</h4>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">□</span>
                      <span><strong>Notify utilities</strong> - electric, water, gas, trash, internet/cable (schedule disconnect)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">□</span>
                      <span><strong>Set up utilities at new address</strong> (connect before you arrive)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">□</span>
                      <span><strong>Update mailing address</strong> - USPS forwarding, banks, credit cards, subscriptions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">□</span>
                      <span><strong>Transfer/update insurance</strong> - homeowner's, auto, health</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">□</span>
                      <span><strong>Notify schools</strong> if you have children (request records transfer)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">□</span>
                      <span><strong>Transfer prescriptions</strong> to new pharmacy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">□</span>
                      <span><strong>Gather important documents</strong> - birth certificates, passports, medical records, financial documents</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
                  <h4 className="font-bold text-primary mb-3">🔑 1 Week Before Closing</h4>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 font-bold">□</span>
                      <span><strong>Confirm closing details</strong> - time, location, what to bring (I'll coordinate this)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 font-bold">□</span>
                      <span><strong>Deep clean the home</strong> (many contracts require broom-clean condition)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 font-bold">□</span>
                      <span><strong>Complete repairs</strong> agreed to in contract</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 font-bold">□</span>
                      <span><strong>Pack "first night" essentials box</strong> - toiletries, change of clothes, phone chargers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 font-bold">□</span>
                      <span><strong>Confirm moving company</strong> arrival time and details</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded">
                  <h4 className="font-bold text-primary mb-3">🏠 Closing Day & Moving Day</h4>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">□</span>
                      <span><strong>Bring to closing:</strong> Photo ID, certified funds (if needed), keys/remotes/garage openers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">□</span>
                      <span><strong>Final walkthrough</strong> - ensure nothing left behind, lights off, doors locked</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">□</span>
                      <span><strong>Leave behind:</strong> All keys, garage remotes, gate clickers, mailbox keys, HOA info</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">□</span>
                      <span><strong>Turn off all lights, lock all doors and windows</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">□</span>
                      <span><strong>Leave appliance manuals, warranties, HOA docs</strong> for new owner</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-taupe/5 border-l-4 border-secondary p-6 rounded">
                  <h4 className="font-bold text-primary mb-3">📞 Important Contacts to Update</h4>
                  <div className="grid md:grid-cols-2 gap-3 text-slate-700 text-sm">
                    <div>
                      <p className="font-semibold mb-2">Financial:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• Banks & credit unions</li>
                        <li>• Credit card companies</li>
                        <li>• Investment firms</li>
                        <li>• Insurance companies</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Services:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• Employer HR department</li>
                        <li>• IRS & Florida DOR</li>
                        <li>• DMV (license, registration)</li>
                        <li>• Voter registration</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Subscriptions:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• Magazine subscriptions</li>
                        <li>• Online shopping accounts</li>
                        <li>• Streaming services</li>
                        <li>• Loyalty programs</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Healthcare:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• Doctors & dentists</li>
                        <li>• Veterinarian</li>
                        <li>• Pharmacies</li>
                        <li>• Health insurance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded">
                <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                  <Package className="w-5 h-5 text-secondary" />
                  Smart Packing Tips
                </h4>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• <strong>Color-code boxes by room</strong> - blue for kitchen, green for bedrooms, etc.</li>
                  <li>• <strong>Label all four sides</strong> of boxes so you can see contents from any angle</li>
                  <li>• <strong>Pack priority hierarchy:</strong> 1) Last-minute essentials, 2) Daily items, 3) Seasonal/rarely used</li>
                  <li>• <strong>Create "open first" box</strong> - toilet paper, cleaning supplies, phone chargers, snacks, basic tools</li>
                  <li>• <strong>Take photos of electronics</strong> before disconnecting so you remember how to reconnect</li>
                  <li>• <strong>Pack fragile items</strong> with towels, linens, or clothing to save on bubble wrap</li>
                </ul>
              </div>

              <div className="bg-taupe/5 border-l-4 border-secondary p-6 rounded">
                <h4 className="font-bold text-primary mb-3">🐾 Pet Moving Tips</h4>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• <strong>Visit vet 2-3 weeks before</strong> - get health certificate, update vaccines, refill medications</li>
                  <li>• <strong>Update microchip registration</strong> with new address</li>
                  <li>• <strong>Pack pet essentials separately</strong> - food, bowls, toys, litter box, leash, medications</li>
                  <li>• <strong>On moving day</strong> - keep pets in quiet room away from movers, or board them for the day</li>
                  <li>• <strong>Find new vet BEFORE you move</strong> - transfer records ahead of time</li>
                  <li>• <strong>Introduce gradually</strong> - keep routine consistent, explore new home together</li>
                </ul>
              </div>

              <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded mt-6">
                <h4 className="font-bold text-primary mb-2">💡 I'm Here to Help</h4>
                <p className="text-slate-700 text-sm">
                  Moving is stressful, but you don't have to do it alone. I can provide recommendations for 
                  reliable movers, cleaners, donation centers, pet transport, and other services to make 
                  your transition smooth. I've helped hundreds of clients move—just ask!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 bg-amber-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-center mb-12 text-primary">
              Common Selling Mistakes to Avoid
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
                <h3 className="font-bold text-primary mb-2">❌ Overpricing from Day One</h3>
                <p className="text-slate-700 text-sm">
                  Homes that sit become stale. Price it right initially to create competition and urgency.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
                <h3 className="font-bold text-primary mb-2">❌ Skipping Repairs & Staging</h3>
                <p className="text-slate-700 text-sm">
                  First impressions matter. Invest in making your home show-ready—it pays off at closing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
                <h3 className="font-bold text-primary mb-2">❌ Being Inflexible with Showings</h3>
                <p className="text-slate-700 text-sm">
                  The easier it is to see your home, the faster it sells. Accommodate buyer schedules.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
                <h3 className="font-bold text-primary mb-2">❌ Getting Emotional in Negotiations</h3>
                <p className="text-slate-700 text-sm">
                  This is a business transaction. Let me handle negotiations objectively on your behalf.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
                <h3 className="font-bold text-primary mb-2">❌ Choosing the Wrong Agent</h3>
                <p className="text-slate-700 text-sm">
                  Experience matters. Work with a proven local expert who knows Orlando's market inside-out.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
                <h3 className="font-bold text-primary mb-2">❌ Ignoring Curb Appeal</h3>
                <p className="text-slate-700 text-sm">
                  If buyers don't like what they see from the street, they won't even come inside.
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
                    alt="Laura Norman - Your Orlando Selling Expert" 
                    width={400}
                    height={500}
                    className="object-cover w-full"
                  />
                </div>
              </div>
              <div className="md:col-span-3">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                  Ready to Sell Your Home for Top Dollar?
                </h2>
                <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                  I've helped hundreds of Orlando homeowners achieve successful sales by combining 
                  strategic pricing, professional marketing, and expert negotiation.
                </p>
                <p className="text-base text-slate-600 mb-6 leading-relaxed">
                  Every home and seller is unique. I'll create a customized strategy for your property 
                  that maximizes your profit while minimizing stress. From the first consultation to 
                  handing over the keys, I'm with you every step of the way.
                </p>
                <div className="bg-gradient-to-br from-taupe/10 to-secondary/10 p-6 rounded-xl border-l-4 border-secondary">
                  <p className="text-slate-700 italic mb-2">
                    &quot;My goal is to get you the highest possible price in the shortest time frame, 
                    with the least amount of hassle.&quot;
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
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Get Your FREE Home Valuation</h2>
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              Find out what your Orlando home is worth in today's market. I'll provide a detailed 
              market analysis with comparable sales and strategic pricing recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/valuation"
                className="inline-flex items-center justify-center px-12 py-5 text-lg font-semibold bg-secondary hover:bg-secondary/90 text-primary rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get My FREE Valuation
              </Link>
              <Link 
                href="mailto:laura@lauranorman.me"
                className="inline-flex items-center justify-center px-12 py-5 text-lg font-semibold bg-white/10 hover:bg-white/20 border-2 border-white text-white rounded-lg transition-all"
              >
                Contact Me Directly
              </Link>
            </div>
            <p className="mt-8 text-slate-300">
              📧 laura@lauranorman.me | 📍 Orlando, Florida
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
              <Link href="/buying-guide" className="hover:text-secondary transition-colors">Buying Guide</Link>
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
