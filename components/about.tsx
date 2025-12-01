export function About() {
  return (
    <section id='about' className='py-24 px-4 bg-muted'>
      <div className='container mx-auto'>
        <div className='inline-block mb-8'>
          <h2 className='text-4xl md:text-5xl font-bold uppercase border-4 border-foreground bg-secondary px-6 py-3 brutal-shadow-lg'>
            About Me
          </h2>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 items-start'>
          <div className='space-y-6'>
            <div className='border-4 border-foreground bg-background p-6 brutal-shadow-lg'>
              <p className='text-lg leading-relaxed'>
                I&#39;m a passionate <strong>fullstack JavaScript developer</strong>{' '}
                with a love for creating exceptional digital experiences. With
                expertise spanning both frontend and backend development, I
                bring ideas to life through clean, efficient code.
              </p>
            </div>

            <div className='border-4 border-foreground bg-primary p-6 brutal-shadow-lg'>
              <p className='text-lg leading-relaxed text-primary-foreground'>
                I specialize in building modern web applications using{' '}
                <strong>React</strong>, <strong>Next.js</strong>,{' '}
                <strong>Node.js</strong>, and various databases. I&#39;m always
                eager to learn new technologies and tackle challenging problems.
              </p>
            </div>

            <div className='border-4 border-foreground bg-accent p-6 brutal-shadow-lg'>
              <p className='text-lg leading-relaxed text-accent-foreground'>
                When I&#39;m not coding, you&#39;ll find me exploring open-source
                projects, contributing to the developer community, or
                experimenting with new frameworks and tools.
              </p>
            </div>
          </div>

          <div className='space-y-4'>
            <div className='border-4 border-foreground bg-background p-6 brutal-shadow-lg'>
              <h3 className='text-xl font-bold uppercase mb-4 border-b-3 border-foreground pb-2'>
                Quick Facts
              </h3>
              <ul className='space-y-3'>
                {[
                  {label: 'Experience', value: '5+ Years'},
                  {label: 'Projects', value: '50+ Completed'},
                  {label: 'Focus', value: 'Fullstack JS'},
                  {label: 'Location', value: 'Remote'},
                ].map((fact) => (
                  <li
                    key={fact.label}
                    className='flex justify-between items-center border-b-2 border-dashed border-muted-foreground pb-2'
                  >
                    <span className='font-mono text-sm uppercase text-muted-foreground'>
                      {fact.label}
                    </span>
                    <span className='font-bold'>{fact.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div className='border-4 border-foreground bg-secondary p-4 brutal-shadow text-center'>
                <span className='block text-3xl font-bold'>100%</span>
                <span className='font-mono text-xs uppercase'>JavaScript</span>
              </div>
              <div className='border-4 border-foreground bg-primary p-4 brutal-shadow text-center'>
                <span className='block text-3xl font-bold text-primary-foreground'>
                  24/7
                </span>
                <span className='font-mono text-xs uppercase text-primary-foreground'>
                  Passionate
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
