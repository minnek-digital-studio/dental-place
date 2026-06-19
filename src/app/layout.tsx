import { ApolloWrapper } from "@/modules/common/lib/apollo/apollo-wrapper";
import WhatsAppFloatingButton from "@/modules/common/components/whatsapp-floating-button";
import GoogleAnalytics from "@/modules/common/components/google-analytics";
import "@ui/global.css";
import { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

export const metadata: Metadata = {
    title: "Home",
    description: "Welcome to Next.js",
    icons: {
        icon: "/favicon/dental-icon.webp",
    },
};

const notoSans = Noto_Sans({
    variable: "--font-noto-sans",
    subsets: ["latin"],
});

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <GoogleAnalytics />
            </head>
            <body className={notoSans.variable}>
                <ApolloWrapper>
                    {children}
                    <WhatsAppFloatingButton />
                </ApolloWrapper>
            </body>
        </html>
    );
}
