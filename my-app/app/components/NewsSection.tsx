'use client';

import { useEffect, useRef, useState } from 'react';

export default function NewsSection() {
  const [isVisible, setIsVisible] = useState(false);
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

  const newsItems = [
    {
      image: 'https://www.hellot.net/data/photos/20230311/art_1678669057602_2257f2.jpg',
      title: '[AW 2023] 명성에이앤티, 멀티 통신모듈·스마트 센서 등 스마트 팩토리 솔루션 공개',
      description: '명성에이앤티가 ‘스마트공장·자동화산업전 2023(Smart Factory+Automation World 2023, 이하 AW 2023)’에 참가해 스마트 팩토리 분야 통신·감시제어...',
      link: 'https://www.hellot.net/mobile/article.html?no=76118'
    },
    {
      image: 'https://file.newswire.co.kr/data/datafile2/data/2021/08/1891285381_20210803151110_8979351252.jpg',
      title: '충북 IT 중소기업 명성에이앤티, 충북과학기술혁신원 지원으로 우수 사업 성과 달성',
      description: '지난해 충청북도와 충북과학기술혁신원(원장 노근호, 융합본부장 정재욱)은 도내 기업의 4차 산업혁명 선제 대응...',
      link: 'https://www.newswire.co.kr/newsRead.php?no=928145'
    }
  ];

  return (
    <section 
      id="news" 
      className={`news-section ${isVisible ? 'visible' : ''}`}
      ref={sectionRef}
      style={{ wordBreak: 'keep-all' }}
    >
      <div className="container">
        <div className="section-title news-title">
          명성의 새로운 소식
        </div>

        <div className="news-list">
          {newsItems.map((item, index) => (
            <a
              key={index}
              className="news-item"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="news-img">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="news-item-title">
                {item.title.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < item.title.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </div>
              <div className="news-item-desc">
                {item.description}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

