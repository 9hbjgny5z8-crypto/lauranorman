'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { trackConversion, getUTMParams } from '@/lib/analytics'

export default function OrlandoSellersLanding() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleGetValuation = () => {
    // Track conversion event
    trackConversion('LeadIntent', {
      content_name: 'Orlando Sellers Landing',
      content_category: 'Valuation Request',
      value: 1
    })

    // Preserve UTM parameters when routing to valuation form
    const utmParams = getUTMParams()
    const queryParams = new URLSearchParams()
    
    // Add UTM params from URL, or use defaults if not present
    queryParams.set('utm_source', utmParams.utm_source || 'landing')
    queryParams.set('utm_campaign', utmParams.utm_campaign || 'orlando-sellers')
    if (utmParams.utm_medium) queryParams.set('utm_medium', utmParams.utm_medium)
    if (utmParams.utm_term) queryParams.set('utm_term', utmParams.utm_term)
    if (utmParams.utm_content) queryParams.set('utm_content', utmParams.utm_content)

    router.push(`/valuation?${queryParams.toString()}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-taupe text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Image 
                src="/images/logo.png" 
                alt="LN Real Estate Logo" 
                width={120} 
                height={120} 
                className="object-contain"
              />
            </div>
            <p className="text-secondary text-sm uppercase tracking-wider mb-4 font-medium">Laura Norman • Wemert Group Realty</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              What's Your Orlando Home Worth in 2024?
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              Get a FREE professional home valuation
            </p>
            <p className="text-lg mb-10 text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Orlando's real estate market is hot! Find out your home's true value with a personalized market analysis from an expert who knows Orlando inside and out.
            </p>
            <button
              onClick={handleGetValuation}
              className="bg-secondary hover:bg-secondary/90 text-black px-10 py-4 rounded-lg text-lg font-semibold shadow-lg transform transition hover:scale-105"
            >
              Get My FREE Home Valuation
            </button>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-serif font-bold text-black text-center mb-12">
          Why Sell with Me?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-5xl mb-4">🏡</div>
            <h3 className="text-xl font-semibold mb-3 text-black">Orlando Expert</h3>
            <p className="text-slate-600 leading-relaxed">
              Deep knowledge of Orlando neighborhoods, schools, and market trends
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-3 text-black">Maximum Value</h3>
            <p className="text-slate-600 leading-relaxed">
              Strategic pricing and marketing to get you top dollar for your home
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-3 text-black">Fast Results</h3>
            <p className="text-slate-600 leading-relaxed">
              Proven track record of quick sales with professional photography and staging advice
            </p>
          </div>
        </div>

        {/* Social Proof */}
        <div className="bg-slate-50 rounded-xl p-8 mb-16 border border-slate-200/60">
          <h3 className="text-2xl font-serif font-bold text-black text-center mb-8">
            Recent Orlando Sales Success
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
              <p className="text-3xl font-bold text-secondary mb-2">$487K</p>
              <p className="text-sm text-slate-700 font-medium">Winter Park home</p>
              <p className="text-xs text-slate-500 mt-2">Sold in 8 days</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
              <p className="text-3xl font-bold text-secondary mb-2">$625K</p>
              <p className="text-sm text-slate-700 font-medium">Lake Nona property</p>
              <p className="text-xs text-slate-500 mt-2">Sold in 5 days</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
              <p className="text-3xl font-bold text-secondary mb-2">$385K</p>
              <p className="text-sm text-slate-700 font-medium">Oviedo family home</p>
              <p className="text-xs text-slate-500 mt-2">Sold in 12 days</p>
            </div>
          </div>
        </div>

        {/* About Laura Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16 border border-slate-200/60">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <Image 
                src="/images/laura-headshot.png" 
                alt="Laura Norman - Orlando Real Estate Expert" 
                width={300}
                height={360}
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-serif font-bold mb-4 text-black">
                Work with an Orlando Market Expert
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                I'm Laura Norman, and I've helped hundreds of Orlando homeowners maximize their property value. 
                My approach combines accurate market analysis with strategic pricing to get you the best possible return.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                With deep knowledge of Winter Park, Lake Nona, Oviedo, and surrounding areas, I know exactly 
                how to position your home to attract serious buyers quickly.
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>Wemert Group Realty Professional</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-taupe text-white rounded-xl p-12 shadow-lg">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Ready to Find Out What Your Home Is Worth?
          </h2>
          <p className="text-xl mb-8 text-slate-200">
            Get your FREE, no-obligation home valuation today
          </p>
          <button
            onClick={handleGetValuation}
            className="bg-secondary hover:bg-secondary/90 text-black px-10 py-4 rounded-lg text-lg font-semibold shadow-lg transform transition hover:scale-105"
          >
            Get My FREE Valuation Now
          </button>
          <p className="text-sm text-slate-300 mt-4">
            Takes less than 2 minutes • No credit card required
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-taupe text-white py-8 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-300">
            Laura Norman | Wemert Group Realty | Orlando, FL
          </p>
          <Link href="/" className="text-secondary hover:text-secondary/80 mt-2 inline-block font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
