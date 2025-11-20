'use client';

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Services</span>
          <h2 className="section-title">제공 서비스</h2>
        </div>
        <div className="services-grid">
          <div className="service-item">
            <div className="service-image">
              <div className="service-overlay">
                <h3>풀필먼트 서비스</h3>
                <p>입고부터 배송까지 모든 과정을 관리합니다</p>
                <a href="#" className="service-link">자세히 보기 →</a>
              </div>
            </div>
          </div>
          <div className="service-item">
            <div className="service-image">
              <div className="service-overlay">
                <h3>재고 관리</h3>
                <p>AI 기반 재고 최적화 솔루션을 제공합니다</p>
                <a href="#" className="service-link">자세히 보기 →</a>
              </div>
            </div>
          </div>
          <div className="service-item">
            <div className="service-image">
              <div className="service-overlay">
                <h3>배송 관리</h3>
                <p>최적 배송 루트로 비용을 절감합니다</p>
                <a href="#" className="service-link">자세히 보기 →</a>
              </div>
            </div>
          </div>
          <div className="service-item">
            <div className="service-image">
              <div className="service-overlay">
                <h3>데이터 분석</h3>
                <p>빅데이터 분석으로 인사이트를 제공합니다</p>
                <a href="#" className="service-link">자세히 보기 →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

