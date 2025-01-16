'use client'

export function CompressorLists() {
  const specializedCompressors = [
    "2bit", "ac", "alapy", "beetl", "blast", "dcom", "dlim", "dsrc", 
    "fastqz", "fqc", "fqzcomp", "gdc", "geco", "gto", "gtz", "kic",
    "leon", "lfqc", "lw-fqzip", "mfcompress", "minicom", "naf", "nuht",
    "pathenc", "quip", "scalce", "spring", "uht"
  ]

  const generalCompressors = [
    "brotli", "bsc", "bzip2", "cmix", "csc", "dcc", "deflate", "gzip",
    "lrzip", "lz4", "lzma", "lzop", "pbzip2", "pigz", "plzip", "ppm",
    "zpaq", "zstd"
  ]

  const compressorSettings = [
    "2bit", "ac-fa-1", "ac-fa-2", "ac-fa-3", "ac-fa-4", "ac-fa-5",
    "ac-fa-6", "ac-fa-7", "ac-fa-8", "alapy-default", "blast-default",
    "brotli-1", "brotli-5", "brotli-9", "brotli-11", "bsc-default",
    "bzip2-1", "bzip2-5", "bzip2-9"
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <div className="border rounded-lg p-4">
        <h4 className="font-semibold mb-2">Select individual compressors:</h4>
        <div className="h-64 overflow-y-auto space-y-1">
          <h5 className="font-medium text-sm text-gray-600">Specialized</h5>
          {specializedCompressors.map(comp => (
            <label key={comp} className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-gray-300" />
              {comp}
            </label>
          ))}
          <h5 className="font-medium text-sm text-gray-600 mt-4">General-purpose</h5>
          {generalCompressors.map(comp => (
            <label key={comp} className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-gray-300" />
              {comp}
            </label>
          ))}
        </div>
      </div>

      <div className="border rounded-lg p-4">
        <h4 className="font-semibold mb-2">Select individual compressor settings:</h4>
        <div className="h-64 overflow-y-auto space-y-1">
          {compressorSettings.map(setting => (
            <label key={setting} className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-gray-300" />
              {setting}
            </label>
          ))}
        </div>
      </div>

      <div className="border rounded-lg p-4">
        <h4 className="font-semibold mb-2">Optimization criteria:</h4>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="radio" name="criteria" className="text-blue-600" defaultChecked />
            Compression ratio
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="criteria" className="text-blue-600" />
            Compression speed
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="criteria" className="text-blue-600" />
            Decompression speed
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="criteria" className="text-blue-600" />
            Combined speed
          </label>
        </div>
      </div>
    </div>
  )
}

