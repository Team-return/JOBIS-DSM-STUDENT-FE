import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";
import { CookiesProvider } from "react-cookie";

const notoSans = Noto_Sans_KR({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "JOBIS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CookiesProvider>
      <html lang="ko">
        <body className={notoSans.className}>{children}</body>
      </html>
    </CookiesProvider>
  );
}
