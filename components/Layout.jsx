import { Sora } from "next/font/google";
import Head from "next/head";
import { useEffect, useRef } from "react";

import Header from "../components/Header";
import Nav from "../components/Nav";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  const mainRef = useRef(null);

  useEffect(() => {
    // Scroll the main container to top on load
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
    // Also clear hash
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return (
    <main
      ref={mainRef}
      className={`bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative `}
    >
      <Head>
        <title>satyam paswan | Portfolio</title>
        <meta name="description" content="Ethan Smith is a Full-stack web developer with 10+ years of experience." />
        <meta name="keywords" content="react, next, nextjs, html, css, javascript, js, modern-ui, modern-ux, portfolio, framer-motion, 3d-website, particle-effect" />
        <meta name="author" content="Sanidhya Kumar Verma" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <Nav />
      <Header />

      {children}
    </main>
  );
};

export default Layout;