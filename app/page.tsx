import { Nav } from '@/components/global/Nav'
import { Hero } from '@/components/Hero'

export const runtime = 'edge'
export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <main className="relative flex min-h-screen flex-col items-center justify-center">

      </main>
    </div>
  )
}
