function Footer() {
    const year = new Date().getFullYear()
  
    return (
      <footer
        style={{
          borderTop: '1px solid var(--border)',
          padding: '3rem 0',
          background: 'var(--bg-surface)',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          {/* Logo */}
          
            <a 
            href="#"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '20px',
              fontWeight: '700',
              color: 'var(--text)',
              letterSpacing: '-0.03em',
              textDecoration: 'none',
            }}
          >
            badr<span style={{ color: 'var(--accent)' }}>.</span>dev
          </a>
  
          {/* Copyright */}
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--text-muted)',
              letterSpacing: '0.02em',
            }}
          >
            © {year} Badr Dyane — Full-Stack AI &amp; Automation Engineer
          </span>
  
          {/* Links */}
          <div style={{ display: 'flex', gap: '2rem' }}>
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
        letterSpacing: '0.02em',
      }}
      onMouseEnter={e => (e.target.style.color = 'var(--accent)')}
      onMouseLeave={e => (e.target.style.color = 'var(--text-muted)')}
    >
      {link.label} ↗
    </a>
  ))}
</div>
        </div>
      </footer>
    )
  }
  
  export default Footer