'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { trackConversion, getUTMParams } from '@/lib/analytics'

export default function FreeValuationGuide() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Track conversion with specific event type
    trackConversion('ValuationLead', {
      content_name: 'Free Valuation Guide',
      content_category: 'Lead Magnet',
      value: 1
    })

    try {
      // Get UTM parameters from URL
      const utmParams = getUTMParams()

      // Submit to your lead API
      const response = await fetch('/api/valuation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          full_name: formData.name,
          city: 'Orlando',
          state: 'FL',
          zip_code: '00000',
          property_type: 'Single Family',
          bedrooms: 0,
          bathrooms: 0,
          square_feet: 0,
          additional_info: 'Lead Magnet: Free Valuation Guide Download',
          ...utmParams
        })
      })

      if (response.ok) {
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4">
        <div className="max-w-2xl text-center">
          <div className="text-6xl mb-6">✅</div>
          <h1 className="text-4xl font-serif font-bold text-black mb-4">Check Your Email!</h1>
          <p className="text-xl text-slate-600 mb-8">
            Your FREE Home Valuation Guide has been sent to <strong>{formData.email}</strong>
          </p>
          <p className="text-slate-600 mb-8 leading-relaxed">
            I'll also be reaching out personally within 24 hours to provide you with a custom market analysis for your property.
          </p>
          <Link
            href="/"
            className="inline-block bg-secondary hover:bg-secondary/90 text-black px-8 py-3 rounded-lg font-semibold shadow-lg transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-taupe text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Image 
              src="/images/logo.png" 
              alt="LN Real Estate Logo" 
              width={100} 
              height={100} 
              className="object-contain"
            />
          </div>
          <p className="text-secondary text-sm uppercase tracking-wider mb-4 font-medium">Laura Norman • Wemert Group Realty</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">
            FREE: The Ultimate Orlando Home Valuation Guide
          </h1>
          <p className="text-xl text-slate-200">
            Learn the insider secrets to accurately pricing your home for maximum profit
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - What's Inside */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6 text-black">
              What You'll Learn:
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <span className="text-secondary mr-3 text-2xl">📊</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-black">How to Price Your Home Right</h3>
                  <p className="text-slate-600">The 3 factors that determine your home's true market value</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-secondary mr-3 text-2xl">💎</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-black">Hidden Value Boosters</h3>
                  <p className="text-slate-600">Simple upgrades that can add $10K-$50K to your sale price</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-secondary mr-3 text-2xl">📍</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-black">Orlando Market Insights</h3>
                  <p className="text-slate-600">Current trends and what buyers are looking for right now</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-secondary mr-3 text-2xl">⏰</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-black">Best Time to Sell</h3>
                  <p className="text-slate-600">Timing strategies to maximize your profit</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-secondary mr-3 text-2xl">🎯</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-black">Common Pricing Mistakes</h3>
                  <p className="text-slate-600">Avoid the errors that cost sellers thousands</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 border-2 border-secondary/30">
              <p className="font-semibold text-lg mb-2 text-black">BONUS:</p>
              <p className="text-slate-700 leading-relaxed">
                Get a personalized market analysis of your property from Laura Norman, including comparable sales in your neighborhood!
              </p>
            </div>

            {/* About Laura */}
            <div className="mt-8 flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm border border-slate-200">
              <div className="flex-shrink-0">
                <Image 
                  src="/images/laura-headshot.png" 
                  alt="Laura Norman" 
                  width={80}
                  height={96}
                  className="rounded-lg"
                />
              </div>
              <div>
                <p className="font-semibold text-black">Laura Norman</p>
                <p className="text-sm text-slate-600">Wemert Group Realty</p>
                <p className="text-xs text-slate-500 mt-1">Orlando Market Expert</p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <div className="bg-white rounded-xl shadow-xl p-8 border border-slate-200/60">
              <h2 className="text-2xl font-bold mb-6 text-center text-black">
                Download Your FREE Guide
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Property Address (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="For your personalized market analysis"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary hover:bg-secondary/90 disabled:bg-slate-400 text-black py-3 rounded-lg font-semibold text-lg transition shadow-lg"
                >
                  {isSubmitting ? 'Sending...' : 'Get My FREE Guide Now'}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  We respect your privacy. Your information will never be shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
