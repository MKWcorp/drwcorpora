import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import '../styles/gallery.css'

export default function GallerySection() {
  const [activeSlide, setActiveSlide] = useState(0)

  const galleryItems = [
    { id: 1, title: 'Team Meeting 2024', category: 'Aktivitas' },
    { id: 2, title: 'Workshop', category: 'Training' },
    { id: 3, title: 'Conference', category: 'Event' },
    { id: 4, title: 'Project Launch', category: 'Project' },
    { id: 5, title: 'Team Building', category: 'Event' },
    { id: 6, title: 'Award Ceremony', category: 'Achievement' }
  ]

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % galleryItems.length)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
  }

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery-header">
          <h2>Galeri Kami</h2>
          <p>Dokumentasi aktivitas, event, dan pencapaian DRW Corpora dalam melayani klien.</p>
        </div>

        <div className="gallery-carousel">
          <div className="carousel-main">
            <div className="carousel-slide">
              <div className="carousel-image">
                <div className="carousel-placeholder" style={{
                  background: `linear-gradient(135deg, hsl(${activeSlide * 60}, 70%, 50%) 0%, hsl(${activeSlide * 60 + 60}, 70%, 50%) 100%)`
                }}>
                  <span>{galleryItems[activeSlide].id}</span>
                </div>
              </div>
              <div className="carousel-info">
                <h3>{galleryItems[activeSlide].title}</h3>
                <p>{galleryItems[activeSlide].category}</p>
              </div>
            </div>

            <button className="carousel-btn prev" onClick={prevSlide}>
              <ChevronLeft size={24} />
            </button>
            <button className="carousel-btn next" onClick={nextSlide}>
              <ChevronRight size={24} />
            </button>

            <div className="carousel-dots">
              {galleryItems.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === activeSlide ? 'active' : ''}`}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="gallery-thumbnails">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`thumbnail ${index === activeSlide ? 'active' : ''}`}
              onClick={() => setActiveSlide(index)}
            >
              <div className="thumbnail-image" style={{
                background: `linear-gradient(135deg, hsl(${index * 60}, 70%, 50%) 0%, hsl(${index * 60 + 60}, 70%, 50%) 100%)`
              }}>
                <span>{item.id}</span>
              </div>
              <div className="thumbnail-info">
                <h4>{item.title}</h4>
                <p>{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
