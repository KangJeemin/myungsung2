'use client';

export default function SolutionsSection() {
  return (
    <section id="solutions" className="solutions-section">
      <div className="container">
        <div className="solutions-content">
          <div className="solutions-text">
            <span className="section-tag">Solutions</span>
            <h2>AI 기반 스마트 물류 솔루션</h2>
            <p>
              최첨단 인공지능 기술을 활용하여 물류 산업의 복잡한 문제를 해결합니다.
              머신러닝과 딥러닝 알고리즘을 통해 수요를 예측하고, 재고를 최적화하며,
              배송 효율을 극대화합니다.
            </p>
            <ul className="solutions-list">
              <li>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>수요 예측 AI 엔진</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>자동 재고 관리 시스템</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>최적 배송 루트 알고리즘</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>실시간 모니터링 대시보드</span>
              </li>
            </ul>
          </div>
          <div className="solutions-visual">
            <div className="visual-card"></div>
          </div>
        </div>
      </div>
    </section>
  );
}


