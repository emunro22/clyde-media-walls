'use client'
export default function WhyUs() {
  const reasons = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: 'Bespoke Design',
      desc: 'No off-the-shelf solutions. Every media wall is designed from scratch around your room, your TV, and your lifestyle.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      title: 'Fast Turnaround',
      desc: 'Most installations completed in 1–3 days. We respect your home and your time, leaving no mess behind.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
      title: '10-Year Guarantee',
      desc: 'We stand behind our craftsmanship with an industry-leading 10-year structural guarantee on all installations.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
        </svg>
      ),
      title: 'Local Glasgow Team',
      desc: 'A tight-knit team of experienced tradespeople, all based in Glasgow. No subcontractors, no strangers — just trusted professionals.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/>
        </svg>
      ),
      title: 'All-Inclusive Service',
      desc: 'Electrics, carpentry, plastering, tiling and painting — we handle every trade under one roof so the result is seamless.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
        </svg>
      ),
      title: 'Transparent Pricing',
      desc: 'Detailed quotes with no hidden surprises. We discuss your budget upfront and find the best solution within it.',
    },
  ]

  return (
    <section id="why-us" style={{
      background: 'linear-gradient(135deg, #1a2744 0%, #0f1a2e 50%, #1a2744 100%)',
      padding: '100px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background pattern */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'repeating-linear-gradient(45deg, #c9a84c 0, #c9a84c 1px, transparent 0, transparent 60px), repeating-linear-gradient(-45deg, #c9a84c 0, #c9a84c 1px, transparent 0, transparent 60px)' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', marginBottom: '80px' }} className="lg:grid-cols-2 grid-cols-1">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '1px', background: '#c9a84c' }} />
              <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#c9a84c' }}>Why Choose Us</span>
            </div>
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', letterSpacing: '0.04em', color: '#f8f5ef', lineHeight: 0.95, marginBottom: '24px' }}>
              Glasgow's Most<br />
              <span style={{ background: 'linear-gradient(135deg, #e2c47a, #c9a84c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Trusted</span><br />
              Media Wall Fitters
            </h2>
            <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '1rem', color: 'rgba(248,245,239,0.6)', lineHeight: 1.8, fontWeight: 300, maxWidth: '420px' }}>
              We've transformed hundreds of living spaces across Greater Glasgow and beyond. Every project gets the same obsessive attention to detail — whether it's a modest alcove unit or a full-room showstopper.
            </p>
            <div style={{ marginTop: '32px', padding: '24px', background: 'rgba(201,168,76,0.08)', borderLeft: '3px solid #c9a84c' }}>
              <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '1rem', color: 'rgba(248,245,239,0.85)', lineHeight: 1.7, fontStyle: 'italic' }}>
                "We don't just install media walls — we craft focal points that become the centrepiece of your home."
              </p>
              <div style={{ marginTop: '12px', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.75rem', letterSpacing: '0.18em', color: '#c9a84c', textTransform: 'uppercase' }}>— Clyde Media Walls</div>
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', background: 'rgba(201,168,76,0.15)' }}>
            {[
              { num: '100+', label: 'Projects Completed' },
              { num: '5.0', label: 'Average Star Rating' },
              { num: '3', label: 'Days Avg Install Time' },
              { num: '10yr', label: 'Structural Guarantee' },
            ].map(s => (
              <div key={s.label} style={{ background: '#0f1a2e', padding: '36px 28px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '3rem', letterSpacing: '0.03em', background: 'linear-gradient(135deg, #e2c47a, #c9a84c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.72rem', letterSpacing: '0.2em', color: 'rgba(248,245,239,0.5)', textTransform: 'uppercase', marginTop: '8px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Reasons grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '24px' }}>
          {reasons.map((r, i) => (
            <div key={i} style={{
              padding: '32px', background: 'rgba(248,245,239,0.03)',
              border: '1px solid rgba(201,168,76,0.12)',
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.06)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(248,245,239,0.03)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.12)'; e.currentTarget.style.transform = 'translateY(0)' }}>
              <div style={{ color: '#c9a84c', marginBottom: '16px' }}>{r.icon}</div>
              <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.4rem', letterSpacing: '0.06em', color: '#f8f5ef', marginBottom: '10px' }}>{r.title}</h3>
              <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.9rem', color: 'rgba(248,245,239,0.6)', lineHeight: 1.7, fontWeight: 300 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
