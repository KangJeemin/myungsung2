'use client';

import { useEffect, useRef, useState } from 'react';

export default function LocationSection() {
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

  return (
    <section 
      id="companyInfo" 
      className={`location-section ${isVisible ? 'visible' : ''}`}
      ref={sectionRef}
    >
      <div className="container">
        <div className="location-layout">
          {/* 왼쪽: 본사 정보 */}
          <div className="location-left">
            <div className="section-title location-title">본사 정보</div>
            
           
          </div>

          {/* 오른쪽: 찾아오시는 길 + 지도 */}
          <div className="location-right">
            <div className="address-section">
              <div className="address-label">찾아오시는 길</div>
              <div className="address-text">서울특별시 강남구 학동로45길 3, 3층 (논현동, 성우빌딩)</div>
            </div>

            {/* 지도 */}
            <div className="map-container">
              <div className="map-placeholder">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.0236574889876!2d127.03559!3d37.516513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3eaaa1c3e2d%3A0x5f2f3c5a8b1d9e2f!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDtlZnrj5nroZw0Neq4uCAz!5e0!3m2!1sko!2skr!4v1234567890!5m2!1sko!2skr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

