'use client'

import Image from 'next/image'

const CYAN  = '#00c8f0'
const CYAN2 = '#5de0f5'

const links = {
  Services: ['Fireplace Media Walls', 'TV & AV Integration', 'Custom Joinery', 'Mood Lighting', 'Tiling & Cladding', 'Full Room Transformation'],
  Company: ['Our Work', 'Why Choose Us', 'Our Process', 'Testimonials', 'Contact Us', 'Free Quote'],
  'Service Areas': ['Glasgow City', 'East Renfrewshire', 'Renfrewshire', 'East Dunbartonshire', 'South Lanarkshire', 'Edinburgh & Central'],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      background: '#04090f',
      borderTop: `1px solid rgba(0,200,240,0.15)`,
      padding: '72px 24px 32px'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* GRID */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px',
          marginBottom: '56px'
        }}>

          {/* BRAND */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              marginBottom: '20px'
            }}>
              <div style={{ width: '70px', flexShrink: 0 }}>
                <Image
                  src="/logo.png" // 👈 use PNG or SVG
                  alt="Clyde Media Walls"
                  width={140}
                  height={140}
                  style={{
                    width: '70px',
                    height: 'auto',
                    display: 'block'
                  }}
                />
              </div>

              <div>
                <div style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '1.2rem',
                  letterSpacing: '0.07em',
                  color: '#e8f4fa',
                  lineHeight: 1
                }}>
                  Clyde Media Walls
                </div>

                <div style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: '0.6rem',
                  letterSpacing: '0.22em',
                  color: CYAN,
                  textTransform: 'uppercase',
                  marginTop: '2px'
                }}>
                  Scotland · Established 2026
                </div>
              </div>
            </div>

            <p style={{
              fontFamily: 'Barlow, sans-serif',
              fontSize: '0.88rem',
              color: 'rgba(232,244,250,0.45)',
              lineHeight: 1.8,
              fontWeight: 300,
              marginBottom: '24px'
            }}>
              Glasgow's premier media wall specialists. Bespoke installations crafted for Scottish homes since 2026.
            </p>

            {/* PHONE */}
            <a
              href="tel:+441410000000"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'rgba(0,200,240,0.08)',
                border: `1px solid rgba(0,200,240,0.2)`,
                padding: '12px 20px',
                textDecoration: 'none',
                transition: 'all 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,200,240,0.16)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,200,240,0.08)'}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={CYAN} strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.79 0 013.07 10.8 19.79 19.79 0 01.02 2.22 2 2 0 012 .04h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>

              <span style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontWeight: 700,
                fontSize: '0.9rem',
                letterSpacing: '0.1em',
                color: CYAN
              }}>
                0141 000 0000
              </span>
            </a>
          </div>

          {/* LINKS */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: '1.1rem',
                letterSpacing: '0.1em',
                color: '#e8f4fa',
                marginBottom: '16px'
              }}>
                {title}
              </h4>

              <ul style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}>
                {items.map(item => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        const map = {
                          'Our Work': '#gallery',
                          'Why Choose Us': '#why-us',
                          'Our Process': '#process',
                          'Testimonials': '#testimonials',
                          'Contact Us': '#contact',
                          'Free Quote': '#contact'
                        }
                        const href = map[item] || '#services'
                        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                        fontFamily: 'Barlow, sans-serif',
                        fontSize: '0.87rem',
                        color: 'rgba(232,244,250,0.45)',
                        transition: 'color 0.2s',
                        textAlign: 'left'
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = CYAN2}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(232,244,250,0.45)'}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM */}
        <div style={{
          borderTop: `1px solid rgba(0,200,240,0.1)`,
          paddingTop: '28px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px'
        }}>
          <p style={{
            fontFamily: 'Barlow, sans-serif',
            fontSize: '0.8rem',
            color: 'rgba(232,244,250,0.3)'
          }}>
            © {year} Clyde Media Walls. All rights reserved. Glasgow, Scotland.
          </p>

          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <button
                key={item}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'Barlow, sans-serif',
                  fontSize: '0.78rem',
                  color: 'rgba(232,244,250,0.3)'
                }}
                onMouseEnter={e => e.currentTarget.style.color = CYAN}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(232,244,250,0.3)'}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}