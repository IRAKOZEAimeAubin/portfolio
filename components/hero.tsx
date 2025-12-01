import {ArrowDown} from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className='min-h-screen flex items-center justify-center pt-20 px-4'>
      <div className='container mx-auto'>
        <div className='grid lg:grid-cols-2 gap-8 items-center'>
          <div className='space-y-6'>
            <div className='inline-block px-4 py-2 bg-secondary border-3 border-foreground brutal-shadow'>
              <span className='font-mono text-sm font-bold uppercase'>
                Fullstack Developer
              </span>
            </div>

            <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-none tracking-tight text-balance'>
              Hey, I&#39;m{' '}
              <span className='relative inline-block'>
                <span className='relative z-10'>Aubin</span>
                <span className='absolute bottom-2 left-0 w-full h-4 bg-primary z-0'></span>
              </span>
            </h1>

            <p className='text-xl md:text-2xl font-medium max-w-xl leading-relaxed'>
              I build{' '}
              <span className='bg-accent px-2 text-accent-foreground'>
                blazing fast
              </span>{' '}
              web applications with JavaScript, React, Node.js, and modern web
              technologies.
            </p>

            <div className='flex flex-wrap gap-4 pt-4'>
              <Link
                href='#projects'
                className='inline-flex items-center gap-2 px-6 py-4 font-bold uppercase text-lg border-4 border-foreground bg-primary text-primary-foreground brutal-shadow-lg brutal-shadow-hover'
              >
                View My Work
              </Link>
              <Link
                href='#contact'
                className='inline-flex items-center gap-2 px-6 py-4 font-bold uppercase text-lg border-4 border-foreground bg-background brutal-shadow-lg brutal-shadow-hover'
              >
                Get In Touch
              </Link>
            </div>
          </div>

          <div className='relative'>
            <div className='aspect-square max-w-md mx-auto border-4 border-foreground bg-secondary brutal-shadow-lg overflow-hidden'>
              {/* <img
                src='/creative-abstract-portrait-of-developer-with-geome.jpg'
                alt='Aubin - Fullstack Developer'
                className='w-full h-full object-cover'
              /> */}
            </div>
            <div className='absolute -bottom-4 -right-4 px-4 py-2 bg-accent border-3 border-foreground brutal-shadow rotate-3'>
              <span className='font-mono text-sm font-bold'>{'<code />'}</span>
            </div>
          </div>
        </div>

        <div className='flex justify-center mt-16'>
          <Link
            href='#about'
            className='animate-bounce p-3 border-3 border-foreground bg-background brutal-shadow-hover'
            aria-label='Scroll to about section'
          >
            <ArrowDown size={24} />
          </Link>
        </div>
      </div>
    </section>
  )
}
