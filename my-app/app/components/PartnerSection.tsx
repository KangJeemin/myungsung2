'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function PartnerSection() {
  const { t } = useLanguage();
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

  // 파트너 로고 리스트 - 두 줄로 나누기
  const topLogos = [
    { src: '/images/logos/samsung.png', alt: '삼성' },
    { src: '/images/logos/LG_Chemical.png', alt: 'LG화학' },
    { src: '/images/logos/lg_display_logo_1424x277.png', alt: 'LG디스플레이' },
    { src: '/images/logos/LG_Energy_Solution.png', alt: 'LG에너지솔루션' },
    { src: '/images/logos/SK_innovation.png', alt: 'SK이노베이션' },
    { src: '/images/logos/posco.png', alt: 'POSCO' },
    { src: '/images/logos/hyundai_LNC.png', alt: '현대' },
    { src: '/images/logos/hanwha_Solution.jpg', alt: '한화솔루션' },
    { src: '/images/logos/hanwha-techwin.png', alt: '한화테크윈' },
    { src: '/images/logos/LS_ELECTRIC.png.png', alt: 'LS ELECTRIC' },
  ];

  const bottomLogos = [
    { src: '/images/logos/ecopro_logo.png', alt: '에코프로' },
    { src: '/images/logos/shinsung.png', alt: '신성이앤지' },
    { src: '/images/logos/sungdo.png', alt: '성도이엔지' },
    { src: '/images/logos/TORAY.png', alt: '도레이' },
    { src: '/images/logos/DOW.png', alt: 'DOW' },
    { src: '/images/logos/SAMYANG.jpg', alt: '삼양' },
    { src: '/images/logos/enchem.png', alt: '엔켐' },
    { src: '/images/logos/jogwang.webp', alt: '조광' },
    { src: '/images/logos/DEVICE.png', alt: 'DEVICE' },
  ];

  const allLogos = [...topLogos, ...bottomLogos];

  return (
    <section
      id="partners"
      className={`partners-section ${isVisible ? 'visible' : ''}`}
      ref={sectionRef}
    >
      <div className="container">
        <div className="section-title partners-title">
          {t('partners.title')}
        </div>

        {/* PC 버전 - 슬라이더 */}
        <div className="partners-slider-wrapper desktop">
          {/* 첫 번째 줄 - 왼쪽에서 오른쪽 */}
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

          {/* 두 번째 줄 - 오른쪽에서 왼쪽 */}
          <div className="partners-slider">
            <div className="partners-track partners-track-reverse">
              {/* 첫 번째 세트 */}
              <div className="partners-list">
                {bottomLogos.map((logo, index) => (
                  <div key={`bottom-1-${index}`} className="partner-item">
                    <img src={logo.src} alt={logo.alt} />
                  </div>
                ))}
              </div>
              {/* 두 번째 세트 (무한 스크롤용) */}
              <div className="partners-list">
                {bottomLogos.map((logo, index) => (
                  <div key={`bottom-2-${index}`} className="partner-item">
                    <img src={logo.src} alt={logo.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 모바일 버전 - 그리드 */}
        <div className="partners-grid mobile">
          {allLogos.map((logo, index) => (
            <div key={`mobile-${index}`} className="partner-item-mobile">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

