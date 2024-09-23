import "../styles/global.css";
import { Playfair_Display } from "next/font/google";
import PropTypes from "prop-types";

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

Root.propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.object.isRequired,
};
