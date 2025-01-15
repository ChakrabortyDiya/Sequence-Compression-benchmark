import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sequence Compression Benchmark',
  description: 'Benchmark compressors on DNA, RNA and protein sequences',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-6xl mx-auto px-4 py-6`}>
        {children}
      </body>
    </html>
  )
}

