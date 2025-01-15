import Link from 'next/link'

export function Navigation() {
  const links = [
    'About',
    'Examples',
    'Method',
    'Datasets',
    'Compressors',
    'Commands',
    'Wrappers',
    'Links'
  ]

  return (
    <nav className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
      {links.map((link) => (
        <Link
          key={link}
          href={`#${link.toLowerCase()}`}
          className="text-blue-600 hover:text-blue-800"
        >
          {link}
        </Link>
      ))}
    </nav>
  )
}

