import '../styles/about.css'
import { useLang } from '../i18n/LanguageContext'
import { translations, t } from '../i18n/translations'

export default function AboutSection() {
  const { lang } = useLang()
  const a = translations.about

  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-left">
          <h2 className="about-title">{t(a.title, lang)}</h2>
          <p className="about-desc">{t(a.desc, lang)}</p>
        </div>
        <div className="about-right">
          <div className="about-img-wrap">
            <img src="/gedung-drw.jpg" alt="Gedung DRW Corpora" className="about-img" />
          </div>
        </div>
      </div>
    </section>
  )
}
