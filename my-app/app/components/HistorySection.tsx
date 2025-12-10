'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function HistorySection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [activeYear, setActiveYear] = useState('2021 ~ 2023');
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
    '2024 ~ ': [
      '## 지속성장 기반 확장',
      '신규 사업부 설립(비전 사업부)',
      'VISION 3010 목표',
      '폴란드(지사) 설립(~25년 6월)',
      '동탄사무소 개설 (지역거점 및 인력인프라 확장)',
    ],
    '2021 ~ 2023': [
      '## 솔루션 확장',
      '정보통신 공사업 등록(2021)',
      '오창 제3공장 설립(2022)',
      '자동화유통전문 (주)명성FAD 자회사 설립',
      '헝가리 법인 설립, 헝가리·폴란드 P/J 수주',
      '충청북도 고용우수기업 선정'
    ],
    '2011 ~ 2020': [
      '## 설립 및 사업 기반 구축 (2011 ~ 2015)',
      '(주)명성A&T 신규 법인 설립 (2011)',
      '공장신축 및 본사이전 (2013)',
      '공장등록(자동제어반, 고효율인버터)',
      '벤처기업 등록',
      '(주)LG화학 업체 등록(2014)',
      '기업부설연구소 설립',
      'ISO 9001 / ISO 14001 인증 취득',
      '[INNO-BIZ] 획득(2015)',
      '## 성장 기반 및 영업망 확대 (2017 ~ 2020)',
      '제2공장 설립(2017)',
      '전기 공사업 등록(2018)',
      'ISO 45001 인증 취득(2020)',
      'LS산전 최우수특약점 선정',
      '명성A&T 천안점 오픈(명성일렉트릭)'
    ]
  };

  // Remove empty keys
  // delete historyData['2020'];
  // delete historyData['2019'];
  // delete historyData['2018'];
  // delete historyData['2017'];

  const years = Object.keys(historyData);

  const renderHistoryItem = (item: string, idx: number) => {
    if (item.startsWith('## ')) {
      return <div key={idx} className="history-subtitle">{item.replace('## ', '')}</div>;
    }
    return <div key={idx} className="history-text">- {item}</div>;
  };

  return (
    <section
      id="history"
      className={`history-section ${isVisible ? 'visible' : ''}`}
      ref={sectionRef}
      style={{ wordBreak: 'keep-all' }}
    >
      <div className="container">
        <div className="section-title history-title">
          {t('history.title')}
        </div>

        {/* 데스크톱 버전 - 가로 스크롤 */}
        <div className="history-slider desktop">
          <div className="history-track">
            {years.map((year, yearIndex) => (
              <div
                key={year}
                className="history-year-item"
                style={{
                  animationDelay: `${0.6 + yearIndex * 0.1}s`,
                  marginLeft: year === '2011 ~ 2020' ? '4rem' : '0'
                }}
              >
                <div className="year-title">{year}</div>
                <div className="year-line"></div>
                <div className="history-content">
                  {historyData[year as keyof typeof historyData].map((item, idx) => renderHistoryItem(item, idx))}
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
            {historyData[activeYear as keyof typeof historyData].map((item, idx) => renderHistoryItem(item, idx))}
          </div>
        </div>
      </div>
    </section>
  );
}

