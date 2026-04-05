function Navbar() {
    return (
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'rgba(8, 8, 15, 0.82)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '72px',
          }}
        >
          {/* Logo */}
          
           <a
            href="#"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '22px',
              fontWeight: '700',
              color: 'var(--text)',
              letterSpacing: '-0.03em',
              textDecoration: 'none',
            }}
          >
            badr<span style={{ color: 'var(--accent)' }}>.</span>dev
          </a>
  
          {/* Links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2.5rem',
            }}
          >
            {[
              { label: 'Services', id: 'services' },
              { label: 'Projects', id: 'projects' },
              { label: 'Skills',   id: 'skills'   },
              { label: 'About',    id: 'about'    },
            ].map(link => (
              
                <a 
                key={link.id}
                href={`#${link.id}`}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  fontWeight: '400',
                  color: 'var(--text-mid)',
                  letterSpacing: '0.01em',
                  transition: 'color 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => (e.target.style.color = 'var(--text)')}
                onMouseLeave={e => (e.target.style.color = 'var(--text-mid)')}
              >
                {link.label}
              </a>
            ))}
  
            
              <a 
              className="btn-primary"
              href="#contact"
              style={{
                padding: '10px 22px',
                fontSize: '14px',
              }}
            >
              Hire me
            </a>
          </div>
        </div>
      </nav>
    )
  }
  
  export default Navbar