import useScrollAnimation from '../../hooks/useScrollAnimation'
import SectionHeader from '../ui/SectionHeader'

function About() {
  const headerRef = useScrollAnimation(0)
  const leftRef   = useScrollAnimation(100)
  const rightRef  = useScrollAnimation(200)
  const factsRef  = useScrollAnimation(300)

  return (
    <section id="about" className="section">
      <div className="container">

        <div ref={headerRef} className="fade-up">
          <SectionHeader
            label="Background"
            title="About me"
            subtitle="The person behind the code."
          />
        </div>

        {/* Main grid */}
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'start',
            marginBottom: '4rem',
          }}
        >
          {/* LEFT — Identity */}
          <div ref={leftRef} className="fade-up">

            {/* Avatar */}
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-mid)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-display)',
                fontSize: '22px',
                fontWeight: '700',
                color: 'var(--accent)',
                letterSpacing: '-0.02em',
                marginBottom: '1.75rem',
                position: 'relative',
              }}
            >
              BD
              <span
                style={{
                  position: 'absolute',
                  bottom: '4px',
                  right: '4px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  border: '2px solid var(--bg)',
                  boxShadow: '0 0 6px var(--accent)',
                }}
              />
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '28px',
                fontWeight: '700',
                color: 'var(--text)',
                letterSpacing: '-0.02em',
                marginBottom: '6px',
              }}
            >
              Badr Dyane
            </h3>

            <p
              style={{
                fontSize: '15px',
                color: 'var(--accent)',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.02em',
                marginBottom: '2rem',
              }}
            >
              Full-Stack AI &amp; Automation Engineer
            </p>

            {/* Links */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginBottom: '2.5rem',
              }}
            >
              {[
                {
                  label: 'GitHub',
                  value: 'github.com/BadrDyane',
                  href: 'https://github.com/BadrDyane',
                },
                {
                  label: 'Email',
                  value: 'badrdyane@gmail.com',
                  href: 'mailto:badrdyane@gmail.com',
                },
              ].map(link => (
                
                  <a 
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
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
                      minWidth: '48px',
                    }}
                  >
                    {link.label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '13px',
                      color: 'var(--accent)',
                    }}
                  >
                    {link.value} ↗
                  </span>
                </a>
              ))}
            </div>

            {/* Languages */}
            <div
              style={{
                padding: '1.5rem',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border)',
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
                  marginBottom: '1rem',
                }}
              >
                Languages
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                {[
                  { lang: 'English', level: 'Fluent' },
                  { lang: 'French',  level: 'Fluent' },
                  { lang: 'Arabic',  level: 'Fluent' },
                  { lang: 'Chinese', level: 'Intermediate — HSK 3' },
                ].map(item => (
                  <div
                    key={item.lang}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '14px',
                        color: 'var(--text)',
                        fontWeight: '400',
                      }}
                    >
                      {item.lang}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12px',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Bio */}
          <div ref={rightRef} className="fade-up">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              {[
                `I'm a full-stack developer specializing in AI-powered systems and business automation. I build complete, end-to-end solutions — not just frontend interfaces or isolated scripts, but real systems that businesses can actually run and rely on.`,
                `My work sits at the intersection of three things: AI integration, backend engineering, and product thinking. I don't just implement features — I think about the problem first, then build the simplest system that solves it properly.`,
                `Every project in my portfolio addresses a real business pain point: reducing support workload, eliminating manual invoice processing, automating market data collection, or building a complete SaaS product from scratch. These aren't tutorial exercises — they're working systems.`,
                `I'm currently a Computer Science student at Nanjing University of Posts and Telecommunications, recipient of the Jiangsu Government Scholarship twice: 2024 & 2025. I work with startups, small businesses, and founders who need reliable software built without the overhead of a large team.`,
              ].map((text, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: '17px',
                    color: i === 0 ? 'var(--text)' : 'var(--text-mid)',
                    lineHeight: '1.8',
                    fontWeight: i === 0 ? '400' : '300',
                  }}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Quick facts bar */}
        <div ref={factsRef} className="fade-up">
          <div
            className="facts-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1px',
              background: 'var(--border)',
              border: '1px solid var(--border-mid)',
              borderRadius: 'var(--r-lg)',
              overflow: 'hidden',
            }}
          >
            {[
              { label: 'Location',    value: 'Nanjing, China'          },
              { label: 'Degree',      value: 'B.Sc. Computer Science'  },
              { label: 'Scholarship', value: 'Jiangsu Gov. 2024 & 2025'       },
              { label: 'Status',      value: 'Available for hire'      },
            ].map((fact, i) => (
              <div
                key={fact.label}
                style={{
                  background: 'var(--bg-surface)',
                  padding: '1.5rem 2rem',
                  borderRight: i < 3 ? '1px solid var(--border)' : 'none',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  {fact.label}
                </p>
                <p
                  style={{
                    fontSize: '15px',
                    color: fact.label === 'Status' ? 'var(--accent)' : 'var(--text)',
                    fontWeight: '500',
                    letterSpacing: fact.label === 'Status' ? '0' : '-0.01em',
                  }}
                >
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About