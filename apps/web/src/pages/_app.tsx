import "@minnek/ui/global.css";
import { AppProps } from "next/app";

import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
    variable: "--font-noto-sans",
    subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
    return <Component className={notoSans.variable} {...pageProps} />;
}

export default MyApp;
