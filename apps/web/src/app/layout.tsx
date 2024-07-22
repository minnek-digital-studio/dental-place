import "@minnek/ui/global.css";
import { Metadata } from "next";
import Footer from "@/modules/common/components/footer";

export const metadata: Metadata = {
    title: "Home",
    description: "Welcome to Next.js",
};

import { NavBar } from "@/modules/common/components/navbar";

import { Noto_Sans } from "next/font/google";

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
            <body className={notoSans.variable}>{children}</body>
        </html>
    );
}
