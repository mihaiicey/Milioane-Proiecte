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
      <div className="absolute bottom-0 left-0 right-0 text-center">Made by <a href="https://icey.dev">Icey.dev</a> <span className="text-xs">*Acest site este un pamflet</span></div> 
      </main>
    </>
  );
}

export default MyApp;
