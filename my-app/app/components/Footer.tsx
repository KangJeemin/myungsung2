'use client';

export default function Footer() {
  const companyWebsiteUrl = process.env.NEXT_PUBLIC_COMPANY_WEBSITE_URL || 'https://www.fassto.ai/';

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
                대표 : 황희석 <span className="line">ㅣ</span>개인정보관리책임자 : 황희석 <span className="line">ㅣ</span>
              </div>
              <ul className="terms">
                <li><a title="회원가입 이용약관" href="/view/serviceTerms-join">회원가입 이용약관</a></li>
                <li><a title="서비스 이용약관" href="/view/serviceTerms">서비스 이용약관</a></li>
                <li><a title="개인정보처리방침" href="/view/privacy" >개인정보처리방침</a></li>
              </ul>
              <div className="aboutLink">
                <a title="명성 소식" href="/view/announcement" target="_blank" rel="noopener noreferrer">명성 소식</a>
                <a title="공지사항" href="/view/noticeBoard" target="_blank" rel="noopener noreferrer">공지사항</a>
                <a title="특허/인증서" href="/content/page/patent" target="_blank" rel="noopener noreferrer">특허/인증서</a>
                <a title="사회공헌" href="/content/page/grewCampaign" target="_blank" rel="noopener noreferrer">사회공헌</a>
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
            Ⓒ FASSTO Corporation. All rights reserved.
          </div>
        </div>
      </div>
    </footer >
  );
}


