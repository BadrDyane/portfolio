import Tag from './Tag'

function SkillGroup({ group }) {
  const { title, icon, items } = group

  return (
    <div
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--r-lg)',
        padding: '2rem',
        transition: 'border-color 0.25s, background 0.25s',
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
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '1.5rem',
          paddingBottom: '1.5rem',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <span
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: 'var(--accent)',
            boxShadow: '0 0 10px rgba(0, 200, 150, 0.5)',
            flexShrink: 0,
            display: 'inline-block',
          }}
        />
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '18px',
            fontWeight: '600',
            color: 'var(--text)',
            letterSpacing: '-0.01em',
          }}
        >
          {title}
        </h3>
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {items.map(item => (
          <Tag key={item} text={item} variant="default" />
        ))}
      </div>
    </div>
  )
}

export default SkillGroup