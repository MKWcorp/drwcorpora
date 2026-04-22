import { useState } from 'react';
import '../styles/awards.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLang } from '../i18n/LanguageContext'
import { translations, t } from '../i18n/translations';

interface AwardSlide {
  image: string;
  title: string; // selalu 2 baris
}

const awards: AwardSlide[] = [
  {
    image: '/award-muri.jpg',
    title: 'Rekor Muri 2023 - Pembagian Serentak Sembako\n55.000 Paket Sembako',
  },
  {
    image: '/award-muri.jpg',
    title: 'Penghargaan Nasional 2022 - Brand Skincare\nTerpercaya Indonesia',
  },
  {
    image: '/award-muri.jpg',
    title: 'Top Brand Award 2021 - DRW Skincare\nKategori Kecantikan & Perawatan',
  },
  {
    image: '/award-muri.jpg',
    title: 'Best Entrepreneur Award 2020 - dr. Wahyu\nTriasmara, M.Kes.AAAM, AIFO-K',
  },
];

export default function AwardsSection() {
  const refSection = useScrollReveal<HTMLElement>({ threshold: 0.1 })
  const { lang } = useLang()
  const aw = translations.awards
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + awards.length) % awards.length);
  const next = () => setCurrent((c) => (c + 1) % awards.length);

  const slide = awards[current];
  const titleLines = slide.title.split('\n');

  return (
    <section className="awards-section reveal reveal-up" ref={refSection}>
      <div className="awards-slider">
        {/* Background foto */}
        <img
          className="awards-bg"
          src={slide.image}
          alt={titleLines[0]}
          key={current}
        />

        {/* Gradient overlay: #666666 0% → #60569A */}
        <div className="awards-gradient" />

        {/* Teks kiri bawah */}
        <div className="awards-caption">
          <p className="awards-label">{t(aw.label, lang)}</p>
          <h2 className="awards-title">
            {titleLines[0]}
            <br />
            {titleLines[1]}
          </h2>
        </div>

        {/* Tombol navigasi */}
        <button className="awards-nav awards-prev" onClick={prev} aria-label="Previous">
          &#8249;
        </button>
        <button className="awards-nav awards-next" onClick={next} aria-label="Next">
          &#8250;
        </button>

        {/* Dots */}
        <div className="awards-dots">
          {awards.map((_, i) => (
            <button
              key={i}
              className={`awards-dot${i === current ? ' active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
