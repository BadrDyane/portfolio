import { services } from '../../data/services'
import ServiceCard from '../ui/ServiceCard'
import SectionHeader from '../ui/SectionHeader'
import useScrollAnimation from '../../hooks/useScrollAnimation'

function AnimatedCard({ service, delay }) {
  const ref = useScrollAnimation(delay)
  return (
    <div ref={ref} className="fade-up" style={{ height: '100%' }}>
      <ServiceCard service={service} />
    </div>
  )
}

function Services() {
  const headerRef = useScrollAnimation(0)

  return (
    <section id="services" className="section">
      <div className="container">

        <div ref={headerRef} className="fade-up">
          <SectionHeader
            label="What I offer"
            title="Services"
            subtitle="Real solutions to real business problems — scoped, built, and delivered end-to-end."
          />
        </div>

        {/* Top row — 3 cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem',
            marginBottom: '1.25rem',
          }}
          className="services-grid-top"
        >
          {services.slice(0, 3).map((service, index) => (
            <AnimatedCard
              key={service.id}
              service={service}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Bottom row — 2 cards centered */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.25rem',
            maxWidth: '66.66%',
          }}
          className="services-grid-bottom"
        >
          {services.slice(3).map((service, index) => (
            <AnimatedCard
              key={service.id}
              service={service}
              delay={(index + 3) * 100}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services