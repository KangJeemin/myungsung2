'use client';

export default function Footer() {
  const companyWebsiteUrl = process.env.NEXT_PUBLIC_COMPANY_WEBSITE_URL || 'https://www.fassto.ai/';
  
  return (
    <footer className="footer" id="footer">
      <div className="footer-nav">
        <div className="footer-topLogo">
          <img src="https://cdn.fassto.ai/resources/imagesHome/logo-footer-fassto.png" alt="Fassto Logo" />
        </div>
        <div className="footer-info">
          <div className="homePageLink">
            <div className="item item01">
              <div className="title">새로운 물류의 시작</div>
              <a href={companyWebsiteUrl} target="_blank" rel="noopener noreferrer">
                <span className="icon-logo-fassto"></span>
              </a>
            </div>
          </div>
          <div className="infoWrap">
            <div className="inquiry">
              <div className="inquiry-title">고객센터 : <span className="phone-number">1566-3033</span></div>
              <ul className="inquiry-items">
                <li><b>서비스 이용문의 : </b><a href="mailto:sales@fassto.ai">sales@fassto.ai</a></li>
                <li><b>제휴문의 : </b><a href="mailto:partnership@fassto.ai">partnership@fassto.ai</a></li>
                <li><b>채용문의 : </b><a href="mailto:recruiting@fassto.ai">recruiting@fassto.ai</a></li>
                <li><b>윤리준법 제보 : </b><a href="mailto:auditing@fassto.com">auditing@fassto.com</a></li>
              </ul>
            </div>
            <div className="footer-list">
              <address>본사 : 서울특별시 강남구 학동로45길 3, 3층 (논현동, 성우빌딩)</address>
              <div className="companyInfo">
                대표 : 홍종욱<span className="line">ㅣ</span>개인정보관리책임자 : 임종균<span className="line">ㅣ</span>사업자등록번호 : 372-81-00976<span className="line">ㅣ</span>통신판매업신고번호 : 2021-서울강남-03534호
              </div>
              <ul className="terms">
                <li><a title="회원가입 이용약관" href="/view/serviceTerms-join">회원가입 이용약관</a></li>
                <li><a title="서비스 이용약관" href="/view/serviceTerms">서비스 이용약관</a></li>
                <li><a title="개인정보처리방침" href="/view/privacy" className="bold-link">개인정보처리방침</a></li>
              </ul>
              <div className="aboutLink">
                <a title="파스토 소식" href="/view/announcement" target="_blank" rel="noopener noreferrer">파스토 소식</a>
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
              <a href="https://blog.naver.com/fassto_official" target="_blank" rel="noopener noreferrer" title="네이버 블로그">
                <span className="icon-logo-blog"></span>
              </a>
            </li>
            <li className="footer-snsitem">
              <a href="https://www.youtube.com/channel/UCerl_0nfuMjHYgXasOg32Lw/featured" target="_blank" rel="noopener noreferrer" title="유튜브">
                <span className="icon-logo-youtube"></span>
              </a>
            </li>
            <li className="footer-snsitem">
              <a href="https://www.instagram.com/fassto_official/" target="_blank" rel="noopener noreferrer" title="인스타그램">
                <span className="icon-logo-instagram"></span>
              </a>
            </li>
            <li className="footer-snsitem">
              <a href="https://www.facebook.com/Fasstoofficial" target="_blank" rel="noopener noreferrer" title="페이스북">
                <span className="icon-logo-facebook"></span>
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
              <div className="title">새로운 물류의 시작</div>
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
    </footer>
  );
}


