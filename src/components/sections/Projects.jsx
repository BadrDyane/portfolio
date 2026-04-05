import { projects } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard'
import SectionHeader from '../ui/SectionHeader'
import useScrollAnimation from '../../hooks/useScrollAnimation'

function AnimatedCard({ project, delay }) {
  const ref = useScrollAnimation(delay)
  return (
    <div ref={ref} className="fade-up">
      <ProjectCard project={project} />
    </div>
  )
}

function Projects() {
  const headerRef = useScrollAnimation(0)

  return (
    <section id="projects" className="section">
      <div className="container">

        <div ref={headerRef} className="fade-up">
          <SectionHeader
            label="Portfolio"
            title="What I've built"
            subtitle="Every project solves a real business problem — scoped, engineered, and delivered end-to-end."
          />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          {projects.map((project, index) => (
            <AnimatedCard
              key={project.id}
              project={project}
              delay={index * 120}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects