'use client';

import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './products.css';
import SmartAlarmSection from './components/smartAlarmSection';
import CommunicationModuleSection from './components/CommunicationModuleSection';

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState('sogini-ai');
  const [isTabsVisible, setIsTabsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        // Scroll Down
        if (currentScrollY > 100) {
          setIsTabsVisible(false);
        }
      } else {
        // Scroll Up
        setIsTabsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = {
    'sogini-ai': {
      title: '쏘지니 AI',
      subtitle: '예지보전 전용 AI 엔진',
      description: '제조 현장의 디지털 전환을 실현하는 스마트 솔루션',
      image: '/images/SoginiAI.jpg',
      features: [
        {
          title: '실시간 데이터 수집',
          description: '설비의 모든 데이터를 실시간으로 수집하고 분석합니다.',
          icon: '📊'
        },
        {
          title: 'AI 기반 분석',
          description: '머신러닝 알고리즘으로 패턴을 학습하고 이상 징후를 감지합니다.',
          icon: '🤖'
        },
        {
          title: '생산 효율 극대화',
          description: '데이터 기반 의사결정으로 생산 효율을 최적화합니다.',
          icon: '📈'
        },
        {
          title: '설비 가동률 향상',
          description: '예측 정비로 비계획 정지 시간을 최소화합니다.',
          icon: '⚙️'
        }
      ],
      specs: [
        { label: '데이터 수집 주기', value: '실시간 (1초 단위)' },
        { label: '지원 프로토콜', value: 'OPC-UA, Modbus, MQTT' },
        { label: '예측 정확도', value: '95% 이상' },
        { label: '대시보드', value: 'Web/Mobile 지원' }
      ]
    },
    'predictive': {
      title: '예지보전',
      subtitle: '설비 고장 예측 시스템',
      description: '설비 고장을 미리 예측하고 최적의 대응 방안을 제시합니다',
      image: '/images/AIPredicted.png',
      features: [
        {
          title: '고장 사전 예측',
          description: 'AI가 설비 데이터를 분석하여 고장을 사전에 예측합니다.',
          icon: '🔮'
        },
        {
          title: '최적 유지보수 시기',
          description: '데이터 기반으로 최적의 유지보수 시기를 알려드립니다.',
          icon: '🔧'
        },
        {
          title: '비용 절감',
          description: '예방 정비로 수리 비용과 다운타임을 크게 줄입니다.',
          icon: '💰'
        },
        {
          title: '알람 시스템',
          description: '이상 징후 발견 시 즉시 알람을 발송합니다.',
          icon: '🔔'
        }
      ],
      specs: [
        { label: '모니터링 항목', value: '진동, 온도, 압력, 전류 등' },
        { label: '예측 기간', value: '1~30일 전 예측' },
        { label: '알람 방식', value: 'SMS, Email, 앱 푸시' },
        { label: '학습 데이터', value: '최소 30일 이상' }
      ]
    },
    'sensor': {
      title: '스마트 센서',
      subtitle: '산업용 IoT 센서 솔루션',
      description: '다양한 센서로 설비 상태를 실시간 모니터링합니다',
      image: '/images/sensor_img1.png',
      features: [
        {
          title: '다양한 센서 지원',
          description: '진동, 온도, 압력, 전류 등 다양한 센서를 지원합니다.',
          icon: '📡'
        },
        {
          title: '무선 통신',
          description: 'LoRa, WiFi, Bluetooth 등 다양한 무선 통신을 지원합니다.',
          icon: '📶'
        },
        {
          title: '저전력 설계',
          description: '배터리로 최대 1년 이상 사용 가능합니다.',
          icon: '🔋'
        },
        {
          title: '방진방수',
          description: 'IP67 등급으로 열악한 환경에서도 사용 가능합니다.',
          icon: '💧'
        }
      ],
      specs: [
        { label: '센서 종류', value: '진동, 온도, 압력, 전류, 습도' },
        { label: '통신 방식', value: 'LoRa, WiFi, Bluetooth' },
        { label: '배터리 수명', value: '최대 1년' },
        { label: '방진방수 등급', value: 'IP67' }
      ]
    },
    'vision': {
      title: '비전 검사',
      subtitle: 'AI 머신 비전 시스템',
      description: '사람의 눈보다 정확하게 불량을 찾아냅니다',
      image: '/images/AIMachineVision1.png',
      features: [
        {
          title: '딥러닝 기반 검사',
          description: '딥러닝으로 학습하여 미세한 불량도 정확하게 검출합니다.',
          icon: '👁️'
        },
        {
          title: '실시간 처리',
          description: '고속 카메라와 GPU로 실시간 검사가 가능합니다.',
          icon: '⚡'
        },
        {
          title: '불량률 감소',
          description: '정확한 검사로 불량률을 획기적으로 낮춥니다.',
          icon: '✅'
        },
        {
          title: '데이터 분석',
          description: '불량 데이터를 분석하여 품질 개선에 활용합니다.',
          icon: '📉'
        }
      ],
      specs: [
        { label: '검사 속도', value: '최대 1000개/분' },
        { label: '검출 정확도', value: '99% 이상' },
        { label: '카메라 해상도', value: '최대 12MP' },
        { label: '조명', value: 'LED 백라이트/링라이트' }
      ]
    },
    'robot': {
      title: '로봇 자동화',
      subtitle: '산업용 로봇 솔루션',
      description: '생산 정보를 실시간으로 관리하고 최적화합니다',
      image: '/images/Robot.png',
      features: [
        {
          title: '산업용 로봇',
          description: '다양한 산업용 로봇으로 생산 공정을 자동화합니다.',
          icon: '🦾'
        },
        {
          title: '협동 로봇',
          description: '사람과 함께 작업하는 안전한 협동 로봇을 제공합니다.',
          icon: '🤝'
        },
        {
          title: '생산성 향상',
          description: '24시간 무정지 작업으로 생산성을 극대화합니다.',
          icon: '🏭'
        },
        {
          title: '작업자 안전',
          description: '위험한 작업을 로봇이 대신하여 안전을 보장합니다.',
          icon: '🛡️'
        }
      ],
      specs: [
        { label: '로봇 종류', value: '6축 로봇, 협동 로봇, AGV' },
        { label: '가반 하중', value: '3kg ~ 500kg' },
        { label: '작업 반경', value: '500mm ~ 3000mm' },
        { label: '제어 방식', value: 'PLC, PC 기반' }
      ]
    }
  };

  const currentProduct = products[activeTab as keyof typeof products];

  return (
    <div className="products-page">
      <Navbar />

      <main className="products-main">
        {/* 헤더 섹션 */}
        <section className="products-hero">
          <div className="container">
            <h1 className="products-hero-title">제품 소개</h1>
            <p className="products-hero-subtitle">
              명성에이앤티의 혁신적인 스마트 팩토리 솔루션을 만나보세요
            </p>
          </div>
        </section>

        {/* 탭 메뉴 */}
        <section className={`products-tabs-section ${isTabsVisible ? '' : 'products-tabs-hidden'}`}>
          <div className="container">
            <div className="products-tabs">
              <button
                className={`product-tab ${activeTab === 'sogini-ai' ? 'active' : ''}`}
                onClick={() => setActiveTab('sogini-ai')}
              >
                쏘지니 AI
              </button>
              <button
                className={`product-tab ${activeTab === 'predictive' ? 'active' : ''}`}
                onClick={() => setActiveTab('predictive')}
              >
                스마트 진동센서
              </button>
              <button
                className={`product-tab ${activeTab === 'sensor' ? 'active' : ''}`}
                onClick={() => setActiveTab('sensor')}
              >
                스마트 알람센서
              </button>
              <button
                className={`product-tab ${activeTab === 'vision' ? 'active' : ''}`}
                onClick={() => setActiveTab('vision')}
              >
                통신모듈
              </button>
              <button
                className={`product-tab ${activeTab === 'robot' ? 'active' : ''}`}
                onClick={() => setActiveTab('robot')}
              >
                로봇 자동화
              </button>
            </div>
          </div>
        </section>

        {/* 제품 상세 정보 - Sogini AI 탭일 경우 커스텀 레이아웃 적용 */}
        {activeTab === 'sogini-ai' ? (
          <section className="sogini-custom-section">
            <div className="sogini-layout">
              {/* 왼쪽 이미지 영역 */}
              <div className="sogini-left-panel">
                <div className="sogini-image-wrapper">
                  <img src="/images/productPage/mainAI.png" alt="Sogini AI Brain" />
                  <div className="sogini-image-overlay"></div>
                </div>
              </div>

              {/* 오른쪽 콘텐츠 영역 */}
              <div className="sogini-right-panel">
                <div className="sogini-content-container">
                  <h2 className="sogini-title">공장을 위한 AI</h2>

                  <div className="sogini-features-list">
                    <div className="sogini-feature-item">
                      <span className="sogini-feature-number">01</span>
                      <div className="sogini-feature-text">
                        <h3>현장 데이터 이해</h3>
                        <p>공장 현장에서 바로 데이터를 이해하고 학습</p>
                      </div>
                    </div>

                    <div className="sogini-feature-item">
                      <span className="sogini-feature-number">02</span>
                      <div className="sogini-feature-text">
                        <h3>CPU 환경 동작</h3>
                        <p>일반 CPU 환경에서도 동작 가능한 자체 AI 모델</p>
                        <p className="sogini-sub-text">• CPU에서 센서 동시 10개 -M4기준</p>
                        <p className="sogini-sub-text">• GPU에서 센서 동시 200개 -M4기준</p>
                      </div>
                    </div>

                    <div className="sogini-feature-item">
                      <span className="sogini-feature-number">03</span>
                      <div className="sogini-feature-text">
                        <h3>단차 기반 진단</h3>
                        <p>단차기반으로 고장 설비를 판단</p>
                      </div>
                    </div>

                    <div className="sogini-feature-item">
                      <span className="sogini-feature-number">04</span>
                      <div className="sogini-feature-text">
                        <h3>빅데이터 AI 분석</h3>
                        <p>고장이력이 발생할 경우 빅데이터에 누적하여 AI로 고장 설비를 찾아냄</p>
                      </div>
                    </div>

                    <div className="sogini-feature-item">
                      <span className="sogini-feature-number">05</span>
                      <div className="sogini-feature-text">
                        <h3>오토레이블링</h3>
                        <p>유사한 패턴을 자동으로 찾아 라벨링을 수행</p>
                      </div>
                    </div>
                  </div>

                  <div className="sogini-quote-box">
                    <blockquote>
                      "기존 AI는 GPU가 있어야 굴러갔지만, AI예지보전은 'AI를 위한 공장'이 아니라, <span className="highlight">'공장을 위한 AI'</span>를 만들었습니다."
                    </blockquote>
                  </div>

                  <p className="sogini-footer-text">
                    이 말은 곧, 복잡한 인프라 없이도 설비의 이상 징후를 실시간으로 분석하고, 스스로 학습하며 점점 정교해지는 AI 시스템을 구현했다는 뜻입니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 업무 방식의 혁신적 변화 섹션 */}
            <div className="sogini-innovation">
              <div className="container">
                <h2 className="sogini-innovation-title">업무 방식의 혁신적 변화</h2>

                <div className="sogini-innovation-grid">
                  {/* 이전 방식 */}
                  <div className="innovation-card">
                    <h3 className="innovation-subtitle">이전</h3>
                    <ul className="innovation-list">
                      <li>하루 종일 설비 데이터 모니터링</li>
                      <li>진동 그래프 일일이 비교</li>
                      <li>감으로 이상 여부 판단</li>
                      <li>데이터 기록 작업</li>
                    </ul>
                    <div className="innovation-image">
                      <img src="/images/productPage/person1.png" alt="기존 모니터링 방식" />
                    </div>
                  </div>

                  {/* 현재 방식 */}
                  <div className="innovation-card">
                    <h3 className="innovation-subtitle">현재</h3>
                    <ul className="innovation-list">
                      <li>쏘지니가 자동으로 데이터 수집</li>
                      <li>AI 예지보전 이상 패턴 탐지</li>
                      <li>AI가 원인 설명 제공</li>
                      <li>사람은 검증과 조치에만 집중</li>
                    </ul>
                    <div className="innovation-image">
                      <img src="/images/productPage/person2.png" alt="쏘지니 AI 방식" />
                    </div>
                  </div>
                </div>

                <div className="sogini-innovation-footer">
                  <p>
                    현장은 "문제 찾기" 대신 <span className="highlight">"해결하기"</span>에 집중할 수 있는 구조로 바뀝니다.
                    이것이 바로 저희가 말하는 "재귀발전형 XAI", 즉 <span className="highlight">스스로 발전하고 스스로 설명하는</span> 경량형 공장 인공지능 플랫폼입니다.
                  </p>
                </div>
              </div>
            </div>

            {/* AI 예지보전의 작동 원리 섹션 */}
            <div className="sogini-mechanism">
              <div className="container">
                <h2 className="sogini-title">AI예지보전의 작동 원리</h2>

                <div className="mechanism-flow">
                  {/* Step 1 */}
                  <div className="mechanism-step left">
                    <div className="mechanism-visual">
                      <div className="mechanism-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="4" y="4" width="16" height="16" rx="2" />
                          <line x1="8" y1="12" x2="16" y2="12" />
                          <line x1="8" y1="16" x2="16" y2="16" />
                          <line x1="8" y1="8" x2="12" y2="8" />
                        </svg>
                      </div>
                      <div className="mechanism-bar"></div>
                    </div>
                    <div className="mechanism-content">
                      <h3>데이터 수집</h3>
                      <p>쏘지니 센서가 진동·온도 데이터를 수집</p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="mechanism-step right">
                    <div className="mechanism-visual">
                      <div className="mechanism-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.55 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
                          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.55 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
                        </svg>
                      </div>
                      <div className="mechanism-bar"></div>
                    </div>
                    <div className="mechanism-content">
                      <h3>패턴 해석</h3>
                      <p>자체 모델이 데이터를 의미 단위로 해석해 이상 패턴을 탐지</p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="mechanism-step left">
                    <div className="mechanism-visual">
                      <div className="mechanism-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="10" cy="10" r="7" />
                          <line x1="21" y1="21" x2="15" y2="15" />
                          <circle cx="10" cy="10" r="3" />
                        </svg>
                      </div>
                      <div className="mechanism-bar"></div>
                    </div>
                    <div className="mechanism-content">
                      <h3>자동 라벨링</h3>
                      <p>유사한 패턴을 자동으로 찾아 라벨을 전파</p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="mechanism-step right">
                    <div className="mechanism-visual">
                      <div className="mechanism-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div className="mechanism-bar"></div>
                    </div>
                    <div className="mechanism-content">
                      <h3>2단계 검증</h3>
                      <p>유사도 → 레벨/반복 검사로 거짓양성을 최소화</p>
                    </div>
                  </div>
                </div>

                <div className="mechanism-info-box">
                  <div className="info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  </div>
                  <p>사용자가 한번만 해당 문제에 대해 라벨링을 하면, 앞으로 어떤 문제일지 디테일하게 알 수 있습니다.</p>
                </div>

                <div className="mechanism-footer">
                  <p>
                    이렇게 축적된 학습 결과는 다음 이상 탐지에 다시 반영되어, 공장 전체가 하나의 <span className="highlight">'생각하는 유기체'</span>처럼 스스로 진단하고 개선하는 구조로 발전합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* AI 예지보전 벤치마크 섹션 */}
            <div className="sogini-benchmark">
              <div className="benchmark-hero-image">
                <img src="/images/ai_tech_resources_bg.png" alt="AI Benchmark Background" />
                <div className="benchmark-overlay"></div>
              </div>

              <div className="container benchmark-content">
                <h2 className="sogini-title">AI예지보전 벤치마크</h2>
                <p className="benchmark-subtitle">
                  쏘지니의 AI 벤치마크는 실제 제조 현장에서 수집된 데이터를 기반으로 검증되었습니다.
                </p>

                <div className="benchmark-grid">
                  {/* Card 1: 처리 속도 */}
                  <div className="benchmark-card">
                    <div className="benchmark-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                    </div>
                    <h3>처리 속도</h3>
                    <div className="benchmark-value">평균 <span className="highlight">0.1초</span> 내외</div>
                    <p className="benchmark-desc">전체 응답 1초 이내 완료</p>
                  </div>

                  {/* Card 2: 메모리 사용량 */}
                  <div className="benchmark-card">
                    <div className="benchmark-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                        <line x1="6" y1="6" x2="6.01" y2="6" />
                        <line x1="6" y1="18" x2="6.01" y2="18" />
                      </svg>
                    </div>
                    <h3>메모리 사용량</h3>
                    <div className="benchmark-value"><span className="highlight">100MB</span> 이하</div>
                    <p className="benchmark-desc">CPU 환경에서 실시간 분석 가능</p>
                  </div>

                  {/* Card 3: 정확도 */}
                  <div className="benchmark-card">
                    <div className="benchmark-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="22" y1="12" x2="18" y2="12" />
                        <line x1="6" y1="12" x2="2" y2="12" />
                        <line x1="12" y1="6" x2="12" y2="2" />
                        <line x1="12" y1="22" x2="12" y2="18" />
                      </svg>
                    </div>
                    <h3>정확도</h3>
                    <div className="benchmark-value">평균 Recall <span className="highlight">93.7%</span></div>
                    <p className="benchmark-desc">유사도 품질 90% 이상</p>
                  </div>
                </div>

                <div className="benchmark-footer">
                  <p>
                    즉, 복잡한 공정 데이터에서도 사람이 놓칠 수 있는 미세한 패턴을 안정적으로 탐지할 수 있습니다.
                    이전에는 사람이 직접 데이터를 모니터링하며 이상 여부를 일일이 판단해야 했다면,
                    지금은 AI가 실시간으로 분석하고 원인을 제시하기 때문에 사람은 결과를 확인하고 조치만 내리면 되는 단계로 진화했습니다.
                  </p>
                </div>
              </div>
            </div>
          </section>
        ) : activeTab === 'predictive' ? (
          <section className="sogini-custom-section light-mode">
            <div className="sogini-layout">
              {/* 왼쪽 이미지 영역 */}
              <div className="sogini-left-panel">
                <div className="sogini-image-wrapper sensor-mode">
                  <img src="/images/sensor_img1.png" alt="Smart Sensor" />
                  <div className="sogini-image-overlay"></div>
                </div>
              </div>

              {/* 오른쪽 콘텐츠 영역 */}
              <div className="sogini-right-panel">
                <div className="sogini-content-container">
                  <h2 className="sogini-title">스마트 진동 센서</h2>
                  <div className="sensor-description">
                    <strong>쏘지니 스마트 센서란?</strong>
                    쏘지니 스마트 센서는 스마트팩토리의 현장에서<br />
                    온도 및 진동 상태를 동시 모니터링 가능한 센서입니다.
                  </div>

                  <div className="sogini-features-list">
                    <div className="sogini-feature-item">
                      <span className="sogini-feature-number">01</span>
                      <div className="sogini-feature-text">
                        <h3>가속도 센서</h3>
                        <p>가속도 센서를 이용해 진동 변화 감지</p>
                      </div>
                    </div>

                    <div className="sogini-feature-item">
                      <span className="sogini-feature-number">02</span>
                      <div className="sogini-feature-text">
                        <h3>극한 환경</h3>
                        <p>강한 진동, 고온환경에서 사용 가능</p>
                      </div>
                    </div>

                    <div className="sogini-feature-item">
                      <span className="sogini-feature-number">03</span>
                      <div className="sogini-feature-text">
                        <h3>원활한 성능</h3>
                        <p>노이즈 환경에서도 원활히 유지되는 성능</p>
                      </div>
                    </div>

                    <div className="sogini-feature-item">
                      <span className="sogini-feature-number">04</span>
                      <div className="sogini-feature-text">
                        <h3>실시간 측정</h3>
                        <p>진동과 온도를 실시간으로 측정해주는 센서</p>
                      </div>
                    </div>

                    <div className="sogini-feature-item">
                      <span className="sogini-feature-number">05</span>
                      <div className="sogini-feature-text">
                        <h3>DC 변환 출력</h3>
                        <p>아날로그 신호 진동 출력을 DC로 변환하여 출력</p>
                      </div>
                    </div>

                    <div className="sogini-feature-item">
                      <span className="sogini-feature-number">06</span>
                      <div className="sogini-feature-text">
                        <h3>3가지 축 진동</h3>
                        <p>X축, Y축, Z축 진동 감지</p>
                      </div>
                    </div>

                    <div className="sogini-feature-item">
                      <span className="sogini-feature-number">07</span>
                      <div className="sogini-feature-text">
                        <h3>미세진동 감지</h3>
                        <p>미세진동 감지 1mg</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sogini-detailed-benefits">
              <div className="container">
                <div className="sogini-benefits-grid">
                  <div className="benefits-title-col">
                    <h2>쏘지니 스마트 센서<br />적용 시 좋은 점</h2>
                  </div>
                  <div className="benefits-list-col">
                    <ol className="sensor-benefits-list">
                      <li>당사는 제어공사 가능 업체로서 Application DB, 설치 시운전, 제어, 전기공사, HMI 모니터링, 시운전, 유지관리 등 대응가능</li>
                      <li>범용 HMI를 활용한 모니터링 가능</li>
                      <li>PLC를 통한 모니터링에 최적화 개발</li>
                      <li>최저 투자금액으로 최적의 모니터링, 알람 가능</li>
                      <li>최소 납기 대응, 현장 상황에 따른 개발 대응 가능</li>
                      <li>설비 구간 별 센서 설치 후 온도 및 진동 상태 동시 모니터링</li>
                      <li>합리적인 가격으로 센서 적용 가능</li>
                    </ol>
                  </div>
                </div>

                <div className="sogini-case-section">
                  <div className="case-image-wrapper">
                    <img src="/images/sensor_img1.png" alt="Aluminum Case" />
                  </div>
                  <div className="case-content">
                    <h3>알루미늄 방수 케이스</h3>
                    <p>진동센서의 보호를 위해 알루미늄으로 제작한 방수 케이스 진동센서 제품입니다.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Specification Table Section */}
            <div className="sensor-specification-section">
              <div className="container">
                <div className="spec-table-wrapper">
                  <div className="spec-table-header">
                    <h2>SPECIFICATION</h2>
                  </div>

                  <div className="spec-table-content">
                    <div className="spec-table-row">
                      <div className="spec-table-label">MEASURING RANGE (g)</div>
                      <div className="spec-table-value">1g (2g~32g : 주문생산)</div>
                    </div>

                    <div className="spec-table-row">
                      <div className="spec-table-label">SENSITIVITY</div>
                      <div className="spec-table-value">± 1mg (X축, Y축, Z축)</div>
                    </div>

                    <div className="spec-table-row">
                      <div className="spec-table-label">FREQUENCY RANGE</div>
                      <div className="spec-table-value">~1.6KHz</div>
                    </div>

                    <div className="spec-table-row">
                      <div className="spec-table-label">RESONANCE FREQUENCY</div>
                      <div className="spec-table-value">5.5KHz</div>
                    </div>

                    <div className="spec-table-row">
                      <div className="spec-table-label">BANDWIDTH (Hz)</div>
                      <div className="spec-table-value">50Hz, 100Hz</div>
                    </div>

                    <div className="spec-table-row">
                      <div className="spec-table-label">POWER</div>
                      <div className="spec-table-value">INPUT VOLTAGE 24±4VDC TYPICAL 12VDC @ 30mA 이하</div>
                    </div>

                    <div className="spec-table-row">
                      <div className="spec-table-label">HOUSING</div>
                      <div className="spec-table-value">
                        <div>ALUMINIUM 과 ABS PLASTIC, IP65, IP66, EPOXY</div>
                        <div style={{ marginTop: '0.25rem' }}>충진 또는 방수 코팅</div>
                      </div>
                    </div>

                    <div className="spec-table-row">
                      <div className="spec-table-label">OPERATING TEMPERATURE</div>
                      <div className="spec-table-value">-30℃ ~ 100℃</div>
                    </div>

                    <div className="spec-table-row">
                      <div className="spec-table-label">WEIGHT</div>
                      <div className="spec-table-value">200g 이하</div>
                    </div>

                    <div className="spec-table-row">
                      <div className="spec-table-label">OUTPUT</div>
                      <div className="spec-table-value">0 ~ 5.0V (전동, 온도 출력)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PIN ASSIGN Section */}
            <div className="sensor-pin-assign-section">
              <div className="container">
                <div className="pin-assign-layout">
                  {/* Left: Sensor Diagram */}
                  <div className="pin-diagram-wrapper">
                    <img src="/images/sensor_pin_diagram.png" alt="Sensor Pin Diagram" />
                  </div>

                  {/* Right: Pin Assignment Table */}
                  <div className="pin-table-wrapper">
                    <div className="pin-table-header">
                      <h2>PIN ASSIGN</h2>
                    </div>

                    <div className="pin-table-content">
                      <div className="pin-table-row">
                        <div className="pin-color-label">
                          <span className="pin-color-dot red"></span>
                          <span className="pin-color-name">RED</span>
                        </div>
                        <div className="pin-description">Input Voltage (+20V ~ +28V)</div>
                      </div>

                      <div className="pin-table-row">
                        <div className="pin-color-label">
                          <span className="pin-color-dot black"></span>
                          <span className="pin-color-name">BLACK</span>
                        </div>
                        <div className="pin-description">GND</div>
                      </div>

                      <div className="pin-table-row">
                        <div className="pin-color-label">
                          <span className="pin-color-dot white"></span>
                          <span className="pin-color-name">WHITE</span>
                        </div>
                        <div className="pin-description">Temperature Analog Voltage</div>
                      </div>

                      <div className="pin-table-row">
                        <div className="pin-color-label">
                          <span className="pin-color-dot green"></span>
                          <span className="pin-color-name">GREEN</span>
                        </div>
                        <div className="pin-description">Vibration Analog Voltage</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sensor Outline Section */}
            <div className="sensor-outline-section">
              <div className="container">
                <div className="outline-header">
                  <h2>OUTLINE : 쏘지니 센서</h2>
                </div>

                <div className="outline-image-container">
                  {/* Single large sensor dimension image */}
                  <div className="outline-image-wrapper">
                    <img src="/images/sensor_outline.png" alt="Sensor Outline Dimensions" />
                  </div>
                </div>
              </div>
            </div> {/* Sensor Outline Section */}
            <div className="sensor-outline-section">
              <div className="container">
                <div className="outline-header">
                  <h2>OUTLINE : 알루미늄 방수 케이스</h2>
                </div>

                <div className="outline-image-container">
                  {/* Single large sensor dimension image */}
                  <div className="outline-image-wrapper">
                    <img src="/images/sensor_outline.png" alt="Sensor Outline Dimensions" />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Selection Guide Section */}
            <div className="product-guide-section">
              <div className="container">
                <div className="guide-header">
                  <h2>제품선정 GUIDE</h2>
                </div>

                <div className="guide-code-container">
                  <div className="code-segment">
                    <div className="code-label top">제조사</div>
                    <div className="code-value">MS</div>
                  </div>

                  <div className="code-separator">-</div>



                  <div className="code-separator">-</div>

                  <div className="code-segment">
                    <div className="code-label top">Case 재질<br />(P : Plastic, AL : Aluminium)</div>
                    <div className="code-value">P</div>
                  </div>

                  <div className="code-separator">-</div>

                  <div className="code-segment">
                    <div className="code-label top">Version NO.</div>
                    <div className="code-value">001</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Major Application Cases Section */}
            <div className="application-cases-section">
              <div className="container">
                <div className="application-header">
                  <h2>주 요 적 용 사 례</h2>
                  <p>* 모터불량 예측(생산 모니터링), Alarm 일보, 불량 Top10분석, Overhaul 주기관리</p>
                </div>

                <div className="application-list">
                  {/* Case 1: 압출기 */}
                  <div className="application-item">
                    <h3 className="application-title">압출기</h3>
                    <div className="application-images">
                      <div className="app-image-wrapper">
                        <img src="/images/application_extruder_1.png" alt="압출기 적용 사례 1" />
                      </div>
                      <div className="app-image-wrapper">
                        <img src="/images/application_extruder_2.png" alt="압출기 적용 사례 2" />
                      </div>
                    </div>
                  </div>

                  {/* Case 2: 와인더 */}
                  <div className="application-item">
                    <h3 className="application-title">와인더</h3>
                    <div className="application-images">
                      <div className="app-image-wrapper">
                        <img src="/images/application_winder_1.png" alt="와인더 적용 사례 1" />
                      </div>
                      <div className="app-image-wrapper">
                        <img src="/images/application_winder_2.png" alt="와인더 적용 사례 2" />
                      </div>
                    </div>
                  </div>

                  {/* Case 3: 믹서 */}
                  <div className="application-item">
                    <h3 className="application-title">믹서</h3>
                    <div className="application-images">
                      <div className="app-image-wrapper">
                        <img src="/images/application_mixer_1.png" alt="믹서 적용 사례 1" />
                      </div>
                      <div className="app-image-wrapper">
                        <img src="/images/application_mixer_2.png" alt="믹서 적용 사례 2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : activeTab === 'sensor' ? (
          <SmartAlarmSection />
        ) : activeTab === 'vision' ? (
          <CommunicationModuleSection />
        ) : (
          <section className="product-detail-section">
            <div className="container">
              {/* 제품 개요 */}
              <div className="product-overview">
                <div className="product-overview-content">
                  <div className="product-badge">{currentProduct.subtitle}</div>
                  <h2 className="product-title">{currentProduct.title}</h2>
                  <p className="product-description">{currentProduct.description}</p>
                </div>
                <div className="product-overview-image">
                  <img src={currentProduct.image} alt={currentProduct.title} />
                </div>
              </div>

              {/* 주요 기능 */}
              <div className="product-features">
                <h3 className="section-subtitle">주요 기능</h3>
                <div className="features-grid">
                  {currentProduct.features.map((feature, index) => (
                    <div key={index} className="feature-card">
                      <div className="feature-icon">{feature.icon}</div>
                      <h4 className="feature-title">{feature.title}</h4>
                      <p className="feature-description">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 제품 사양 */}
              <div className="product-specs">
                <h3 className="section-subtitle">제품 사양</h3>
                <div className="specs-table">
                  {currentProduct.specs.map((spec, index) => (
                    <div key={index} className="spec-row">
                      <div className="spec-label">{spec.label}</div>
                      <div className="spec-value">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 문의하기 버튼 */}
              <div className="product-cta">
                <a href="#contact" className="btn btn-primary btn-large">
                  제품 문의하기
                </a>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div >
  );
}
