'use client';

import { useEffect, useRef, useState } from 'react';

export default function ECOPostSection() {
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
      id="ecoPost"
      className={`eco-post-section ${isVisible ? 'visible' : ''}`}
      ref={sectionRef}
    >
      <div className="container">
        <div className="eco-post-wrap">
          <div className="eco-post-title">
            명성은<br />
            탄소발자국을 줄이고 지속가능한 생산을 실천하기 위해<br />
            ESG 경영을 실천합니다
          </div>
          <br />
        </div>
      </div>
    </section>
  );
}



