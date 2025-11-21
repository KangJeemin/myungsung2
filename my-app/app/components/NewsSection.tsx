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
      image: 'https://cdn.fassto.ai/resources/imagesAbout/news/seriesC950_x2.jpg',
      title: 'AI물류 플랫폼 기업 \'파스토\', 총950억\n시리즈C 투자유치 완료',
      description: 'AI 물류 플랫폼 기업 파스토(FASSTO)가 지난 4월 SK디앤디, 신한벤처투자, 산업은행, VIG파트너스, 하나벤처스의 800억원 투자에 이어 유안타인 ...',
      link: 'https://marketinsight.hankyung.com/article/202208195130r'
    },
    {
      image: 'https://cdn.fassto.ai/resources/imagesAbout/news/Yongin2center_x2.jpeg',
      title: '파스토, 스마트물류센터 1등급 인증\n용인2센터 오픈',
      description: '스마트물류센터 스타트업 파스토는 지난해 오픈한 용인1센터에 이어서 용인2센터 운영에 나선다고 5일 밝혔다. 용인2센터는 연면적 약 4만...',
      link: 'https://biz.chosun.com/industry/company/2022/08/05/XY7FPSLZMZCHTM47KCZA3NVXBI/?utm_source=naver&utm_medium=original&utm_campaign=biz'
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
          파스토의 새로운 소식
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

