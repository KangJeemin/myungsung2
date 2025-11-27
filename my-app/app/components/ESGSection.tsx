'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// ESG 아이콘 컴포넌트들
const EnvironmentIcon = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="55" fill="#E8F5E9" />
    <path d="M60 25C45 25 35 35 35 50C35 65 45 75 60 85C75 75 85 65 85 50C85 35 75 25 60 25Z" fill="#4CAF50" />
    <circle cx="60" cy="50" r="8" fill="#81C784" />
    <path d="M60 30V50M50 40L60 50L70 40" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SocialIcon = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="55" fill="#E3F2FD" />
    <circle cx="45" cy="45" r="12" fill="#2196F3" />
    <circle cx="75" cy="45" r="12" fill="#2196F3" />
    <circle cx="60" cy="75" r="12" fill="#2196F3" />
    <path d="M45 45L60 75M75 45L60 75" stroke="#1976D2" strokeWidth="3" strokeLinecap="round" />
    <circle cx="45" cy="45" r="5" fill="#90CAF9" />
    <circle cx="75" cy="45" r="5" fill="#90CAF9" />
    <circle cx="60" cy="75" r="5" fill="#90CAF9" />
  </svg>
);

const GovernanceIcon = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="55" fill="#F3E5F5" />
    <path d="M40 75L60 30L80 75H40Z" fill="#9C27B0" />
    <rect x="45" y="65" width="30" height="20" rx="2" fill="#7B1FA2" />
    <circle cx="60" cy="45" r="8" fill="#CE93D8" />
    <path d="M50 75H70M55 85H65" stroke="#4A148C" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function ESGSection() {
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

  const esgItems = [
    {
      icon: <EnvironmentIcon />,
      title: t('esg.environment.title'),
      items: [
        t('esg.environment.item1'),
        t('esg.environment.item2'),
        t('esg.environment.item3'),
        t('esg.environment.item4'),
        t('esg.environment.item5')
      ]
    },
    {
      icon: <SocialIcon />,
      title: t('esg.social.title'),
      items: [
        t('esg.social.item1'),
        t('esg.social.item2'),
        t('esg.social.item3'),
        t('esg.social.item4')
      ]
    },
    {
      icon: <GovernanceIcon />,
      title: t('esg.governance.title'),
      items: [
        t('esg.governance.item1'),
        t('esg.governance.item2'),
        t('esg.governance.item3'),
        t('esg.governance.item4')
      ]
    }
  ];

  return (
    <section 
      id="esg" 
      className={`esg-section ${isVisible ? 'visible' : ''}`}
      ref={sectionRef}
    >
      <div className="container">
        <div className="section-title esg-title">
          {t('esg.title')}
        </div>

        <div className="esg-list">
          {esgItems.map((item, index) => (
            <div 
              key={index} 
              className="esg-item-wrap"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="esg-item">
                <div className="esg-img-wrap">
                  {item.icon}
                </div>
                <div className="esg-item-title">
                  {item.title}
                </div>
                <div className="esg-text-box">
                  {item.items.map((text, textIndex) => (
                    <div key={textIndex} className="esg-text">
                      <div className="esg-circle"></div>
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

