'use client'
import { useEffect, useRef } from 'react'

const CYAN  = '#00c8f0'
const CYAN2 = '#5de0f5'

export default function Hero() {
  const headingRef = useRef(null)

  useEffect(() => {
    const el = headingRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(40px)'
    setTimeout(() => {
      el.style.transition = 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1)'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 200)
  }, [])

  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: '600px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>

      {/* Background image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1600&q=85&auto=format&fit=crop"
          alt="Modern living room with media wall"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        {/* Deep navy overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(8,15,28,0.95) 0%, rgba(13,27,46,0.85) 50%, rgba(8,15,28,0.65) 100%)' }} />
        {/* Cyan light leak at bottom */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(0deg, rgba(0,200,240,0.07) 0%, transparent 100%)' }} />
      </div>

      {/* Decorative vertical line */}
      <div style={{ position: 'absolute', left: '10%', top: '15%', bottom: '15%', width: '1px', background: `linear-gradient(180deg, transparent, rgba(0,200,240,0.4), transparent)`, zIndex: 1 }} className="hidden lg:block" />

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
        <div style={{ maxWidth: '720px' }} ref={headingRef}>

          {/* Eyebrow - Pushed down with marginTop */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '14px', 
            marginBottom: '24px',
            marginTop: '60px' // 👈 Added this to move it down
          }}>
            <div style={{ width: '40px', height: '1px', background: CYAN }} />
            <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: CYAN }}>
              Glasgow's Premier Media Wall Specialists
            </span>
          </div>

          {/* Heading */}
          <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(3.5rem, 8vw, 7rem)', lineHeight: 0.95, letterSpacing: '0.03em', marginBottom: '28px', color: '#e8f4fa' }}>
            Transform Your{' '}
            <span style={{ background: `linear-gradient(135deg, ${CYAN2} 0%, ${CYAN} 50%, #0099c0 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Living Space
            </span>
            <br />
            Into Something Extraordinary
          </h1>

          {/* Subheading */}
          <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontWeight: 300, lineHeight: 1.7, color: 'rgba(232,244,250,0.75)', maxWidth: '560px', marginBottom: '40px' }}>
            Bespoke media walls with integrated fireplaces, custom joinery and premium AV installations. Crafted for Scottish homes. Built to last a lifetime.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
            <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: `linear-gradient(135deg, ${CYAN} 0%, ${CYAN2} 50%, ${CYAN} 100%)`,
                backgroundSize: '200% auto',
                color: '#080f1c', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                fontSize: '0.95rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                padding: '16px 40px', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundPosition = 'right center'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,200,240,0.5)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}>
              Get a Free Quote
            </button>
            <button onClick={() => document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'transparent', color: '#e8f4fa',
                fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600,
                fontSize: '0.95rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                padding: '15px 40px', border: '1.5px solid rgba(232,244,250,0.3)', cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = CYAN; e.currentTarget.style.color = CYAN2 }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(232,244,250,0.3)'; e.currentTarget.style.color = '#e8f4fa' }}>
              View Our Work
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
        onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}>
        <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.65rem', letterSpacing: '0.2em', color: 'rgba(232,244,250,0.4)', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: '1px', height: '40px', background: `linear-gradient(180deg, rgba(0,200,240,0.6), transparent)`, animation: 'pulse 2s infinite' }} />
      </div>
    </section>
  )
}