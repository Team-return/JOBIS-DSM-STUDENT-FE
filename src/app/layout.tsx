"use client";

import Header from "@/components/common/Header";
import Provider from "@/components/Provider";
import SEOConfig from "@/components/SEO";
import localFont from "@next/font/local";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import "./globals.css";
import * as ChannelService from "@channel.io/channel-web-sdk-loader";

const pretendard = localFont({
  src: [
    {
      path: "../../public/fonts/Pretendard-Bold.woff2",
      weight: "700",
    },
    {
      path: "../../public/fonts/Pretendard-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/Pretendard-Regular.woff2",
      weight: "400",
    },
  ],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    if (
      pathname.toString().indexOf("/apply") !== -1 ||
      pathname.toString().indexOf("/account") !== -1 ||
      pathname.toString().indexOf("/employmentStatus") !== -1
    ) {
      document.querySelector("body")!.style.backgroundColor = "#fafafa";
    } else {
      document.querySelector("body")!.style.backgroundColor = "#ffffff";
    }
  }, [pathname]);

  ChannelService.loadScript();

  const CHATKEY = process.env.NEXT_PUBLIC_CHAT_KEY || "";

  ChannelService.boot({
    pluginKey: CHATKEY,
  });

  return (
    <html>
      <SEOConfig />
      <body
        className={
          "w-screen py-[68px] md:px-[17.5vw] sm:px-[7.5vw] min-h-screen " +
          pretendard.className
        }
      >
        <Provider>
          {pathname.toString().indexOf("/account") === -1 && <Header />}
          {children}
        </Provider>
      </body>
    </html>
  );
}
