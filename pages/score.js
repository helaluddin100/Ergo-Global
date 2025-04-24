import React from "react";
import AppLayout from "../component/Layout/Layout";
import ScoreMeter from "../component/ScoreMeter";
import Head from "next/head";
import { useRouter } from 'next/router'; // Import useRouter

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
            <div className="row">
              <div className="col-lg-5">
                <ScoreMeter score={score} />
              </div>
              <div className="col-lg-7">
                {score >= 0 && score <= 10 && (
                  <div className="score-right-content">
                    <div className="recommendation-item">
                      <div className="recommendation-content">
                        <h2>Recommendations </h2>
                        <p>
                          Based on your score, our ergonomics expert has provided
                          a few recommendations.
                        </p>
                      </div>

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
                )}
                {score > 10 && score <= 20 && (
                  <div className="score-right-content">
                    <div className="recommendation-item">
                      <div className="recommendation-content">
                        <h2>Recommendations</h2>
                        <p>
                          Based on your score, our ergonomics expert has provided
                          a few recommendations.
                        </p>
                      </div>

                    </div>
                    <div className="score-list-items">
                      <div className="score-list-item">
                        <div className="score-item-icon score-item-icon-1">
                          <img src="/img/icon/score-1.png" alt="" />
                        </div>
                        <div className="score-item-content">
                          <h4>Spot the Gaps:</h4>
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
                )}
                {score > 20 && score <= 30 && (
                  <div className="score-right-content">
                    <div className="recommendation-item">
                      <div className="recommendation-content">
                        <h2>Recommendations</h2>
                        <p>
                          Based on your score, our ergonomics expert has provided
                          a few recommendations.
                        </p>
                      </div>

                    </div>
                    <div className="score-list-items">
                      <div className="score-list-item">
                        <div className="score-item-icon score-item-icon-1">
                          <img src="/img/icon/score-1.png" alt="" />
                        </div>
                        <div className="score-item-content">
                          <h4>Audit for Insight:</h4>
                          <p>
                            Conduct a comprehensive ergonomics audit across all departments to identify the root causes of risks.
                          </p>
                        </div>
                      </div>
                      <div className="score-list-item">
                        <div className="score-item-icon score-item-icon-2">
                          <img src="/img/icon/score-2.png" alt="" />
                        </div>
                        <div className="score-item-content">
                          <h4>Prioritise High-Risk:</h4>
                          <p>
                            Focus on high-risk areas for immediate intervention to prevent injuries and enhance well-being.
                          </p>
                        </div>
                      </div>
                      <div className="score-list-item">
                        <div className="score-item-icon score-item-icon-3">
                          <img src="/img/icon/score-3.png" alt="" />
                        </div>
                        <div className="score-item-content">
                          <h4>Explore and Equip:</h4>
                          <p>
                            Allocate resources for ergonomic upgrades—equipment, furniture, training, and assessments—based on identified needs.
                          </p>
                        </div>
                      </div>
                      <div className="score-list-item">
                        <div className="score-item-icon score-item-icon-4">
                          <img src="/img/icon/score-4.png" alt="" />
                        </div>
                        <div className="score-item-content">
                          <h4>Illuminate the Path Forward:</h4>
                          <p>
                            Establish a dedicated ergonomics team or champion and implement a structured program with education, equipment management, and continuous monitoring.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}


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
