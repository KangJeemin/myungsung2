'use client';

import { useEffect, useRef, useState } from 'react';

export default function HistorySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeYear, setActiveYear] = useState('2025');
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

  const historyData = {
    '2025': [
      { month: '11월', items: ['투모로로보틱스 MOU 체결'] },
      { month: '8월', items: ['카페24 매일배송 공식운영사 합류'] },
      { month: '7월', items: ['한진남서울센터 오픈', '시리즈D 325억 투자 유치 완료'] },
      { month: '6월', items: ['복합 조건 기반 물류 시스템 특허 출원', '파주조리센터 오픈'] },
      { month: '5월', items: ['아산음봉센터/대전대덕센터 오픈'] },
      { month: '2월', items: ['인천청라센터 오픈'] },
      { month: '1월', items: ['한진 업무제휴 체결'] }
    ],
    '2024': [
      { month: '12월', items: ['쿠팡등 12개 쇼핑몰 및 플랫폼 <자동주문연동서비스> 오픈'] },
      { month: '8월', items: ['파스토 스타터팩 오픈', '인천북산센터 오픈'] },
      { month: '7월', items: ['파스토 플러스팩 오픈', '람다256 MOU 체결', '용인주북2센터 오픈'] },
      { month: '6월', items: ['스마트스토어 도착보장 주7일 확대', '쇼피파이 <자동주문연동서비스> 오픈'] },
      { month: '5월', items: ['라쿠텐 <자동주문연동서비스> 오픈'] },
      { month: '3월', items: ['AWS 파트너사 선정', 'IPO 주관사 삼성증권 선정'] },
      { month: '2월', items: ['육군본부 군수참모부 MOU 체결'] },
      { month: '1월', items: ['여성가족부 \'가족친화인증\' 기업 선정'] }
    ],
    '2023': [
      { month: '12월', items: ['베어로보틱스 MOU 체결'] },
      { month: '9월', items: ['안성미양센터/안성원곡센터/이천마장센터/용인주북센터 오픈'] },
      { month: '8월', items: ['서울상암센터 오픈'] },
      { month: '5월', items: ['부산강서센터 오픈'] },
      { month: '4월', items: ['파스토셀프 모바일 APP 론칭'] },
      { month: '3월', items: ['딜로이트 안진회계법인 MOU 체결', '천안서북센터 오픈'] },
      { month: '2월', items: ['포천용정센터,인천도화센터 오픈', '파스토셀프 CU 편의점택배 제휴'] },
      { month: '1월', items: ['파스토셀프 방문택배 오픈'] }
    ],
    '2022': [
      { month: '12월', items: ['아산영인센터/양주옥정센터/안산단원센터 오픈'] },
      { month: '11월', items: ['군포 복합C센터 오픈', '큐텐 <자동주문연동서비스> 오픈', '파스토셀프 11번가 <자동주문연동서비스> 오픈'] },
      { month: '10월', items: ['용인백암센터 오픈', 'LG전자, 물류로봇 사업 MOU 체결'] },
      { month: '9월', items: ['화성양감센터 오픈', '파스토셀프, 아임웹 <자동주문연동 서비스> 오픈', '업박스 리코, 자원순환 플랫폼 구축 제휴'] },
      { month: '8월', items: ['파스토셀프 정식 론칭', '시리즈C 총 950억 투자 유치 완료', '용인2센터 오픈', '바로고·모카모빌리티 제휴'] },
      { month: '7월', items: ['카페24 <자동주문연동서비스> 오픈', '팀프레시 새벽배송 제휴'] },
      { month: '6월', items: ['중소기업벤처부 예비유니콘 선정'] },
      { month: '5월', items: ['일죽센터 오픈'] },
      { month: '4월', items: ['시리즈C 800억 투자 유치(VIG파트너스, 하나벤처스, SK디앤디, 신한벤처투자, KDB산업은행)'] },
      { month: '1월', items: ['파스토셀프(Fasstoself) Beta 론칭', '부산진구센터 오픈', '라자다 <자동주문연동서비스> 오픈', '포비즈코리아 제휴'] }
    ],
    '2021': [
      { month: '12월', items: ['새벽배송 풀필먼트 론칭', '용인2센터 스마트물류 센터 1등급 인증'] },
      { month: '11월', items: ['모션투에이아이 MOU 체결', '\'밤12시 오늘출발\' 서비스 론칭'] },
      { month: '9월', items: ['중소기업벤처부 주관 이노비즈(Inno-Biz) A 등급 획득', 'UPS 해외 특송 서비스 제공', '쇼피 <자동주문연동서비스> 오픈'] },
      { month: '8월', items: ['용인1센터 스마트물류센터 1등급 인증 (국내 최초)'] },
      { month: '7월', items: ['NFA(Naver Fulfillment Alliance) 공식 파트너 선정'] },
      { month: '6월', items: ['용인1센터(냉장/냉동/상온) 론칭'] },
      { month: '5월', items: ['해외소싱 서비스 론칭', '중소기업벤처부 아기 유니콘 200 선정', '독일 프랑크푸르트센터 오픈'] },
      { month: '4월', items: ['사명 파스토(FASSTO)로 변경', '그루(GREW) 숲 조성 캠페인 실시', '해외배송 풀필먼트 론칭', '브릿지 투자 (산업은행)'] },
      { month: '3월', items: ['모바일 APP 론칭', '아입웹<자동주문연동서비스> 오픈'] },
      { month: '2월', items: ['친환경 패키지, 당일배송 풀필먼트 론칭'] },
      { month: '1월', items: ['풀필먼트 서비스명 파스토(FASSTO)로 변경'] }
    ],
    '2020': [
      { month: '11월', items: ['우수창업기업 서울중소벤처기업청장상 수상', '샵링커 <자동주문연동서비스> 오픈', '시리즈B 투자 유치 (SK D&D, 신한벤처투자)'] },
      { month: '9월', items: ['네모커머스 제휴'] },
      { month: '8월', items: ['안산진흥센터 오픈'] },
      { month: '7월', items: ['광주연산센터 오픈'] },
      { month: '6월', items: ['부산기장센터 오픈'] },
      { month: '5월', items: ['중소벤처기업부 창업도약패키지 혁신성장지원기업 선정'] },
      { month: '3월', items: ['시리즈A 투자 유치(네이버, 미래에셋캐피탈, 미래에셋벤처투자)'] },
      { month: '1월', items: ['고도몰 <자동주문연동서비스> 오픈'] }
    ],
    '2019': [
      { month: '12월', items: ['네이버 스마트스토어 <자동주문연동서비스> 오픈'] },
      { month: '11월', items: ['국토교통부 장관 표창 수상', '아임웹 제휴', '사방넷 <자동주문연동서비스> 오픈'] },
      { month: '10월', items: ['다우기술, 신세계아이앤씨 제휴'] },
      { month: '9월', items: ['NHN커머스 제휴'] },
      { month: '6월', items: ['One-Stop 온라인 물류 플랫폼 오픈'] },
      { month: '5월', items: ['평택포승센터 오픈'] },
      { month: '2월', items: ['기업부설 R&D연구소 설립'] }
    ],
    '2018': [
      { month: '9월', items: ['자체 개발 FMS 시스템 오픈 (특허 보유)'] },
      { month: '3월', items: ['에프에스에스(FSS) 설립', '동탄센터 오픈'] }
    ]
  };

  const years = Object.keys(historyData);

  return (
    <section 
      id="history" 
      className={`history-section ${isVisible ? 'visible' : ''}`}
      ref={sectionRef}
      style={{ wordBreak: 'keep-all' }}
    >
      <div className="container">
        <div className="section-title history-title">
          쉼 없이 뛰어왔고<br />이제 도약합니다
        </div>

        {/* 데스크톱 버전 - 가로 스크롤 */}
        <div className="history-slider desktop">
          <div className="history-track">
            {years.map((year, yearIndex) => (
              <div key={year} className="history-year-item" style={{ animationDelay: `${0.6 + yearIndex * 0.1}s` }}>
                <div className="year-title">{year}</div>
                <div className="year-line"></div>
                <div className="history-content">
                  {historyData[year as keyof typeof historyData].map((monthData, idx) => (
                    <div key={idx} className="history-month-group">
                      <div className="month-title">{monthData.month}</div>
                      {monthData.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="history-text">- {item}</div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 모바일 버전 - 탭 형식 */}
        <div className="history-mobile mobile">
          <div className="history-tabs">
            {years.map((year) => (
              <button
                key={year}
                className={`history-tab ${activeYear === year ? 'active' : ''}`}
                onClick={() => setActiveYear(year)}
              >
                {year}
              </button>
            ))}
          </div>
          <div className="history-tab-content">
            {historyData[activeYear as keyof typeof historyData].map((monthData, idx) => (
              <div key={idx} className="history-month-group">
                <div className="month-title">{monthData.month}</div>
                {monthData.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="history-text">- {item}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

