import '../products.css';

const SmartAlarmSection = () => {
    return (
        <section className="sogini-custom-section light-mode">
            <div className="sogini-layout">
                {/* 왼쪽 이미지 영역 */}
                <div className="sogini-left-panel">
                    <div className="sogini-image-wrapper sensor-mode">
                        {/* 알람 센서 이미지가 있다면 교체 필요. 현재는 진동센서 이미지 예시 사용 */}
                        <img src="/images/sensor_img1.png" alt="Smart Alarm Sensor" />
                        <div className="sogini-image-overlay"></div>
                    </div>
                </div>

                {/* 오른쪽 콘텐츠 영역 */}
                <div className="sogini-right-panel">
                    <div className="sogini-content-container">
                        <h2 className="sogini-title">스마트 알람 발생기</h2>
                        <div className="sensor-description">
                            <strong>쏘지니 스마트 알람 발생기란?</strong>
                            쏘지니 스마트 알람발생기는 외부 스위칭을 받아<br />
                            알림음을 발생시키는 스마트 기기입니다.
                        </div>

                        <div className="sogini-features-list">
                            <div className="sogini-feature-item">
                                <span className="sogini-feature-number">01</span>
                                <div className="sogini-feature-text">
                                    <h3>외부 스위칭</h3>
                                    <p>외부 스위칭을 받아<br />알림을 발생</p>
                                </div>
                            </div>

                            <div className="sogini-feature-item">
                                <span className="sogini-feature-number">02</span>
                                <div className="sogini-feature-text">
                                    <h3>30개의 알림음</h3>
                                    <p>총합 30개의 기본<br />알림음 탑재</p>
                                </div>
                            </div>

                            <div className="sogini-feature-item">
                                <span className="sogini-feature-number">03</span>
                                <div className="sogini-feature-text">
                                    <h3>설정 프로그램</h3>
                                    <p>Micro SD메모리카드<br />- 알림음 설정 프로그램</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 전면판 각부 설명 섹션 */}
            <div className="front-panel-section">
                <div className="container">
                    <h2 className="front-panel-title">전면판 각부 설명</h2>
                    <div className="front-panel-grid">
                        <div className="front-panel-text">
                            <ul className="parts-list">
                                <li><span className="part-label">a.</span> 스피커</li>
                                <li><span className="part-label">b.</span> 전원 동작 상태 표시</li>
                                <li><span className="part-label">c.</span> Volume</li>
                                <li><span className="part-label">d.</span> Micro SD메모리 삽입부</li>
                                <li><span className="part-label">e.</span> 알림해제 키 스위치</li>
                                <li><span className="part-label">f.</span> 알림음 선택(바이너리 입력 30개)</li>
                                <li>
                                    <span className="part-label">g.</span> 모드 변환 DIP 스위치
                                    <ul className="sub-list">
                                        <li>1. Normal/Interrupt</li>
                                        <li>2. 3rd/Non-stop</li>
                                        <li>3. Default/User</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="front-panel-image">
                            {/* 이미지 플레이스홀더 */}
                            <img src="/images/productPage/front_panel_diagram.png" alt="전면판 각부 설명" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.src = '/images/sensor_img1.png' }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* 알람발생기 7STEP 섹션 */}
            <div className="alarm-steps-section">
                <div className="container">
                    <div className="alarm-steps-header">
                        <h2>알람발생기 7STEP</h2>
                        <p>쏘지니 스마트 알람발생기 사용방법 7단계를 소개합니다.</p>
                    </div>

                    <div className="alarm-steps-grid">
                        {/* Step 1 */}
                        <div className="step-item">
                            <div className="step-image-container">
                                <img src="/images/sensor_img1.png" alt="Step 1 Key Switch" />
                            </div>
                            <div className="step-content">
                                <span className="step-number">1</span>
                                <p className="step-desc">
                                    Key Switch를<br />
                                    "Clear"로 모드 전환
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="step-item no-image">
                            <div className="step-content">
                                <span className="step-number">2</span>
                                <p className="step-desc">
                                    전원 24V 연결 및<br />
                                    시스템 결선
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="step-item">
                            <div className="step-image-container">
                                <img src="/images/sensor_img1.png" alt="Step 3 Mode DIP" />
                            </div>
                            <div className="step-content">
                                <span className="step-number">3</span>
                                <p className="step-desc">
                                    "Mode" DIP 스위치 선택
                                </p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="step-item">
                            <div className="step-image-container">
                                <img src="/images/sensor_img1.png" alt="Step 4 Binary DIP" />
                            </div>
                            <div className="step-content">
                                <span className="step-number">4</span>
                                <p className="step-desc">
                                    "Binary" DIP 스위치 선택<br />
                                    <span className="text-sm">(알림음 선택:바이너리 코드참조)</span>
                                </p>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="step-item no-image">
                            <div className="step-content">
                                <span className="step-number">5</span>
                                <p className="step-desc">
                                    Key Switch를 "Alarm"<br />
                                    으로 전환("Clear"인 경우)
                                </p>
                            </div>
                        </div>

                        {/* Step 6 */}
                        <div className="step-item no-image">
                            <div className="step-content">
                                <span className="step-number">6</span>
                                <p className="step-desc">
                                    "Volume"에서 알림음<br />
                                    소리 크기 조정
                                </p>
                            </div>
                        </div>

                        {/* Step 7 */}
                        <div className="step-item no-image">
                            <div className="step-content">
                                <span className="step-number">7</span>
                                <p className="step-desc">
                                    전원 동작상태가 되면 "Status"의<br />
                                    LED에 빨간불이 들어오고, 알림음이 재생
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MODE Tables Section */}
            <div className="mode-tables-section">
                <div className="container">
                    {/* MODE 3 STEP */}
                    <div className="mode-table-wrapper">
                        <h2 className="mode-table-title">M O D E &nbsp;&nbsp; 3 &nbsp;&nbsp; S T E P</h2>
                        <div className="table-responsive">
                            <table className="custom-mode-table step-table">
                                <colgroup>
                                    <col style={{ width: '25%' }} />
                                    <col style={{ width: '25%' }} />
                                    <col style={{ width: '25%' }} />
                                    <col style={{ width: '25%' }} />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>MODE</th>
                                        <th>1</th>
                                        <th>2</th>
                                        <th>3</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="row-header">L (LOW)</td>
                                        <td>
                                            <div className="cell-content">
                                                <strong>nomal</strong>
                                                <span>외부입력 (접점) 사용 무</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="cell-content">
                                                <strong>3 times</strong>
                                                <span>알람음 3회 발생</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="cell-content">
                                                <strong>default</strong>
                                                <span>기본 알람음 30개</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="row-header">H (HIGH)</td>
                                        <td>
                                            <div className="cell-content">
                                                <strong>interrupt</strong>
                                                <span>외부입력 (접점) 사용</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="cell-content">
                                                <strong>non-stop</strong>
                                                <span>알람음 연속 발생</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="cell-content">
                                                <strong>user</strong>
                                                <span>사용자 알람음</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* MODE DIP Switch Analysis */}
                    <div className="mode-table-wrapper" style={{ marginTop: '6rem' }}>
                        <h2 className="mode-table-title">M O D E &nbsp;&nbsp; D I P &nbsp;&nbsp; 스 위 치 &nbsp;&nbsp; 해 석</h2>
                        <div className="table-responsive">
                            <table className="custom-mode-table dip-table">
                                <colgroup>
                                    <col style={{ width: '16%' }} />
                                    <col style={{ width: '12%' }} />
                                    <col style={{ width: '12%' }} />
                                    <col style={{ width: '12%' }} />
                                    <col style={{ width: '16%' }} />
                                    <col style={{ width: '16%' }} />
                                    <col style={{ width: '16%' }} />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>구 분</th>
                                        <th>1</th>
                                        <th>2</th>
                                        <th>3</th>
                                        <th>외부입력</th>
                                        <th>재생 유형</th>
                                        <th>알람음 유형</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td rowSpan={8} className="row-header-merged">
                                            모드<br />
                                            DIP 스위치<br />
                                            해석
                                        </td>
                                        <td>L</td><td>L</td><td>L</td><td>무</td><td>3회 재생</td><td>디폴트음</td>
                                    </tr>
                                    <tr><td>L</td><td>L</td><td>H</td><td>무</td><td>3회 재생</td><td>사용자음</td></tr>
                                    <tr><td>L</td><td>H</td><td>L</td><td>무</td><td>연속 재생</td><td>디폴트음</td></tr>
                                    <tr><td>L</td><td>H</td><td>H</td><td>무</td><td>연속 재생</td><td>사용자음</td></tr>
                                    <tr><td>H</td><td>L</td><td>L</td><td>유</td><td>3회 재생</td><td>디폴트음</td></tr>
                                    <tr><td>H</td><td>L</td><td>H</td><td>유</td><td>3회 재생</td><td>사용자음</td></tr>
                                    <tr><td>H</td><td>H</td><td>L</td><td>유</td><td>연속 재생</td><td>디폴트음</td></tr>
                                    <tr><td>H</td><td>H</td><td>H</td><td>유</td><td>연속 재생</td><td>사용자음</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* BINARY CODE Table */}
                    <div className="mode-table-wrapper" style={{ marginTop: '6rem' }}>
                        <h2 className="mode-table-title">B I N A R Y &nbsp;&nbsp; C O D E</h2>
                        <div className="table-responsive">
                            <table className="custom-mode-table binary-table table-striped">
                                <colgroup>
                                    <col style={{ width: '8%' }} />
                                    <col style={{ width: '8%' }} />
                                    <col style={{ width: '8%' }} />
                                    <col style={{ width: '8%' }} />
                                    <col style={{ width: '8%' }} />
                                    <col style={{ width: '8%' }} />
                                    <col style={{ width: '52%' }} />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th rowSpan={2}>No.</th>
                                        <th colSpan={5}>바이너리 코드</th>
                                        <th rowSpan={2}>비 고</th>
                                    </tr>
                                    <tr>
                                        <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>출력음 없음</td></tr>
                                    <tr><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>에엥~ 화재음</td></tr>
                                    <tr><td>2</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>위용~ 위용~ 긴급음</td></tr>
                                    <tr><td>3</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>삐뽀~ 삐뽀~ 구급음</td></tr>
                                    <tr><td>4</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>띠익~ 음</td></tr>
                                    <tr><td>5</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>삐익삐익 음</td></tr>
                                    <tr><td>6</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td><td>폼릴리시 알람</td></tr>
                                    <tr><td>7</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td>일반 알람</td></tr>
                                    <tr><td>8</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>즐거운 나의 집</td></tr>
                                    <tr><td>9</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td><td>엘리제를 위하여</td></tr>
                                    <tr><td>10</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>뻐꾸기 왈츠</td></tr>
                                    <tr><td>11</td><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>피아노 소나타</td></tr>
                                    <tr><td>12</td><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td><td>터키 행진곡</td></tr>
                                    <tr><td>13</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td>요술피리</td></tr>
                                    <tr><td>14</td><td>0</td><td>1</td><td>1</td><td>1</td><td>0</td><td>바디네리</td></tr>
                                    <tr><td>15</td><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td><td>파인 애플 랙</td></tr>
                                    <tr><td>16</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>전령음 (뚜루루 음)</td></tr>
                                    <tr><td>17</td><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td><td>딩동 음</td></tr>
                                    <tr><td>18</td><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td><td>전화벨 (따르릉 음)</td></tr>
                                    <tr><td>19</td><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>삐삐삐삐 음</td></tr>
                                    <tr><td>20</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>또르릉 음</td></tr>
                                    <tr><td>21</td><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td><td>렐렐렐렐 연속음</td></tr>
                                    <tr><td>22</td><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td><td>삐뽀~ 삐뽀~ 느린 구급음</td></tr>
                                    <tr><td>23</td><td>1</td><td>0</td><td>1</td><td>1</td><td>1</td><td>위용~ 위용~ 긴급음</td></tr>
                                    <tr><td>24</td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>렐렐렐렐 전화음</td></tr>
                                    <tr><td>25</td><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td><td>에엥~ 소방음</td></tr>
                                    <tr><td>26</td><td>1</td><td>1</td><td>0</td><td>1</td><td>0</td><td>오잇~ 오잇~ 경고음</td></tr>
                                    <tr><td>27</td><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td><td>삐오~ 삐오~ 경고음</td></tr>
                                    <tr><td>28</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td><td>띠오~ 띠오~ 느린 후 음 강조</td></tr>
                                    <tr><td>29</td><td>1</td><td>1</td><td>1</td><td>0</td><td>1</td><td>리로~ 리로~ 경고음</td></tr>
                                    <tr><td>30</td><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>연속 증가음</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* SYSTEM CONNECTION Section */}
            < div className="system-connection-section" >
                <div className="container">
                    <h2 className="system-connection-title">SYSTEM CONNECTION</h2>
                    <div className="system-connection-image">
                        <img src="/images/productPage/system_connection_diagram.png" alt="System Connection Diagram" onError={(e) => { e.currentTarget.src = '/images/sensor_img1.png' }} />
                    </div>
                </div>
            </div >

            {/* SPECIFICATION Section */}
            <div className="specification-section">
                <div className="container">
                    <h2 className="mode-table-title">S P E C I F I C A T I O N</h2>
                    <div className="table-responsive">
                        <table className="custom-mode-table spec-table">
                            <colgroup>
                                <col style={{ width: '30%' }} />
                                <col style={{ width: '70%' }} />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td className="spec-label">POWER</td>
                                    <td className="spec-value">Input voltage : 18V ~ 36V @ 350mA (typical 24V)</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">음량</td>
                                    <td className="spec-value">디폴트 음원 102dB (1m)</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">사용자 모드 선택<br />(DIP 스위치)</td>
                                    <td className="spec-value">
                                        디폴트 모드 (LOW)<br />
                                        사용자 모드 (HIGH)
                                    </td>
                                </tr>
                                <tr>
                                    <td className="spec-label">음원 선택<br />(5코드 - DIP 스위치)</td>
                                    <td className="spec-value">
                                        디폴트 음원 바이너리 코드 선택을 통해 음원 선택<br />
                                        사용자 음원 바이너리 코드 선택을 통해 음원 선택
                                    </td>
                                </tr>
                                <tr>
                                    <td className="spec-label">재생모드 선택<br />(DIP 스위치)</td>
                                    <td className="spec-value">
                                        3회 재생 모드 (LOW)<br />
                                        연속 재생 모드 (HIGH)
                                    </td>
                                </tr>
                                <tr>
                                    <td className="spec-label">Micro SD 메모리</td>
                                    <td className="spec-value">최대 32G까지 사용 가능</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">음원 개수</td>
                                    <td className="spec-value">사용자 음원 현재 100개 수용, 최대 9999까지 가능</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">소리 음량 조절</td>
                                    <td className="spec-value">리니얼한 볼륨 조절</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">중량</td>
                                    <td className="spec-value">850g</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* PIN ASSIGN Section */}
            < div className="smart-alarm-pin-section" >
                <div className="container">
                    <div className="pin-layout">
                        {/* Left: Image */}
                        <div className="pin-image-area">
                            <img src="/images/productPage/pin_assign_diagram_alarm.png" alt="PIN ASSIGN Diagram" onError={(e) => { e.currentTarget.src = '/images/sensor_img1.png' }} />
                        </div>

                        {/* Right: Content */}
                        <div className="pin-content-area">
                            <h2 className="pin-title">PIN ASSIGN</h2>
                            <p className="pin-subtitle">Φ 16_MS Connector (6p)</p>
                            <div className="pin-list-container">
                                <ul className="pin-list-col">
                                    <li><span className="pin-num">#1</span><span className="pin-desc">Input Voltage (24V)</span></li>
                                    <li><span className="pin-num">#2</span><span className="pin-desc">Input Signal</span></li>
                                    <li><span className="pin-num">#3</span><span className="pin-desc">Output Signal</span></li>
                                </ul>
                                <ul className="pin-list-col">
                                    <li><span className="pin-num">#4</span><span className="pin-desc">Output GND</span></li>
                                    <li><span className="pin-num">#5</span><span className="pin-desc">Power GND</span></li>
                                    <li><span className="pin-num">#6</span><span className="pin-desc">Input Signal GND</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
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
        </section >
    );
};

export default SmartAlarmSection;
