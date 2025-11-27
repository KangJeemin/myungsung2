'use client';

import { useLanguage } from '../contexts/LanguageContext';
import { useEffect, useRef, useState } from 'react';

export default function Customer() {
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
  
  const items = [
    {
      title: t('customer.item1.title'),
      description: t('customer.item1.description')
    },
    {
      title: t('customer.item2.title'),
      description: t('customer.item2.description')
    },
    {
      title: t('customer.item3.title'),
      description: t('customer.item3.description')
    },
    {
      title: t('customer.item4.title'),
      description: t('customer.item4.description')
    }
  ];

  return (
    <section id="customer" className={`customer-section ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="container">
        <div className="customer-layout">
          {/* 왼쪽: 타이틀 */}
          <div className="customer-left">
            <div className="section-title customer-title">
              {t('customer.title')}
            </div>
          </div>

          {/* 오른쪽: 아이템 리스트 */}
          <div className="customer-right">
            <div className="item-wrap-vertical">
              {items.map((item, index) => (
                <div 
                  key={index} 
                  className="customer-item"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <dt className="customer-item-title">
                    {item.title}
                  </dt>
                  <dd className="customer-item-description">
                    {item.description}
                  </dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
