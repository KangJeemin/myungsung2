'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function HistorySection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [activeYear, setActiveYear] = useState('2024');
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

  const historyData = {
    '2024': [
      '헝가리 LHM 공장 전기 계장 공사',
      '헝가리 ASU & NON-ASU SYSTEM 전기 계장 공사',
      '헝가리 LHM, ASU 가설 조명 및, 패널 전원 공급 공사',
      'NCA 프로젝트 임시 케이블 설치',
      'L 화학 오창_청 1, 정코 1, 2호 2RRC CM-roll Nip 협착 제어',
      '청주 전자 소재 3공장 공조기 운전 제어 주파수 기준 변경 프로그래밍 공사',
      'OC2 동 Coater SRP 이상 알람 시스템 공사',
      'L 화학 청주 전자 소재 4공장 RTO1호 디지털 전력량계 통신 연동 시운전',
      '양극재 1공장 개발 생산팀 바 이 살라 온습도계 제어 공사',
      '오창 1공장 OC3 3호기 실대 습도계 상위 전송 공사',
      'EP2 OC9 동 Binder, CMC, DAM Mixer 배관 수정 공사',
      'OC2 동 롤 프레스 자동 보정 프로그램 적용 제어 공사',
      '에너지 플랜트 1 OC2 동 원통형 조립 6호 RMS 구축 및 고도화 공사',
      '에너지 플랜트 1 OC3 동 이송 탱크 Top, Back 슬러리 수량 맞춤 자동화 프로그램 진행',
      '에너지 플랜트 2 OC9 동 양극 믹서 공정 BTM 믹서 2호기 인라인 센서 적용 제어 공사',
      '제어 _ 에너지 플랜트 1 OC5 동 코터 피그 바 사대 디지털 압력계 설치 공사',
      '소형 전극 2동 코터 Shim 미세 조정 장치 설치 전 제어 공사',
      '에너지 플랜트 1 OC3 동 웰게 이지 가동 여부 에 따른 코팅 인터록 제어 공사',
      'OC 3동 전극 설비 Loss 로직 개선 공사',
      '오창 전자) 1동 표면 처리 생산 1팀 PSM 구축 인터록 점검 외 2건',
      '에너지 플랜트 1 OC2 동, OC3 동 Tool 사용 장비 시스템 구축',
      'L 화학 청주 수처리 관리실 Capa-Up 제어 공사',
      'R2R 제어 트레이닝 KIT 제작 건',
      '에너지 플랜트 1 OC3 동 Pilot B3 코터 양극 공급 씩 자동 가변 제어 장치 연동 공사',
      '에너지 플랜트 2 OC9 동 음극 믹서 탱크 류 자동 세정 라인 적용 제어 공사',
      '제어 _ 에너지 플랜트 2 유틸리티 공기 압축기 8, 9호 증설 제어 공사',
      '에너지 플랜트 2 OC9 동 음극 믹서 공정 인라인 전도도, 밀도계 구성 제어 공사',
      '에너지 플랜트 1 OC2, 3동 호일 장 탈착 보고 누락 방지 인터록 공사 (3 구분)',
      '헝가리 에코프로 BM EA1 LITHIUM WWT SYSTEM 제작 건',
      '헝가리 DIW, 폐수 처리장 전기 계장 공사',
      '구미 LG 양극재 F1 라인 강도 측정기 설치 제어 공사 추가 건',
      '엘오티 베큠 출하 품질 검사 시스템 구축 PJT_HW 및 공사',
      '조정 페인트 ㈜ 수지, 도로 인터록 체크 및 시운전',
      '공장 내 분체 이송 PILOT 설비 제작 및 시운전',
      'VIBRATION SENSOR SYSTEM 판넬',
      '대전 학하 CES 발주 소 냉각수 펌프 진동 센서 설치 공사',
      '음성 공장 도로 동 (245동) 방폭 PC 교체의 건 판넬 교체 (2대) 및 철거 이설 (1대) 공사 건',
      '수원 _ CJ 제일 제당 _ TOUCH SCADA 통신 개발 건',
      '하벡스 DBCU 정량 펌프 유량 제어 프로그램 설치 및 시운전',
      'L-Tech 사업장 고효율 인버터 설치 공사 _ 3차 공사',
      '하벡스 SBCU 공통 실 ATH PMMA 중량 디스플레이 설치 공사'
    ],
    '2023': [
      'LGD P10 AUTO FOUP CLEANER 1호기 전장 작업',
      '헝가리 DIW, 폐수 처리장 전기 계장 공사',
      '헝가리 EA BM 순수 폐수 제어반 제작 건',
      'EVA T-DIE 5,6호기 EMBOSS UNIT 제어반 제작 설치 공사',
      '하벡스 DBCU 캐스케이드 프로그램 이관 및 스윙 기 제작 설치',
      'L-Tech 사업장 고효율 인버터 설치 공사',
      '칸스톤 1 호기 크림 블러 청소 UNIT 제어 판넬 제작 설치 공사',
      'L사 1공장 환경, 안전 모니터링 2차 공사',
      '제어 에너지 플랜트 1 RMS 구축 _ 전극 대표 호기, 전 호기',
      '양극재 3,4 온도 조절 제어 공사',
      '자동차 2동 롤 프레스 메인 베어링 진동 / 온도 측정 센서 설치',
      '소형 1,2동 롤 프레스 롤 캠, 역 압 자동 보정 제어 공사',
      '코터 HEAD 부 패턴 감지 센서 네트워크 제어 공사',
      '중대형 STM 양극 소재 라인 증설 투자 전기 공사',
      'M3 동 사무실 환경 개선 전기 공사'
    ],
    '2022': [
      'SAHOH2 Hungary SCADA 시스템 구축',
      '재료 생산. 오장 생산 1팀) 공정 HMI 신규 교체 제어 공사',
      '청주 사업장 냉동기 산 설 _ 모니터링 공사',
      '8 동 RX-205 RTO 연동 제어 공사',
      '폴란드 ESWA 전극 2동 음극 롤 프레스 비 가동 Loss 개선 공사',
      'IT 소재 1~3 동 고효율 인버터 설치 공사',
      'SKBA 2 차 VSD PANEL 공사 시운전',
      '공정 배기 전압 감시 구축 _ 자동 제어 공사',
      '세종 사업장 창호 공실 고효율 인버터 설치 공사',
      'Smart Factory 구축 _ Smart Server 및 Sample Line 공사',
      '자동차 1동 전극 DLD 믹서 / 필터 제어 공사',
      '천안 원 링 Mass 합리화 구축 공사 + 전기 제어',
      'SA BH2 Hungary SCADA 시스템 구축',
      'L사 2공장 환경, 안전 모니터링 제어 공사'
    ],
    '2021': [
      '한동지수처리 시스템 제어 판넬 교체 공사',
      '그린센터 Turbo Blower B Overhaul',
      'M1 화성 BM3-4TR-22AB 하부 무 부하 이설 공사',
      '1동 용액실 CCTV 설치 모니터링 공사',
      'IT-편소 생산 1팀 전기 판넬 인버터 교체',
      '구동부 예지 보전 시스템 구축 제어 시운전',
      'IT3) 정코 2 Excimer UV 설치 제어 공사',
      '1동 정코 2 B 라인 회전 리프트 및 터렛 제어 공사',
      'IT3 동 주 재 라인 제어 부 정상화 제어 공사',
      '전기 판넬 제어반 국소 소화기 설치 제어 공사',
      '소형 3동 전극 Pilot 제어',
      '롤 프레스 두께 불량 방지 제어 프로그램 적용 공사',
      '제어 열 배 이 러 스택 분리 제작 공사',
      'SKBA Phase 2 Pjt_VSD PNL',
      '하벡스 4호기 상온 베 인 믹서 Control Panel 구축 공사',
      'DUST Collector Control Panel 제작 설치 공사',
      '하벡스 2호기 공송 계량 배합 Control Panel 구축 공사'
    ],
    '2020': [
      'Single Wafer Cleaner 장비 개발 전장 일식 件',
      'DMF06(Filter Flushing Unit) _ 비 메모리 전장 일식',
      'CBM 황 G6h 수평 식 Open Mask Cleaner 제작 전장 일식',
      'SCS X2 AUTO FOUP CLEANER(AFC340N SET-UP 작업',
      'VFD PANEL 제작 및 시운전 공사',
      'EVA 카렌더 2호기 OVEN 서보 MOTOR, DRIVE 교체 공사 외',
      '자원 순환 센터 화재 복구 전기 공사 외',
      '[소형 2동] 믹싱 공정 펌프 인테크 구성 외 2건',
      '반도체 TFT 생산 1팀 빌드업 1호 Servo Drive 개선 시운전'
    ],
    '2019': [
      '병 전전력 감시 모니터링 시스템 합리화',
      '하벡스 2 VEIN CONTROLLER SYSTEM 구축공사',
      'AFC 340N 10~11호기 설비 전장 공사',
      'AFC 342V 4~5호기 / AFC 340N 12~14호기 전장 공사',
      'AFC 342V 3호기 제작 전장 작업 외',
      'AFC 342V 7,8호기 제작 전장 일식 작업',
      '제어 영선 공사',
      'RTO 전 후기 차단 모니터링 공사 외',
      '면 폐수 염산 공급 SYSTEM 개선 제어 공사 외',
      '제어 영선 공사 외',
      '3 라인 처리 용액 Line 철거 외',
      '1,2 동 감압 밸브 상태 모니터링 제어 공사 외',
      '생산 1) 복합 소재 설비 모니터링 시스템 구축 외',
      '중소 수 차선 생산 라인 구축 제어 공사 외',
      '양극 이송 탱크 NMP 전정 / 제어 공사',
      '복문 복지 동 자동 제어 시스템 구축 공사 외',
      '생산 3 팀) H2 공조기 메인 팬 진동 센서 시운전 공사 외'
    ],
    '2018': [
      'PSAA)G-MES 네트워크 구축공사',
      '생산팀)G-MES 설비 인터페이스 고도화 공사',
      '주변전 전력 모니터링 시스템 수정공사',
      '하벡스 #4 성형 casting room 보완 전기공사',
      'CCL) 유틸리티실 모터 예지보전 시스템 구축 공사',
      'AUTO FOUP CLEANER(AFC342V) 1호기 전장 공사',
      'SCRIBE UNIT 개조 공사 - 7대분',
      'PVA 패단지_저속 회전체용 진동센서 설치 공사',
      '청주시 범죄 예방 환경 개선 우수 사업 전기공사',
      '양극재 1)6L 산소 측정 시스템 제어 공사'
    ],
    '2017': [
      '양극재 7,8라인 제어 구축 추가공사',
      '연신조 내액상도 OFIS 연동제어공사',
      '경질 생산 Capa 증설 투자 Guideroll 제작설치',
      'DWP 합체동 제조라인 시운전',
      '스마트 팩토리 MES 시스템 구축공사',
      '연신 온분위기 온습도 OFIS 연동제어공사',
      'PSAA)HMI 구축(시스템 구성)',
      '7라인 PI 용 공급장치 신규 앵크젯 통신망 구축공사',
      '7라인 PI 용액 인테크 구축공사',
      'EVA T-DIE 1,2호기 냉동기 알람 판넬 제작설치',
      '생산팀. 제조동 유, 누출감지 시스템 구축',
      '생산팀. 공조기 모니터링 구축 제어 공사',
      '경질 CAPA 증설 투자 /MIST PANEL 제작설치공사',
      '연신 2호 중형라인 MIST PANEL'
    ]
  };

  const years = Object.keys(historyData);

  return (
    <section 
      id="history" 
      className={`history-section ${isVisible ? 'visible' : ''}`}
      ref={sectionRef}
      style={{ wordBreak: 'keep-all' }}
    >
      <div className="container">
        <div className="section-title history-title">
          {t('history.title')}
        </div>

        {/* 데스크톱 버전 - 가로 스크롤 */}
        <div className="history-slider desktop">
          <div className="history-track">
            {years.map((year, yearIndex) => (
              <div key={year} className="history-year-item" style={{ animationDelay: `${0.6 + yearIndex * 0.1}s` }}>
                <div className="year-title">{year}</div>
                <div className="year-line"></div>
                <div className="history-content">
                  {historyData[year as keyof typeof historyData].map((item, idx) => (
                    <div key={idx} className="history-text">- {item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 모바일 버전 - 탭 형식 */}
        <div className="history-mobile mobile">
          <div className="history-tabs">
            {years.map((year) => (
              <button
                key={year}
                className={`history-tab ${activeYear === year ? 'active' : ''}`}
                onClick={() => setActiveYear(year)}
              >
                {year}
              </button>
            ))}
          </div>
          <div className="history-tab-content">
            {historyData[activeYear as keyof typeof historyData].map((item, idx) => (
              <div key={idx} className="history-text">- {item}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

