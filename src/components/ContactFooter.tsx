import { Mail, Phone, MapPin } from 'lucide-react'
import '../styles/contact.css'

export default function ContactFooter() {
  return (
    <section id="contact" className="contact-footer">
      <div className="container">
        <div className="contact-content grid grid-2">
          <div className="contact-info">
            <h2>Hubungi Kami</h2>
            <div className="contact-item">
              <Phone size={24} />
              <div>
                <p className="label">Telepon</p>
                <p>+62 21 1234 5678</p>
              </div>
            </div>
            <div className="contact-item">
              <Mail size={24} />
              <div>
                <p className="label">Email</p>
                <p>info@drwcorpora.com</p>
              </div>
            </div>
            <div className="contact-item">
              <MapPin size={24} />
              <div>
                <p className="label">Alamat</p>
                <p>Jakarta, Indonesia</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <input type="text" placeholder="Nama Anda" required />
              <input type="email" placeholder="Email Anda" required />
              <textarea placeholder="Pesan Anda" rows={5} required></textarea>
              <button type="submit" className="btn btn-primary">Kirim Pesan</button>
            </form>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 DRW Corpora. All rights reserved.</p>
      </footer>
    </section>
  )
}
