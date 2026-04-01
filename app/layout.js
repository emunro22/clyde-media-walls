import './globals.css'

export const metadata = {
  title: 'Clyde Media Walls | Premium Media Wall Installation Glasgow & Scotland',
  description: "Glasgow's leading media wall specialists. Bespoke media walls with integrated fireplaces, custom joinery, and AV installation. Serving Glasgow, Paisley, Edinburgh and all of Scotland. Free quotes available.",
  keywords: 'media walls Glasgow, media wall installation Scotland, bespoke media walls, fireplace media wall, TV wall installation Glasgow, media wall company Scotland, feature wall Glasgow',
  openGraph: {
    title: 'Clyde Media Walls | Premium Media Wall Installation Glasgow',
    description: "Glasgow's leading media wall specialists. Bespoke media walls with integrated fireplaces and AV solutions across Scotland.",
    type: 'website',
    locale: 'en_GB',
    siteName: 'Clyde Media Walls',
    url: 'https://clydemediawalls.co.uk',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Clyde Media Walls | Glasgow's Media Wall Specialists",
    description: 'Premium bespoke media walls with integrated fireplaces, serving Glasgow & Scotland.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://clydemediawalls.co.uk' },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Barlow+Condensed:wght@400;600;700&display=swap" rel="stylesheet" />
        <meta name="geo.region" content="GB-SCT" />
        <meta name="geo.placename" content="Glasgow" />
        <meta name="theme-color" content="#0f1a2e" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Clyde Media Walls",
              "description": "Premium bespoke media wall installation specialists serving Glasgow and Scotland",
              "url": "https://clydemediawalls.co.uk",
              "telephone": "+44-141-000-0000",
              "email": "hello@clydemediawalls.co.uk",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Glasgow",
                "addressRegion": "Scotland",
                "addressCountry": "GB"
              },
              "areaServed": ["Glasgow", "Edinburgh", "Paisley", "Renfrewshire", "East Renfrewshire", "East Dunbartonshire", "South Lanarkshire", "Scotland"],
              "serviceType": ["Media Wall Installation", "Fireplace Integration", "AV Installation", "Custom Joinery", "Mood Lighting", "Tiling and Cladding"],
              "priceRange": "££-£££",
              "openingHours": "Mo-Sa 08:00-18:00",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "100"
              }
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
