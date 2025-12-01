'use client'

import {useState} from 'react'
import Link from 'next/link'
import {Menu, X} from 'lucide-react'

const navItems = [
  {name: 'About', href: '#about'},
  {name: 'Skills', href: '#skills'},
  {name: 'Projects', href: '#projects'},
  {name: 'Contact', href: '#contact'},
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-background border-b-4 border-foreground'>
      <div className='container mx-auto px-4 py-4'>
        <nav className='flex items-center justify-between'>
          <Link
            href='/'
            className='text-2xl font-bold uppercase tracking-tight hover:text-primary transition-colors'
          >
            Aubin<span className='text-primary'>.</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className='hidden md:flex items-center gap-2'>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className='px-4 py-2 font-bold uppercase text-sm border-3 border-foreground bg-background brutal-shadow-hover hover:bg-primary transition-colors'
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-2 border-3 border-foreground brutal-shadow-hover bg-primary'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label='Toggle menu'
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className='md:hidden mt-4 border-3 border-foreground bg-background brutal-shadow p-4'>
            <ul className='flex flex-col gap-2'>
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className='block px-4 py-3 font-bold uppercase text-sm border-3 border-foreground bg-background hover:bg-primary transition-colors'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
