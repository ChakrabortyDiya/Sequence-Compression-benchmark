'use client'

export function ComparisonOptions() {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Step 3. Select comparison options</h3>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Chart type:</h4>
            <select className="w-full border rounded p-2">
              <option>Bar chart</option>
              <option>Line chart</option>
              <option>Scatter plot</option>
            </select>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">X-axis:</h4>
            <select className="w-full border rounded p-2">
              <option>Compression ratio</option>
              <option>Compression speed</option>
              <option>Decompression speed</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Y-axis:</h4>
            <select className="w-full border rounded p-2">
              <option>Compression speed</option>
              <option>Decompression speed</option>
              <option>Combined speed</option>
            </select>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Scale:</h4>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="scale" className="text-blue-600" defaultChecked />
                Linear
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="scale" className="text-blue-600" />
                Logarithmic
              </label>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Additional options:</h4>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                Show grid lines
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                Show data points
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                Show legend
              </label>
            </div>
          </div>
          
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
            Generate Comparison
          </button>
        </div>
      </div>
    </div>
  )
}

