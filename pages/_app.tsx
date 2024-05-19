import "../styles/global.css";
import type { AppProps } from "next/app";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

export default function Root({ Component, pageProps }: AppProps) {
  return (
    <main className={playfairDisplay.className}>
      <Component {...pageProps} />
    </main>
  );
}
