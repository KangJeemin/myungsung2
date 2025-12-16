'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../css/locationSection.css';

export default function LocationSection() {
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

  return (
    <section
      id="companyInfo"
      className="global-location-section"
      ref={sectionRef}
    >
      <div className="container">
        {/* Header */}
        <div className={`location-header ${isVisible ? 'fade-in-active' : ''}`}>
          <h2 className="location-main-title">글로벌 오피스</h2>
          <p className="location-subtitle">전 세계를 무대로 스마트 팩토리 솔루션을 제공합니다</p>
        </div>

        {/* World Map with Markers */}
        <div className={`world-map-container ${isVisible ? 'fade-in-active' : ''}`}>
          <img src="/images/world_map1.png" alt="World Map" className="world-map-bg" />

          {/* Korea Marker */}
          <div className="location-marker korea-marker">
            <div className="marker-pin">
              <div className="pin-circle"></div>
            </div>
            <div className="location-info korea-info">
              <div className="info-badge">대한민국</div>
              <div className="info-company">(주)명성A&T</div>
              <div className="info-address">충청북도 청주시 오창읍 장대길 13-16(외대리 334)</div>
            </div>
          </div>

          {/* Hungary Marker */}
          <div className="location-marker hungary-marker">
            <div className="marker-pin">
              <div className="pin-circle"></div>
            </div>
            <div className="location-info hungary-info">
              <div className="info-badge">헝가리</div>
              <div className="info-company">MS A&T Hungary</div>
              <div className="info-company-sub">Myungsung A&T kft.</div>
              <div className="info-address">Address : 1027 Budapest Bem József utca 9. fszt.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
