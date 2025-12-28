import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const links = [
    { name: 'Home', id: '' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'FAQs', id: 'faqs' },
    { name: 'Contact', id: '/contact' },
  ]

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [location])

  const handleClick = (id) => {
    setOpen(false)
    if (!id || id === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* LOGO REPLACE TEXT */}
        <Link to="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="ZENN CONSTRUCTION LTD" 
            className="h-14 md:h-16 w-auto object-contain" 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-10">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.id.startsWith('/') ? link.id : `/#${link.id}`}
              onClick={() => handleClick(link.id)}
              className="text-gray-700 hover:text-[#451a03] font-medium transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="lg:hidden">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.id.startsWith('/') ? link.id : `/#${link.id}`}
              onClick={() => handleClick(link.id)}
              className="block px-6 py-4 text-gray-700 hover:bg-[#f5e6d3]/50"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}