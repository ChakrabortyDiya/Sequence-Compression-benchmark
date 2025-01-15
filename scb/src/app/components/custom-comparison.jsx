export function CustomComparison() {
    return (
      <div className="border border-gray-200 rounded-lg p-6 my-6">
        <h2 className="text-xl font-medium mb-6">Custom Comparison</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4">Step 1. Select test data</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2">Genomes (less repetitive)</label>
                <select className="w-full border rounded p-2">
                  <option>5 selected</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-2">Other datasets (more repetitive)</label>
                <select className="w-full border rounded p-2">
                  <option>0 selected</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                Aggregate results from multiple datasets using
              </label>
              <div className="ml-6 mt-2">
                <label className="inline-flex items-center">
                  <input type="radio" name="aggregate" className="mr-1" />
                  sum
                </label>
                <label className="inline-flex items-center ml-4">
                  <input type="radio" name="aggregate" className="mr-1" defaultChecked />
                  average
                </label>
              </div>
            </div>
          </div>
  
          <div>
            <h3 className="font-medium mb-4">Step 2. Select compressors to compare</h3>
            <div className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Compare</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      Sequence compressors
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      General-purpose compressors
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      Copy (no compression)
                    </label>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Select individual compressors</h4>
                  <select className="w-full border rounded p-2">
                    <option>0 selected</option>
                  </select>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Select compressor settings</h4>
                  <select className="w-full border rounded p-2">
                    <option>0 selected</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
  
          <div>
            <h3 className="font-medium mb-4">Step 3. Configure output</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-medium mb-2">Table</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-1">Columns to show</label>
                    <select className="w-full border rounded p-2">
                      <option>Select columns</option>
                    </select>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 text-sm border rounded hover:bg-gray-50">
                      Show table
                    </button>
                    <button className="px-4 py-2 text-sm border rounded hover:bg-gray-50">
                      Save CSV
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Scatterplot</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-1">X axis</label>
                    <select className="w-full border rounded p-2">
                      <option>Select metric</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Y axis</label>
                    <select className="w-full border rounded p-2">
                      <option>Select metric</option>
                    </select>
                  </div>
                  <button className="px-4 py-2 text-sm border rounded hover:bg-gray-50">
                    Show scatterplot
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  