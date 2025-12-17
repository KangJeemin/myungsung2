import React from 'react';

const SoginiViewSection = () => {
    return (
        <section className="sogini-custom-section light-mode">
            <div className="sogini-layout">
                {/* 왼쪽 이미지 영역 */}
                <div className="sogini-left-panel">
                    <div className="sogini-image-wrapper sensor-mode">
                        {/* Placeholder image, user can update later */}
                        <img src="https://storage.googleapis.com/myeongseong-homepage-resource/images/products/sogini_view2.jpg" alt="Sogini View" onError={(e) => { e.currentTarget.src = '/images/sensor_img1.png' }} />
                        <div className="sogini-image-overlay"></div>
                    </div>
                </div>

                {/* 오른쪽 콘텐츠 영역 */}
                <div className="sogini-right-panel">
                    <div className="sogini-content-container">
                        <h2 className="sogini-title">쏘지니 뷰 (Sogini View)</h2>
                        <div className="sensor-description">
                            <strong>직관적인 데이터 시각화의 시작</strong>
                            <br />
                            복잡한 현장 데이터를 한눈에 파악할 수 있는<br />
                            스마트 모니터링 솔루션입니다.
                        </div>

                        {/* Features List Placeholder */}
                        <div className="sogini-features-list">
                            <div className="sogini-feature-item">
                                <span className="sogini-feature-number">01</span>
                                <div className="sogini-feature-text">
                                    <h3>실시간 대시보드</h3>
                                    <p>모든 설비의 상태를 실시간으로 확인하세요.</p>
                                </div>
                            </div>
                            <div className="sogini-feature-item">
                                <span className="sogini-feature-number">02</span>
                                <div className="sogini-feature-text">
                                    <h3>맞춤형 리포트</h3>
                                    <p>원하는 기간, 원하는 데이터로 리포트를 생성합니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SoginiViewSection;
