import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import SectionHeader from '../ui/SectionHeader'

const SERVICE_ID  = 'service_1fzc12h'
const TEMPLATE_ID = 'template_8qqzqif'
const PUBLIC_KEY  = 'gPwwZji3xy671nRsLEY'

function Contact() {
  const headerRef = useScrollAnimation(0)
  const leftRef   = useScrollAnimation(100)
  const rightRef  = useScrollAnimation(200)

  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus('success')
      formRef.current.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%',
    background: 'var(--bg-surface)',
    border: '1px solid var(--border-mid)',
    borderRadius: 'var(--r-md)',
    padding: '14px 18px',
    fontSize: '16px',
    color: 'var(--text)',
    fontFamily: 'var(--font-sans)',
    fontWeight: '300',
    outline: 'none',
    transition: 'border-color 0.2s, background 0.2s',
    display: 'block',
  }

  const labelStyle = {
    display: 'block',
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    color: 'var(--text-muted)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginBottom: '8px',
  }

  function onFocus(e) {
    e.target.style.borderColor = 'var(--accent)'
    e.target.style.background  = 'var(--bg-card)'
  }

  function onBlur(e) {
    e.target.style.borderColor = 'var(--border-mid)'
    e.target.style.background  = 'var(--bg-surface)'
  }

  return (
    <section id="contact" className="section">
      <div className="container">

        <div ref={headerRef} className="fade-up">
          <SectionHeader
            label="Hire me"
            title="Let's work together"
            subtitle="Have a project in mind? Tell me what you need built."
          />
        </div>

        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'start',
          }}
        >
          {/* LEFT — Context */}
          <div ref={leftRef} className="fade-up">
            <p
              style={{
                fontSize: '18px',
                color: 'var(--text-mid)',
                lineHeight: '1.75',
                fontWeight: '300',
                marginBottom: '3rem',
              }}
            >
              I'm currently available for freelance projects. Whether you need
              an AI chatbot, a business automation system, a data pipeline, or
              a complete SaaS product — I'd like to hear about it.
            </p>

            <div style={{ marginBottom: '3rem' }}>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '1.25rem',
                }}
              >
                What happens next
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { step: '01', text: 'You send me a message describing your project' },
                  { step: '02', text: 'I respond within 24 hours with questions or a proposal' },
                  { step: '03', text: 'We align on scope, timeline, and budget' },
                  { step: '04', text: 'I build and deliver your system' },
                ].map(item => (
                  <div
                    key={item.step}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1.25rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12px',
                        color: 'var(--accent)',
                        letterSpacing: '0.05em',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      {item.step}
                    </span>
                    <span
                      style={{
                        fontSize: '15px',
                        color: 'var(--text-mid)',
                        lineHeight: '1.6',
                        fontWeight: '300',
                      }}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                padding: '1.75rem',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-mid)',
                borderRadius: 'var(--r-lg)',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '1.25rem',
                }}
              >
                Prefer direct contact
              </p>
              {[
                { label: 'Email',  value: 'badrdyane@gmail.com',      href: 'mailto:badrdyane@gmail.com'      },
                { label: 'GitHub', value: 'github.com/BadrDyane', href: 'https://github.com/BadrDyane' },
              ].map(item => (
                
                  <a 
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 0',
                    borderBottom: '1px solid var(--border)',
                    textDecoration: 'none',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '13px',
                      color: 'var(--accent)',
                    }}
                  >
                    {item.value} ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — Form */}
          <div ref={rightRef} className="fade-up">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-mid)',
                borderRadius: 'var(--r-xl)',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '22px',
                    fontWeight: '700',
                    color: 'var(--text)',
                    letterSpacing: '-0.02em',
                    marginBottom: '6px',
                  }}
                >
                  Send a message
                </p>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    fontWeight: '300',
                  }}
                >
                  I'll get back to you within 24 hours.
                </p>
              </div>

              <div>
                <label style={labelStyle} htmlFor="from_name">Name</label>
                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  placeholder="Your name"
                  required
                  style={inputStyle}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </div>

              <div>
                <label style={labelStyle} htmlFor="from_email">Email</label>
                <input
                  id="from_email"
                  name="from_email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  style={inputStyle}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </div>

              <div>
                <label style={labelStyle} htmlFor="message">Project description</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Describe the problem you want to solve or the system you need built..."
                  required
                  rows={6}
                  style={{
                    ...inputStyle,
                    resize: 'vertical',
                    minHeight: '140px',
                    lineHeight: '1.6',
                  }}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                disabled={status === 'sending'}
                style={{
                  width: '100%',
                  padding: '15px 24px',
                  fontSize: '15px',
                  marginTop: '0.5rem',
                  opacity: status === 'sending' ? 0.7 : 1,
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                }}
              >
                {status === 'sending' ? 'Sending...' : 'Send message →'}
              </button>

              {/* Status messages */}
              {status === 'success' && (
                <div
                  style={{
                    padding: '14px 18px',
                    background: 'var(--accent-glow)',
                    border: '1px solid var(--accent-border)',
                    borderRadius: 'var(--r-md)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    color: 'var(--accent)',
                    textAlign: 'center',
                  }}
                >
                  ✦ Message sent — I'll get back to you within 24 hours.
                </div>
              )}

              {status === 'error' && (
                <div
                  style={{
                    padding: '14px 18px',
                    background: 'rgba(255,80,80,0.06)',
                    border: '1px solid rgba(255,80,80,0.2)',
                    borderRadius: 'var(--r-md)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    color: '#ff6060',
                    textAlign: 'center',
                  }}
                >
                  Something went wrong. Email me directly at badrdyane@gmail.com
                </div>
              )}

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact