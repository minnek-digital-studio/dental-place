import "@minnek/ui/global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home",
    description: "Welcome to Next.js",
};

import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
    variable: "--font-noto-sans",
    subsets: ["latin"],
});

import { ApolloWrapper } from "@/modules/common/lib/apollo/apollo-wrapper";

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={notoSans.variable}>
                <ApolloWrapper>{children}</ApolloWrapper>
            </body>
        </html>
    );
}
