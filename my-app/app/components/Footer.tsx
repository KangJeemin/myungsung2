'use client';

import { useState } from 'react';
import FooterModal from './FooterModal'; // Assuming FooterModal is in the same directory

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

export default function Footer() {
  const companyWebsiteUrl = process.env.NEXT_PUBLIC_COMPANY_WEBSITE_URL || 'https://www.fassto.ai/';

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [currentImages, setCurrentImages] = useState<string[]>([]);

  const handleOpenModal = (title: string) => {
    setModalTitle(title);

    let images: string[] = [];
    if (title === '특허') images = patentImages;
    else if (title === '인증서') images = certificateImages;
    else if (title === '상표') images = trademarkImages;
    else if (title === '면허') images = licenseImages;
    else if (title === '확인서') images = confirmationImages;

    setCurrentImages(images);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentImages([]);
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-nav">
        <div className="footer-topLogo">
          <img src="/images/ms_foot_logo.png" alt="명성 Logo" />
        </div>
        <div className="footer-info">
          <div className="homePageLink">
            <div className="item item01">
              <div className="title">새로운 자동화의 시작</div>
              <a href={companyWebsiteUrl} target="_blank" rel="noopener noreferrer">
                <span className="icon-logo-fassto"></span>
              </a>
            </div>
          </div>
          <div className="infoWrap">
            <div className="inquiry">
              <div className="inquiry-title">대표번호 : 043-715-9580</div>
              <ul className="inquiry-items">
                <li><b>문의 이메일 : </b><a href="mailto:sales@fassto.ai">sales@msant.co.kr</a></li>
                <li><b>FAX : </b><a href="mailto:recruiting@fassto.ai">0505-345-9580</a></li>
              </ul>
            </div>
            <div className="footer-list">
              <address>본사 : 충청북도 청주시 청원구 오창읍 장대길 26(장대리 334)</address>
              <div className="companyInfo">
                대표 : 황희석 <span className="line"></span>개인정보관리책임자 : 황희석 <span className="line"></span>
              </div>
              <ul className="terms">
                <li><button className="footer-btn-link" onClick={() => handleOpenModal('특허')}>특허</button></li>
                <span className="line">ㅣ</span>
                <li><button className="footer-btn-link" onClick={() => handleOpenModal('인증서')}>인증서</button></li>
                <span className="line">ㅣ</span>
                <li><button className="footer-btn-link" onClick={() => handleOpenModal('상표')}>상표</button></li>
                <span className="line">ㅣ</span>
                <li><button className="footer-btn-link" onClick={() => handleOpenModal('면허')}>면허</button></li>
                <span className="line">ㅣ</span>
                <li><button className="footer-btn-link" onClick={() => handleOpenModal('확인서')}>확인서</button></li>
              </ul>
              <div className="aboutLink">
                <a title="사회공헌" target="_blank" rel="noopener noreferrer">사회공헌</a>
                <a title="윤리준법 제보" href="https://docs.google.com/forms/d/e/1FAIpQLSerY3ccy3jor9Z2-nxf6q9wR1ugvabyWTR3QelLINbZGHX9eg/viewform" target="_blank" rel="noopener noreferrer">윤리준법 제보</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <ul className="footer-sns">

            <li className="footer-snsitem">
              <a href="https://www.youtube.com/channel/UCerl_0nfuMjHYgXasOg32Lw/featured" target="_blank" rel="noopener noreferrer" title="유튜브">
                <span className="icon-logo-youtube"></span>
              </a>
            </li>
            <li className="footer-snsitem">
              <a href="https://www.linkedin.com/company/fassto/" target="_blank" rel="noopener noreferrer" title="링크드인">
                <span className="icon-logo-linkedin"></span>
              </a>
            </li>
          </ul>
          <div className="homePageLink mobile">
            <div className="item item01">
              <div className="title">새로운 자동화의 시작</div>
              <a href={companyWebsiteUrl} target="_blank" rel="noopener noreferrer">
                <span className="icon-logo-fassto"></span>
              </a>
            </div>
          </div>
          <div className="footer-copy-txt">
            Ⓒ Myungsung Corporation. All rights reserved.
          </div>
        </div>
      </div>
      <FooterModal isOpen={isModalOpen} onClose={handleCloseModal} title={modalTitle} images={currentImages} />
    </footer >
  );
}
