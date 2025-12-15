import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY;
const resend = new Resend(apiKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // 필수 필드 검증
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: '모든 필수 항목을 입력해주세요.' },
        { status: 400 }
      );
    }

    // 이메일 전송
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // Resend에서 인증된 도메인으로 변경 필요
      to: email, // 받는 이메일 주소
      subject: `[명성에이앤티 문의] ${name}님의 문의`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #667eea, #764ba2);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
              }
              .content {
                background: #f8f9fa;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .info-row {
                margin-bottom: 20px;
                padding: 15px;
                background: white;
                border-radius: 8px;
                border-left: 4px solid #667eea;
              }
              .label {
                font-weight: 700;
                color: #667eea;
                margin-bottom: 5px;
                font-size: 14px;
              }
              .value {
                color: #333;
                font-size: 16px;
              }
              .message-box {
                background: white;
                padding: 20px;
                border-radius: 8px;
                border: 1px solid #e0e0e0;
                white-space: pre-wrap;
                word-wrap: break-word;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e0e0e0;
                text-align: center;
                color: #666;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>🔔 새로운 문의가 도착했습니다</h1>
            </div>
            <div class="content">
              <div class="info-row">
                <div class="label">👤 이름</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="info-row">
                <div class="label">📧 이메일</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              <div class="info-row">
                <div class="label">📱 연락처</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              
              <div class="info-row">
                <div class="label">💬 문의 내용</div>
                <div class="message-box">${message}</div>
              </div>
              
              <div class="footer">
                <p>이 이메일은 명성에이앤티 홈페이지 문의하기 폼에서 자동으로 발송되었습니다.</p>
                <p>답변은 위의 이메일 주소로 직접 보내주세요.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: '문의가 성공적으로 전송되었습니다.',
        data
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('이메일 전송 오류:', error);
    return NextResponse.json(
      {
        error: '이메일 전송 중 오류가 발생했습니다. 다시 시도해주세요.',
        details: error instanceof Error ? error.message : '알 수 없는 오류'
      },
      { status: 500 }
    );
  }
}

