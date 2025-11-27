'use client';

export default function CareersSection() {
  return (
    <section id="careers" className="careers-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Careers</span>
          <h2 className="section-title">함께 성장할 인재를 찾습니다</h2>
          <p className="section-description">
            혁신적인 기술로 물류 산업을 변화시키고 싶으신가요?<br />
            우리와 함께 미래를 만들어가세요.
          </p>
        </div>
        <div className="careers-grid">
          <div className="career-card">
            <span className="career-tag">Engineering</span>
            <h3>Software Engineer</h3>
            <p>풀스택 개발자를 모집합니다</p>
            <a href="#" className="career-apply">지원하기 →</a>
          </div>
          <div className="career-card">
            <span className="career-tag">Data Science</span>
            <h3>AI Engineer</h3>
            <p>머신러닝 엔지니어를 모집합니다</p>
            <a href="#" className="career-apply">지원하기 →</a>
          </div>
          <div className="career-card">
            <span className="career-tag">Product</span>
            <h3>Product Manager</h3>
            <p>프로덕트 매니저를 모집합니다</p>
            <a href="#" className="career-apply">지원하기 →</a>
          </div>
        </div>
      </div>
    </section>
  );
}




