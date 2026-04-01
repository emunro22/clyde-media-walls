'use client'
import { useState } from 'react'

const projects = [
  {
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80&auto=format&fit=crop',
    title: 'Contemporary Floating Wall',
    location: 'Bearsden, Glasgow',
    tags: ['TV Mount', 'LED Lighting', 'Custom Shelving'],
  },
  {
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80&auto=format&fit=crop',
    title: 'Fireplace Feature Wall',
    location: 'Newton Mearns, Glasgow',
    tags: ['Bio-Ethanol Fire', 'Stone Cladding', 'AV Integration'],
  },
  {
    img: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&q=80&auto=format&fit=crop',
    title: 'Minimalist Media Suite',
    location: 'Thornliebank, Glasgow',
    tags: ['4K Mount', 'Mood Lighting', 'Cable Concealment'],
  },
  {
    img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80&auto=format&fit=crop',
    title: 'Luxury Living Room Wall',
    location: 'Paisley, Renfrewshire',
    tags: ['Electric Fire', 'Marble Effect', 'Built-in Storage'],
  },
  {
    img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80&auto=format&fit=crop',
    title: 'Oak & Slate Feature Wall',
    location: 'Milngavie, East Dunbartonshire',
    tags: ['Natural Oak', 'Slate Panels', 'Integrated Speakers'],
  },
  {
    img: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80&auto=format&fit=crop',
    title: 'Industrial Loft Design',
    location: 'Finnieston, Glasgow',
    tags: ['Steel Accents', 'OLED Mount', 'Feature Lighting'],
  },
]

export default function Gallery() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="gallery" style={{ background: '#0a1320', padding: '100px 24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '1px', background: '#c9a84c' }} />
            <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#c9a84c' }}>Recent Projects</span>
            <div style={{ width: '40px', height: '1px', background: '#c9a84c' }} />
          </div>
          <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', letterSpacing: '0.04em', color: '#f8f5ef', lineHeight: 0.95, marginBottom: '20px' }}>
            Our Work
          </h2>
          <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '1.05rem', color: 'rgba(248,245,239,0.6)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7, fontWeight: 300 }}>
            Every installation is unique. Here are some of our recent transformations across Glasgow and Scotland.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '16px' }}>
          {projects.map((p, i) => (
            <div key={i}
              style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', aspectRatio: '4/3' }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}>

              <img src={p.img} alt={p.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1)', transform: hovered === i ? 'scale(1.08)' : 'scale(1)' }} />

              {/* Overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: hovered === i ? 'linear-gradient(0deg, rgba(9,15,28,0.92) 0%, rgba(9,15,28,0.3) 100%)' : 'linear-gradient(0deg, rgba(9,15,28,0.7) 0%, transparent 60%)',
                transition: 'all 0.4s ease',
              }} />

              {/* Gold corner */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: '36px', height: '36px', borderTop: '2px solid rgba(201,168,76,0.6)', borderRight: '2px solid rgba(201,168,76,0.6)', transition: 'all 0.3s', opacity: hovered === i ? 1 : 0.4 }} />

              {/* Info */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px', transform: hovered === i ? 'translateY(0)' : 'translateY(8px)', transition: 'transform 0.4s ease' }}>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.7rem', letterSpacing: '0.2em', color: '#c9a84c', textTransform: 'uppercase', marginBottom: '6px' }}>
                  📍 {p.location}
                </div>
                <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.5rem', letterSpacing: '0.05em', color: '#f8f5ef', marginBottom: '10px', lineHeight: 1 }}>{p.title}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', opacity: hovered === i ? 1 : 0, transition: 'opacity 0.3s 0.1s' }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#e2c47a', background: 'rgba(201,168,76,0.15)', padding: '3px 8px', border: '1px solid rgba(201,168,76,0.2)' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <p style={{ fontFamily: 'Barlow, sans-serif', color: 'rgba(248,245,239,0.45)', fontSize: '0.9rem', fontStyle: 'italic' }}>
            More photos available — just ask during your free consultation.
          </p>
        </div>
      </div>
    </section>
  )
}
