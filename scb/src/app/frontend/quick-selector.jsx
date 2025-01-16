'use client'

import { useState } from 'react'

export default function QuickSelector() {
  const [selectedOptions, setSelectedOptions] = useState({
    tiny: true,
    small: false,
    medium: false,
    large: false,
    dna: false,
    rna: false,
    protein: false,
    alignments: false
  })

  const chartButtons = [
    "Compression Ratio",
    "Decompression Speed",
    "Compression / Decompression Speed",
    "Transfer / Decompression Speed",
    "Compression / Transfer / Decompression Speed"
  ]

  const scatterButtons = [
    "Compression Ratio -vs- Decompression Speed",
    "Compression Ratio -vs- Compression / Decompression Speed",
    "Transfer / Decompression Speed -vs- Compression / Transfer / Decompression Speed"
  ]

  return (
    <div className="border border-green-200 bg-green-50 rounded-lg p-6 mb-8">
      <h2 className="text-2xl text-emerald-600 mb-6 text-center">Quick Selector</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="font-bold text-green-800 mb-2">Test data</h3>
          <div className="space-y-2">
            <h4 className="text-green-700">Genomes</h4>
            {['tiny', 'small', 'medium', 'large'].map((size) => (
              <label key={size} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedOptions[size]}
                  onChange={(e) => setSelectedOptions({
                    ...selectedOptions,
                    [size]: e.target.checked
                  })}
                  className="rounded border-gray-300 text-blue-600"
                />
                {size.charAt(0).toUpperCase() + size.slice(1)}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-green-800 mb-2">Other datasets</h3>
          {['dna', 'rna', 'protein'].map((type) => (
            <label key={type} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedOptions[type]}
                onChange={(e) => setSelectedOptions({
                  ...selectedOptions,
                  [type]: e.target.checked
                })}
                className="rounded border-gray-300 text-blue-600"
              />
              {type.toUpperCase()}
            </label>
          ))}
        </div>

        <div>
          <h3 className="font-bold text-green-800 mb-2">Multiple Sequence Alignments</h3>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedOptions.alignments}
              onChange={(e) => setSelectedOptions({
                ...selectedOptions,
                alignments: e.target.checked
              })}
              className="rounded border-gray-300 text-blue-600"
            />
            Alignments
          </label>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-bold text-green-800 mb-2">Column chart</h3>
          <div className="flex flex-wrap gap-2">
            {chartButtons.map((button) => (
              <button
                key={button}
                className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full text-sm"
              >
                {button}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-green-800 mb-2">Scatterplot</h3>
          <div className="flex flex-wrap gap-2">
            {scatterButtons.map((button) => (
              <button
                key={button}
                className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full text-sm"
              >
                {button}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

