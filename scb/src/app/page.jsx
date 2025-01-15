import { Navigation } from './components/navigation'
import { WelcomeMessage } from './components/welcome-message'
import { QuickSelector } from './components/quick-selector'
import { CustomComparison } from './components/custom-comparison'

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-6">
        Sequence Compression Benchmark
      </h1>
      
      <Navigation />
      <WelcomeMessage />
      <QuickSelector />
      <CustomComparison />
      
      <footer className="text-center text-sm text-gray-600 mt-8">
        By Contributors, 2019-2024, public domain
      </footer>
    </main>
  )
}

