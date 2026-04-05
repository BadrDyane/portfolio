import Tag from './Tag'

function ServiceCard({ service }) {
  const { number, title, description, deliverables, price, tag } = service

  return (
    <div
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--r-xl)',
        padding: '2.25rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        transition: 'border-color 0.3s, background 0.3s, transform 0.3s',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--accent-border)'
        e.currentTarget.style.background = 'var(--bg-card-hover)'
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.background = 'var(--bg-card)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Top row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--text-muted)',
            letterSpacing: '0.08em',
          }}
        >
          {number}
        </span>
        <Tag text={tag} variant="accent" />
      </div>

      {/* Title */}
      <div>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '22px',
            fontWeight: '700',
            color: 'var(--text)',
            letterSpacing: '-0.02em',
            lineHeight: '1.15',
            marginBottom: '0.85rem',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: '15px',
            color: 'var(--text-mid)',
            lineHeight: '1.7',
            fontWeight: '300',
          }}
        >
          {description}
        </p>
      </div>

      {/* Deliverables */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          paddingTop: '1.25rem',
          borderTop: '1px solid var(--border)',
          flexGrow: 1,
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--text-muted)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '4px',
          }}
        >
          What you get
        </p>
        {deliverables.map(d => (
          <div
            key={d}
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
                fontSize: '12px',
                marginTop: '3px',
              }}
            >
              ✦
            </span>
            {d}
          </div>
        ))}
      </div>

      {/* Price */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '1.25rem',
          borderTop: '1px solid var(--border)',
        }}
      >
        <div>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '4px',
            }}
          >
            Starting from
          </p>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '22px',
              fontWeight: '700',
              color: 'var(--text)',
              letterSpacing: '-0.02em',
            }}
          >
            {price}
          </p>
        </div>
        
          <a
          className="btn-secondary"
          href="#contact"
          style={{
            padding: '10px 20px',
            fontSize: '13px',
          }}
        >
          Get a quote
        </a>
      </div>
    </div>
  )
}

export default ServiceCard