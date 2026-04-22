import { useState } from 'react'
import '../styles/gallery.css'
import { useLang } from '../i18n/LanguageContext'
import { translations, t } from '../i18n/translations'

export default function GallerySection() {
  const { lang } = useLang()
  const g = translations.gallery
  const svc = translations.services

  const CATEGORIES = [
    { key: 'all',         label: t(svc.categories.all, lang) },
    { key: 'aesthetic',   label: t(svc.categories.aesthetic, lang) },
    { key: 'wellness',    label: t(svc.categories.wellness, lang) },
    { key: 'food',        label: t(svc.categories.food, lang) },
    { key: 'hospitality', label: t(svc.categories.hospitality, lang) },
    { key: 'csr',         label: t(svc.categories.csr, lang) },
  ]

  const galleryItems = [
    { id: 1, src: '/gallery_rekor_muri.jpg',  title: t(g.items.muri, lang),     categoryKey: 'aesthetic' },
    { id: 2, src: '/gallery_produksi.webp',   title: t(g.items.produksi, lang), categoryKey: 'food' },
    { id: 3, src: '/gallery_lab.webp',        title: t(g.items.lab, lang),      categoryKey: 'aesthetic' },
  ]

  const [activeKey, setActiveKey] = useState('all')

  const filtered = activeKey === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.categoryKey === activeKey)

  return (
    <section id="gallery" className="gallery-section">
      <h2 className="gallery-title">{t(g.title, lang)}</h2>
      <div className="gallery-filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            className={`gallery-filter-btn${activeKey === cat.key ? ' active' : ''}`}
            onClick={() => setActiveKey(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="gallery-grid">
        {filtered.map((item) => (
          <div key={item.id} className="gallery-card">
            <img src={item.src} alt={item.title} className="gallery-card-img" />
          </div>
        ))}
      </div>
    </section>
  )
}
