import '../styles/vision.css'
import { useLang } from '../i18n/LanguageContext'
import { translations, t } from '../i18n/translations'

export default function VisionMissionSection() {
  const { lang } = useLang()
  const v = translations.vision
  const m = translations.mission

  return (
    <section className="vision-mission">
      <div className="vm-container">
        <div className="vm-row vision-row">
          <div className="vm-icon-wrap">
            <img src="/icon-vision.png" alt="Vision Icon" className="vm-icon" />
          </div>
          <div className="vm-text vision-text">
            <h3 className="vm-title vision-title">{t(v.title, lang)}</h3>
            <p className="vm-desc">{t(v.desc, lang)}</p>
          </div>
        </div>
        <div className="vm-divider" />
        <div className="vm-row mission-row">
          <div className="vm-text mission-text">
            <h3 className="vm-title mission-title">{t(m.title, lang)}</h3>
            <p className="vm-desc">{t(m.desc, lang)}</p>
          </div>
          <div className="vm-icon-wrap">
            <img src="/icon-mission.png" alt="Mission Icon" className="vm-icon" />
          </div>
        </div>
      </div>
    </section>
  )
}
