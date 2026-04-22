import '../styles/doctor.css'
import { useLang } from '../i18n/LanguageContext'
import { translations, t } from '../i18n/translations'

export default function DoctorSection() {
  const { lang } = useLang()
  const d = translations.doctor

  return (
    <section className="doctor-section">
      <div className="doctor-card">
        <div className="doctor-photo-wrap">
          <img src="/dr-wahyu.jpg" alt="dr. Wahyu Triasmara" className="doctor-photo" />
        </div>
        <div className="doctor-info">
          <h2 className="doctor-name">dr. Wahyu Triasmara, M.Kes.AAAM, AIFO-K</h2>
          <p className="doctor-title">{t(d.title, lang)}</p>
          <p className="doctor-bio">{t(d.bio, lang)}</p>
          <div className="doctor-achievements">
            <h4>{t(d.achievements, lang)}</h4>
            <ul>
              <li>{t(d.ach1, lang)}</li>
              <li>{t(d.ach2, lang)}</li>
              <li>{t(d.ach3, lang)}</li>
              <li>{t(d.ach4, lang)}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
