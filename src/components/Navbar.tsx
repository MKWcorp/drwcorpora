import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import '../styles/navbar.css'
import { useLang } from '../i18n/LanguageContext'
import { translations, t } from '../i18n/translations'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { lang, toggleLang } = useLang()
  const nav = translations.navbar

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
          <img src="/drw-logo-icon.png" alt="DRW Logo" className="logo-img" />
          <div className="logo-text-group">
            <span className="logo-name">DRW CORPORA</span>
            <span className="logo-sub">INDONESIA</span>
          </div>
        </a>

        {/* Menu - tengah */}
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li><a href="#about"    onClick={() => setIsOpen(false)}>{t(nav.about, lang)}</a></li>
          <li><a href="#services" onClick={() => setIsOpen(false)}>{t(nav.services, lang)}</a></li>
          <li><a href="#gallery"  onClick={() => setIsOpen(false)}>{t(nav.gallery, lang)}</a></li>
          <li><a href="#contact"  onClick={() => setIsOpen(false)}>{t(nav.contact, lang)}</a></li>
        </ul>

        {/* Kanan: toggle bahasa + hamburger */}
        <div className="navbar-right">
          {/* Toggle Bahasa */}
          <button className="lang-toggle" onClick={toggleLang} aria-label="Toggle language">
            <span className={lang === 'id' ? 'lang-active' : 'lang-inactive'}>ID</span>
            <span className="lang-sep">|</span>
            <span className={lang === 'en' ? 'lang-active' : 'lang-inactive'}>EN</span>
          </button>

          {/* Hamburger - mobile */}
          <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  )
}
