import { useState } from 'react'
import '../styles/services.css'

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'Aesthetic & Skincare', 'Wellness', 'Food & Beverages', 'Hospitality']

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
    }
  ]

  const filteredClients = activeCategory === 'All' 
    ? clients 
    : clients.filter(client => client.category === activeCategory)

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <h2>Layanan Kami</h2>
          <p>Kami telah bekerja sama dengan berbagai brand terkemuka untuk menghadirkan solusi terbaik.</p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Logo Grid */}
        <div className="clients-grid">
          {filteredClients.map((client) => (
            <div key={client.id} className="client-card">
              <div className="client-logo">
                <img src={client.logo} alt={client.name} />
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <p>Ingin mengetahui bagaimana layanan kami dapat membantu bisnis Anda?</p>
          <button className="btn btn-primary">Konsultasi Gratis Sekarang</button>
        </div>
      </div>
    </section>
  )
}
