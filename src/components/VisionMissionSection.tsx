import { Target, Compass } from 'lucide-react'
import '../styles/vision.css'

export default function VisionMissionSection() {
  return (
    <section className="vision-mission">
      <div className="container">
        <div className="vision-mission-grid grid grid-2">
          <div className="vision-card">
            <div className="card-icon">
              <Compass size={48} />
            </div>
            <h3>Visi</h3>
            <p>Menjadi mitra terpercaya dalam transformasi digital dan pengembangan bisnis di Asia Tenggara.</p>
          </div>
          <div className="mission-card">
            <div className="card-icon">
              <Target size={48} />
            </div>
            <h3>Misi</h3>
            <p>Memberikan solusi bisnis inovatif yang meningkatkan efisiensi, produktivitas, dan pertumbuhan berkelanjutan.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
