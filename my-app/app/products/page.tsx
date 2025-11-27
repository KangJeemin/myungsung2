'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './products.css';

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState('sogini-ai');

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
        <section className="products-tabs-section">
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
                예지보전
              </button>
              <button
                className={`product-tab ${activeTab === 'sensor' ? 'active' : ''}`}
                onClick={() => setActiveTab('sensor')}
              >
                스마트 센서
              </button>
              <button
                className={`product-tab ${activeTab === 'vision' ? 'active' : ''}`}
                onClick={() => setActiveTab('vision')}
              >
                비전 검사
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

        {/* 제품 상세 정보 */}
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
      </main>

      <Footer />
    </div>
  );
}
