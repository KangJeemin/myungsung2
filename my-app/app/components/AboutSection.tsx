'use client';

import { useEffect, useRef } from 'react';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.about-card').forEach((card, index) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = '1';
                (card as HTMLElement).style.transform = 'translateY(0)';
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">현장을 가장 잘 아는 AI 스마트 팩토리 파트너.
          </h2>
          <p className="section-description">
            혁신적인 AI 기술과 데이터 분석을 통해 자동제어를 최적화하고,
            고객에게 최고의 서비스를 제공합니다.
          </p>
        </div>
        
        {/* 이미지 추가 */}
        <div className="about-image-container">
          <img 
            src="/images/about_solution2.jpg" 
            alt="About Us" 
            className="about-image"
          />
        </div>
      </div>
    </section>
  );
}
