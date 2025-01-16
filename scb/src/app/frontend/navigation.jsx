export default function Navigation() {
    const links = [
      "About",
      "Examples", 
      "Method",
      "Datasets",
      "Compressors",
      "Commands",
      "Wrappers",
      "Links"
    ]
  
    return (
      <nav className="mb-6">
        <ul className="flex gap-6 justify-center flex-wrap">
          {links.map((link) => (
            <li key={link}>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-lg">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
  
  