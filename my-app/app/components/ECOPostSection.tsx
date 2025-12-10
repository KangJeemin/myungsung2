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
          {/* <a
            className="eco-post-link"
            href="http://localhost:3000/esg"
            target="_blank"
            rel="noopener noreferrer"
          >
            자세히보기
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a> */}
          <br />

        </div>
      </div>
    </section>
  );
}



