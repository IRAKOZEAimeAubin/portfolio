import {ArrowUpRight, Github} from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A fullstack e-commerce solution with real-time inventory management, Stripe payments, and admin dashboard.',
    image: '/modern-e-commerce-dashboard-interface-purple-blue.jpg',
    tags: ['Next.js', 'Prisma', 'Stripe', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'bg-primary',
  },
  {
    title: 'Task Management App',
    description:
      'Real-time collaborative task manager with drag-and-drop, team workspaces, and automated workflows.',
    image: '/task-management-kanban-board-interface-clean-moder.jpg',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'bg-secondary',
  },
  {
    title: 'Developer Portfolio',
    description:
      'A neo-brutalist portfolio template showcasing modern web development practices and design trends.',
    image: '/portfolio-website-brutalist-design-bold-colors.jpg',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'bg-accent',
  },
  {
    title: 'API Dashboard',
    description:
      'Comprehensive API monitoring dashboard with analytics, rate limiting visualization, and webhook management.',
    image: '/api-analytics-dashboard-dark-theme-charts-graphs.jpg',
    tags: ['TypeScript', 'Express', 'Redis', 'Chart.js'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'bg-primary',
  },
]

export function Projects() {
  return (
    <section id='projects' className='py-24 px-4 bg-muted'>
      <div className='container mx-auto'>
        <div className='inline-block mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold uppercase border-4 border-foreground bg-accent px-6 py-3 brutal-shadow-lg text-accent-foreground'>
            Selected Projects
          </h2>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <article
              key={project.title}
              className='group border-4 border-foreground bg-background brutal-shadow-lg overflow-hidden'
            >
              <div className='relative aspect-video border-b-4 border-foreground overflow-hidden'>
                {/* <img
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                /> */}
                <div
                  className={`absolute top-4 left-4 px-3 py-1 ${project.color} border-2 border-foreground`}
                >
                  <span className='font-mono text-xs font-bold uppercase'>
                    #{String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              <div className='p-6 space-y-4'>
                <h3 className='text-2xl font-bold uppercase'>
                  {project.title}
                </h3>
                <p className='text-muted-foreground leading-relaxed'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='px-3 py-1 font-mono text-xs font-bold uppercase border-2 border-foreground bg-muted'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className='flex gap-3 pt-2'>
                  <Link
                    href={project.liveUrl}
                    className='flex items-center gap-1 px-4 py-2 font-bold uppercase text-sm border-3 border-foreground bg-primary text-primary-foreground brutal-shadow-hover'
                  >
                    Live Demo <ArrowUpRight size={16} />
                  </Link>
                  <Link
                    href={project.githubUrl}
                    className='flex items-center gap-1 px-4 py-2 font-bold uppercase text-sm border-3 border-foreground bg-background brutal-shadow-hover'
                  >
                    <Github size={16} /> Code
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
