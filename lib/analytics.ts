// Analytics tracking helper

type ConversionEvent = 'ValuationLead' | 'BuyerLead' | 'LeadIntent' | 'Lead'

export function trackConversion(
  eventName: ConversionEvent,
  data?: Record<string, any>
) {
  // Track Google Ads conversion
  if (typeof window !== 'undefined' && (window as any).gtag) {
    // Get the appropriate Google Ads conversion ID based on event type
    let adsConversionId = null
    
    if (eventName === 'ValuationLead') {
      adsConversionId = process.env.NEXT_PUBLIC_GADS_VALUATION_CONVERSION
    } else if (eventName === 'BuyerLead') {
      adsConversionId = process.env.NEXT_PUBLIC_GADS_BUYER_CONVERSION
    }
    
    if (adsConversionId) {
      // Fire Google Ads conversion with proper conversion ID
      (window as any).gtag('event', 'conversion', {
        ...data,
        send_to: adsConversionId,
        event_category: 'Conversion'
      })
    }
    
    // Also track in GA4 for analytics
    const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    if (gaId) {
      (window as any).gtag('event', eventName, {
        ...data,
        event_category: 'Conversion'
      })
    }
  }
  
  // Track Facebook Pixel event with specific event names
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, data)
  }
}

export function getUTMParams(): Record<string, string | null> {
  if (typeof window === 'undefined') return {}
  
  const params = new URLSearchParams(window.location.search)
  
  // Return null for missing params instead of empty strings
  // This allows downstream code to apply defaults only when needed
  return {
    utm_source: params.get('utm_source'),
    utm_medium: params.get('utm_medium'),
    utm_campaign: params.get('utm_campaign'),
    utm_term: params.get('utm_term'),
    utm_content: params.get('utm_content')
  }
}
