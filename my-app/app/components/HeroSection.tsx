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
          <span className="fade-in">현장을 가장 잘 아는 AI 스마트 팩토리 파트너.</span>
          <span className="fade-in delay-1">From Control To Intelligence</span>
        </h1>
      </div>
      
    </section>
  );
}
