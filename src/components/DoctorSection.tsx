import '../styles/doctor.css'

export default function DoctorSection() {
  return (
    <section className="doctor-section">
      <div className="container">
        <div className="doctor-card">
          <div className="doctor-photo-wrap">
            <img src="/dr-wahyu.jpg" alt="dr. Wahyu Triasmara" className="doctor-photo" />
          </div>
          <div className="doctor-info">
            <h2 className="doctor-name">dr. Wahyu Triasmara, M.Kes.AAAM, AIFO-K</h2>
            <p className="doctor-title">President Director</p>
            <p className="doctor-bio">
              Dr. Wahyu Triasmara is a doctor and visionary entrepreneur who transformed his
              expertise into a successful business. Starting with a single clinic in 2015, he
              founded PT DRW Corpora Indonesia and built the DRW Skincare brand, expanding it
              into a thriving network of beauty centers and clinics.
            </p>
            <div className="doctor-achievements">
              <h4>Key Achievements</h4>
              <ul>
                <li>Transformed a single clinic into a nationwide skincare brand.</li>
                <li>Successfully founded and leads PT DRW Corpora Indonesia.</li>
                <li>
                  Established numerous Beauty Center DRW Skincare branches and the Klinik
                  Pratama DRW Estetika.
                </li>
                <li>
                  Utilizes social media to build a strong brand presence and educate the
                  public on skincare.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
