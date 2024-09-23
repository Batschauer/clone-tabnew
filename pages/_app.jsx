import "../styles/global.css";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

export default function Root({ Component, pageProps }) {
  return (
    <main className={playfairDisplay.className}>
      <Component {...pageProps} />
    </main>
  );
}
