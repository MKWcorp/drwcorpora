import { MapPin, Phone, Mail } from "lucide-react"
import "../styles/footer.css"

const NAV_LINKS = [
  { label: "About us", href: "#about" },
  { label: "Vision & Mission", href: "#vision" },
  { label: "Awards", href: "#awards" },
  { label: "Our Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
]

export default function FooterSection() {
  return (
    <footer id="contact" className="footer-section">
      <div className="footer-inner">
        {/* Logo + Nav */}
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

        {/* Contact */}
        <div className="footer-right">
          <h3 className="footer-contact-title">Contact US</h3>
          <div className="footer-contact-items">
            <div className="footer-contact-item">
              <MapPin size={18} className="footer-icon" />
              <span>Karang Jambe, Banguntapan,<br />Banguntapan District, Bantul Regency,<br />Special Region of Yogyakarta</span>
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

      {/* Copyright */}
      <div className="footer-copyright">
        <p>Copyright &copy; 2026</p>
      </div>
    </footer>
  )
}
