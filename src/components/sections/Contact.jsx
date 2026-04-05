import useScrollAnimation from '../../hooks/useScrollAnimation'
import SectionHeader from '../ui/SectionHeader'

function Contact() {
  const headerRef = useScrollAnimation(0)
  const leftRef   = useScrollAnimation(100)
  const rightRef  = useScrollAnimation(200)

  function handleSubmit(e) {
    e.preventDefault()
    const name    = e.target.name.value.trim()
    const email   = e.target.email.value.trim()
    const message = e.target.message.value.trim()
    if (!name || !email || !message) return
    window.location.href = `mailto:badrdyane@gmail.com?subject=Project inquiry from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom: ${name}%0AEmail: ${email}`
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

            {/* What happens next */}
            <div
              style={{
                marginBottom: '3rem',
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
                What happens next
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
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

            {/* Direct contact */}
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
                {
                  label: 'Email',
                  value: 'badrdyane@gmail.com',
                  href: 'mailto:badrdyane@gmail.com',
                },
                {
                  label: 'GitHub',
                  value: 'github.com/BadrDyane',
                  href: 'https://github.com/BadrDyane',
                },
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

              {/* Name */}
              <div>
                <label style={labelStyle} htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  style={inputStyle}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </div>

              {/* Email */}
              <div>
                <label style={labelStyle} htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  style={inputStyle}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </div>

              {/* Message */}
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

              {/* Submit */}
              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: '100%',
                  padding: '15px 24px',
                  fontSize: '15px',
                  marginTop: '0.5rem',
                }}
              >
                Send message →
              </button>

              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  textAlign: 'center',
                  lineHeight: '1.6',
                  letterSpacing: '0.02em',
                }}
              >
                Clicking send will open your email client
                with your message pre-filled.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact