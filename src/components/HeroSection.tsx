import '../styles/hero.css'

export default function HeroSection() {
  return (
    <section className="hero">
      {/* Background foto dengan gradient overlay */}
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            {/* Logo DRW di tengah */}
            <div className="hero-logo-wrap">
              <img src="/logo-drw.png" alt="DRW Corpora Logo" className="hero-logo" />
            </div>
            <h1>DRW CORPORA</h1>
            <p className="hero-subtitle">INDONESIA</p>
          </div>
        </div>
      </div>
    </section>
  )
}
