import "./globals.css";
import { Noto_Sans_KR } from "@next/font/google";
import Header from "@/components/common/Header";
import Provider from "@/components/Provider";
import SEOConfig from "@/components/SEO";

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
        <html>
            <SEOConfig />
            <body className={notoSans.className}>
                <Provider>
                    <Header />
                    {children}
                </Provider>
            </body>
        </html>
    );
}
