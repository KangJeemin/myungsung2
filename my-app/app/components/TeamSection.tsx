'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function TeamSection() {
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
    <section
      id="team"
      className={`team-section ${isVisible ? 'visible' : ''}`}
      ref={sectionRef}
    >
      <div className="container">
        {/* 데스크톱 설명 */}
        <div className="section-title team-title">
          {t('team.title')}
        </div>
        <div className="section-description team-description desktop">
          {t('team.description')}
        </div>

        {/* 모바일 설명 */}
        <div className="section-description team-description mobile">
          {t('team.description')}
        </div>

        {/* 이미지 박스 */}
        <div className="team-img-box">
          {/* PC 버전 */}
          <div className="team-img-wrap-pc">
            <div className="team-img-column">
              <img className="team-img team-img-01" src="https://storage.googleapis.com/myeongseong-homepage-resource/images/team/team1.jpg" alt="팀 이미지 1" />
              <img className="team-img team-img-02" src="https://storage.googleapis.com/myeongseong-homepage-resource/images/team/team2.jpg" alt="팀 이미지 2" />
            </div>
            <div className="team-img-column">
              <img className="team-img team-img-03" src="https://storage.googleapis.com/myeongseong-homepage-resource/images/team/team3.jpg" alt="팀 이미지 3" />
            </div>
          </div>

          {/* 모바일 버전 */}
          <div className="team-img-wrap-mobile">
            <img className="team-img" src="https://storage.cloud.google.com/myeongseong-homepage-resource/images/team/team1.jpg" alt="팀 이미지 1" />
            <img className="team-img" src="https://storage.cloud.google.com/myeongseong-homepage-resource/images/team/team2.jpg" alt="팀 이미지 2" />
            <img className="team-img" src="https://storage.cloud.google.com/myeongseong-homepage-resource/images/team/team3.jpg" alt="팀 이미지 3" />
          </div>
        </div>
      </div>
    </section>
  );
}