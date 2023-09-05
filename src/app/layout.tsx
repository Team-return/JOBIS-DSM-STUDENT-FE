"use client";

import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";
import Header from "@/components/common/Header";
import Provider from "@/components/Provider";

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
      <head>
        <title>JOBIS</title>
      </head>
      <body className={notoSans.className}>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
