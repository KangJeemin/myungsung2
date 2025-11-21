'use client';

export default function Customer() {
  const items = [
    {
      title: '고객 감동',
      description: '고객이 원하는 서비스를 제공하는 것은 물론이고,\n기대하지 못한 감동까지 주고자 노력합니다.'
    },
    {
      title: '혁신',
      description: 'AI, 물류자동화 등의 최신 기술을 활용해서\n데이터 기반으로 오류 없는 정확한 서비스를 구현합니다.'
    },
    {
      title: '신속',
      description: '더욱 빠르고 정확한 서비스를 구현하기 위해\n데이터 연동을 통한 원스톱 풀필먼트 서비스를 제공합니다.'
    },
    {
      title: '상생',
      description: '고객사, 협력사와 협력체계 및 경쟁력을 강화하고\n동반성장을 위한 상생경영 생태계 조성에 힘쓰고 있습니다.'
    }
  ];

  return (
    <section id="customer" className="customer-section">
      <div className="container">
        <div className="customer-layout">
          {/* 왼쪽: 타이틀 */}
          <div className="customer-left">
            <div className="section-title customer-title">
              고객 만족을 최우선의 <br /> 가치로 생각합니다
            </div>
          </div>

          {/* 오른쪽: 아이템 리스트 */}
          <div className="customer-right">
            <div className="item-wrap-vertical">
              {items.map((item, index) => (
                <div 
                  key={index} 
                  className="customer-item"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <dt className="customer-item-title">
                    {item.title}
                  </dt>
                  <dd className="customer-item-description">
                    {item.description.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < item.description.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
