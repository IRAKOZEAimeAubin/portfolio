import {Header} from '@/components/header'
import {Hero} from '@/components/hero'
import {About} from '@/components/about'

export default function Home() {
  return (
    <main className='min-h-screen bg-background'>
      <Header />
      <Hero />
      <About />
    </main>
  )
}
