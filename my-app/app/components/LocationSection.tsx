'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

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
      className={`location-section ${isVisible ? 'visible' : ''}`}
      ref={sectionRef}
    >
      <div className="container">
        <div className="location-layout">
          {/* 왼쪽: 본사 정보 */}
          <div className="location-left">
            <div className="section-title location-title">{t('location.title')}</div>
            
           
          </div>

          {/* 오른쪽: 찾아오시는 길 + 지도 */}
          <div className="location-right">
            <div className="address-section">
              <div className="address-label">{t('location.findUs')}</div>
              <div className="address-text">{t('location.address')}</div>
            </div>

            {/* 지도 */}
            <div className="map-container">
              <div className="map-placeholder">
                <iframe
                  src="https://www.google.com/maps?q=충청북도+청주시+오창읍+장대길+13-16&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="회사 위치"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

