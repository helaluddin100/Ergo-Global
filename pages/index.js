import React, { useEffect, useState } from "react";
import AppLayout from "../component/Layout/Layout";
import Head from "next/head";
import Link from "next/link";

function Home() {
  return (
    <>
      <Head>
        <title>NFT Website Development Services |nft constructer</title>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>
      <section className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="hero-content">
                <h1>Check your Ergonomic Risk Score</h1>
                <p>
                  This 1-minute survey analyses the ergonomics practices of your
                  company. Your risk score will highlight your company's
                  strengths and opportunities for improvement.
                </p>
                <div className="hero-btns">
                  <button className="custom-btn">How it Works</button>
                  <button className="custom-btn">
                    <img src="/img/icon/rocket.svg" alt="" />
                    <span>Take the Test</span>
                  </button>
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
        <div className="hero-side-img">
          <img src="/img/side-bg.png" alt="" />
        </div>
      </section>
    </>
  );
}
Home.layout = AppLayout;
export default Home;
