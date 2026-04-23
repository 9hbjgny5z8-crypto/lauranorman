'use client'

import Script from 'next/script'

export default function TrackingScripts() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const gadsValuationId = process.env.NEXT_PUBLIC_GADS_VALUATION_CONVERSION
  const gadsBuyerId = process.env.NEXT_PUBLIC_GADS_BUYER_CONVERSION
  
  // Extract AW account ID from conversion strings (format: AW-XXXXX/YYYY)
  const getAWAccountId = (conversionId?: string) => {
    if (!conversionId) return null
    const match = conversionId.match(/^(AW-\d+)/)
    return match ? match[1] : null
  }
  
  const awAccountId = getAWAccountId(gadsValuationId) || getAWAccountId(gadsBuyerId)
  
  return (
    <>
      {/* Google Ads Global Site Tag (if conversion IDs are set) */}
      {awAccountId && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${awAccountId}`}
          />
          <Script
            id="google-ads"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${awAccountId}');
              `,
            }}
          />
        </>
      )}
      
      {/* Google Analytics */}
      {gaId && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}

      {/* Facebook Pixel */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID || 'YOUR_PIXEL_ID'}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FB_PIXEL_ID || 'YOUR_PIXEL_ID'}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  )
}
