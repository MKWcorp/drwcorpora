import { Target, Compass, Star, Zap } from 'lucide-react'
import '../styles/vision.css'

export default function VisionMissionSection() {
  return (
    <section className="vision-mission">
      <div className="container">
        <div className="vision-mission-header">
          <h2>Nilai Inti Kami</h2>
          <p>Prinsip-prinsip yang memandu setiap keputusan dan tindakan kami dalam melayani klien.</p>
        </div>

        <div className="vision-mission-grid">
          <div className="vision-card">
            <div className="card-icon vision-icon">
              <Compass size={48} />
            </div>
            <h3>Visi Kami</h3>
            <p>
              Menjadi mitra bisnis terpercaya yang mendorong pertumbuhan dan inovasi berkelanjutan bagi setiap klien kami.
            </p>
            <p>
              Dengan tim profesional dan pengalaman bertahun-tahun, kami siap menghadirkan solusi bisnis yang disesuaikan dengan kebutuhan spesifik Anda.
            </p>
          </div>

          <div className="mission-card">
            <div className="card-icon mission-icon">
              <Target size={48} />
            </div>
            <h3>Misi Kami</h3>
            <ul className="mission-items">
              <li>Memberikan layanan berkualitas tinggi dengan standar internasional</li>
              <li>Membangun hubungan jangka panjang yang saling menguntungkan</li>
              <li>Mendorong inovasi dan pertumbuhan berkelanjutan</li>
              <li>Menjunjung tinggi integritas dan profesionalisme</li>
            </ul>
          </div>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">
              <Star size={32} />
            </div>
            <h4>Integritas</h4>
            <p>Kejujuran dan transparansi dalam setiap interaksi bisnis</p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <Zap size={32} />
            </div>
            <h4>Inovasi</h4>
            <p>Terus berinovasi untuk memberikan solusi terbaik</p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <Compass size={32} />
            </div>
            <h4>Keunggulan</h4>
            <p>Komitmen terhadap kualitas dan keunggulan dalam setiap aspek</p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <Target size={32} />
            </div>
            <h4>Kolaborasi</h4>
            <p>Bekerja sama untuk mencapai tujuan bersama</p>
          </div>
        </div>
      </div>
    </section>
  )
}
