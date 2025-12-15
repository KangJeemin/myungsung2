'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function AiFeatureSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const { t } = useLanguage();

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
        <section ref={sectionRef} className="ai-section">
            {/* Background Gradients & Glows */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="ai-bg-blob ai-bg-blob-blue"></div>
                <div className="ai-bg-blob ai-bg-blob-purple"></div>
                <div className="ai-bg-blob ai-bg-blob-cyan"></div>
            </div>

            <div className="ai-container">
                {/* Section Header */}
                <div className={`ai-header ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="ai-title">
                        {t('aiFeature.title.line1')} <br />
                        <span className="ai-title-gradient">{t('aiFeature.title.line2')}</span>
                    </h2>
                    <p className="ai-description">
                        {t('aiFeature.description.line1')}<br className="hidden md:block" />
                        {t('aiFeature.description.line2')}
                    </p>
                </div>

                {/* Feature Cards Container (Grid) */}
                <div className="ai-grid">

                    {/* Card 1: Predictive Maintenance */}
                    <div className={`ai-card group ai-card-hover-cyan ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                        <div className="ai-card-overlay ai-card-overlay-cyan"></div>

                        {/* Image Area */}
                        <div className="ai-image-wrapper">
                            <img
                                src="https://storage.googleapis.com/myeongseong-homepage-resource/images/ai_predictive_dashboard.png"
                                alt="AI 예지보전 대시보드"
                                className="ai-image"
                            />
                            <div className="ai-image-gradient"></div>
                        </div>

                        {/* Content Area */}
                        <div className="ai-card-content">
                            <h4 className="ai-card-title-kr text-cyan-400">{t('aiFeature.predictive.title')}</h4>
                            <p className="ai-card-desc">
                                {t('aiFeature.predictive.description')}
                            </p>

                        </div>
                    </div>

                    {/* Card 2: Machine Learning */}
                    <div className={`ai-card group ai-card-hover-purple delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                        <div className="ai-card-overlay ai-card-overlay-purple"></div>

                        {/* Image Area */}
                        <div className="ai-image-wrapper">
                            <img
                                src="https://storage.googleapis.com/myeongseong-homepage-resource/images/ai_learning_nodes.png"
                                alt="Advanced Machine Learning"
                                className="ai-image"
                            />
                            <div className="ai-image-gradient"></div>
                        </div>

                        {/* Content Area */}
                        <div className="ai-card-content">
                            <h4 className="ai-card-title-kr text-purple-400">{t('aiFeature.machineLearning.title')}</h4>
                            <p className="ai-card-desc">
                                {t('aiFeature.machineLearning.description')}
                            </p>

                        </div>
                    </div>

                </div>

            </div>
        </section >
    );
}
