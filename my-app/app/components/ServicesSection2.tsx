'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ServicesSection2() {
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
        <section id="services-new" className={`services-new-section ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
            <div className="container">
                <div className="services-new-header">
                    <h2 className="services-new-title">{t('services.mainTitle')}</h2>
                    <p className="services-new-subtitle">
                        혁신적인 기술로 물류의 미래를 선도합니다.<br />
                        명성의 첨단 솔루션을 경험해보세요.
                    </p>
                </div>

                <div className="services-bento-grid">
                    {/* Item 1: Sogini AI - Large Box */}
                    <div className="bento-item item-large" style={{ transitionDelay: '0.1s' }}>
                        <div className="bento-content">
                            <div className="bento-text">
                                <h3>{t('services.sogini.title')}</h3>
                                <p>{t('services.sogini.description')}</p>
                                <span className="bento-link">Learn More &rarr;</span>
                            </div>
                            <div className="bento-image-wrapper">
                                <img src="https://storage.cloud.google.com/myeongseong-homepage-resource/images/SoginiAI.jpg" alt="Sogini AI" />
                            </div>
                        </div>
                    </div>

                    {/* Item 2: Predictive - Medium Box */}
                    <div className="bento-item item-medium" style={{ transitionDelay: '0.2s' }}>
                        <div className="bento-content">
                            <div className="bento-image-wrapper full-height">
                                <img src="https://storage.cloud.google.com/myeongseong-homepage-resource/images/AIPredicted.png" alt="AI Prediction" />
                                <div className="bento-overlay">
                                    <h3>{t('services.predictive.title')}</h3>
                                    <p>{t('services.predictive.description')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Item 3: Sensor - Medium Box */}
                    <div className="bento-item item-medium" style={{ transitionDelay: '0.3s' }}>
                        <div className="bento-content">
                            <div className="bento-text-only">
                                <div className="bento-icon-bg">
                                    {/* Abstract Sensor Icon */}
                                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                                        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
                                        <path d="M12 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M12 20V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M2 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M20 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <h3>{t('services.sensor.title')}</h3>
                                <p>{t('services.sensor.description')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Item 4: Vision - Wide Box */}
                    <div className="bento-item item-wide" style={{ transitionDelay: '0.4s' }}>
                        <div className="bento-content row-reverse">
                            <div className="bento-text">
                                <h3>{t('services.vision.title')}</h3>
                                <p>{t('services.vision.description')}</p>
                                <div className="tech-tags">
                                    <span>Deep Learning</span>
                                    <span>OCR</span>
                                    <span>Inspection</span>
                                </div>
                            </div>
                            <div className="bento-image-wrapper">
                                <img src="/images/AIMachineVision1.png" alt="Machine Vision" />
                            </div>
                        </div>
                    </div>

                    {/* Item 5: Robot - Standard Box */}
                    <div className="bento-item item-standard" style={{ transitionDelay: '0.5s' }}>
                        <div className="bento-content column">
                            <div className="bento-image-wrapper top">
                                <img src="/images/Robot.png" alt="Robot Automation" />
                            </div>
                            <div className="bento-text bottom">
                                <h3>{t('services.robot.title')}</h3>
                                <p>{t('services.robot.description')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
