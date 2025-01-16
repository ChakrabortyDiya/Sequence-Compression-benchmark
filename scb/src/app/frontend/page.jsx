import Navigation from './navigation'
import InfoBox from './info-box'
import QuickSelector from './quick-selector'
import CustomComparison from './custom-comparison'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
        Sequence Compression Benchmark
      </h1>
      <Navigation />
      <InfoBox />
      <QuickSelector />
      <CustomComparison />
    </div>
  )
}

