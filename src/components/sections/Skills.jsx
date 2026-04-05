import { skills } from '../../data/skills'
import SkillGroup from '../ui/SkillGroup'
import SectionHeader from '../ui/SectionHeader'
import useScrollAnimation from '../../hooks/useScrollAnimation'

function AnimatedGroup({ group, delay }) {
  const ref = useScrollAnimation(delay)
  return (
    <div ref={ref} className="fade-up">
      <SkillGroup group={group} />
    </div>
  )
}

function Skills() {
  const headerRef = useScrollAnimation(0)
  const introRef  = useScrollAnimation(100)

  return (
    <section id="skills" className="section">
      <div className="container">

        <div ref={headerRef} className="fade-up">
          <SectionHeader
            label="Capabilities"
            title="Technical skills"
            subtitle="Full-stack from the database to the AI layer — every tool chosen for a reason."
          />
        </div>

        {/* Intro line */}
        <div ref={introRef} className="fade-up">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              marginBottom: '3rem',
              padding: '1.5rem 2rem',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-mid)',
              borderRadius: 'var(--r-lg)',
              borderLeft: '3px solid var(--accent)',
            }}
          >
            <span
              style={{
                fontSize: '28px',
                flexShrink: 0,
              }}
            >
              ⚡
            </span>
            <p
              style={{
                fontSize: '16px',
                color: 'var(--text-mid)',
                lineHeight: '1.65',
                fontWeight: '300',
              }}
            >
              I don't collect technologies — I use what the problem demands.
              Every tool in this list has been used to ship a real, working system.
              No tutorial projects, no checkbox skills.
            </p>
          </div>
        </div>

        {/* Skills grid */}
        <div
          className="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.25rem',
          }}
        >
          {skills.map((group, index) => (
            <AnimatedGroup
              key={group.id}
              group={group}
              delay={index * 100}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills