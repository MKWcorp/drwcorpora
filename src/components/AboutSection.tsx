import '../styles/about.css'

export default function AboutSection() {
  return (
    <section id="about" className="about">
        <div className="about-content">
          <div className="about-left">
            <h2 className="about-title">About Us</h2>
            <p className="about-desc">
              DRW Corporation is a leading holding company founded by Dr. Wahyu Triasmara in
              January 2021. We focus on business diversification, from beauty care (Skincare)
              to hospitality services (Hospitality), with a commitment to providing the best
              products and services in every sector.
            </p>
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
