import React from "react";
import AppLayout from "../component/Layout/Layout";
import ScoreMeter from "../component/ScoreMeter";
import Head from "next/head";
import { useRouter } from "next/router"; // Import useRouter

const ScorePage = () => {
  const router = useRouter();
  const { totalScore } = router.query; // Get the totalScore from the query parameters

  // Convert totalScore to a number.  It will be a string from the URL.
  const score = totalScore ? parseInt(totalScore, 10) : 0;
  return (
    <>
      <Head>
        <title>Check your Ergonomic Risk Score for Free</title>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>
      <div className="score-page">
        <div className="container">
          <div className="score-title">
            <h1>Your Ergonomic Risk Score</h1>
          </div>
          <div className="score-wrapper">
            <ScoreMeter score={score} />

            <>
              {score >= 0 && score <= 10 && (
                <div className="score-right-content">
                  <div className="recommendation-item">
                    <div className="recommendation-content">
                      <p>Learn how to </p>
                      <h2>lower your risk score</h2>
                    </div>
                  </div>
                  <div className="score-title-items">
                    <p>
                      Ergo Global ergonomists have lowered risk and improved
                      team health for 100+ companies around the world.
                    </p>
                  </div>
                  <div className="score-list-items">
                    <div className="score-list-item">
                      <img src="/img/icon/company-1.png" alt="" />
                    </div>
                    <div className="score-list-item">
                      <img src="/img/icon/company-2.png" alt="" />
                    </div>
                    <div className="score-list-item">
                      <img src="/img/icon/company-3.png" alt="" />
                    </div>
                    <div className="score-list-item">
                      <img src="/img/icon/company-4.png" alt="" />
                    </div>
                    <div className="score-list-item">
                      <img src="/img/icon/company-5.png" alt="" />
                    </div>
                    <div className="score-list-item">
                      <img src="/img/icon/company-6.png" alt="" />
                    </div>
                  </div>
                  <div className="score-footer-items">
                    <p>
                      Check your email to see our ergonomists’ recommendations
                      for lowering your score!
                    </p>
                  </div>
                </div>
              )}
              {score > 10 && score <= 20 && (
                <div className="score-right-content">
                  <div className="recommendation-item">
                    <div className="recommendation-content">
                      <p>Learn how to </p>
                      <h2>lower your risk score</h2>
                    </div>
                  </div>
                  <div className="score-title-items">
                    <p>
                      Ergo Global ergonomists have lowered risk and improved
                      team health for 100+ companies around the world.
                    </p>
                  </div>
                  <div className="score-list-items">
                    <div className="score-list-item">
                      <img src="/img/icon/company-1.png" alt="" />
                    </div>
                    <div className="score-list-item">
                      <img src="/img/icon/company-2.png" alt="" />
                    </div>
                    <div className="score-list-item">
                      <img src="/img/icon/company-3.png" alt="" />
                    </div>
                    <div className="score-list-item">
                      <img src="/img/icon/company-4.png" alt="" />
                    </div>
                    <div className="score-list-item">
                      <img src="/img/icon/company-5.png" alt="" />
                    </div>
                    <div className="score-list-item">
                      <img src="/img/icon/company-6.png" alt="" />
                    </div>
                  </div>
                  <div className="score-footer-items">
                    <p>
                      Check your email to see our ergonomists’ recommendations
                      for lowering your score!
                    </p>
                  </div>
                </div>
              )}
              {score > 20 && score <= 30 && (
                <div className="score-right-content">
                  <div className="recommendation-item">
                    <div className="recommendation-content">
                      <p>Learn how to </p>
                      <h2>lower your risk score</h2>
                    </div>
                  </div>
                  <div className="score-title-items">
                    <p>
                      Ergo Global ergonomists have lowered risk and improved
                      team health for 100+ companies around the world.
                    </p>
                  </div>
                  <div className="score-list-items">
                    <div className="score-list-item">
                      <img src="/img/icon/company-1.png" alt="" />
                    </div>
                    <div className="score-list-item">
                      <img src="/img/icon/company-2.png" alt="" />
                    </div>
                    <div className="score-list-item">
                      <img src="/img/icon/company-3.png" alt="" />
                    </div>
                    <div className="score-list-item">
                      <img src="/img/icon/company-4.png" alt="" />
                    </div>
                    <div className="score-list-item">
                      <img src="/img/icon/company-5.png" alt="" />
                    </div>
                    <div className="score-list-item">
                      <img src="/img/icon/company-6.png" alt="" />
                    </div>
                  </div>
                  <div className="score-footer-items">
                    <p>
                      Check your email to see our ergonomists’ recommendations
                      for lowering your score!
                    </p>
                  </div>
                </div>
              )}
            </>
          </div>
        </div>
      </div>
    </>
  );
};

ScorePage.layout = AppLayout;
export default ScorePage;
