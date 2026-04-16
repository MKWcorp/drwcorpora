import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import '../styles/navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo - kiri */}
        <a href="#" className="navbar-logo">
          <div className="logo-icon">DRW</div>
          <span className="logo-text">CORPORA</span>
        </a>

        {/* Menu - tengah */}
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={() => setIsOpen(false)}>Tentang</a></li>
          <li><a href="#services" onClick={() => setIsOpen(false)}>Layanan</a></li>
          <li><a href="#gallery" onClick={() => setIsOpen(false)}>Galeri</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Kontak</a></li>
        </ul>

        {/* Hamburger - mobile */}
        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  )
}
