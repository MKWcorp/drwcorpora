import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import DoctorSection from './components/DoctorSection'
import AboutSection from './components/AboutSection'
import VisionMissionSection from './components/VisionMissionSection'
import AwardsSection from './components/AwardsSection'
import ServicesSection from './components/ServicesSection'
import GallerySection from './components/GallerySection'
import FooterSection from './components/FooterSection'

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#EEEBE6' }}>
      <Navbar />
      <HeroSection />
      <DoctorSection />
      <AboutSection />
      <VisionMissionSection />
      <AwardsSection />
      <ServicesSection />
      <GallerySection />
      <FooterSection />
    </div>
  )
}

export default App
