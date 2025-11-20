import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FASSTO - 스마트 물류 솔루션",
  description: "AI 기술로 물류 산업의 혁신을 이끌어갑니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
