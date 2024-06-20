import "../styles/reset.css";
import "../styles/global.css";
import { Playfair_Display } from "next/font/google";
import Head from "next/head";
import Layout from "components/layout";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

export default function Root({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${playfairDisplay.style.fontFamily};
          }
        `}
      </style>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
