import useScrollAnimation from '../../hooks/useScrollAnimation'

function Hero() {
  const tagRef    = useScrollAnimation(0)
  const headRef   = useScrollAnimation(100)
  const subRef    = useScrollAnimation(200)
  const cardRef   = useScrollAnimation(300)
  const statsRef  = useScrollAnimation(400)

  return (
    <section
      style={{
        padding: '5.5rem 0 5rem',
        borderBottom: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow — top right */}
      <div
        style={{
          position: 'absolute',
          top: '-180px',
          right: '-80px',
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle at center, rgba(0,200,150,0.07) 0%, rgba(0,200,150,0.02) 45%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Ambient glow — bottom left */}
      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-100px',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle at center, rgba(0,200,150,0.04) 0%, transparent 65%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Available tag */}
        <div ref={tagRef} className="fade-up">
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--accent)',
              background: 'var(--accent-glow)',
              border: '1px solid var(--accent-border)',
              borderRadius: '100px',
              padding: '8px 18px',
              marginBottom: '2.5rem',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: 'var(--accent)',
                boxShadow: '0 0 8px var(--accent)',
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            Available for freelance work
          </div>
        </div>

        {/* Main grid — headline left, card right */}
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 400px',
                gap: '5rem',
                alignItems: 'start',
                marginBottom: '4rem',
            }}
            className="hero-grid"
        >

          {/* LEFT — Headline + sub */}
          <div>
            <div ref={headRef} className="fade-up">
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '82px',
                  fontWeight: '700',
                  lineHeight: '1.0',
                  letterSpacing: '-0.04em',
                  color: 'var(--text)',
                  marginBottom: '1.75rem',
                }}
              >
                I build{' '}
                <span
                  style={{
                    color: 'var(--accent)',
                    position: 'relative',
                    display: 'inline-block',
                  }}
                >
                  AI systems
                </span>
                <br />
                that automate work{' '}
                <br />
                <span
                  style={{
                    color: 'var(--text-mid)',
                    fontWeight: '400',
                  }}
                >
                  &amp; drive results.
                </span>
              </h1>
            </div>

            <div ref={subRef} className="fade-up">
              <p
                style={{
                  fontSize: '20px',
                  color: 'var(--text-mid)',
                  lineHeight: '1.7',
                  fontWeight: '300',
                  maxWidth: '520px',
                  marginBottom: '2.5rem',
                }}
              >
                From intelligent chatbots and invoice automation to full SaaS
                products — I build the systems that save businesses time,
                reduce costs, and create a real competitive edge.
              </p>

              {/* Mobile-only CTAs */}
              <div
                className="hero-cta-mobile"
                style={{
                  display: 'none',
                  gap: '12px',
                  flexWrap: 'wrap',
                }}
              >
                <a className="btn-primary" href="#projects">
                  View my work
                </a>
                <a className="btn-secondary" href="#contact">
                  Get in touch
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — Hire me card */}
          <div ref={cardRef} className="fade-up">
            <div
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-mid)',
                borderRadius: 'var(--r-xl)',
                padding: '2.5rem',
                position: 'sticky',
                top: '96px',
              }}
            >
              {/* Card label */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '1.5rem',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    boxShadow: '0 0 6px var(--accent)',
                    display: 'inline-block',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--accent)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  Open for projects
                </span>
              </div>

              {/* Card headline */}
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '26px',
                  fontWeight: '700',
                  color: 'var(--text)',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.15',
                  marginBottom: '1rem',
                }}
              >
                Let's build something that works.
              </h2>

              <p
                style={{
                  fontSize: '15px',
                  color: 'var(--text-mid)',
                  lineHeight: '1.7',
                  fontWeight: '300',
                  marginBottom: '2rem',
                }}
              >
                I work with startups and businesses who need real systems
                built fast — not templates, not demos. Working software
                that solves an actual problem.
              </p>

              {/* CTAs */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  marginBottom: '2rem',
                }}
              >
                
                  <a 
                  className="btn-primary"
                  href="#projects"
                  style={{ fontSize: '15px', padding: '14px 24px' }}
                >
                  View my projects
                </a>
                
                  <a 
                  className="btn-secondary"
                  href="#contact"
                  style={{ fontSize: '15px', padding: '14px 24px' }}
                >
                  Get in touch
                </a>
              </div>

              {/* Divider */}
              <div
                style={{
                  borderTop: '1px solid var(--border)',
                  paddingTop: '1.75rem',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '1.1rem',
                  }}
                >
                  What I build
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  {[
                    'AI Chatbots & RAG Systems',
                    'Business Automation Pipelines',
                    'Data Scraping & Dashboards',
                    'Full-Stack SaaS Products',
                  ].map(item => (
                    <div
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontSize: '14px',
                        color: 'var(--text-mid)',
                        fontWeight: '300',
                      }}
                    >
                      <span
                        style={{
                          color: 'var(--accent)',
                          fontSize: '10px',
                          flexShrink: 0,
                        }}
                      >
                        ✦
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact links */}
              <div
                style={{
                  borderTop: '1px solid var(--border)',
                  paddingTop: '1.5rem',
                  marginTop: '1.75rem',
                  display: 'flex',
                  gap: '1.5rem',
                }}
              >
                {[
                  { label: 'GitHub', href: 'https://github.com/BadrDyane' },
                  { label: 'Email',  href: 'mailto:badrdyane@gmail.com'   },
                ].map(link => (
                  
                    <a 
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '13px',
                      color: 'var(--text-muted)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.target.style.color = 'var(--accent)')}
                    onMouseLeave={e => (e.target.style.color = 'var(--text-muted)')}
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div ref={statsRef} className="fade-up">
        <div
            className="stats-bar"
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-mid)',
                borderRadius: 'var(--r-lg)',
                overflow: 'hidden',
            }}
        >
            {[
              { number: '4+', label: 'Production-ready projects', sub: 'built end-to-end' },
              { number: '3',  label: 'AI-powered systems',        sub: 'with RAG & OpenAI' },
              { number: '5',  label: 'Services offered',          sub: 'from chatbot to SaaS' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  padding: '2rem 2.5rem',
                  borderRight: i < 2 ? '1px solid var(--border)' : 'none',
                  textAlign: 'left',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '52px',
                    fontWeight: '700',
                    color: 'var(--text)',
                    letterSpacing: '-0.04em',
                    lineHeight: '1',
                    marginBottom: '8px',
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: '15px',
                    color: 'var(--text)',
                    fontWeight: '500',
                    marginBottom: '4px',
                  }}
                >
                  {stat.label}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.02em',
                  }}
                >
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero