import '../styles/hero.css'

export default function HeroSection() {
  return (
    <section className="hero">
      {/* Background foto dengan gradient overlay */}
      <div className="hero-bg hero-animate-bg" />
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            {/* Logo DRW di tengah */}
            <div className="hero-logo-wrap hero-animate-title">
              <img src="/logo-drw.png" alt="DRW Corpora Logo" className="hero-logo" />
            </div>
            <h1 className="hero-animate-title">DRW CORPORA</h1>
            <p className="hero-subtitle hero-animate-sub">INDONESIA</p>
          </div>
        </div>
      </div>
    </section>
  )
}
