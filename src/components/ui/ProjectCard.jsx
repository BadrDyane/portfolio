import Tag from './Tag'

function ProjectCard({ project }) {
  const {
    number, title, subtitle, badge,
    problem, solution, impact,
    features, tech, github, demo,
  } = project

  return (
    <div
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--r-xl)',
        overflow: 'hidden',
        transition: 'border-color 0.3s, background 0.3s',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--border-light)'
        e.currentTarget.style.background = 'var(--bg-card-hover)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.background = 'var(--bg-card)'
      }}
    >
      {/* Accent top bar */}
      <div
        style={{
          height: '2px',
          background:
            'linear-gradient(90deg, var(--accent) 0%, transparent 100%)',
          opacity: 0.5,
        }}
      />

      <div style={{ padding: '2.5rem' }}>

        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--text-muted)',
                letterSpacing: '0.08em',
                marginBottom: '0.6rem',
              }}
            >
              {number}
            </p>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '32px',
                fontWeight: '700',
                color: 'var(--text)',
                letterSpacing: '-0.03em',
                lineHeight: '1.05',
                marginBottom: '6px',
              }}
            >
              {title}
            </h3>
            <p
              style={{
                fontSize: '15px',
                color: 'var(--text-muted)',
                fontWeight: '300',
              }}
            >
              {subtitle}
            </p>
          </div>
          <Tag text={badge} variant="accent" />
        </div>

        {/* Case study grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: 'var(--border)',
            borderRadius: 'var(--r-lg)',
            overflow: 'hidden',
            marginBottom: '2rem',
          }}
        >
          {[
            { label: 'Problem', text: problem, icon: '◎' },
            { label: 'Solution', text: solution, icon: '◈' },
            { label: 'Impact', text: impact, icon: '◉' },
          ].map(item => (
            <div
              key={item.label}
              style={{
                background: 'var(--bg-surface)',
                padding: '1.5rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '0.85rem',
                }}
              >
                <span
                  style={{
                    fontSize: '14px',
                    color: 'var(--accent)',
                  }}
                >
                  {item.icon}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--accent)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.label}
                </span>
              </div>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-mid)',
                  lineHeight: '1.7',
                  fontWeight: '300',
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '10px',
            marginBottom: '2rem',
          }}
        >
          {features.map(f => (
            <div
              key={f}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                fontSize: '14px',
                color: 'var(--text-mid)',
                fontWeight: '300',
              }}
            >
              <span
                style={{
                  color: 'var(--accent)',
                  flexShrink: 0,
                  marginTop: '3px',
                  fontSize: '12px',
                }}
              >
                →
              </span>
              {f}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border)',
          }}
        >
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {tech.map(t => (
              <Tag key={t} text={t} variant="default" />
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            {demo && (
              
                <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  color: 'var(--accent)',
                  textDecoration: 'underline',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => (e.target.style.opacity = '0.7')}
                onMouseLeave={e => (e.target.style.opacity = '1')}
              >
                Live Demo ↗
              </a>
            )}
            {github && (
              
                <a
                href={github}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  color: 'var(--text-muted)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.target.style.color = 'var(--text)')}
                onMouseLeave={e => (e.target.style.color = 'var(--text-muted)')}
              >
                GitHub ↗
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProjectCard