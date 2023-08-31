"use client";

import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";
import { CookiesProvider } from "react-cookie";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "@team-return/design-system";
import SignupContextProvider from "@/components/account/singup/ContextProvider";

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
  const queryClient = new QueryClient();
  return (
    <html lang="ko">
      <body className={notoSans.className}>
        <QueryClientProvider client={queryClient}>
          <CookiesProvider>
            <SignupContextProvider>
            <ToastContainer />
            {children}
            </SignupContextProvider>
          </CookiesProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
