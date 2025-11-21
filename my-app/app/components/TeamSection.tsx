'use client';

import { useEffect, useRef, useState } from 'react';

export default function TeamSection() {
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
          변화를 만드는 파스토 팀
        </div>
        <div className="section-description team-description desktop">
          파스토는 충분한 권한과 자율성을 가지고 일하며,<br />
          다양성에 기초한 상호 존중을 바탕으로 건강한 조직문화를 만들어 갑니다.
        </div>

        {/* 모바일 설명 */}
        <div className="section-description team-description mobile">
          파스토는 충분한 권한과 자율성을 가지고 일하며,<br />
          다양성에 기초한 상호 존중을 바탕으로 건강한<br />
          조직문화를 만들어 갑니다.
        </div>

        {/* 이미지 박스 */}
        <div className="team-img-box">
          {/* PC 버전 */}
          <div className="team-img-wrap-pc">
            <div className="team-img-column">
              <img className="team-img team-img-01" src="https://cdn.fassto.ai/resources/imagesAbout/main/team_01.jpg" alt="팀 이미지 1" />
              <img className="team-img team-img-02" src="https://cdn.fassto.ai/resources/imagesAbout/main/team_02.jpg" alt="팀 이미지 2" />
            </div>
            <div className="team-img-column">
              <img className="team-img team-img-03" src="https://cdn.fassto.ai/resources/imagesAbout/main/team_03.jpg" alt="팀 이미지 3" />
            </div>
          </div>

          {/* 모바일 버전 */}
          <div className="team-img-wrap-mobile">
            <img className="team-img" src="https://cdn.fassto.ai/resources/imagesAbout/main/team_01.jpg" alt="팀 이미지 1" />
            <img className="team-img" src="https://cdn.fassto.ai/resources/imagesAbout/main/team_02.jpg" alt="팀 이미지 2" />
            <img className="team-img" src="https://cdn.fassto.ai/resources/imagesAbout/main/team_03_m.jpg" alt="팀 이미지 3" />
          </div>
        </div>
      </div>
    </section>
  );
}