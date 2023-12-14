import Header from "@/components/common/Header";
import Provider from "@/components/Provider";
import SEOConfig from "@/components/SEO";
import localFont from "@next/font/local";
import "./globals.css";

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
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
