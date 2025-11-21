'use client';

import { useEffect, useRef, useState } from 'react';

export default function PartnerSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // 상단 슬라이더 로고 (12개)
  const topLogos = [
    { src: '/images/logos/hyundai.png', alt: '현대' },
    { src: '/images/logos/samsung.png', alt: '삼성' },
    { src: '/images/logos/lg.png', alt: 'LG' },
    { src: '/images/logos/sk.png', alt: 'SK' },
    { src: '/images/logos/posco.png', alt: 'POSCO' },
    { src: '/images/logos/hanwha.png', alt: '한화' },
    { src: '/images/logos/ls.png', alt: 'LS ELECTRIC' },
    { src: '/images/logos/ecopro.png', alt: 'ECOPRO' },
    { src: '/images/logos/shinsung.png', alt: 'SHINSUNG E&G' },
    { src: '/images/logos/sungdo.png', alt: 'SUNGDO ENG' },
    { src: '/images/logos/toray.png', alt: 'TORAY' },
    { src: '/images/logos/hanwha-techwin.png', alt: 'Hanwha Techwin' },
  ];

  // 하단 슬라이더 로고 (반대 방향)
  const bottomLogos = [
    { src: '/images/logos/samsung.png', alt: '삼성' },
    { src: '/images/logos/lg.png', alt: 'LG' },
    { src: '/images/logos/posco.png', alt: 'POSCO' },
    { src: '/images/logos/sk.png', alt: 'SK' },
    { src: '/images/logos/ls.png', alt: 'LS ELECTRIC' },
    { src: '/images/logos/hanwha.png', alt: '한화' },
    { src: '/images/logos/ecopro.png', alt: 'ECOPRO' },
    { src: '/images/logos/hyundai.png', alt: '현대' },
    { src: '/images/logos/shinsung.png', alt: 'SHINSUNG E&G' },
    { src: '/images/logos/sungdo.png', alt: 'SUNGDO ENG' },
    { src: '/images/logos/toray.png', alt: 'TORAY' },
    { src: '/images/logos/hanwha-techwin.png', alt: 'Hanwha Techwin' },
  ];

  return (
    <section 
      id="partners" 
      className={`partners-section ${isVisible ? 'visible' : ''}`}
      ref={sectionRef}
    >
      <div className="container">
        <div className="section-title partners-title">
          보기만 해도 든든한 파트너
        </div>

        {/* PC 버전 - 슬라이더 */}
        <div className="partners-slider-wrapper desktop">
          {/* 슬라이더 - 왼쪽에서 오른쪽 */}
          <div className="partners-slider">
            <div className="partners-track">
              {/* 첫 번째 세트 */}
              <div className="partners-list">
                {topLogos.map((logo, index) => (
                  <div key={`top-1-${index}`} className="partner-item">
                    <img src={logo.src} alt={logo.alt} />
                  </div>
                ))}
              </div>
              {/* 두 번째 세트 (무한 스크롤용) */}
              <div className="partners-list">
                {topLogos.map((logo, index) => (
                  <div key={`top-2-${index}`} className="partner-item">
                    <img src={logo.src} alt={logo.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 모바일 버전 - 그리드 */}
        <div className="partners-grid mobile">
          {topLogos.slice(0, 12).map((logo, index) => (
            <div key={`mobile-${index}`} className="partner-item-mobile">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

