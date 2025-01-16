import ComparisonOptions from './components/comparison-options'
import CompressorLists from './components/comparison-lists'
import StepTwo from './components/step-two'
import StepThree from './components/step-three'

export default function CustomComparison() {
  return (
    <div className="mb-8">
      <h2 className="text-3xl text-emerald-600 text-center mb-4">
        Custom Comparison
      </h2>
      <StepTwo />
      <StepThree />
    </div>
  )
}

