'use client';

import { useEffect, useRef, useState } from 'react';

export default function EvolutionSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [isVisible]);

    const timelineData = [
        {
            year: '2011',
            period: '사업초기',
            title: 'Legacy',
            subtitle: '기반 구축',
            items: ['플랜트 전기', '소방 통신', '자동 제어'],
            status: 'completed'
        },
        {
            year: '2014',
            period: 'R&D 개발',
            title: 'Smart Factory',
            subtitle: '기술 축적',
            items: ['Sol! Gnee 센서 출시', 'GMES 개발', 'S/F Know-How 축적'],
            status: 'completed'
        },
        {
            year: '2025',
            period: '현재',
            title: 'Intelligence',
            subtitle: 'AI 도입',
            items: ['Vision & Robotic', 'HMI 시스템', 'AI 예지보전'],
            status: 'current'
        },
        {
            year: '2026~',
            period: '미래',
            title: 'Future',
            subtitle: 'AI ON-DEVICE',
            items: ['Machine Vision', 'Robotics · Control', 'Smart Factory 고도화'],
            status: 'upcoming'
        }
    ];

    return (
        <section ref={sectionRef} className="evolution-step-section">
            <div className="container">
                {/* 헤더 */}
                <div className={`section-header ${isVisible ? 'fade-in-active' : ''}`}>
                    <h2 className="section-title">
                        From Control <span>To Intelligence</span>
                    </h2>
                    <p className="section-description">
                        10년 이상의 기술 혁신을 통해 스마트팩토리의 미래를 선도합니다
                    </p>
                </div>

                {/* 수평 타임라인 (데스크톱) */}
                <div className="horizontal-timeline">
                    {/* 연결선 */}
                    <div className={`timeline-track ${isVisible ? 'animate' : ''}`}>
                        <div className="track-progress"></div>
                    </div>

                    {/* 스텝 카드들 */}
                    <div className="step-cards">
                        {timelineData.map((item, index) => (
                            <div
                                key={index}
                                className={`step-card ${item.status} ${isVisible ? 'visible' : ''}`}
                                style={{ animationDelay: `${0.3 + index * 0.2}s` }}
                            >
                                {/* 연결 노드 */}
                                <div className="step-node">
                                    <div className="node-inner">
                                        {item.status === 'completed' && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        )}
                                        {item.status === 'current' && <div className="pulse-dot"></div>}
                                        {item.status === 'upcoming' && <span className="node-arrow">→</span>}
                                    </div>
                                </div>

                                {/* 연도 태그 */}
                                <div className="step-year-tag">
                                    <span className="year-number">{item.year}</span>
                                    <span className="year-period">{item.period}</span>
                                </div>

                                {/* 카드 본문 */}
                                <div className="step-card-body">
                                    <div className="card-header">
                                        <h3 className="card-title">{item.title}</h3>
                                        <span className="card-subtitle">{item.subtitle}</span>
                                    </div>
                                    <ul className="card-list">
                                        {item.items.map((listItem, idx) => (
                                            <li key={idx}>
                                                <span className="list-bullet"></span>
                                                {listItem}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 하단 슬로건 */}

            </div>
        </section>
    );
}
