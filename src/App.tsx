import { useRef } from 'react'
import './App.css'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import PillBadges from './components/PillBadages/pillBadges'
import WorkItem from './components/WorkItems/workItem'

type Project = {
  title: string
  description: string
  githubUrl: string | null
  githubVisibility: 'public' | 'private'
  demoUrl: string | null
}

const projects: Project[] = []

const experience = [
  {
    role: 'Líder Técnico',
    company: 'Coppel',
    period: 'Ago 2024 – Actualidad',
    location: 'Culiacán, Sinaloa',
    summary: 'Planificación y refinamiento técnico, revisión de código, documentación y acompañamiento al equipo para entregar funcionalidades con calidad.'
  },
  {
    role: 'Desarrollador de Software',
    company: 'Coppel',
    period: 'May 2023 – Ago 2024',
    location: 'Culiacán, Sinaloa',
    summary: 'Desarrollo de funcionalidades, refactorización de código legado, corrección de vulnerabilidades y construcción de servicios web.'
  },
  {
    role: 'Desarrollador Frontend',
    company: 'Goldenstar',
    period: 'Feb 2022 – Abr 2023',
    location: 'Culiacán, Sinaloa',
    summary: 'Desarrollo de aplicaciones web para visualizar datos de producción y APIs para conectar plataformas externas.'
  },
  {
    role: 'Desarrollador Full Stack',
    company: 'Fourtech Studio',
    period: 'Feb 2021 – Ene 2022',
    location: 'Remoto',
    summary: 'Desarrollo principal de una plataforma SaaS de ventas y comercio electrónico con Django REST, incluyendo pagos y suscripciones con Stripe.'
  },
  {
    role: 'Desarrollador Backend · Prácticas',
    company: 'Spiral Media Labs',
    period: 'Mar 2019 – Ene 2021',
    location: 'Los Mochis, Sinaloa',
    summary: 'Desarrollo de sistemas web a medida con Django y Django REST, aplicando buenas prácticas, herramientas de caché y mensajería, y procesos CI/CD.'
  }
]

const skills = [
  'Java', 'C#', 'JavaScript', 'TypeScript', 'Python', 'C++', 'SQL', 'PostgreSQL',
  'React', 'Vue.js', 'Spring Boot', 'Django', 'Django REST Framework', '.NET Core',
  'Azure', 'AWS', 'Google Cloud', 'Git', 'Stripe', 'Docker', 'DigitalOcean', 'Jira', 'CI/CD'
]

function App() {
  const projectTrack = useRef<HTMLDivElement>(null)

  const scrollProjects = (direction: -1 | 1) => {
    const track = projectTrack.current
    if (track) {
      track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: 'smooth' })
    }
  }

  return (
    <main>
      <div className='container-fluid'>
        <Header />
        <div className='container'>
          <aside className='principal-description' aria-labelledby='profile-heading'>
            <section className='contact-section'>
              <h2 id='profile-heading'>Contacto</h2>
              <ul className='contact-list'>
                <Contact href='mailto:urieljnmartinez@gmail.com' label='urieljnmartinez@gmail.com' />
                <Contact href='link:https://www.linkedin.com/in/urieljnmartinez/' label='LinkedIn' />
              </ul>
            </section>

            <section className='education-section' aria-labelledby='education-heading'>
              <h2 id='education-heading'>Formación</h2>
              <h3>Ingeniería en Sistemas Computacionales</h3>
              <p>Universidad Autónoma Indígena de México</p>
              <p>2015–2019 · Titulado en 2022</p>
              {/* <p>Representante de carrera, 2018–2019</p> */}
            </section>
          </aside>

          <div className='mainTimeline'>
            <section className='about-section' aria-labelledby='about-heading'>
              <p className='section-kicker'>Perfil</p>
              <h2 id='about-heading'>Sobre mí</h2>
              <p className='about-copy'>Desarrollador de software con experiencia en productos digitales, servicios web y aplicaciones para distintos sectores. Disfruto resolver problemas, colaborar con equipos y convertir necesidades de producto en soluciones claras y mantenibles. Me mueve aprender algo nuevo, todos los días.</p>
            </section>

            <section className='topWorks' aria-labelledby='experience-heading'>
              <p className='section-kicker'>Trayectoria</p>
              <h2 id='experience-heading'>Experiencia</h2>
              <div className='experience-list'>
                {experience.map((position) => (
                  <WorkItem key={`${position.company}-${position.period}`} {...position} />
                ))}
              </div>
            </section>

            <section className='projects-section' aria-labelledby='projects-heading'>
              <div className='projects-heading'>
                <div className='projects-title'>
                  <p className='section-kicker'>Selección</p>
                  <h2 id='projects-heading'>Proyectos</h2>
                </div>
                {projects.length > 1 && (
                  <nav className='project-controls' aria-label='Controles del carrusel de proyectos'>
                    <button type='button' aria-label='Ver proyectos anteriores' onClick={() => scrollProjects(-1)}>
                      &lt;
                    </button>
                    <button type='button' aria-label='Ver proyectos siguientes' onClick={() => scrollProjects(1)}>
                      &gt;
                    </button>
                  </nav>
                )}
              </div>
              {projects.length > 0 ? (
                <div
                  ref={projectTrack}
                  className='project-track'
                  role='region'
                  aria-label='Proyectos'
                  aria-roledescription='carrusel'
                  tabIndex={0}
                >
                  {projects.map((project) => (
                    <article className='project-card' key={project.title}>
                      <div className='project-card-heading'>
                        <h3>{project.title}</h3>
                        <span className={`project-visibility ${project.githubVisibility}`}>
                          {project.githubVisibility === 'public' ? 'Público' : 'Privado'}
                        </span>
                      </div>
                      <p className='project-description'>{project.description}</p>
                      <div className='project-links'>
                        {project.githubUrl ? (
                          <a href={project.githubUrl} target='_blank' rel='noreferrer'>Ver repositorio</a>
                        ) : (
                          <span>{project.githubVisibility === 'private' ? 'Repositorio privado' : 'Sin repositorio'}</span>
                        )}
                        {project.demoUrl ? (
                          <a href={project.demoUrl} target='_blank' rel='noreferrer'>Ver demo</a>
                        ) : (
                          <span>Sin demo</span>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <p className='projects-empty'>Aún no hay proyectos publicados.</p>
              )}
            </section>
          </div>

          <aside className='tools' aria-labelledby='skills-heading'>
            <p className='section-kicker'>Tecnología</p>
            <h2 id='skills-heading'>Herramientas</h2>
            <ul className='tool-items'>
              {skills.map((skill) => <PillBadges key={skill} label={skill} />)}
            </ul>
          </aside>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default App
