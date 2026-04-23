'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { trackConversion, getUTMParams } from '@/lib/analytics'

export default function OrlandoBuyersLanding() {
  const router = useRouter()

  const handleFindHomes = () => {
    // Track conversion event
    trackConversion('LeadIntent', {
      content_name: 'Orlando Buyers Landing',
      content_category: 'Buyer Match Request',
      value: 1
    })

    // Preserve UTM parameters when routing to buyer form
    const utmParams = getUTMParams()
    const queryParams = new URLSearchParams()
    
    // Add UTM params from URL, or use defaults if not present
    queryParams.set('utm_source', utmParams.utm_source || 'landing')
    queryParams.set('utm_campaign', utmParams.utm_campaign || 'orlando-buyers')
    if (utmParams.utm_medium) queryParams.set('utm_medium', utmParams.utm_medium)
    if (utmParams.utm_term) queryParams.set('utm_term', utmParams.utm_term)
    if (utmParams.utm_content) queryParams.set('utm_content', utmParams.utm_content)

    router.push(`/buyer-match?${queryParams.toString()}`)
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
              Find Your Perfect Orlando Home
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              Let me match you with homes that fit your lifestyle and budget
            </p>
            <p className="text-lg mb-10 text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Moving to Orlando? I'll help you discover the perfect neighborhood and home for your family - from Winter Park to Lake Nona and everywhere in between.
            </p>
            <button
              onClick={handleFindHomes}
              className="bg-secondary hover:bg-secondary/90 text-black px-10 py-4 rounded-lg text-lg font-semibold shadow-lg transform transition hover:scale-105"
            >
              Find My Dream Home
            </button>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-serif font-bold text-black text-center mb-12">
          Why Buy with Me?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-3 text-black">Perfect Matches</h3>
            <p className="text-slate-600 leading-relaxed">
              I'll find homes that match your exact needs - schools, commute, lifestyle, and budget
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-5xl mb-4">🗺️</div>
            <h3 className="text-xl font-semibold mb-3 text-black">Neighborhood Expert</h3>
            <p className="text-slate-600 leading-relaxed">
              Insider knowledge of Orlando's best neighborhoods, schools, and hidden gems
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-3 text-black">Smooth Process</h3>
            <p className="text-slate-600 leading-relaxed">
              From first showing to closing day, I'll guide you through every step
            </p>
          </div>
        </div>

        {/* Orlando Neighborhoods */}
        <div className="bg-slate-50 rounded-xl p-8 mb-16 border border-slate-200/60">
          <h3 className="text-2xl font-serif font-bold text-black text-center mb-8">
            Popular Orlando Neighborhoods
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
              <p className="font-semibold text-lg mb-2 text-black">Winter Park</p>
              <p className="text-sm text-slate-600">Tree-lined streets, great schools</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
              <p className="font-semibold text-lg mb-2 text-black">Lake Nona</p>
              <p className="text-sm text-slate-600">Modern, family-friendly</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
              <p className="font-semibold text-lg mb-2 text-black">Baldwin Park</p>
              <p className="text-sm text-slate-600">Urban living, walkable</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
              <p className="font-semibold text-lg mb-2 text-black">Windermere</p>
              <p className="text-sm text-slate-600">Luxury, waterfront homes</p>
            </div>
          </div>
        </div>

        {/* Buyer Benefits */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16 border border-slate-200/60">
          <h3 className="text-2xl font-serif font-bold mb-6 text-black">
            What You'll Get with MoveMatch™
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-secondary mr-3 text-xl">✓</span>
              <span className="text-slate-700">Personalized home recommendations based on your lifestyle and budget</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-3 text-xl">✓</span>
              <span className="text-slate-700">Early access to new listings before they hit the market</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-3 text-xl">✓</span>
              <span className="text-slate-700">Expert negotiation to get you the best price</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-3 text-xl">✓</span>
              <span className="text-slate-700">Comprehensive neighborhood tours and school district information</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-3 text-xl">✓</span>
              <span className="text-slate-700">Trusted lender and inspector recommendations</span>
            </li>
          </ul>
        </div>

        {/* About Laura Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16 border border-slate-200/60">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <Image 
                src="/images/laura-headshot.png" 
                alt="Laura Norman - Your Orlando Home Buyer Guide" 
                width={300}
                height={360}
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-serif font-bold mb-4 text-black">
                Your Partner in Finding the Perfect Home
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                I'm Laura Norman, and I specialize in helping families find their dream homes in Orlando's 
                best neighborhoods. From first-time buyers to growing families, I'll guide you through every step.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                My personalized approach means you'll see properties that truly match your needs, budget, and lifestyle. 
                Plus, my network gives you access to homes before they hit the market.
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
            Ready to Find Your Orlando Home?
          </h2>
          <p className="text-xl mb-8 text-slate-200">
            Tell me what you're looking for and I'll find your perfect match
          </p>
          <button
            onClick={handleFindHomes}
            className="bg-secondary hover:bg-secondary/90 text-black px-10 py-4 rounded-lg text-lg font-semibold shadow-lg transform transition hover:scale-105"
          >
            Start My Home Search
          </button>
          <p className="text-sm text-slate-300 mt-4">
            Takes less than 2 minutes • Free service for buyers
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
