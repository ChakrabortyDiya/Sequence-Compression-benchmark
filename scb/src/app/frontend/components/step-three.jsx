'use client'

import { useState } from 'react'

export default function StepThree() {
  const [scale, setScale] = useState({
    columnChart: 'linear',
    xAxis: 'linear',
    yAxis: 'linear'
  })

  const [chartSize, setChartSize] = useState({
    width: 1500,
    height: 500
  })

  const [fixedRange, setFixedRange] = useState({
    x: { enabled: false, min: 0, max: 0 },
    y: { enabled: false, min: 0, max: 0 }
  })

  const tableColumns = [
    'Name',
    'Compressed size (B)',
    'Compression ratio (times)',
    'Compression time (s)',
    'Decompression time (s)',
    'Compression + decompression time (s)',
    'Transfer + decompression time (s)'
  ]

  return (
    <div className="mt-8">
      <h3 className="text-xl text-gray-700 text-center mb-6">
        Step 3. Configure output
      </h3>

      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="text-lg font-medium text-gray-600 mb-4 text-center">Table</h4>
          <div className="space-y-2">
            <h5 className="font-medium">Columns to show:</h5>
            <div className="space-y-1">
              {tableColumns.map(column => (
                <div key={column} className="flex items-center">
                  <select className="w-full border rounded px-2 py-1">
                    <option>{column}</option>
                  </select>
                </div>
              ))}
            </div>
            <div className="flex gap-2 justify-center mt-4">
              <button className="px-4 py-2 border rounded hover:bg-gray-50">
                Show table
              </button>
              <button className="px-4 py-2 border rounded hover:bg-gray-50">
                Save CSV
              </button>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-medium text-gray-600 mb-4 text-center">Column chart</h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-medium mb-2">Value to plot:</h5>
              <select className="w-full border rounded px-2 py-1">
                <option>Measure used for sorting</option>
              </select>
            </div>

            <div>
              <h5 className="font-medium mb-2">Scale:</h5>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="chartScale"
                    value="linear"
                    checked={scale.columnChart === 'linear'}
                    onChange={(e) => setScale(prev => ({
                      ...prev,
                      columnChart: e.target.value
                    }))}
                    className="text-blue-600"
                  />
                  linear
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="chartScale"
                    value="logarithmic"
                    checked={scale.columnChart === 'logarithmic'}
                    onChange={(e) => setScale(prev => ({
                      ...prev,
                      columnChart: e.target.value
                    }))}
                    className="text-blue-600"
                  />
                  logarithmic
                </label>
              </div>
            </div>

            <div>
              <h5 className="font-medium mb-2">Chart size:</h5>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={chartSize.width}
                  onChange={(e) => setChartSize(prev => ({
                    ...prev,
                    width: parseInt(e.target.value)
                  }))}
                  className="w-20 border rounded px-2 py-1"
                />
                <span>x</span>
                <input
                  type="number"
                  value={chartSize.height}
                  onChange={(e) => setChartSize(prev => ({
                    ...prev,
                    height: parseInt(e.target.value)
                  }))}
                  className="w-20 border rounded px-2 py-1"
                />
                <span>pixels</span>
              </div>
            </div>

            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-gray-300" />
              Highlight specialized vs general-purpose compressors
            </label>

            <div className="flex justify-center">
              <button className="px-4 py-2 border rounded hover:bg-gray-50">
                Show column chart
              </button>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-medium text-gray-600 mb-4 text-center">Scatterplot</h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-medium mb-2">X axis:</h5>
              <select className="w-full border rounded px-2 py-1">
                <option>Transfer + decompression speed (MB/s)</option>
              </select>
              
              <div className="mt-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={fixedRange.x.enabled}
                    onChange={(e) => setFixedRange(prev => ({
                      ...prev,
                      x: { ...prev.x, enabled: e.target.checked }
                    }))}
                    className="rounded border-gray-300"
                  />
                  Fixed range:
                </label>
                <div className="flex items-center gap-2 ml-4">
                  <input
                    type="number"
                    value={fixedRange.x.min}
                    onChange={(e) => setFixedRange(prev => ({
                      ...prev,
                      x: { ...prev.x, min: parseInt(e.target.value) }
                    }))}
                    disabled={!fixedRange.x.enabled}
                    className="w-20 border rounded px-2 py-1"
                  />
                  ..
                  <input
                    type="number"
                    value={fixedRange.x.max}
                    onChange={(e) => setFixedRange(prev => ({
                      ...prev,
                      x: { ...prev.x, max: parseInt(e.target.value) }
                    }))}
                    disabled={!fixedRange.x.enabled}
                    className="w-20 border rounded px-2 py-1"
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="xAxisScale"
                    value="linear"
                    checked={scale.xAxis === 'linear'}
                    onChange={(e) => setScale(prev => ({
                      ...prev,
                      xAxis: e.target.value
                    }))}
                    className="text-blue-600"
                  />
                  linear
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="xAxisScale"
                    value="logarithmic"
                    checked={scale.xAxis === 'logarithmic'}
                    onChange={(e) => setScale(prev => ({
                      ...prev,
                      xAxis: e.target.value
                    }))}
                    className="text-blue-600"
                  />
                  logarithmic
                </label>
              </div>
            </div>

            <div>
              <h5 className="font-medium mb-2">Y axis:</h5>
              <select className="w-full border rounded px-2 py-1">
                <option>Compression + transfer + decompression speed (MB/s)</option>
              </select>
              
              <div className="mt-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={fixedRange.y.enabled}
                    onChange={(e) => setFixedRange(prev => ({
                      ...prev,
                      y: { ...prev.y, enabled: e.target.checked }
                    }))}
                    className="rounded border-gray-300"
                  />
                  Fixed range:
                </label>
                <div className="flex items-center gap-2 ml-4">
                  <input
                    type="number"
                    value={fixedRange.y.min}
                    onChange={(e) => setFixedRange(prev => ({
                      ...prev,
                      y: { ...prev.y, min: parseInt(e.target.value) }
                    }))}
                    disabled={!fixedRange.y.enabled}
                    className="w-20 border rounded px-2 py-1"
                  />
                  ..
                  <input
                    type="number"
                    value={fixedRange.y.max}
                    onChange={(e) => setFixedRange(prev => ({
                      ...prev,
                      y: { ...prev.y, max: parseInt(e.target.value) }
                    }))}
                    disabled={!fixedRange.y.enabled}
                    className="w-20 border rounded px-2 py-1"
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="yAxisScale"
                    value="linear"
                    checked={scale.yAxis === 'linear'}
                    onChange={(e) => setScale(prev => ({
                      ...prev,
                      yAxis: e.target.value
                    }))}
                    className="text-blue-600"
                  />
                  linear
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="yAxisScale"
                    value="logarithmic"
                    checked={scale.yAxis === 'logarithmic'}
                    onChange={(e) => setScale(prev => ({
                      ...prev,
                      yAxis: e.target.value
                    }))}
                    className="text-blue-600"
                  />
                  logarithmic
                </label>
              </div>
            </div>

            <div className="flex justify-center">
              <button className="px-4 py-2 border rounded hover:bg-gray-50">
                Show scatterplot
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-600">
        By <a href="#" className="text-blue-600 hover:underline">Contributors</a>, 2019-2024, public domain
      </div>
    </div>
  )
}

