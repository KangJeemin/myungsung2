import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from "@google/genai";

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: '메시지가 필요합니다.' },
        { status: 400 }
      );
    }

    // Gemini API 초기화
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY가 설정되지 않았습니다.');
    }

    const ai = new GoogleGenAI({
      apiKey: apiKey
    });

    // 시스템 프롬프트와 사용자 메시지 결합
    const prompt = `당신은 명성에이엔티(명성엔지니어링) 회사의 AI 어시스턴트입니다. 

[회사 정보]
- 회사명: 명성에이엔티 (명성엔지니어링)
- 주소: 충청북도 청주시 오창읍 장대길 13-16 (장대리 336, 오창성당 옆)
- 전화: 043-715-9580
- 이메일: sales@msant.co.kr
- 주요 사업: 스마트팩토리 솔루션, AI 예지보전, 스마트 센서, 비전 검사, 로봇 자동화

[주요 제품/서비스]
1. 쏘지니 AI: 예지보전 전용 AI 엔진으로 실시간 데이터 수집 및 분석
2. 예지보전: 설비 고장 사전 예측 및 최적 유지보수 시기 제공
3. 스마트 센서: IoT 센서로 설비 상태 실시간 모니터링
4. 비전 검사: AI 머신 비전으로 불량 검출
5. 로봇 자동화: 산업용 로봇 및 협동 로봇 솔루션

[역할 및 규칙]
1. 명성에이엔티 회사와 관련된 내용만 답변합니다.
2. 회사의 제품, 서비스, 위치, 연락처 등에 대해 정확하고 친절하게 답변합니다.
3. 명성에이엔티와 관련 없는 질문이나 모르는 내용에 대해서는:
   "죄송합니다. 해당 내용은 잘 모르겠습니다. 정확한 안내를 위해 명성에이엔티로 직접 문의해 주세요.
   전화: 043-715-9580
   이메일: sales@msant.co.kr"
   라고 답변합니다.
4. 항상 정중하고 전문적인 톤으로 답변합니다.
5. 답변은 간결하면서도 도움이 되도록 작성합니다.

사용자 질문: ${message}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const botResponse = response.text || 
      '죄송합니다. 응답을 생성하는 데 문제가 발생했습니다. 다시 시도해 주세요.';

    return NextResponse.json({ response: botResponse });

  } catch (error) {
    console.error('Gemini API 에러:', error);
    return NextResponse.json(
      { 
        error: 'AI 응답 생성 중 오류가 발생했습니다.',
        response: '죄송합니다. 일시적인 오류가 발생했습니다. 잠시 후 다시 시도해 주시거나, 전화(043-715-9580) 또는 이메일(sales@msant.co.kr)로 직접 문의해 주세요.'
      },
      { status: 500 }
    );
  }
}

