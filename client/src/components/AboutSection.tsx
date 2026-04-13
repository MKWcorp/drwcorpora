import '../styles/about.css'

export default function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>Tentang Kami</h2>
        <div className="about-content grid grid-2">
          <div className="about-text">
            <p>
              DRW Corpora adalah perusahaan konsultasi bisnis terkemuka yang berfokus pada transformasi digital dan pengembangan sumber daya manusia.
            </p>
            <p>
              Dengan pengalaman lebih dari 15 tahun, kami telah membantu ratusan perusahaan mencapai tujuan bisnis mereka melalui solusi inovatif dan strategi yang terbukti efektif.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>500+</h3>
              <p>Klien Terpuaskan</p>
            </div>
            <div className="stat">
              <h3>15+</h3>
              <p>Tahun Pengalaman</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Tim Profesional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
