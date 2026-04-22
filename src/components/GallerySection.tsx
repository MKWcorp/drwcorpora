import { useState } from 'react'
import '../styles/gallery.css'

const CATEGORIES = ['All', 'Aesthetic & Skincare', 'Wellness', 'Food & Beverages', 'Hospitality', 'CSR']

const galleryItems = [
  {
    id: 1,
    src: '/gallery_rekor_muri.jpg',
    title: 'Penganugerahan Rekor MURI',
    category: 'Aesthetic & Skincare',
  },
  {
    id: 2,
    src: '/gallery_produksi.webp',
    title: 'Fasilitas Produksi',
    category: 'Food & Beverages',
  },
  {
    id: 3,
    src: '/gallery_lab.webp',
    title: 'Laboratorium R&D',
    category: 'Aesthetic & Skincare',
  },
]

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section id="gallery" className="gallery-section">
      {/* Header */}
      <h2 className="gallery-title">Gallery</h2>

      {/* Filter */}
      <div className="gallery-filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`gallery-filter-btn${activeCategory === cat ? ' active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards */}
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
