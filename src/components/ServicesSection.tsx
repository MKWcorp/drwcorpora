import { Briefcase, BarChart3, Users, Zap, Shield, Lightbulb } from 'lucide-react'
import '../styles/services.css'

export default function ServicesSection() {
  const services = [
    {
      icon: Briefcase,
      title: 'Konsultasi Bisnis',
      description: 'Strategi bisnis yang disesuaikan dengan kebutuhan perusahaan Anda untuk pertumbuhan optimal.',
      details: [
        'Analisis pasar',
        'Strategi kompetitif',
        'Perencanaan operasional'
      ]
    },
    {
      icon: BarChart3,
      title: 'Analisis Data',
      description: 'Transformasi data menjadi insight berharga untuk pengambilan keputusan yang lebih baik dan akurat.',
      details: [
        'Business intelligence',
        'Predictive analytics',
        'Dashboard reporting'
      ]
    },
    {
      icon: Users,
      title: 'Pengembangan SDM',
      description: 'Program pelatihan dan pengembangan untuk meningkatkan kompetensi dan produktivitas tim Anda.',
      details: [
        'Training programs',
        'Leadership development',
        'Team building'
      ]
    },
    {
      icon: Zap,
      title: 'Transformasi Digital',
      description: 'Solusi teknologi modern untuk mengoptimalkan proses bisnis dan meningkatkan efisiensi operasional.',
      details: [
        'Digital strategy',
        'System integration',
        'Process automation'
      ]
    },
    {
      icon: Shield,
      title: 'Manajemen Risiko',
      description: 'Identifikasi dan mitigasi risiko bisnis secara komprehensif untuk melindungi aset perusahaan Anda.',
      details: [
        'Risk assessment',
        'Compliance',
        'Crisis management'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Inovasi & R&D',
      description: 'Mendorong inovasi produk dan layanan untuk tetap kompetitif di pasar yang dinamis.',
      details: [
        'Product innovation',
        'Market research',
        'Technology scouting'
      ]
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <h2>Layanan Kami</h2>
          <p>Kami menghadirkan rangkaian layanan komprehensif untuk mendukung pertumbuhan bisnis Anda di era modern.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <Icon size={40} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-details">
                  {service.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
        <div className="services-cta">
          <p>Ingin mengetahui bagaimana layanan kami dapat membantu bisnis Anda?</p>
          <button className="btn btn-primary">Konsultasi Gratis Sekarang</button>
        </div>
      </div>
    </section>
  )
}
