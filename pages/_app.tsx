import "../styles/main.css";
import type { AppProps } from "next/app";
import { Rubik } from "next/font/google";
import Script from "next/script";

const rubik = Rubik({ subsets: ["latin", "latin-ext"] });
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://kit.fontawesome.com/988e017550.js"
        strategy="lazyOnload"
      />
      <main className={rubik.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
