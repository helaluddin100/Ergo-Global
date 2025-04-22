import React from "react";
import AppLayout from "../component/Layout/Layout";
import ScoreMeter from "../component/ScoreMeter";
import Head from "next/head";

const ScorePage = () => {
  const score = 15;
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
            <div className="row">
              <div className="col-lg-5">
                <ScoreMeter score={score} />
              </div>
              <div className="col-lg-7">
                <div className="score-right-content">
                  <div className="recommendation-item">
                    <div className="recommendation-content">
                      <h2>Recommendations</h2>
                      <p>
                        Based on your score, our ergonomics expert has provided
                        a few recommendations.
                      </p>
                    </div>
                    {/* <div className="recommendation-img">
                  <img src="/img/score-img.png" alt="" />
                </div> */}
                  </div>
                  <div className="score-list-items">
                    <div className="score-list-item">
                      <div className="score-item-icon score-item-icon-1">
                        <img src="/img/icon/score-1.png" alt="" />
                      </div>
                      <div className="score-item-content">
                        <h4>Routine Policy Reviews:</h4>
                        <p>
                          Maintain current practices by regularly reviewing
                          ergonomics policies and procedures.
                        </p>
                      </div>
                    </div>
                    <div className="score-list-item">
                      <div className="score-item-icon score-item-icon-2">
                        <img src="/img/icon/score-2.png" alt="" />
                      </div>
                      <div className="score-item-content">
                        <h4>Ongoing Employee Engagement:</h4>
                        <p>
                          Engage employees through ongoing training or refresher
                          sessions to reinforce good habits.
                        </p>
                      </div>
                    </div>
                    <div className="score-list-item">
                      <div className="score-item-icon score-item-icon-3">
                        <img src="/img/icon/score-3.png" alt="" />
                      </div>
                      <div className="score-item-content">
                        <h4>Proactive Risk Detection:</h4>
                        <p>
                          Conduct periodic ergonomics assessments to ensure
                          continued effectiveness and early detection of
                          emerging issues.
                        </p>
                      </div>
                    </div>
                    <div className="score-list-item">
                      <div className="score-item-icon score-item-icon-4">
                        <img src="/img/icon/score-4.png" alt="" />
                      </div>
                      <div className="score-item-content">
                        <h4>Future-Ready Practices:</h4>
                        <p>
                          Stay updated on ergonomics trends and innovations to
                          keep your workplace future-ready.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ScorePage.layout = AppLayout;
export default ScorePage;
