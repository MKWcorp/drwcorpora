import { MapPin, Phone, Mail } from "lucide-react"
import "../styles/footer.css"
import { useLang } from '../i18n/LanguageContext'
import { translations, t } from '../i18n/translations'

export default function FooterSection() {
  const { lang } = useLang()
  const f = translations.footer
  const svc = translations.services

  const NAV_LINKS = [
    { label: t(f.navLinks.about, lang),    href: "#about" },
    { label: t(f.navLinks.vision, lang),   href: "#vision" },
    { label: t(f.navLinks.awards, lang),   href: "#awards" },
    { label: t(f.navLinks.services, lang), href: "#services" },
    { label: t(f.navLinks.gallery, lang),  href: "#gallery" },
  ]

  return (
    <footer id="contact" className="footer-section">
      <div className="footer-inner">
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/drw-logo-icon.png" alt="DRW Logo" className="footer-logo-img" />
            <div className="footer-logo-text">
              <span className="footer-logo-name">DRW CORPORA</span>
              <span className="footer-logo-sub">INDONESIA</span>
            </div>
          </div>
          <nav className="footer-nav">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="footer-nav-link">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="footer-right">
          <h3 className="footer-contact-title">{t(f.contact, lang)}</h3>
          <div className="footer-contact-items">
            <div className="footer-contact-item">
              <MapPin size={18} className="footer-icon" />
              <span>{t(f.address, lang)}</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} className="footer-icon" />
              <span>+628112633991</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} className="footer-icon" />
              <span>info@drwcorpora.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>{t(f.copyright, lang)}</p>
      </div>
    </footer>
  )
}
