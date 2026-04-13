import '../styles/gallery.css'

export default function GallerySection() {
  const galleryItems = [
    { id: 1, title: 'Team Meeting', category: 'Event' },
    { id: 2, title: 'Workshop', category: 'Training' },
    { id: 3, title: 'Conference', category: 'Event' },
    { id: 4, title: 'Project Launch', category: 'Project' },
    { id: 5, title: 'Team Building', category: 'Event' },
    { id: 6, title: 'Award Ceremony', category: 'Achievement' }
  ]

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="text-center">Galeri</h2>
        <div className="gallery-grid grid grid-3">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-image">
                <div className="placeholder">{item.id}</div>
              </div>
              <div className="gallery-info">
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
