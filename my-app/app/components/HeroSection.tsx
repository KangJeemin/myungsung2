'use client';

export default function HeroSection() {
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
          <source src="/videos/generated_video.mp4" type="video/mp4" />
          {/* 비디오를 지원하지 않는 브라우저를 위한 대체 텍스트 */}
          Your browser does not support the video tag.
        </video>
        {/* 비디오 위 오버레이 (어둡게 처리) */}
        <div className="hero-video-overlay"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          <span className="fade-in">데이터로 설비를 읽고</span>
          <span className="fade-in delay-1">AI로 미래를 예측하다</span>
        </h1>
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
          <path d="M7 10l5 5 5-5"/>
        </svg>
      </div>
      
    </section>
  );
}
