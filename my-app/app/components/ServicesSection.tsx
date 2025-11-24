'use client';

export default function ServicesSection() {
  const companyWebsiteUrl = process.env.NEXT_PUBLIC_COMPANY_WEBSITE_URL || 'https://www.fassto.ai/';
  
  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* 데스크톱 제목 */}
        <div className="section-title services-title desktop">
          제조현장의 자동제어에서 시작하여,<br />
          AI, Robot, Vision의 Intelligence 사업으로<br />

        </div>

        {/* 모바일 제목 */}
        <div className="section-title services-title mobile">
          판매자가 필요한<br />서비스를 제공합니다
        </div>

        {/* 풀필먼트 서비스 카드 */}
        <div className="fulfilment-card">
          <div className="fulfilment-text">
            <div className="service-logo">
              <span className="logo-text">MYUNGSUNG</span>
            </div>
            <div className="service-subtitle">주문이 자동으로 배송되는</div>
            <div className="service-main-title">파스토 풀필먼트</div>
            <a className="service-link-btn" href={companyWebsiteUrl} target="_blank" rel="noopener noreferrer">
              <span>바로가기</span>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          <div className="fulfilment-image">
            <img 
              src="/images/AIPredicted.png" 
              alt="Fassto Fulfillment" 
              className="service-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
