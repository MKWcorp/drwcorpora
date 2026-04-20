import '../styles/vision.css'

export default function VisionMissionSection() {
  return (
    <section className="vision-mission">
      <div className="vm-container">
        {/* Vision Row: icon kiri, teks kanan */}
        <div className="vm-row vision-row">
          <div className="vm-icon-wrap">
            <img src="/icon-vision.png" alt="Vision Icon" className="vm-icon" />
          </div>
          <div className="vm-text vision-text">
            <h3 className="vm-title vision-title">Vision</h3>
            <p className="vm-desc">
              Becoming a trusted and reliable holding company with a strong corporate character
              to fulfill social responsibilities to the people, society, and the country.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="vm-divider" />

        {/* Mission Row: teks kiri, icon kanan */}
        <div className="vm-row mission-row">
          <div className="vm-text mission-text">
            <h3 className="vm-title mission-title">Mission</h3>
            <p className="vm-desc">
              Becoming a trusted and reliable holding company with a strong corporate character
              to fulfill social responsibilities to the people, society, and the country.
            </p>
          </div>
          <div className="vm-icon-wrap">
            <img src="/icon-mission.png" alt="Mission Icon" className="vm-icon" />
          </div>
        </div>
      </div>
    </section>
  )
}
