'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function StatsSection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<{ [key: number]: string }>({});
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { label: t('stats.stat1'), value: '439', unit: '억', growth: true },
    { label: t('stats.stat2'), value: '1,000', unit: '억 달성', growth: false },
    { label: t('stats.stat3'), value: '175', unit: '억', growth: true },
    { label: t('stats.stat4'), value: '57', unit: '억', growth: true }
  ];

  // 숫자 카운팅 애니메이션 함수 (자릿수 유지)
  const animateNumber = (index: number, targetValue: string) => {
    const numericValue = parseInt(targetValue.replace(/,/g, ''));
    const targetLength = targetValue.replace(/,/g, '').length; // 자릿수 확인
    const duration = 500; // 0.5초
    const steps = 15; // 빠른 변화를 위한 단계 수
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;

      // 랜덤 숫자 생성 (자릿수 유지)
      let randomNum = '';
      for (let i = 0; i < targetLength; i++) {
        randomNum += Math.floor(Math.random() * 10);
      }

      // 마지막 단계에서는 실제 값 표시
      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedValues(prev => ({
          ...prev,
          [index]: targetValue
        }));
      } else {
        // 랜덤 숫자를 콤마 형식으로 변환
        const formattedRandom = parseInt(randomNum).toLocaleString();
        setAnimatedValues(prev => ({
          ...prev,
          [index]: formattedRandom
        }));
      }
    }, duration / steps);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);

            // 각 통계에 대해 숫자 카운팅 애니메이션 시작
            stats.forEach((stat, index) => {
              setTimeout(() => {
                animateNumber(index, stat.value);
              }, index * 100); // 순차적으로 시작
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="container">
        <div className={`section-title stats-title ${isVisible ? 'fade-in-active' : ''}`}>
          {t('stats.title')}
        </div>

        <div className="stats-layout">
          {/* 왼쪽: 통계 리스트 */}
          <div className="stats-left">
            <div className="stats-list">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`stat-item ${isVisible ? 'fade-in-active' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-value-container">
                    <div className="stat-value">
                      {animatedValues[index] || '0'}
                    </div>
                    <div className="stat-unit">{stat.unit}</div>
                    {stat.growth && (
                      <div className={`growth-arrow ${isVisible ? 'arrow-bounce' : ''}`}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 1 }} />
                              <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                            </linearGradient>
                          </defs>
                          <path
                            d="M12 4L12 20M12 4L6 10M12 4L18 10"
                            stroke="url(#blueGradient)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 오른쪽: 그래프 이미지 */}
          <div className={`stats-right ${isVisible ? 'fade-in-active' : ''}`}>
            <img
              src="/images/graph2.png"
              alt="Growth Graph"
              className="stats-graph"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
