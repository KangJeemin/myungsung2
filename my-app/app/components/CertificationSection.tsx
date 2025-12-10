'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const patentImages = [
    "/images/Patents/1. 특허증-경구용 약품 검사장치(제10-2455028호)_page-0001.jpg",
    "/images/Patents/2. 특허증-경구용 약품 검사장치(제10호-2544143호)_변형되어서 특허_page-0001.jpg",
    "/images/Patents/3. 특허증-열화상을 이용한 배터리 충방전 안정성 검사 장치(제10호-2526124호)_page-0001.jpg",
    "/images/Patents/4. 특허증-약품 용기 검사 장치(제10-2729793호)_page-0001.jpg",
    "/images/Patents/5. 특허증-영상 전처리를 이용한 배터리셀 비전 검사 장치 및 방법(제10-2834473호)_page-0001.jpg",
    "/images/Patents/특허증_10-1536289_보안스티커부착기,출입증자동출력기,그리고출입보안관리서버를 활용한 스마트 출입보안 처리시스템및그활용방법_page-0001.jpg",
    "/images/Patents/특허증_10-1559720_모유수유~방법_page-0001.jpg",
    "/images/Patents/특허증_10-1761905 (로드셀을 활용한 수유량 검출 방법)_page-0001.jpg",
    "/images/Patents/특허증_10-1847959 (체중측정이용이한수유쿠션및 수유테이블).png",
    "/images/Patents/특허증_10-2077187_모터용 온도 및 진동 감지 센서장치_page-0001.jpg",
    "/images/Patents/특허증_10-2077188_모터용 온도 및 진동 감지 센서장치_page-0001.jpg",
    "/images/Patents/특허증_10-2464322_설비 이상 모니터링 시스템_page-0001.jpg",
    "/images/Patents/특허증_10-2689004 AI 분석을 이용한 스마트 유도 시스템_page-0001.jpg",
    "/images/Patents/특허증_10-2801021 시설 및 설비 모니터링 시스템_(주)명성에이앤티 (1)_page-0001.jpg"
];

const certificateImages = [
    "/images/Certificate/ATEX EU-TYPE EXAMINATION CERTIFICATE_유럽방폭인증_(주)명성에이앤티-KRH-24-ATEX1003X_p01.jpg",
    "/images/Certificate/CE인증서 - OT-221-RSD-022_p01.jpg",
    "/images/Certificate/CE인증서 - OT-238-RED-078_p01.jpg",
    "/images/Certificate/CE인증서 - OT-238-RHD-006_p01.jpg",
    "/images/Certificate/CE인증서(표지) - OT-238-RHD-006_p01.jpg",
    "/images/Certificate/CE인증서(표지) - OT-247-RED-031_p01.jpg",
    "/images/Certificate/CE인증서(표지) - OT-247-RED-032_p01.jpg",
    "/images/Certificate/CE인증서(표지) - OT-247-RSD-003_p01.jpg",
    "/images/Certificate/CE인증서(표지) - OT-247-RSD-008_p01.jpg",
    "/images/Certificate/CE인증서(표지) - OT-247-RSD-009_p01.jpg",
    "/images/Certificate/IECEx_KTL_국제방폭인증_(주)명성에이앤티 - IECEx KTL 24.0005X_p01.jpg",
    "/images/Certificate/ISO 14001_국문(2)_p01.jpg",
    "/images/Certificate/ISO 14001_영문(2)_p01.jpg",
    "/images/Certificate/ISO 45001_국문(2)_p01.jpg",
    "/images/Certificate/ISO 45001_영문(2)_p01.jpg",
    "/images/Certificate/ISO 9001_국문(2)_p01.jpg",
    "/images/Certificate/ISO 9001_영문(2)_p01.jpg"
];

const trademarkImages = [
    "/images/trademarkImages/상표권_40-1260251_수유쿠션등 17건_page-0001.jpg",
    "/images/trademarkImages/상표권_40-1264357_수유쿠션등 17건_page-0001.jpg"
];

const licenseImages = [
    "/images/concession/건설업등록증_기계설비,가스공사업_241213_page-0001.jpg",
    "/images/concession/소방시설업등록증_page-0001.jpg",
    "/images/concession/전기공사업등록증_page-0001.jpg",
    "/images/concession/정보통신공사업 등록증_page-0001.jpg"
];

const confirmationImages = [
    "/images/ConfirmationLetter/1.중소기업 확인서_page-0001.jpg",
    "/images/ConfirmationLetter/2.벤처인증 확인서_page-0001.jpg",
    "/images/ConfirmationLetter/3.창업기업확인서_page-0001.jpg",
    "/images/ConfirmationLetter/4.메인비즈_page-0001.jpg",
    "/images/ConfirmationLetter/5.이노비즈_page-0001.jpg",
    "/images/ConfirmationLetter/6.소재부품장비전문기업확인서_page-0001.jpg",
    "/images/ConfirmationLetter/8.성과공유인증확인서_page-0001.jpg",
    "/images/ConfirmationLetter/벤처기업확인서(24.05.22~27.05.21)_page-0001.jpg",
    "/images/ConfirmationLetter/성과공유기업확인서_25.01.01~25.12.31_page-0001.jpg",
    "/images/ConfirmationLetter/이노비즈협회_24.01.21~27.01.20_page-0001.jpg",
    "/images/ConfirmationLetter/중소기업확인서 (25.04.01~26.03.31) - 명성A&T_page-0001.jpg"
];

