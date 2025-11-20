'use client';

import { useEffect, useRef, useState } from 'react';

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            
            // 숫자 카운팅 애니메이션
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach((stat) => {
              const finalValue = stat.textContent || '';
              const suffix = finalValue.replace(/[0-9]/g, '');
              const numericValue = parseInt(finalValue.replace(/[^0-9]/g, ''));
              
              if (!isNaN(numericValue)) {
                let startTimestamp: number | null = null;
                const duration = 2000;
                
                const step = (timestamp: number) => {
                  if (!startTimestamp) startTimestamp = timestamp;
                  const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                  const value = Math.floor(progress * numericValue);
                  stat.textContent = value + suffix;
                  if (progress < 1) {
                    window.requestAnimationFrame(step);
                  }
                };
                
                stat.textContent = '0' + suffix;
                window.requestAnimationFrame(step);
              }
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">99.9%</div>
            <div className="stat-label">정확도</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1M+</div>
            <div className="stat-label">일일 처리량</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">파트너사</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">고객 지원</div>
          </div>
        </div>
      </div>
    </section>
  );
}

