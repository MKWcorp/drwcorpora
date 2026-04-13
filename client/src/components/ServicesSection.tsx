import { Briefcase, BarChart3, Users, Zap, Shield, Lightbulb } from 'lucide-react'
import '../styles/services.css'

export default function ServicesSection() {
  const services = [
    {
      icon: Briefcase,
      title: 'Konsultasi Bisnis',
      description: 'Strategi bisnis yang disesuaikan dengan kebutuhan perusahaan Anda'
    },
    {
      icon: BarChart3,
      title: 'Analisis Data',
      description: 'Mengubah data menjadi insight berharga untuk pengambilan keputusan'
    },
    {
      icon: Users,
      title: 'Pengembangan SDM',
      description: 'Program pelatihan dan pengembangan untuk meningkatkan kompetensi tim'
    },
    {
      icon: Zap,
      title: 'Transformasi Digital',
      description: 'Solusi teknologi untuk modernisasi proses bisnis'
    },
    {
      icon: Shield,
      title: 'Manajemen Risiko',
      description: 'Identifikasi dan mitigasi risiko bisnis secara komprehensif'
    },
    {
      icon: Lightbulb,
      title: 'Inovasi Bisnis',
      description: 'Pengembangan model bisnis dan produk inovatif'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="text-center">Layanan Kami</h2>
        <div className="services-grid grid grid-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <Icon size={40} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