export default function CertificationSection() {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalCategory, setModalCategory] = useState<'patents' | 'certifications' | 'trademarks' | 'licenses' | 'confirmations' | null>(null);
    const sectionRef = useRef<HTMLElement>(null);

    const handleCardClick = (title: string) => {
        if (title === '특허' || title === 'Patents') {
            setModalCategory('patents');
            setIsModalOpen(true);
        } else if (title === '인증서' || title === 'Certifications') {
            setModalCategory('certifications');
            setIsModalOpen(true);
        } else if (title === '상표' || title === 'Trademarks') {
            setModalCategory('trademarks');
            setIsModalOpen(true);
        } else if (title === '면허' || title === 'Licenses') {
            setModalCategory('licenses');
            setIsModalOpen(true);
        } else if (title === '확인서' || title === 'Confirmations') {
            setModalCategory('confirmations');
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalCategory(null);
    };

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

    // 인증 카테고리 데이터
    const certifications = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" />
                </svg>
            ),
            title: '특허',
            items: [
                '혁신적인 기술 개발로 축적된 특허권'
            ]
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 15L11 17L15 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: '인증서',
            items: [
                '품질과 기술력을 인정 받은 각종 인증서',
            ]
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 2L10 4M16 2L14 4M2 8L4 10M2 16L4 14M22 8L20 10M22 16L20 14"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            title: '상표',
            items: [
                '독자적인 브랜드 상표권'
            ]
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M7 8H17M7 12H17M7 16H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="18" cy="6" r="3" fill="currentColor" />
                </svg>
            ),
            title: '면허',
            items: [
                '전문 사업 수행을 위한 각종 면허',
            ]
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: '확인서',
            items: [
                '공식적으로 확인된 각종 증명서',
            ]
        },
    ];

    return (
        <section
            id="certifications"
            className={`certification-section ${isVisible ? 'visible' : ''}`}
            ref={sectionRef}
        >
            <div className="container">
                <div className="section-title certification-title">
                    {t('certifications.title')}
                </div>
                <div className="certification-subtitle">
                    {t('certifications.subtitle')}
                </div>

                <div className="certification-grid">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className={`certification-card ${cert.title === '특허' || cert.title === '인증서' || cert.title === '상표' || cert.title === '면허' || cert.title === '확인서' ? 'clickable' : ''
                                }`}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                            onClick={() => handleCardClick(cert.title)}
                        >
                            <div className="certification-icon">
                                {cert.icon}
                            </div>
                            <div className="certification-header">
                                <h3 className="certification-card-title">{cert.title}</h3>
                            </div>
                            <ul className="certification-list">
                                {cert.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="certification-item">
                                        <span className="certification-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {
                isModalOpen && (
                    <div className="certification-modal-overlay" onClick={closeModal}>
                        <div className="certification-modal-content" onClick={(e) => e.stopPropagation()}>
                            <div className="certification-modal-header">
                                <h3 className="certification-modal-title">
                                    {modalCategory === 'patents' ? '특허증 (Patents)' :
                                        modalCategory === 'certifications' ? '인증서 (Certifications)' :
                                            modalCategory === 'trademarks' ? '상표 (Trademarks)' :
                                                modalCategory === 'licenses' ? '면허 (Licenses)' :
                                                    '확인서 (Confirmations)'}
                                </h3>
                                <button className="certification-modal-close" onClick={closeModal}>&times;</button>
                            </div>
                            <div className="certification-modal-body">
                                {modalCategory === 'patents' && patentImages.map((src, index) => (
                                    <img
                                        key={index}
                                        src={src}
                                        alt={`Patent ${index + 1}`}
                                        className="certification-modal-image"
                                        loading="lazy"
                                    />
                                ))}
                                {modalCategory === 'certifications' && certificateImages.map((src, index) => (
                                    <img
                                        key={index}
                                        src={src}
                                        alt={`Certificate ${index + 1}`}
                                        className="certification-modal-image"
                                        loading="lazy"
                                    />
                                ))}
                                {modalCategory === 'trademarks' && trademarkImages.map((src, index) => (
                                    <img
                                        key={index}
                                        src={src}
                                        alt={`Trademark ${index + 1}`}
                                        className="certification-modal-image"
                                        loading="lazy"
                                    />
                                ))}
                                {modalCategory === 'licenses' && licenseImages.map((src, index) => (
                                    <img
                                        key={index}
                                        src={src}
                                        alt={`License ${index + 1}`}
                                        className="certification-modal-image"
                                        loading="lazy"
                                    />
                                ))}
                                {modalCategory === 'confirmations' && confirmationImages.map((src, index) => (
                                    <img
                                        key={index}
                                        src={src}
                                        alt={`Confirmation ${index + 1}`}
                                        className="certification-modal-image"
                                        loading="lazy"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )
            }
        </section >
    );
}
