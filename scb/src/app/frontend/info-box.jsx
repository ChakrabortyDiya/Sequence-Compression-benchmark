export default function InfoBox() {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <p className="text-gray-800 text-center">
          Welcome! We benchmark compressors on DNA, RNA and protein sequences.
          Currently we use 28 test datasets, and 555 settings of 52 compressors. Please use the{" "}
          <a href="#" className="text-blue-600 hover:text-blue-800">Quick Selector</a>,{" "}
          <a href="#" className="text-blue-600 hover:text-blue-800">Examples</a>, or jump to{" "}
          <a href="#" className="text-blue-600 hover:text-blue-800">Custom Comparison</a>.
        </p>
      </div>
    )
  }
  
  