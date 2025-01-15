export function QuickSelector() {
    return (
      <div className="border border-gray-200 rounded-lg p-6 my-6 bg-green-50/30">
        <h2 className="text-xl font-medium mb-4">Quick Selector</h2>
        
        <div className="space-y-6">
          <div>
            <div className="grid grid-cols-7 gap-4 items-center mb-2">
              <div className="col-span-1">Test data</div>
              <div className="col-span-6 grid grid-cols-7 gap-2 text-center text-sm">
                <div>Tiny</div>
                <div>Small</div>
                <div>Medium</div>
                <div>Large</div>
                <div>DNA</div>
                <div>RNA</div>
                <div>Protein</div>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-4 items-center">
              <div className="col-span-1"></div>
              <div className="col-span-6 grid grid-cols-7 gap-2">
                {Array(7).fill(0).map((_, i) => (
                  <div key={i} className="flex justify-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300"
                      defaultChecked={i === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
  
          <div>
            <div className="font-medium mb-2">Column chart</div>
            <div className="space-y-2">
              <button className="px-3 py-1 text-sm border rounded-full hover:bg-gray-50">
                Compression Ratio
              </button>
              <button className="px-3 py-1 text-sm border rounded-full hover:bg-gray-50 ml-2">
                Decompression Speed
              </button>
            </div>
          </div>
  
          <div>
            <div className="font-medium mb-2">Scatterplot</div>
            <div className="space-y-2">
              <button className="px-3 py-1 text-sm border rounded-full hover:bg-gray-50">
                Compression Ratio vs. Compression / Decompression Speed
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  