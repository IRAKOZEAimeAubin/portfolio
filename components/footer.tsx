import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='border-t-4 border-foreground bg-foreground text-background py-8 px-4'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          <div className='text-center md:text-left'>
            <Link href='/' className='text-2xl font-bold uppercase'>
              Aubin<span className='text-primary'>.</span>
            </Link>
            <p className='font-mono text-sm mt-1 text-background/70'>
              Fullstack JavaScript Developer
            </p>
          </div>

          <div className='flex items-center gap-4'>
            <span className='font-mono text-sm'>
              © {currentYear} Aubin. All rights reserved.
            </span>
          </div>

          <div className='flex gap-2'>
            {['#about', '#skills', '#projects', '#contact'].map((link) => (
              <Link
                key={link}
                href={link}
                className='px-3 py-1 font-mono text-xs uppercase border-2 border-background/30 hover:bg-background hover:text-foreground transition-colors'
              >
                {link.replace('#', '')}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
