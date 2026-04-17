'use client'

const CYAN  = '#00c8f0'
const CYAN2 = '#5de0f5'

const reviews = [
  {
    name: 'James & Sarah Mitchell', location: 'Bearsden, Glasgow', rating: 5,
    text: 'Absolutely blown away by the finished result. From the initial consultation to the final walkthrough, the team were professional, tidy and incredibly skilled. Our new media wall with the bio-ethanol fire is the envy of all our friends.',
    project: 'Fireplace Media Wall',
  },
  {
    name: 'Craig Thomson', location: 'Newton Mearns', rating: 5,
    text: 'Called on a Monday, had a quote by Wednesday, installation done by Friday. The guys were on time, polite, and left the house spotless. The LED lighting they suggested makes such a difference in the evening. Couldn\'t recommend them more.',
    project: 'TV Wall with LED Lighting',
  },
  {
    name: 'Fiona & David Park', location: 'Paisley, Renfrewshire', rating: 5,
    text: 'We had a very specific vision for our lounge and they delivered exactly what we wanted and more. The stone cladding detail is stunning. Top-quality finish, competitive pricing, and a team that genuinely cares about the result.',
    project: 'Stone Cladding Feature Wall',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: 'linear-gradient(180deg, #0f1f35 0%, #0d1b2e 100%)', padding: '100px 24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '1px', background: CYAN }} />
            <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: CYAN }}>Customer Reviews</span>
            <div style={{ width: '40px', height: '1px', background: CYAN }} />
          </div>
          <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', letterSpacing: '0.04em', color: '#e8f4fa', lineHeight: 0.95, marginBottom: '20px' }}>
            What Our Clients Say
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '16px' }}>
            <div style={{ display: 'flex', gap: '4px' }}>
              {[1,2,3,4,5].map(s => <span key={s} style={{ color: CYAN, fontSize: '1.4rem' }}>★</span>)}
            </div>
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.6rem', color: CYAN2, letterSpacing: '0.05em' }}>5.0</span>
            <span style={{ fontFamily: 'Barlow, sans-serif', color: 'rgba(232,244,250,0.5)', fontSize: '0.9rem' }}>from 100+ reviews</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          {reviews.map((r, i) => (
            <div key={i} style={{
              padding: '32px',
              background: 'rgba(232,244,250,0.03)',
              border: '1px solid rgba(0,200,240,0.1)',
              position: 'relative', transition: 'all 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,200,240,0.04)'; e.currentTarget.style.borderColor = 'rgba(0,200,240,0.25)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(232,244,250,0.03)'; e.currentTarget.style.borderColor = 'rgba(0,200,240,0.1)'; e.currentTarget.style.transform = 'translateY(0)' }}>

              <div style={{ position: 'absolute', top: '20px', right: '24px', fontFamily: 'Bebas Neue, sans-serif', fontSize: '5rem', color: 'rgba(0,200,240,0.07)', lineHeight: 1 }}>"</div>

              <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
                {[1,2,3,4,5].map(s => <span key={s} style={{ color: CYAN, fontSize: '0.9rem' }}>★</span>)}
              </div>

              <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.93rem', color: 'rgba(232,244,250,0.75)', lineHeight: 1.75, fontWeight: 300, fontStyle: 'italic', marginBottom: '24px' }}>
                "{r.text}"
              </p>

              <div style={{ borderTop: '1px solid rgba(0,200,240,0.12)', paddingTop: '16px' }}>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#e8f4fa', letterSpacing: '0.04em' }}>{r.name}</div>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.72rem', letterSpacing: '0.16em', color: 'rgba(232,244,250,0.4)', textTransform: 'uppercase', marginTop: '3px' }}>📍 {r.location}</div>
                <div style={{ marginTop: '8px', display: 'inline-block', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: CYAN, background: 'rgba(0,200,240,0.08)', padding: '3px 8px', border: `1px solid rgba(0,200,240,0.2)` }}>{r.project}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}