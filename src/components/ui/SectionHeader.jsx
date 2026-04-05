function SectionHeader({ label, title, subtitle }) {
    return (
      <div style={{ marginBottom: '4rem' }}>
        <div className="section-label">{label}</div>
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-sub">{subtitle}</p>}
      </div>
    )
  }
  
  export default SectionHeader