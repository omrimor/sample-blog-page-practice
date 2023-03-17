import "../styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";

const roobert = localFont({
  src: [
    {
      path: "../public/fonts/Roobert-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/Roobert-Medium.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/Roobert-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../public/fonts/Roobert-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-roobert",
});

const reckless = localFont({
  src: [
    {
      path: "../public/fonts/Reckless-Regular.woff2",
      weight: "400",
    },
  ],
  variable: "--font-reckless",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${roobert.variable} ${reckless.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
