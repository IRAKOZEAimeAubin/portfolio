'use client'

import type React from 'react'

import {useState} from 'react'
import {Mail, FolderGit, Network, Send} from 'lucide-react'
import Link from 'next/link'

const socialLinks = [
  {name: 'GitHub', icon: FolderGit, href: 'https://github.com'},
  {name: 'LinkedIn', icon: Network, href: 'https://linkedin.com'},
  {name: 'Email', icon: Mail, href: 'mailto:hello@aubin.dev'},
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert("Thanks for reaching out! I'll get back to you soon.")
    setFormData({name: '', email: '', message: ''})
  }

  return (
    <section id='contact' className='py-24 px-4'>
      <div className='container mx-auto'>
        <div className='inline-block mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold uppercase border-4 border-foreground bg-secondary px-6 py-3 brutal-shadow-lg text-secondary-foreground'>
            Get In Touch
          </h2>
        </div>

        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label
                htmlFor='name'
                className='block font-bold uppercase text-sm mb-2'
              >
                Your Name
              </label>
              <input
                type='text'
                id='name'
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({...formData, name: e.target.value})
                }
                className='w-full px-4 py-3 border-4 border-foreground bg-background font-mono brutal-shadow focus:outline-none focus:ring-2 focus:ring-primary'
                placeholder='John Doe'
              />
            </div>

            <div>
              <label
                htmlFor='email'
                className='block font-bold uppercase text-sm mb-2'
              >
                Your Email
              </label>
              <input
                type='email'
                id='email'
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({...formData, email: e.target.value})
                }
                className='w-full px-4 py-3 border-4 border-foreground bg-background font-mono brutal-shadow focus:outline-none focus:ring-2 focus:ring-primary'
                placeholder='john@example.com'
              />
            </div>

            <div>
              <label
                htmlFor='message'
                className='block font-bold uppercase text-sm mb-2'
              >
                Your Message
              </label>
              <textarea
                id='message'
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({...formData, message: e.target.value})
                }
                className='w-full px-4 py-3 border-4 border-foreground bg-background font-mono brutal-shadow focus:outline-none focus:ring-2 focus:ring-primary resize-none'
                placeholder="Hey Aubin, I'd like to discuss a project..."
              />
            </div>

            <button
              type='submit'
              className='flex items-center gap-2 px-8 py-4 font-bold uppercase text-lg border-4 border-foreground bg-primary text-primary-foreground brutal-shadow-lg brutal-shadow-hover'
            >
              Send Message <Send size={20} />
            </button>
          </form>

          {/* Contact Info */}
          <div className='space-y-6'>
            <div className='border-4 border-foreground bg-primary p-6 brutal-shadow-lg'>
              <h3 className='text-2xl font-bold uppercase mb-4 text-primary-foreground'>
                Let&#39;s Work Together
              </h3>
              <p className='text-primary-foreground leading-relaxed'>
                I&#39;m always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out!
              </p>
            </div>

            <div className='border-4 border-foreground bg-background p-6 brutal-shadow-lg'>
              <h3 className='text-xl font-bold uppercase mb-4'>
                Find Me Online
              </h3>
              <div className='grid grid-cols-2 gap-3'>
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-3 px-4 py-3 font-bold uppercase text-sm border-3 border-foreground bg-muted brutal-shadow-hover'
                  >
                    <link.icon size={20} />
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className='border-4 border-foreground bg-accent p-6 brutal-shadow-lg'>
              <h3 className='text-xl font-bold uppercase mb-2 text-accent-foreground'>
                Quick Response
              </h3>
              <p className='text-accent-foreground font-mono'>
                I typically respond within <strong>24-48 hours</strong>. For
                urgent matters, reach out on Twitter!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
