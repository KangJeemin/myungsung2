'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ServicesSection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const companyWebsiteUrl = process.env.NEXT_PUBLIC_COMPANY_WEBSITE_URL || 'https://www.fassto.ai/';

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
    <section id="services" className={`services-section ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="container">
        {/* 섹션 헤더 */}
        <div className="services-header">
          <h1 className="services-main-title">{t('services.mainTitle')}</h1>
        </div>

        {/* 서비스 아이템 1 - 왼쪽 텍스트, 오른쪽 이미지 */}
        <div id="service-ai" className="service-item service-item-left" style={{ transitionDelay: '0.1s' }}>
          <div className="service-content">

            <h3 className="service-title">{t('services.sogini.title')}</h3>
            <p className="service-description">{t('services.sogini.description')}</p>
            <p className="service-detail">
              {t('services.sogini.detail')}
            </p>
          </div>
          <img
            src="https://storage.googleapis.com/myeongseong-homepage-resource/images/products/ai_brain.png"
            alt="쏘지니 AI"
            className="service-image"
          />
        </div>

        {/* 서비스 아이템 2 - 왼쪽 이미지, 오른쪽 텍스트 (짝수) */}
        <div id="service-predictive" className="service-item service-item-right" style={{ transitionDelay: '0.2s' }}>
          <div className="service-content">

            <h3 className="service-title">{t('services.predictive.title')}</h3>
            <p className="service-description">{t('services.predictive.description')}</p>
            <p className="service-detail">
              {t('services.predictive.detail')}
            </p>
          </div>
          <img
            src="/images/AIPredicted.png"
            alt="AI 예측 분석"
            className="service-image"
          />
        </div>

        {/* 서비스 아이템 3 - 왼쪽 텍스트, 오른쪽 이미지 */}
        <div id="service-sensor" className="service-item service-item-left" style={{ transitionDelay: '0.3s' }}>
          <div className="service-content">
            <h3 className="service-title">{t('services.sensor.title')}</h3>
            <p className="service-description">{t('services.sensor.description')}</p>
            <p className="service-detail">
              {t('services.sensor.detail')}
            </p>
          </div>
          <div className="service-image-wrapper-gray">
            <img
              src="/images/sensor_img1.png"
              alt="로봇 자동화"
              className="service-image service-image-white-bg"
            />
          </div>
        </div>

        {/* 서비스 아이템 4 - 왼쪽 이미지, 오른쪽 텍스트 (짝수) */}
        <div id="service-vision" className="service-item service-item-right" style={{ transitionDelay: '0.4s' }}>
          <div className="service-content">
            <div className="service-icon">
            </div>
            <h3 className="service-title">{t('services.vision.title')}</h3>
            <p className="service-description">{t('services.vision.description')}</p>
            <p className="service-detail">
              {t('services.vision.detail')}
            </p>
          </div>
          <img
            src="https://storage.googleapis.com/myeongseong-homepage-resource/images/products/sogini_alarm.png"
            alt="비전 검사 시스템"
            className="service-image"
          />
        </div>

        {/* 서비스 아이템 5 - 왼쪽 텍스트, 오른쪽 이미지 */}
        <div id="service-robot" className="service-item service-item-left" style={{ transitionDelay: '0.5s' }}>
          <div className="service-content">
            <div className="service-icon">

            </div>
            <h3 className="service-title">{t('services.robot.title')}</h3>
            <p className="service-description">{t('services.robot.description')}</p>
            <p className="service-detail">
              {t('services.robot.detail')}
            </p>
          </div>
          <img
            src="https://storage.googleapis.com/myeongseong-homepage-resource/images/products/sogini_view2.jpg"
            alt="MES 통합 시스템"
            className="service-image service-image-small"
          />
        </div>
      </div>
    </section>
  );
}
