import React, { useEffect, useState } from "react";
import AppLayout from "../component/Layout/Layout";
import Head from "next/head";
import Link from "next/link";
import HowItWork from "../component/HowItWork";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <Head>
        <title>Check your Ergonomic Risk Score for Free</title>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>
      <section className="hero">
        <div className="hero-wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="hero-content">
                  <h1>Check your Ergonomic Risk Score</h1>
                  <p>
                    This 1-minute survey analyses the ergonomics practices of
                    your company. Your risk score will highlight your
                    company&apos;s strengths and opportunities for improvement.
                  </p>
                  <div className="hero-btns">
                    <button className="custom-btn" onClick={openModal}>
                      How it Works
                    </button>
                    <Link className="custom-btn custom-test-btn" href="/test">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M7.35156 14.4219C6.46094 17.0703 2.92969 17.0703 2.92969 17.0703C2.92969 17.0703 2.92969 13.5391 5.57813 12.6484"
                          stroke="#F8F9FF"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.3047 8.23437L10 13.5391L6.46094 10L11.7656 4.69531C13.7734 2.6875 15.7812 2.71094 16.6406 2.83594C16.7732 2.85363 16.8963 2.91447 16.9909 3.00907C17.0855 3.10367 17.1464 3.22677 17.1641 3.35937C17.2891 4.21875 17.3125 6.22656 15.3047 8.23437Z"
                          stroke="#F8F9FF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14.4219 9.11719V14.1641C14.4195 14.3289 14.3521 14.4862 14.2344 14.6016L11.7109 17.1328C11.6309 17.2128 11.5306 17.2695 11.4208 17.297C11.3111 17.3244 11.1959 17.3215 11.0876 17.2886C10.9794 17.2558 10.882 17.1941 10.8061 17.1102C10.7301 17.0264 10.6783 16.9235 10.6562 16.8125L10 13.5391"
                          stroke="#F8F9FF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.8828 5.57812H5.83588C5.67102 5.58047 5.51377 5.64787 5.39838 5.76563L2.86713 8.28906C2.78716 8.36912 2.73043 8.46939 2.70299 8.57916C2.67554 8.68894 2.67842 8.8041 2.7113 8.91237C2.74418 9.02064 2.80584 9.11796 2.8897 9.19393C2.97355 9.2699 3.07646 9.32168 3.18744 9.34375L6.46088 10"
                          stroke="#F8F9FF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>Take the Test</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="hero-banner-img">
                  <img src="/img/banner.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-side-img">
          <img src="/img/side-bg.png" alt="" />
        </div>
      </section>
      <HowItWork isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
Home.layout = AppLayout;
export default Home;
