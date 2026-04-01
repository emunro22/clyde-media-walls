'use client'
export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Free Consultation',
      desc: 'We visit your home at a time that suits you. We take measurements, discuss your vision, and understand your budget — no pressure, no obligation.',
      icon: '🏠',
    },
    {
      num: '02',
      title: 'Design & Quote',
      desc: 'We prepare a detailed design proposal and itemised quote. You\'ll see exactly what you\'re getting and what it costs — no hidden extras.',
      icon: '📐',
    },
    {
      num: '03',
      title: 'Material Selection',
      desc: 'Choose your finishes, fire, tiles, and lighting from our premium range of materials. We source everything so you don\'t have to.',
      icon: '🎨',
    },
    {
      num: '04',
      title: 'Installation',
      desc: 'Our skilled team completes the full installation typically in 1–3 days. We protect your flooring and furniture, and tidy up completely when done.',
      icon: '🔨',
    },
    {
      num: '05',
      title: 'Final Walkthrough',
      desc: 'We walk you through every feature of your new media wall, ensuring everything works perfectly and you\'re absolutely delighted with the result.',
      icon: '✅',
    },
  ]

  return (
    <section id="process" style={{ background: '#0a1320', padding: '100px 24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '1px', background: '#c9a84c' }} />
            <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#c9a84c' }}>How It Works</span>
            <div style={{ width: '40px', height: '1px', background: '#c9a84c' }} />
          </div>
          <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', letterSpacing: '0.04em', color: '#f8f5ef', lineHeight: 0.95, marginBottom: '20px' }}>
            Our Process
          </h2>
          <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '1.05rem', color: 'rgba(248,245,239,0.6)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7, fontWeight: 300 }}>
            A smooth, stress-free journey from first enquiry to finished masterpiece.
          </p>
        </div>

        {/* Steps */}
        <div style={{ position: 'relative' }}>
          {/* Connecting line (desktop) */}
          <div style={{ position: 'absolute', top: '40px', left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), rgba(201,168,76,0.3), rgba(201,168,76,0.3), transparent)', zIndex: 0 }} className="hidden lg:block" />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px', position: 'relative', zIndex: 1 }}>
            {steps.map((step, i) => (
              <div key={i} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                {/* Step number circle */}
                <div style={{
                  width: '80px', height: '80px', borderRadius: '50%',
                  border: '2px solid rgba(201,168,76,0.4)',
                  background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '24px', position: 'relative', flexShrink: 0,
                  transition: 'all 0.3s',
                }} className="process-circle">
                  <span style={{ fontSize: '1.8rem' }}>{step.icon}</span>
                  <div style={{ position: 'absolute', top: '-10px', right: '-10px', background: 'linear-gradient(135deg, #c9a84c, #e2c47a)', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '0.7rem', color: '#0f1a2e' }}>{step.num}</span>
                  </div>
                </div>

                <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.3rem', letterSpacing: '0.06em', color: '#f8f5ef', marginBottom: '10px', lineHeight: 1 }}>{step.title}</h3>
                <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.87rem', color: 'rgba(248,245,239,0.55)', lineHeight: 1.7, fontWeight: 300 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Banner CTA */}
        <div style={{
          marginTop: '80px', padding: '48px 40px',
          background: 'linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)',
          border: '1px solid rgba(201,168,76,0.2)',
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px',
        }}>
          <div>
            <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '2rem', letterSpacing: '0.05em', color: '#f8f5ef', marginBottom: '6px' }}>
              Ready to get started?
            </h3>
            <p style={{ fontFamily: 'Barlow, sans-serif', color: 'rgba(248,245,239,0.55)', fontSize: '0.95rem', fontWeight: 300 }}>
              Step 1 is completely free and there's absolutely no obligation to proceed.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'linear-gradient(135deg, #c9a84c, #e2c47a)', color: '#0f1a2e',
                fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                fontSize: '0.9rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                padding: '15px 36px', border: 'none', cursor: 'pointer', transition: 'all 0.3s',
              }}>Book Free Survey</button>
            <a href="tel:+441410000000" style={{
              background: 'transparent', color: '#c9a84c',
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
              fontSize: '0.9rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '14px 36px', border: '1.5px solid #c9a84c',
              textDecoration: 'none', display: 'inline-block', transition: 'all 0.3s',
            }}>📞 Call Us Now</a>
          </div>
        </div>
      </div>
    </section>
  )
}
