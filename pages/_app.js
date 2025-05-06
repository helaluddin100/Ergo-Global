import "../styles/css/fontawesome/css/all.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/css/bootstrap.min.css";
import "../styles/css/font.css";
import "../styles/css/style.css";
import "../styles/css/responsive.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Fragment, useEffect } from "react";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || Fragment;

  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W2FTPKDL');`,
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/ns.html?id=GTM-W2FTPKDL"
        ></script>
      </Head>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </>
  );
}

export default MyApp;
