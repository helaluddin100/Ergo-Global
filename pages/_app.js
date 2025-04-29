import "../styles/css/fontawesome/css/all.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/css/bootstrap.min.css";
import "../styles/css/font.css";
import "../styles/css/style.css";
import "../styles/css/responsive.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Fragment, useEffect } from "react";
function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || Fragment;

  return (
    <>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </>
  );
}

export default MyApp;
