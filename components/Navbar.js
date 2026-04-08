'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const navLinks = [
  { label: 'Services',     href: '#services' },
  { label: 'Our Work',     href: '#gallery' },
  { label: 'Why Us',       href: '#why-us' },
  { label: 'Process',      href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const onScroll    = () => setScrolled(window.scrollY > 40)
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', checkMobile)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  const CYAN  = '#00c8f0'
  const CYAN2 = '#5de0f5'

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'all 0.4s ease',
        background: (scrolled || isMobile) ? 'rgba(8,15,28,0.97)' : 'transparent',
        borderBottom: (scrolled || isMobile) ? `1px solid rgba(0,200,240,0.2)` : 'none',
        backdropFilter: (scrolled || isMobile) ? 'blur(16px)' : 'none',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            height: isMobile ? '64px' : scrolled ? '68px' : '88px',
            transition: 'height 0.4s ease',
          }}>

            {/* Logo */}
              <a
                href="#"
                onClick={e => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                <div style={{ width: '70px', flexShrink: 0 }}>
                  <Image
                    src="/logo.png" // 👈 change to .svg if you have it
                    alt="Clyde Media Walls"
                    width={140}   // 👈 2x for retina
                    height={140}
                    priority
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
                    fontSize: '1.8rem',
                    letterSpacing: '0.07em',
                    color: '#e8f4fa',
                    lineHeight: 1
                  }}>
                    Clyde Media Walls
                  </div>

                  <div style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontSize: '0.7rem',
                    letterSpacing: '0.22em',
                    color: CYAN,
                    textTransform: 'uppercase',
                    lineHeight: 1,
                    marginTop: '4px'
                  }}>
                    Scotland · Established 2026
                  </div>
                </div>
              </a>

            {/* Desktop links */}
            {!isMobile && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
                {navLinks.map(link => (
                  <button key={link.href} onClick={() => handleNav(link.href)} style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600,
                    fontSize: '0.82rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: link.label === 'Contact' ? CYAN : 'rgba(232,244,250,0.75)',
                    transition: 'color 0.2s', padding: '4px 0',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = CYAN2}
                    onMouseLeave={e => e.currentTarget.style.color = link.label === 'Contact' ? CYAN : 'rgba(232,244,250,0.75)'}>
                    {link.label}
                  </button>
                ))}
                <a href="tel:+441410000000" style={{
                  background: `linear-gradient(135deg, ${CYAN} 0%, ${CYAN2} 100%)`,
                  color: '#080f1c', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                  fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '10px 20px', textDecoration: 'none',
                  display: 'flex', alignItems: 'center', gap: '7px',
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.02 2.22 2 2 0 012 .04h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  0141 000 0000
                </a>
              </div>
            )}

            {/* Hamburger */}
            {isMobile && (
              <button onClick={() => setOpen(!open)} style={{
                background: 'none', border: 'none', cursor: 'pointer', padding: '8px',
                display: 'flex', flexDirection: 'column', gap: '5px', zIndex: 101,
              }} aria-label="Toggle menu">
                {[0, 1, 2].map(i => (
                  <span key={i} style={{
                    display: 'block', width: '26px', height: '2px', background: CYAN,
                    transition: 'all 0.3s',
                    transform: i === 0 && open ? 'rotate(45deg) translate(5px, 5px)' :
                               i === 2 && open ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                    opacity: i === 1 && open ? 0 : 1,
                  }} />
                ))}
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {isMobile && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(8,15,28,0.98)', zIndex: 99,
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px',
          backdropFilter: 'blur(20px)',
        }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, transparent, ${CYAN}, transparent)` }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, transparent, ${CYAN}, transparent)` }} />
          <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.7rem', letterSpacing: '0.3em', color: `rgba(0,200,240,0.45)`, marginBottom: '8px', textTransform: 'uppercase' }}>Navigation</div>
          {navLinks.map((link, i) => (
            <button key={link.href} onClick={() => handleNav(link.href)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'Bebas Neue, sans-serif', fontSize: '2.6rem', letterSpacing: '0.08em',
              color: '#e8f4fa', transition: `opacity 0.3s ${i * 50}ms ease, transform 0.3s ${i * 50}ms ease, color 0.2s`,
              opacity: open ? 1 : 0, transform: open ? 'translateY(0)' : 'translateY(20px)', padding: '2px 0',
            }}
              onMouseEnter={e => e.currentTarget.style.color = CYAN2}
              onMouseLeave={e => e.currentTarget.style.color = '#e8f4fa'}>
              {link.label}
            </button>
          ))}
          <a href="tel:+441410000000" style={{
            marginTop: '20px',
            background: `linear-gradient(135deg, ${CYAN}, ${CYAN2})`,
            color: '#080f1c', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
            fontSize: '1.1rem', letterSpacing: '0.12em', textTransform: 'uppercase',
            padding: '16px 44px', textDecoration: 'none',
          }}>📞 0141 000 0000</a>
        </div>
      )}
    </>
  )
}