import '../styles/about.css'

export default function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-left">
            <h2>Tentang DRW Corpora</h2>
            <p className="about-intro">
              Kami adalah perusahaan yang berkomitmen untuk memberikan solusi bisnis terbaik dengan inovasi dan profesionalisme tinggi.
            </p>
            
            <div className="about-section">
              <h3>Visi Kami</h3>
              <p>
                Menjadi mitra bisnis terpercaya yang mendorong pertumbuhan dan inovasi berkelanjutan bagi setiap klien kami.
              </p>
              <p>
                Dengan tim profesional dan pengalaman bertahun-tahun, kami siap menghadirkan solusi bisnis yang disesuaikan dengan kebutuhan spesifik Anda.
              </p>
            </div>
            
            <div className="about-section">
              <h3>Misi Kami</h3>
              <ul className="mission-list">
                <li>Memberikan layanan berkualitas tinggi dengan standar internasional</li>
                <li>Membangun hubungan jangka panjang yang saling menguntungkan</li>
                <li>Mendorong inovasi dan pertumbuhan berkelanjutan</li>
                <li>Menjunjung tinggi integritas dan profesionalisme</li>
              </ul>
            </div>
          </div>
          
          <div className="about-right">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">📊</div>
                <h4>2015</h4>
                <p>Tahun Berdiri</p>
                <span className="stat-desc">Pengalaman lebih dari 8 tahun melayani klien</span>
              </div>
              <div className="stat-card">
                <div className="stat-icon">👥</div>
                <h4>50+</h4>
                <p>Tim Profesional</p>
                <span className="stat-desc">Expert di berbagai bidang bisnis</span>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🎯</div>
                <h4>200+</h4>
                <p>Klien Puas</p>
                <span className="stat-desc">Kepercayaan dari berbagai industri</span>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🏆</div>
                <h4>15+</h4>
                <p>Penghargaan</p>
                <span className="stat-desc">Prestasi dan sertifikasi internasional</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
