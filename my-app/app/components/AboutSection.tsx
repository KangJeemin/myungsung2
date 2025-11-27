'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function AboutSection() {
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={`about-section ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('about.title')}
          </h2>
          <p className="section-description">
            {t('about.description')}
          </p>
        </div>
        
        {/* 이미지 추가 */}
        <div className="about-image-container">
          <img 
            src="/images/About.png" 
            alt="About Us" 
            className="about-image"
          />
        </div>
      </div>
    </section>
  );
}
