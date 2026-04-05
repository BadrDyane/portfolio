function Tag({ text, variant = 'default' }) {
    const styles = {
      default: {
        background: 'var(--bg-surface)',
        color: 'var(--text-mid)',
        border: '1px solid var(--border-mid)',
      },
      accent: {
        background: 'var(--accent-glow)',
        color: 'var(--accent)',
        border: '1px solid var(--accent-border)',
      },
    }
  
    return (
      <span
        style={{
          ...styles[variant],
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          fontWeight: '400',
          padding: '5px 12px',
          borderRadius: 'var(--r-sm)',
          display: 'inline-block',
          whiteSpace: 'nowrap',
          letterSpacing: '0.02em',
          lineHeight: '1.4',
        }}
      >
        {text}
      </span>
    )
  }
  
  export default Tag