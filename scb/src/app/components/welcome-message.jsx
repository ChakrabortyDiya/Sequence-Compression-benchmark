export function WelcomeMessage() {
    return (
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 my-6">
        <p className="text-gray-800">
          Welcome! We benchmark compressors on DNA, RNA and protein sequences. Currently
          we use 28 test datasets, and 555 settings of 52 compressors. Please use the{' '}
          <a href="#quick-selector" className="text-blue-600 hover:text-blue-800">
            Quick Selector
          </a>
          ,{' '}
          <a href="#examples" className="text-blue-600 hover:text-blue-800">
            Examples
          </a>
          , or jump to{' '}
          <a href="#custom-comparison" className="text-blue-600 hover:text-blue-800">
            Custom Comparison
          </a>
          .
        </p>
      </div>
    )
  }
  
  