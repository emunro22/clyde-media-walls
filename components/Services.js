'use client'
export default function Services() {
  const services = [
    {
      icon: '🔥',
      title: 'Fireplace Media Walls',
      desc: 'Seamlessly integrated electric or bio-ethanol fireplaces within bespoke media wall frameworks. The perfect fusion of warmth and technology.',
      tags: ['Electric', 'Bio-Ethanol', 'Water Vapour'],
    },
    {
      icon: '📺',
      title: 'TV & AV Integration',
      desc: 'Flush-mounted televisions, full surround sound installation, streaming hubs and cable management — all hidden within your custom wall.',
      tags: ['4K/8K Mounting', 'Surround Sound', 'Cable Management'],
    },
    {
      icon: '🪵',
      title: 'Custom Joinery',
      desc: 'Handcrafted timber frameworks, bespoke shelving, alcove units and storage solutions designed around your space and style.',
      tags: ['MDF & Timber', 'Bespoke Design', 'Built-in Storage'],
    },
    {
      icon: '💡',
      title: 'Mood Lighting',
      desc: 'LED strip lighting, recessed spotlights, and colour-changing ambiance systems that transform the atmosphere of any room.',
      tags: ['LED Strips', 'Smart Controls', 'Colour Changing'],
    },
    {
      icon: '🎨',
      title: 'Tiling & Cladding',
      desc: 'Stone, marble-effect, and luxury tile finishes to complete the look. We source and install premium materials to match any interior.',
      tags: ['Stone Effect', 'Marble', 'Feature Panels'],
    },
    {
      icon: '🏠',
      title: 'Full Room Transformation',
      desc: 'From concept to completion — we handle design, electrics, plastering, painting and fitting so you don\'t have to lift a finger.',
      tags: ['Design Consultation', 'All Trades', 'Turnkey'],
    },
  ]

  return (
    <section id="services" style={{ background: 'linear-gradient(180deg, #0f1a2e 0%, #111e35 100%)', padding: '100px 24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '1px', background: '#c9a84c' }} />
            <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#c9a84c' }}>What We Offer</span>
            <div style={{ width: '40px', height: '1px', background: '#c9a84c' }} />
          </div>
          <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', letterSpacing: '0.04em', color: '#f8f5ef', lineHeight: 0.95, marginBottom: '20px' }}>
            Our Services
          </h2>
          <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '1.05rem', color: 'rgba(248,245,239,0.6)', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7, fontWeight: 300 }}>
            From design through to installation, we deliver complete media wall solutions tailored to your home and vision.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2px', background: 'rgba(201,168,76,0.1)' }}>
          {services.map((s, i) => (
            <div key={i} style={{
              background: '#0f1a2e',
              padding: '40px 36px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              cursor: 'default',
              borderBottom: '1px solid rgba(201,168,76,0.08)',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#13213a'; e.currentTarget.querySelector('.service-icon').style.transform = 'scale(1.1) rotate(5deg)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#0f1a2e'; e.currentTarget.querySelector('.service-icon').style.transform = 'scale(1) rotate(0deg)' }}>

              {/* Gold corner accent */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '40px', height: '40px', borderTop: '2px solid rgba(201,168,76,0.4)', borderLeft: '2px solid rgba(201,168,76,0.4)' }} />

              <div className="service-icon" style={{ fontSize: '2.2rem', marginBottom: '20px', display: 'inline-block', transition: 'transform 0.3s' }}>{s.icon}</div>
              <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.7rem', letterSpacing: '0.06em', color: '#f8f5ef', marginBottom: '12px', lineHeight: 1 }}>{s.title}</h3>
              <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.92rem', color: 'rgba(248,245,239,0.6)', lineHeight: 1.7, marginBottom: '20px', fontWeight: 300 }}>{s.desc}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {s.tags.map(tag => (
                  <span key={tag} style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600,
                    fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase',
                    color: '#c9a84c', padding: '4px 10px',
                    border: '1px solid rgba(201,168,76,0.3)',
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '56px' }}>
          <p style={{ fontFamily: 'Barlow, sans-serif', color: 'rgba(248,245,239,0.5)', marginBottom: '24px', fontSize: '0.95rem', fontStyle: 'italic' }}>Not sure which package suits you? We offer a free, no-obligation design consultation.</p>
          <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'linear-gradient(135deg, #c9a84c, #e2c47a)',
              color: '#0f1a2e', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
              fontSize: '0.92rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '15px 44px', border: 'none', cursor: 'pointer', transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(201,168,76,0.4)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
            Book a Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
