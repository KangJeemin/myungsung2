'use client';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h4>FASSTO</h4>
            <p>스마트 물류의 새로운 기준</p>
          </div>
          <div className="footer-column">
            <h4>서비스</h4>
            <ul>
              <li><a href="#">풀필먼트</a></li>
              <li><a href="#">재고관리</a></li>
              <li><a href="#">배송관리</a></li>
              <li><a href="#">데이터분석</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>회사</h4>
            <ul>
              <li><a href="#">소개</a></li>
              <li><a href="#">채용</a></li>
              <li><a href="#">블로그</a></li>
              <li><a href="#">문의</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>소셜</h4>
            <div className="social-links">
              <a href="#">LinkedIn</a>
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 FASSTO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

