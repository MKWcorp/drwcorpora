import { useState } from 'react'
import '../styles/services.css'

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)

  const ITEMS_PER_PAGE = 9

  const categories = ['All', 'Aesthetic & Skincare', 'Wellness', 'Food & Beverages', 'Hospitality', 'CSR']

  const clients = [
    {
      id: 1,
      name: 'DZAWANI VILLA',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663213875053/HLcyMibnZbVVEiyRAtini3/DZAWANIVILLA_0aab53a4.png',
      category: 'Hospitality'
    },
    {
      id: 2,
      name: 'DZAWANI TOUR',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663213875053/HLcyMibnZbVVEiyRAtini3/dzawanitour_b4df90ff.webp',
      category: 'Wellness'
    },
    {
      id: 3,
      name: 'DZAWANI KOST',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663213875053/HLcyMibnZbVVEiyRAtini3/DZAWANIKOSTLOGO_8998fa7c.png',
      category: 'Hospitality'
    },
    {
      id: 4,
      name: 'DRW SKINCARE',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663213875053/HLcyMibnZbVVEiyRAtini3/logobeautycenterpink_a38bad89.webp',
      category: 'Aesthetic & Skincare'
    },
    {
      id: 5,
      name: 'DRW TRANS',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663213875053/HLcyMibnZbVVEiyRAtini3/DRWTRANSLOGO1_e0565602.png',
      category: 'Wellness'
    },
    {
      id: 6,
      name: 'DZAWANI TRAVEL',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663213875053/HLcyMibnZbVVEiyRAtini3/travelindoo-01_0e4a2730.png',
      category: 'Wellness'
    },
    {
      id: 7,
      name: 'HOTEL DZAWANI',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663213875053/HLcyMibnZbVVEiyRAtini3/DZAWANIVILLA_0aab53a4.png',
      category: 'Hospitality'
    },
    {
      id: 8,
      name: 'DRW FOUNDATION',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663213875053/HLcyMibnZbVVEiyRAtini3/logobeautycenterpink_a38bad89.webp',
      category: 'CSR'
    },
    {
      id: 9,
      name: 'BEAUTY CENTER',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663213875053/HLcyMibnZbVVEiyRAtini3/logobeautycenterpink_a38bad89.webp',
      category: 'Aesthetic & Skincare'
    },
    {
      id: 10,
      name: 'DRW KLINIK',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663213875053/HLcyMibnZbVVEiyRAtini3/DRWTRANSLOGO1_e0565602.png',
      category: 'Aesthetic & Skincare'
    },
    {
      id: 11,
      name: 'DZAWANI RESTO',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663213875053/HLcyMibnZbVVEiyRAtini3/dzawanitour_b4df90ff.webp',
      category: 'Food & Beverages'
    },
    {
      id: 12,
      name: 'DRW WELLNESS',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663213875053/HLcyMibnZbVVEiyRAtini3/travelindoo-01_0e4a2730.png',
      category: 'Wellness'
    },
  ]

  const filteredClients = activeCategory === 'All'
    ? clients
    : clients.filter(client => client.category === activeCategory)

  const totalPages = Math.ceil(filteredClients.length / ITEMS_PER_PAGE)
  const paginatedClients = filteredClients.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setCurrentPage(1)
  }

  return (
    <section id="services" className="services">
      {/* Header */}
      <div className="services-header">
        <h2>OUR SERVICES</h2>
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cards Frame — Flow: Vertical, Width: Fill (1280px), Height: Hug, Padding: 64px, Gap: 32px, BG: #EEEBE6 */}
      <div className="services-frame">
        <div className="clients-grid">
          {paginatedClients.map((client) => (
            <div key={client.id} className="client-card">
              <div className="client-logo">
                <img src={client.logo} alt={client.name} />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="services-pagination">
            <button
              className="page-btn"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              ‹
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                className={`page-btn ${currentPage === page ? 'active' : ''}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <button
              className="page-btn"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              ›
            </button>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="services-cta">
        <p>Ingin mengetahui bagaimana layanan kami dapat membantu bisnis Anda?</p>
        <button className="btn btn-primary">Konsultasi Gratis Sekarang</button>
      </div>
    </section>
  )
}
