'use client'
import { useState, useEffect } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', location: '', message: '', service: '' })
  const [status, setStatus] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', location: '', message: '', service: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%', padding: '14px 16px',
    background: 'rgba(248,245,239,0.05)',
    border: '1px solid rgba(201,168,76,0.2)',
    color: '#f8f5ef',
    fontFamily: 'Barlow, sans-serif', fontSize: '0.95rem',
    outline: 'none',
    transition: 'all 0.2s',
  }

  const labelStyle = {
    display: 'block',
    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600,
    fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase',
    color: '#c9a84c', marginBottom: '8px',
  }

  return (
    <section id="contact" style={{ background: '#0a1320', padding: isMobile ? '70px 20px' : '100px 24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '1px', background: '#c9a84c' }} />
            <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#c9a84c' }}>Get in Touch</span>
            <div style={{ width: '40px', height: '1px', background: '#c9a84c' }} />
          </div>
          <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', letterSpacing: '0.04em', color: '#f8f5ef', lineHeight: 0.95, marginBottom: '20px' }}>
            Start Your Project
          </h2>
          <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '1.05rem', color: 'rgba(248,245,239,0.6)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7, fontWeight: 300 }}>
            Tell us about your vision and we'll get back to you within 24 hours to arrange your free no-obligation site survey.
          </p>
        </div>

        {/* Grid — stacks on mobile */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1.5fr',
          gap: isMobile ? '40px' : '60px',
          alignItems: 'start',
        }}>

          {/* Left — contact info */}
          <div>
            <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.8rem', letterSpacing: '0.05em', color: '#f8f5ef', marginBottom: '16px' }}>Let's Talk</h3>
            <p style={{ fontFamily: 'Barlow, sans-serif', color: 'rgba(248,245,239,0.6)', lineHeight: 1.8, fontSize: '0.95rem', fontWeight: 300, marginBottom: '28px' }}>
              Give us a call or fill out the form and one of our team will be in touch to discuss your project and arrange a free home visit.
            </p>

            {[
              { icon: '📞', label: 'Phone', value: '0141 000 0000', link: 'tel:+441410000000' },
              { icon: '✉️', label: 'Email', value: 'hello@clydemediawalls.co.uk', link: 'mailto:hello@clydemediawalls.co.uk' },
              { icon: '📍', label: 'Based in', value: 'Glasgow, Scotland', link: null },
              { icon: '🕐', label: 'Hours', value: 'Mon–Sat: 8am – 6pm', link: null },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '16px 0', borderBottom: '1px solid rgba(201,168,76,0.08)' }}>
                <div style={{ width: '40px', height: '40px', flexShrink: 0, background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>{item.icon}</div>
                <div>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '3px' }}>{item.label}</div>
                  {item.link ? (
                    <a href={item.link} style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.95rem', color: '#f8f5ef', textDecoration: 'none' }}>{item.value}</a>
                  ) : (
                    <span style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.95rem', color: '#f8f5ef' }}>{item.value}</span>
                  )}
                </div>
              </div>
            ))}

            <div style={{ marginTop: '28px', padding: '18px', background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)' }}>
              <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '8px' }}>Service Area</div>
              <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.88rem', color: 'rgba(248,245,239,0.6)', lineHeight: 1.7, fontWeight: 300 }}>
                Glasgow City · East Renfrewshire · Renfrewshire · East Dunbartonshire · South Lanarkshire · North Lanarkshire · Edinburgh · Stirling
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div style={{ background: 'rgba(26,39,68,0.5)', border: '1px solid rgba(201,168,76,0.15)', padding: isMobile ? '28px 20px' : '44px 40px' }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
                <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '2rem', color: '#f8f5ef', marginBottom: '12px' }}>Message Sent!</h3>
                <p style={{ fontFamily: 'Barlow, sans-serif', color: 'rgba(248,245,239,0.6)', lineHeight: 1.7 }}>Thanks for getting in touch. We'll be in contact within 24 hours to arrange your free survey.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Name + Phone row — stacks on mobile */}
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                  <div>
                    <label style={labelStyle}>Your Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="John Smith"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'} />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number *</label>
                    <input name="phone" value={form.phone} onChange={handleChange} required placeholder="07700 000000" type="tel"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'} />
                  </div>
                </div>

                <div style={{ marginBottom: '14px' }}>
                  <label style={labelStyle}>Email Address *</label>
                  <input name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" type="email"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'} />
                </div>

                <div style={{ marginBottom: '14px' }}>
                  <label style={labelStyle}>Your Location</label>
                  <input name="location" value={form.location} onChange={handleChange} placeholder="e.g. Bearsden, Glasgow"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'} />
                </div>

                <div style={{ marginBottom: '14px' }}>
                  <label style={labelStyle}>Service Interested In</label>
                  <select name="service" value={form.service} onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}>
                    <option value="" style={{ background: '#0f1a2e' }}>Select a service...</option>
                    <option value="fireplace" style={{ background: '#0f1a2e' }}>Fireplace Media Wall</option>
                    <option value="tv" style={{ background: '#0f1a2e' }}>TV & AV Integration</option>
                    <option value="joinery" style={{ background: '#0f1a2e' }}>Custom Joinery</option>
                    <option value="lighting" style={{ background: '#0f1a2e' }}>Mood Lighting</option>
                    <option value="tiling" style={{ background: '#0f1a2e' }}>Tiling & Cladding</option>
                    <option value="full" style={{ background: '#0f1a2e' }}>Full Room Transformation</option>
                    <option value="unsure" style={{ background: '#0f1a2e' }}>Not sure yet — need advice</option>
                  </select>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={labelStyle}>Tell Us About Your Project</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                    placeholder="Describe your room, what you have in mind, any specific requirements..."
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'} />
                </div>

                {status === 'error' && (
                  <div style={{ marginBottom: '14px', padding: '12px', background: 'rgba(255,80,80,0.1)', border: '1px solid rgba(255,80,80,0.3)', fontFamily: 'Barlow, sans-serif', fontSize: '0.9rem', color: '#ff9090' }}>
                    Something went wrong. Please try calling us on 0141 000 0000.
                  </div>
                )}

                <button type="submit" disabled={status === 'sending'}
                  style={{
                    width: '100%',
                    background: status === 'sending' ? 'rgba(201,168,76,0.5)' : 'linear-gradient(135deg, #c9a84c, #e2c47a)',
                    color: '#0f1a2e', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                    fontSize: '0.95rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                    padding: '16px', border: 'none', cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s',
                  }}>
                  {status === 'sending' ? 'Sending...' : "Send Enquiry — It's Free"}
                </button>

                <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.75rem', color: 'rgba(248,245,239,0.3)', textAlign: 'center', marginTop: '12px' }}>
                  No spam, ever. We'll only contact you regarding your enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}