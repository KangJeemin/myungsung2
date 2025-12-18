'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      {/* 배경 비디오 */}
      <div className="hero-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        >
          <source src="https://storage.googleapis.com/myeongseong-homepage-resource/videos/MyeongseongIntroduce.mp4" type="video/mp4" />
          {/* 비디오를 지원하지 않는 브라우저를 위한 대체 텍스트 */}
          Your browser does not support the video tag.
        </video>
        {/* 비디오 위 오버레이 (어둡게 처리) */}
        <div className="hero-video-overlay"></div>
      </div>



      {/* 네비게이션 버튼 */}
      <div className="hero-nav-buttons fade-in delay-2">
        <a href="#service-ai" className="hero-nav-btn" onClick={(e) => scrollToSection(e, '#service-ai')}>
          AI
        </a>
        <a href="#service-predictive" className="hero-nav-btn" onClick={(e) => scrollToSection(e, '#service-predictive')}>
          예지보전
        </a>
        <a href="#service-sensor" className="hero-nav-btn" onClick={(e) => scrollToSection(e, '#service-sensor')}>
          스마트센서
        </a>
        <a href="#service-vision" className="hero-nav-btn" onClick={(e) => scrollToSection(e, '#service-vision')}>
          비전
        </a>
        <a href="#service-robot" className="hero-nav-btn" onClick={(e) => scrollToSection(e, '#service-robot')}>
          로봇
        </a>
      </div>

      {/* 아래 방향 화살표 아이콘 */}
      <div className="hero-arrow">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 10l5 5 5-5" />
        </svg>
      </div>

    </section>
  );
}
