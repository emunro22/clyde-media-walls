'use client'
export default function Testimonials() {
  const reviews = [
    {
      name: 'James & Sarah Mitchell',
      location: 'Bearsden, Glasgow',
      rating: 5,
      text: 'Absolutely blown away by the finished result. From the initial consultation to the final walkthrough, the team were professional, tidy and incredibly skilled. Our new media wall with the bio-ethanol fire is the envy of all our friends.',
      project: 'Fireplace Media Wall',
    },
    {
      name: 'Craig Thomson',
      location: 'Newton Mearns',
      rating: 5,
      text: 'Called on a Monday, had a quote by Wednesday, installation done by Friday. The guys were on time, polite, and left the house spotless. The LED lighting they suggested makes such a difference in the evening. Couldn\'t recommend them more.',
      project: 'TV Wall with LED Lighting',
    },
    {
      name: 'Fiona & David Park',
      location: 'Paisley, Renfrewshire',
      rating: 5,
      text: 'We had a very specific vision for our lounge and they delivered exactly what we wanted and more. The stone cladding detail is stunning. Top-quality finish, competitive pricing, and a team that genuinely cares about the result.',
      project: 'Stone Cladding Feature Wall',
    },
    {
      name: 'Michael Brennan',
      location: 'Milngavie',
      rating: 5,
      text: 'Second time using Clyde Media Walls — did one for us last year and we loved it so much we had them come back for the master bedroom. Consistent quality, reliable tradesmen, and a product that looks absolutely stunning.',
      project: 'Bedroom Media Wall',
    },
    {
      name: 'Emma & Tom Reid',
      location: 'Thornliebank, Glasgow',
      rating: 5,
      text: 'The attention to detail is second to none. Every cable is hidden, every joint is perfect, and the custom shelving fits our equipment exactly. Worth every penny — transformative doesn\'t do it justice.',
      project: 'Full AV Integration Wall',
    },
    {
      name: 'Stuart MacLeod',
      location: 'Finnieston, Glasgow',
      rating: 5,
      text: 'Went for a more industrial look which they nailed completely. They were flexible with our schedule and the job was completed ahead of time. The team are genuinely passionate about their craft — it really shows.',
      project: 'Industrial Style Feature Wall',
    },
  ]

  return (
    <section id="testimonials" style={{ background: 'linear-gradient(180deg, #111e35 0%, #0f1a2e 100%)', padding: '100px 24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '1px', background: '#c9a84c' }} />
            <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#c9a84c' }}>Customer Reviews</span>
            <div style={{ width: '40px', height: '1px', background: '#c9a84c' }} />
          </div>
          <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', letterSpacing: '0.04em', color: '#f8f5ef', lineHeight: 0.95, marginBottom: '20px' }}>
            What Our Clients Say
          </h2>

          {/* Overall rating */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '16px' }}>
            <div style={{ display: 'flex', gap: '4px' }}>
              {[1,2,3,4,5].map(s => <span key={s} style={{ color: '#c9a84c', fontSize: '1.4rem' }}>★</span>)}
            </div>
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.6rem', color: '#e2c47a', letterSpacing: '0.05em' }}>5.0</span>
            <span style={{ fontFamily: 'Barlow, sans-serif', color: 'rgba(248,245,239,0.5)', fontSize: '0.9rem' }}>from 100+ reviews</span>
          </div>
        </div>

        {/* Reviews grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          {reviews.map((r, i) => (
            <div key={i} style={{
              padding: '32px',
              background: 'rgba(248,245,239,0.03)',
              border: '1px solid rgba(201,168,76,0.1)',
              position: 'relative',
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.05)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(248,245,239,0.03)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.1)'; e.currentTarget.style.transform = 'translateY(0)' }}>

              {/* Quote mark */}
              <div style={{ position: 'absolute', top: '20px', right: '24px', fontFamily: 'Bebas Neue, sans-serif', fontSize: '5rem', color: 'rgba(201,168,76,0.08)', lineHeight: 1 }}>"</div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
                {[1,2,3,4,5].map(s => <span key={s} style={{ color: '#c9a84c', fontSize: '0.9rem' }}>★</span>)}
              </div>

              <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.93rem', color: 'rgba(248,245,239,0.75)', lineHeight: 1.75, fontWeight: 300, fontStyle: 'italic', marginBottom: '24px' }}>
                "{r.text}"
              </p>

              <div style={{ borderTop: '1px solid rgba(201,168,76,0.12)', paddingTop: '16px' }}>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#f8f5ef', letterSpacing: '0.04em' }}>{r.name}</div>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.72rem', letterSpacing: '0.16em', color: 'rgba(248,245,239,0.4)', textTransform: 'uppercase', marginTop: '3px' }}>📍 {r.location}</div>
                <div style={{ marginTop: '8px', display: 'inline-block', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c9a84c', background: 'rgba(201,168,76,0.1)', padding: '3px 8px', border: '1px solid rgba(201,168,76,0.2)' }}>{r.project}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
