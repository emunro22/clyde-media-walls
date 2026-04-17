'use client'
import { useEffect, useState } from 'react'

const CYAN  = '#00c8f0'
const CYAN2 = '#5de0f5'

export default function WhyUs() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const reasons = [
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
      title: 'Bespoke Design',
      desc: 'No off-the-shelf solutions. Every media wall is designed from scratch around your room, your TV, and your lifestyle.',
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
      title: 'Fast Turnaround',
      desc: 'Most installations completed in 1–3 days. We respect your home and your time, leaving no mess behind.',
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
      title: 'Local Glasgow Team',
      desc: 'A tight-knit team of experienced tradespeople, all based in Glasgow. No subcontractors, no strangers — just trusted professionals.',
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
      title: 'Transparent Pricing',
      desc: 'Detailed quotes with no hidden surprises. We discuss your budget upfront and find the best solution within it.',
    },
  ]

  const stats = [
    { num: '3 days', label: 'Avg Install Time' },
    { num: '100%',   label: 'Reliable' },
  ]

  return (
    <section id="why-us" style={{
      background: 'linear-gradient(135deg, #112240 0%, #0d1b2e 50%, #112240 100%)',
      padding: isMobile ? '70px 20px' : '100px 24px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Subtle diagonal grid */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.025, backgroundImage: 'repeating-linear-gradient(45deg, #00c8f0 0, #00c8f0 1px, transparent 0, transparent 60px), repeating-linear-gradient(-45deg, #00c8f0 0, #00c8f0 1px, transparent 0, transparent 60px)' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Top section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '40px' : '80px',
          alignItems: 'center',
          marginBottom: isMobile ? '48px' : '80px',
        }}>
          {/* Left — heading + copy */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '1px', background: CYAN }} />
              <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: CYAN }}>Why Choose Us</span>
            </div>
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', letterSpacing: '0.04em', color: '#e8f4fa', lineHeight: 0.95, marginBottom: '24px' }}>
              Glasgow's Most<br />
              <span style={{ background: `linear-gradient(135deg, ${CYAN2}, ${CYAN})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Trusted</span><br />
              Media Wall Fitters
            </h2>
            <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '1rem', color: 'rgba(232,244,250,0.6)', lineHeight: 1.8, fontWeight: 300 }}>
              We've transformed hundreds of living spaces across Greater Glasgow and beyond. Every project gets the same obsessive attention to detail — whether it's a modest alcove unit or a full-room showstopper.
            </p>
            <div style={{ marginTop: '28px', padding: '20px 24px', background: 'rgba(0,200,240,0.06)', borderLeft: `3px solid ${CYAN}` }}>
              <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.97rem', color: 'rgba(232,244,250,0.85)', lineHeight: 1.7, fontStyle: 'italic' }}>
                "We don't just install media walls — we craft focal points that become the centrepiece of your home."
              </p>
              <div style={{ marginTop: '10px', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.72rem', letterSpacing: '0.18em', color: CYAN, textTransform: 'uppercase' }}>— Clyde Media Walls</div>
            </div>
          </div>

          {/* Right — stats grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', background: 'rgba(0,200,240,0.15)', width: '100%' }}>
            {stats.map(s => (
              <div key={s.label} style={{ background: '#0d1b2e', padding: isMobile ? '28px 16px' : '36px 28px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: isMobile ? '2.2rem' : '3rem', letterSpacing: '0.03em', background: `linear-gradient(135deg, ${CYAN2}, ${CYAN})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.68rem', letterSpacing: '0.16em', color: 'rgba(232,244,250,0.5)', textTransform: 'uppercase', marginTop: '8px', lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Reasons grid */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(290px, 1fr))', gap: '16px' }}>
          {reasons.map((r, i) => (
            <div key={i} style={{
              padding: '28px',
              background: 'rgba(232,244,250,0.03)',
              border: '1px solid rgba(0,200,240,0.12)',
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,200,240,0.05)'; e.currentTarget.style.borderColor = 'rgba(0,200,240,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(232,244,250,0.03)'; e.currentTarget.style.borderColor = 'rgba(0,200,240,0.12)'; e.currentTarget.style.transform = 'translateY(0)' }}>
              <div style={{ color: CYAN, marginBottom: '14px' }}>{r.icon}</div>
              <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.4rem', letterSpacing: '0.06em', color: '#e8f4fa', marginBottom: '8px' }}>{r.title}</h3>
              <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.9rem', color: 'rgba(232,244,250,0.6)', lineHeight: 1.7, fontWeight: 300 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}