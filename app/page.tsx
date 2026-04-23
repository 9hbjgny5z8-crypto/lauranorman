import { Home, TrendingUp, Users, DollarSign, Camera, Handshake, BarChart3, Building, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { LinkButton } from "@/components/link-button"
import Image from "next/image"
import heroHome from "@/attached_assets/stock_images/modern-living-room-hero.webp"
import valuationHome from "@/attached_assets/stock_images/upscale_suburban_nei_fea402a0.jpg"
import interiorHome from "@/attached_assets/stock_images/modern_family_home_i_b01b4093.jpg"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b border-slate-200/60 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image 
                src="/images/logo.png" 
                alt="LN Real Estate Logo" 
                width={150} 
                height={150} 
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold text-primary tracking-tight">Laura Norman</span>
                <span className="text-xs text-slate-600 uppercase tracking-wider">Orlando, Florida</span>
                <span className="text-xs text-slate-500">Wemert Group Realty</span>
              </div>
            </div>
            <nav className="hidden md:flex gap-8">
              <Link href="#valuation" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                Home Valuation
              </Link>
              <Link href="#buyer-match" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                Find Your Home
              </Link>
              <Link href="/blog" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/selling-guide" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                Selling Guide
              </Link>
              <Link href="/buying-guide" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                Buying Guide
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={heroHome} 
            alt="Luxury modern living room in Orlando, Florida home" 
            fill
            sizes="100vw"
            className="object-cover opacity-10"
            priority
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-primary leading-tight">
            Your Trusted Partner in<br />Orlando Real Estate
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-4 max-w-3xl mx-auto leading-relaxed">
            Whether you&apos;re discovering your home&apos;s value or searching for your dream property, 
            I provide expert guidance with a personal touch.
          </p>
          <p className="text-base text-slate-500 mb-12 font-medium">
            Proudly serving with Wemert Group Realty
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <LinkButton href="#valuation" size="lg" className="text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all">
              Get Home Valuation
            </LinkButton>
            <LinkButton href="#buyer-match" size="lg" variant="outline" className="text-base px-8 py-6 border-2 hover:bg-slate-50 transition-all">
              Find Your Dream Home
            </LinkButton>
          </div>
        </div>
      </section>

      <section id="valuation" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="h-10 w-10 text-secondary" />
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">My Home ROI</h2>
              </div>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Discover your property&apos;s true market value with a complimentary expert valuation. 
                I provide accurate insights into your home&apos;s worth to help you make confident decisions.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl mt-0.5">✓</span>
                  <span className="text-slate-700">Professional market analysis with local expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl mt-0.5">✓</span>
                  <span className="text-slate-700">Comprehensive property assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl mt-0.5">✓</span>
                  <span className="text-slate-700">Strategic pricing recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl mt-0.5">✓</span>
                  <span className="text-slate-700">Personal response within 24 hours</span>
                </li>
              </ul>
              <LinkButton href="/valuation" size="lg" className="shadow-lg hover:shadow-xl transition-all">
                Get Your Free Valuation
              </LinkButton>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-96 shadow-lg">
              <Image 
                src={valuationHome} 
                alt="Upscale Orlando suburban neighborhood" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="buyer-match" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden h-96 shadow-lg">
              <Image 
                src={interiorHome} 
                alt="Modern family home interior with open floor plan" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <Home className="h-10 w-10 text-primary" />
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">MoveMatch</h2>
              </div>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Let me find your perfect Orlando property! Share your dream home criteria, 
                and I&apos;ll connect you with listings that match your vision and budget.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl mt-0.5">✓</span>
                  <span className="text-slate-700">Personalized property recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl mt-0.5">✓</span>
                  <span className="text-slate-700">Access to exclusive off-market listings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl mt-0.5">✓</span>
                  <span className="text-slate-700">Expert guidance throughout your search</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl mt-0.5">✓</span>
                  <span className="text-slate-700">Priority alerts for new matches</span>
                </li>
              </ul>
              <LinkButton href="/buyer-match" size="lg" className="shadow-lg hover:shadow-xl transition-all">
                Start Your Search
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-black to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-secondary/20 rounded-full border border-secondary">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Free Educational Resource</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              The Ultimate Home Selling Guide
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Everything you need to sell your Orlando home for maximum profit — from preparation to closing day. 
              Expert strategies that get results.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-10 text-left">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-3">
                  <DollarSign className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-bold mb-2">Pricing Strategy</h3>
                <p className="text-white/80 text-sm">Learn how to price for maximum profit and fastest sale</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-3">
                  <Camera className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-bold mb-2">Marketing That Works</h3>
                <p className="text-white/80 text-sm">Professional photography, staging tips, and multi-channel promotion</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-3">
                  <Handshake className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-bold mb-2">Negotiation Tactics</h3>
                <p className="text-white/80 text-sm">How to handle offers and maximize your net proceeds</p>
              </div>
            </div>
            <LinkButton 
              href="/selling-guide" 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-black px-12 py-5 text-lg font-bold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Read the Selling Guide
            </LinkButton>
            <p className="mt-6 text-white/70 text-sm">No email required • 100% free • Expert advice from Laura Norman</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-taupe to-stone-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-secondary/20 rounded-full border border-secondary">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Free Educational Resource</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              The Ultimate Property Buying Guide
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Everything you need to buy with confidence — from first tour to closing day. 
              Learn the insider secrets to navigating Orlando&apos;s real estate market.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-10 text-left">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-3">
                  <BarChart3 className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-bold mb-2">Financial Planning</h3>
                <p className="text-white/80 text-sm">Budget calculators, mortgage options, and down payment strategies</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-3">
                  <Building className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-bold mb-2">Orlando Neighborhoods</h3>
                <p className="text-white/80 text-sm">Expert insights on Winter Park, Lake Nona, Windermere & more</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-bold mb-2">Step-by-Step Process</h3>
                <p className="text-white/80 text-sm">From pre-approval to closing, avoid costly mistakes</p>
              </div>
            </div>
            <LinkButton 
              href="/buying-guide" 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-black px-12 py-5 text-lg font-bold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Read the Complete Guide
            </LinkButton>
            <p className="mt-6 text-white/70 text-sm">No email required • 100% free • Expert advice from Laura Norman</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/30">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Orlando Market Insights</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight text-primary">
              Real Estate Blog & Market Updates
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Stay informed with expert market analysis, neighborhood guides, buying & selling tips, and local Orlando real estate insights.
            </p>
            <LinkButton 
              href="/blog" 
              size="lg" 
              className="bg-primary hover:bg-secondary text-white px-12 py-5 text-lg font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Visit the Blog
            </LinkButton>
            <p className="mt-6 text-slate-500 text-sm">Fresh insights • Local expertise • Market trends</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/images/laura-headshot.png" 
                    alt="Laura Norman - Orlando Real Estate Professional" 
                    width={500}
                    height={600}
                    className="object-cover w-full"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                  Meet Laura Norman
                </h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  With years of experience serving Orlando&apos;s real estate market, I combine deep local knowledge 
                  with a genuine commitment to helping families find their perfect home or maximize their property value.
                </p>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Whether you&apos;re a first-time buyer, seasoned investor, or looking to sell, 
                  I provide personalized service that puts your goals first. I believe in building lasting 
                  relationships, not just closing transactions.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-slate-700">Wemert Group Realty Professional</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-slate-700">Orlando Market Expert</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-slate-700">Dedicated to Client Success</span>
                  </div>
                </div>
                <p className="text-base text-slate-600 italic border-l-4 border-secondary pl-4">
                  &quot;My mission is simple: help you make confident real estate decisions backed by expert 
                  guidance and genuine care for your family&apos;s future.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-12 mt-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <span className="text-2xl font-serif font-bold text-primary">Laura Norman</span>
          </div>
          <p className="text-slate-600 mb-1">Your Trusted Real Estate Partner in Orlando, Florida</p>
          <p className="text-sm text-slate-500 mb-4">Wemert Group Realty</p>
          <div className="flex justify-center gap-6 mb-4">
            <Link href="/privacy" className="text-sm text-slate-500 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
          <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} Laura Norman. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
