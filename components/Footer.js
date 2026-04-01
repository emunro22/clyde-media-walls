'use client'
export default function Footer() {
  const year = new Date().getFullYear()

  const links = {
    Services: ['Fireplace Media Walls', 'TV & AV Integration', 'Custom Joinery', 'Mood Lighting', 'Tiling & Cladding', 'Full Room Transformation'],
    Company: ['Our Work', 'Why Choose Us', 'Our Process', 'Testimonials', 'Contact Us', 'Free Quote'],
    'Service Areas': ['Glasgow City', 'East Renfrewshire', 'Renfrewshire', 'East Dunbartonshire', 'South Lanarkshire', 'Edinburgh & Central'],
  }

  return (
    <footer style={{ background: '#060e1c', borderTop: '1px solid rgba(201,168,76,0.15)', padding: '72px 24px 32px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Main footer grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '56px' }}>

          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '46px', height: '46px', borderRadius: '50%', border: '2px solid rgba(201,168,76,0.4)', overflow: 'hidden' }}>
                <img src="/logo.jpg" alt="Clyde Media Walls" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.2rem', letterSpacing: '0.07em', color: '#f8f5ef', lineHeight: 1 }}>Clyde Media Walls</div>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.6rem', letterSpacing: '0.22em', color: '#c9a84c', textTransform: 'uppercase', marginTop: '2px' }}>Scotland</div>
              </div>
            </div>
            <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.88rem', color: 'rgba(248,245,239,0.45)', lineHeight: 1.8, fontWeight: 300, marginBottom: '24px' }}>
              Glasgow's premier media wall specialists. Bespoke installations crafted for Scottish homes since 2024.
            </p>

            {/* Phone */}
            <a href="tel:+441410000000" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)',
              padding: '12px 20px', textDecoration: 'none', transition: 'all 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(201,168,76,0.18)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(201,168,76,0.1)'}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.02 2.22 2 2 0 012 .04h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em', color: '#c9a84c' }}>0141 000 0000</span>
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.1rem', letterSpacing: '0.1em', color: '#f8f5ef', marginBottom: '16px' }}>{title}</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {items.map(item => (
                  <li key={item}>
                    <button onClick={() => {
                      const map = { 'Our Work': '#gallery', 'Why Choose Us': '#why-us', 'Our Process': '#process', 'Testimonials': '#testimonials', 'Contact Us': '#contact', 'Free Quote': '#contact' }
                      const href = map[item] || '#services'
                      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
                    }} style={{
                      background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                      fontFamily: 'Barlow, sans-serif', fontSize: '0.87rem', color: 'rgba(248,245,239,0.45)',
                      transition: 'color 0.2s', textAlign: 'left', fontWeight: 300,
                    }}
                      onMouseEnter={e => e.currentTarget.style.color = '#e2c47a'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(248,245,239,0.45)'}>
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(201,168,76,0.1)', paddingTop: '28px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
          <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.8rem', color: 'rgba(248,245,239,0.3)', fontWeight: 300 }}>
            © {year} Clyde Media Walls. All rights reserved. Glasgow, Scotland.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <button key={item} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'Barlow, sans-serif', fontSize: '0.78rem', color: 'rgba(248,245,239,0.3)',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#c9a84c'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(248,245,239,0.3)'}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
