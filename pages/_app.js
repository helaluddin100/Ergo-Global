import "../styles/css/fontawesome/css/all.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/css/bootstrap.min.css";
import "../styles/css/font.css";
import "../styles/css/style.css";

import { Fragment, useEffect } from "react";
function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || Fragment;

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
