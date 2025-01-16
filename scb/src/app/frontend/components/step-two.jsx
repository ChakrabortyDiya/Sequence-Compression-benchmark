'use client'

import { useState } from 'react'

export default function StepTwo() {
  const [compressorTypes, setCompressorTypes] = useState({
    sequence: true,
    generalPurpose: true,
    copy: true,
    wrappers: false
  })

  const [bestSettings, setBestSettings] = useState({
    enabled: true,
    count: 1
  })

  const [showOptions, setShowOptions] = useState({
    reverseSort: false,
    showTopN: false,
    showRelative: false
  })

  const [topN, setTopN] = useState(10)
  const [linkSpeed, setLinkSpeed] = useState(100)
  const [relativeValue, setRelativeValue] = useState('gzip-9')

  const specializedCompressors = [
    '2bit', 'ac', 'alapy', 'beetl', 'blast', 'dcom', 'dlim', 'dnax', 'dsrc',
    'fastqz', 'fqs', 'fqzcomp', 'geco', 'geco2', 'geco3', 'gtz', 'harc'
  ]

  const compressorSettings = [
    '2bit', 'ac-fa-1', 'ac-fa-2', 'ac-fa-3', 'ac-fa-4', 'ac-fa-5',
    'ac-fa-6', 'ac-fa-7', 'ac-seq-1', 'ac-seq-2', 'ac-seq-3', 'ac-seq-4',
    'ac-seq-5', 'ac-seq-6', 'ac-seq-7', 'alapy-b', 'alapy-f', 'alapy-m'
  ]

  return (
    <div className="mt-8">
      <h3 className="text-xl text-gray-700 text-center mb-6">
        Step 2. Select compressors to compare
      </h3>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Compare:</h4>
            <div className="space-y-2">
              {Object.entries({
                sequence: 'Sequence compressors',
                generalPurpose: 'General-purpose compressors',
                copy: 'Copy (no compression)',
                wrappers: 'Wrappers'
              }).map(([key, label]) => (
                <label key={key} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={compressorTypes[key]}
                    onChange={(e) => setCompressorTypes(prev => ({
                      ...prev,
                      [key]: e.target.checked
                    }))}
                    className="rounded border-gray-300"
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span>Include</span>
              <select className="border rounded px-2 py-1">
                <option>free and non-free</option>
              </select>
              <span>compressors</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span>Include</span>
              <select className="border rounded px-2 py-1">
                <option>open and closed source</option>
              </select>
              <span>compressors</span>
            </div>

            <div className="flex items-center gap-2">
              <span>Use results from</span>
              <select className="border rounded px-2 py-1">
                <option>1 and 4 thread</option>
              </select>
              <span>tests</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={bestSettings.enabled}
                onChange={(e) => setBestSettings(prev => ({
                  ...prev,
                  enabled: e.target.checked
                }))}
                className="rounded border-gray-300"
              />
              Only
              <input
                type="number"
                value={bestSettings.count}
                onChange={(e) => setBestSettings(prev => ({
                  ...prev,
                  count: parseInt(e.target.value)
                }))}
                className="w-16 border rounded px-2 py-1"
              />
              best setting(s) in terms of
            </label>

            <select className="w-full border rounded px-2 py-1">
              <option>Transfer + decompression speed</option>
            </select>

            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={showOptions.reverseSort}
                  onChange={(e) => setShowOptions(prev => ({
                    ...prev,
                    reverseSort: e.target.checked
                  }))}
                  className="rounded border-gray-300"
                />
                Reverse sort order
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={showOptions.showTopN}
                  onChange={(e) => setShowOptions(prev => ({
                    ...prev,
                    showTopN: e.target.checked
                  }))}
                  className="rounded border-gray-300"
                />
                Show only top
                <input
                  type="number"
                  value={topN}
                  onChange={(e) => setTopN(parseInt(e.target.value))}
                  className="w-16 border rounded px-2 py-1"
                />
                entries
              </label>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span>Link speed:</span>
                <input
                  type="number"
                  value={linkSpeed}
                  onChange={(e) => setLinkSpeed(parseInt(e.target.value))}
                  className="w-20 border rounded px-2 py-1"
                />
                <span>Mbit/s (for estimating transfer time)</span>
              </div>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={showOptions.showRelative}
                  onChange={(e) => setShowOptions(prev => ({
                    ...prev,
                    showRelative: e.target.checked
                  }))}
                  className="rounded border-gray-300"
                />
                Show all values relative to
                <input
                  type="text"
                  value={relativeValue}
                  onChange={(e) => setRelativeValue(e.target.value)}
                  className="w-24 border rounded px-2 py-1"
                />
              </label>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Select individual compressors:</h4>
          <select size={10} multiple className="w-full border rounded p-2">
            {specializedCompressors.map(comp => (
              <option key={comp} value={comp}>{comp}</option>
            ))}
          </select>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Select individual compressor settings:</h4>
          <select size={10} multiple className="w-full border rounded p-2">
            {compressorSettings.map(setting => (
              <option key={setting} value={setting}>{setting}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

