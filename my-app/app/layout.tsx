import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";

export const metadata: Metadata = {
  title: "MYUNGSUNG - 자동화의 시작",
  description: "AI 기술로 자동화 산업의 혁신을 이끌어갑니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
