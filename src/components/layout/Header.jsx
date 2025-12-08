import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const links = ['Home','Services','About','Testimonials','Gallery','FAQs','Contact']

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="heading text-2xl text-[#451a03]">
  ZENN<span className="text-[#5c2a0a]"> CONSTRUCTION</span> LTD
</Link>
        <nav className="hidden lg:flex space-x-10">
          {links.map(l => (
            <Link key={l} to={l==='Home'?'/':l==='Contact'?'/contact':`/#${l.toLowerCase()}`}
                  className="text-gray-600 hover:text-blue-700 font-medium transition">
              {l}
            </Link>
          ))}
        </nav>
        <button onClick={()=>setOpen(!open)} className="lg:hidden">
          {open ? <X size={28}/> : <Menu size={28}/>}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-white border-t">
          {links.map(l => (
            <Link key={l} to={l==='Home'?'/':l==='Contact'?'/contact':`/#${l.toLowerCase()}`}
                  onClick={()=>setOpen(false)} className="block px-6 py-4 hover:bg-gray-100">
              {l}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}