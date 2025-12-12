'use client';

import { useState } from 'react';
import FooterModal from './FooterModal'; // Assuming FooterModal is in the same directory

import {
  patentImages,
  certificateImages,
  trademarkImages,
  licenseImages,
  confirmationImages
} from '../data/certificationImages';

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
          <img src="https://storage.cloud.google.com/myeongseong-homepage-resource/images/ms_foot_logo.png" alt="명성 Logo" />
        </div>
        <div className="footer-info">
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
