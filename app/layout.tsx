import type React from 'react'
import type {Metadata} from 'next'
import {Space_Grotesk, JetBrains_Mono} from 'next/font/google'
import {Analytics} from '@vercel/analytics/next'
import './globals.css'

const _spaceGrotesk = Space_Grotesk({subsets: ['latin']})
const _jetbrainsMono = JetBrains_Mono({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Aubin | Fullstack JavaScript Developer',
  description:
    'Portfolio of Aubin - Fullstack JavaScript developer specializing in React, Node.js, and modern web technologies.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
