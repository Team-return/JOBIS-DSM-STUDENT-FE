"use client";

import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";
import Header from "@/components/common/Header";

const notoSans = Noto_Sans_KR({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={notoSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
