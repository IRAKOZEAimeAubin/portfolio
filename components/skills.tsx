const skills = [
  {name: 'JavaScript', level: 95, color: 'bg-primary'},
  {name: 'TypeScript', level: 90, color: 'bg-secondary'},
  {name: 'React', level: 92, color: 'bg-accent'},
  {name: 'Next.js', level: 88, color: 'bg-primary'},
  {name: 'Node.js', level: 90, color: 'bg-secondary'},
  {name: 'Express', level: 85, color: 'bg-accent'},
  {name: 'PostgreSQL', level: 80, color: 'bg-primary'},
  {name: 'MongoDB', level: 82, color: 'bg-secondary'},
]

const tools = [
  'Git',
  'Docker',
  'AWS',
  'Vercel',
  'Tailwind CSS',
  'GraphQL',
  'REST APIs',
  'Jest',
  'Prisma',
  'Redis',
  'Linux',
  'Figma',
]

export function Skills() {
  return (
    <section id='skills' className='py-24 px-4'>
      <div className='container mx-auto'>
        <div className='inline-block mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold uppercase border-4 border-foreground bg-primary px-6 py-3 brutal-shadow-lg text-primary-foreground'>
            Skills & Tools
          </h2>
        </div>

        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Technical Skills */}
          <div className='border-4 border-foreground bg-background p-6 brutal-shadow-lg'>
            <h3 className='text-2xl font-bold uppercase mb-6 flex items-center gap-2'>
              <span className='w-4 h-4 bg-primary border-2 border-foreground'></span>
              Technical Skills
            </h3>
            <div className='space-y-4'>
              {skills.map((skill) => (
                <div key={skill.name} className='space-y-2'>
                  <div className='flex justify-between items-center'>
                    <span className='font-bold uppercase text-sm'>
                      {skill.name}
                    </span>
                    <span className='font-mono text-sm'>{skill.level}%</span>
                  </div>
                  <div className='h-6 border-3 border-foreground bg-muted overflow-hidden'>
                    <div
                      className={`h-full ${skill.color} border-r-3 border-foreground transition-all duration-500`}
                      style={{width: `${skill.level}%`}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className='space-y-6'>
            <div className='border-4 border-foreground bg-secondary p-6 brutal-shadow-lg'>
              <h3 className='text-2xl font-bold uppercase mb-6 flex items-center gap-2'>
                <span className='w-4 h-4 bg-accent border-2 border-foreground'></span>
                Tools & Technologies
              </h3>
              <div className='flex flex-wrap gap-3'>
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className='px-4 py-2 font-mono text-sm font-bold uppercase border-3 border-foreground bg-background brutal-shadow-hover cursor-default'
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className='border-4 border-foreground bg-accent p-6 brutal-shadow-lg'>
              <h3 className='text-xl font-bold uppercase mb-3 text-accent-foreground'>
                What I Do Best
              </h3>
              <ul className='space-y-2 text-accent-foreground'>
                <li className='flex items-start gap-2'>
                  <span className='font-bold'>→</span>
                  <span>Build scalable fullstack web applications</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='font-bold'>→</span>
                  <span>Create responsive and accessible UIs</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='font-bold'>→</span>
                  <span>Design and implement RESTful APIs</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='font-bold'>→</span>
                  <span>Optimize performance and SEO</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
