import React from 'react';

const CommunicationModuleSection = () => {
    return (
        <section className="sogini-custom-section light-mode">
            <div className="sogini-layout">
                {/* 왼쪽 이미지 영역 */}
                <div className="sogini-left-panel">
                    <div className="sogini-image-wrapper">
                        {/* Placeholder image, user can update later */}
                        <img src="/images/productPage/communication_module_main.png" alt="Communication Module" onError={(e) => { e.currentTarget.src = '/images/sensor_img1.png' }} />
                        <div className="sogini-image-overlay"></div>
                    </div>
                </div>

                {/* 오른쪽 콘텐츠 영역 */}
                <div className="sogini-right-panel">
                    <div className="sogini-content-container">
                        <h2 className="sogini-title">통신 모듈</h2>
                        <div className="sensor-description">
                            <strong>스마트 팩토리 연결의 핵심</strong>
                            <br />
                            현장의 데이터를 끊김 없이 연결하여<br />
                            실시간 모니터링 및 제어를 가능하게 하는 통신 솔루션입니다.
                        </div>

                        {/* Features List Placeholder */}
                        <div className="sogini-features-list three-cols">
                            <div className="sogini-feature-item">
                                <span className="sogini-feature-number">01</span>
                                <div className="sogini-feature-text">
                                    <h3>Power</h3>
                                    <p>24V 입력</p>
                                </div>
                            </div>
                            <div className="sogini-feature-item">
                                <span className="sogini-feature-number">02</span>
                                <div className="sogini-feature-text">
                                    <h3>Reset</h3>
                                    <p>MODE와 Monitor 셋업 후 리셋 처리</p>
                                </div>
                            </div>
                            <div className="sogini-feature-item">
                                <span className="sogini-feature-number">03</span>
                                <div className="sogini-feature-text">
                                    <h3>Monitor</h3>
                                    <p>셋업 · IP Mac 주소 설정 · 통신 출력상태 모니터링</p>
                                </div>
                            </div>
                            <div className="sogini-feature-item">
                                <span className="sogini-feature-number">04</span>
                                <div className="sogini-feature-text">
                                    <h3>Switch</h3>
                                    <p>Monitor 상태에서 설정 모드로의 진입은 'q' 또는 "Switch" 버튼으로 설정</p>
                                </div>
                            </div>
                            <div className="sogini-feature-item">
                                <span className="sogini-feature-number">05</span>
                                <div className="sogini-feature-text">
                                    <h3>MODE 1 · 2 · 3</h3>
                                    <p>MODE 참조</p>
                                </div>
                            </div>
                            <div className="sogini-feature-item">
                                <span className="sogini-feature-number">06</span>
                                <div className="sogini-feature-text">
                                    <h3>Modbus RTU</h3>
                                    <p>Modbus RTU 통신 포트 19600 (RS485 통신 기반)</p>
                                </div>
                            </div>
                            <div className="sogini-feature-item">
                                <span className="sogini-feature-number">07</span>
                                <div className="sogini-feature-text">
                                    <h3>Ethernet</h3>
                                    <p>이더넷 통신 포트</p>
                                </div>
                            </div>
                            <div className="sogini-feature-item">
                                <span className="sogini-feature-number">08</span>
                                <div className="sogini-feature-text">
                                    <h3>ANT</h3>
                                    <p>WiFi 용 안테나</p>
                                </div>
                            </div>
                            <div className="sogini-feature-item">
                                <span className="sogini-feature-number">09</span>
                                <div className="sogini-feature-text">
                                    <h3>AINC1~AINC4</h3>
                                    <p>4~20mA 전류 입력(진동 · 온도)</p>
                                </div>
                            </div>
                            <div className="sogini-feature-item">
                                <span className="sogini-feature-number">10</span>
                                <div className="sogini-feature-text">
                                    <h3>AINV1~AINV4</h3>
                                    <p>0~5V 전압 입력 (진동 · 온도)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* SPECIFICATION Section */}
            <div className="specification-section">
                <div className="container">
                    <h2 className="mode-table-title">S P E C I F I C A T I O N</h2>
                    <div className="table-responsive">
                        <table className="custom-mode-table spec-table">
                            <colgroup>
                                <col style={{ width: '30%' }} />
                                <col style={{ width: '55%' }} />
                                <col style={{ width: '15%' }} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>MS-MCM-P-001</th>
                                    <th>단위</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="spec-label">INPUT POWER</td>
                                    <td className="spec-value">DC 20 ~ 26</td>
                                    <td className="spec-unit">V</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">WIFI</td>
                                    <td className="spec-value">802.11b/g/n, 2.4G</td>
                                    <td className="spec-unit">-</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">Ethernet</td>
                                    <td className="spec-value">10/100 base-T</td>
                                    <td className="spec-unit">-</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">Modbus-RTU</td>
                                    <td className="spec-value">19600(RS485통신 기반)</td>
                                    <td className="spec-unit">BPS</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">Modbus-TCP</td>
                                    <td className="spec-value">Industrial Network</td>
                                    <td className="spec-unit">-</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">FEnet</td>
                                    <td className="spec-value">LS 전용통신(XGT,XGK)</td>
                                    <td className="spec-unit">-</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">Analog Voltage Input</td>
                                    <td className="spec-value">0 ~ 5 (8-Channel)</td>
                                    <td className="spec-unit">V</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">Analog Current Input</td>
                                    <td className="spec-value">4 ~ 20 (8-Channel)</td>
                                    <td className="spec-unit">mA</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">Monitor</td>
                                    <td className="spec-value">통신 상태 모니터링 / Setup</td>
                                    <td className="spec-unit">-</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">S/W (Switch)</td>
                                    <td className="spec-value">Setup Mode</td>
                                    <td className="spec-unit">-</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">Reset</td>
                                    <td className="spec-value">재부팅/초기화</td>
                                    <td className="spec-unit">-</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">ISP</td>
                                    <td className="spec-value">펌웨어 다운로드</td>
                                    <td className="spec-unit">-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Communication Module Outline & Connection Info */}
            <div className="sensor-outline-section">
                <div className="container">
                    <div className="outline-header">
                        <h2>다채널 - 통신 모듈 , 제품 외형 및 통신 연결 정보</h2>
                    </div>
                    <div className="outline-image-container">
                        <div className="outline-image-wrapper">
                            <img
                                src="/images/productPage/communication_outline_connection.png"
                                alt="다채널 통신 모듈 제품 외형 및 연결 정보"
                                onError={(e) => { e.currentTarget.src = '/images/sensor_outline.png' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommunicationModuleSection;
