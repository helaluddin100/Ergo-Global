import React from "react";

const ScoreMeter = ({ score }) => {
  const angle = (score / 30) * 180;

  const getRiskLevel = () => {
    if (score <= 10) return "Low Risk";
    if (score <= 20) return "Medium Risk";
    return "High Risk";
  };

  return (
    <>
      <div className="score-left-side">
        <div className="score-card-con">
          <div className="score-card-item">
            <h2
              className={`score-card-title ${
                getRiskLevel() === "High Risk"
                  ? "high"
                  : getRiskLevel() === "Medium Risk"
                  ? "medium"
                  : "low"
              }`}
            >
              {getRiskLevel()}
            </h2>
            <div className="score-spinner-wrapper">
              <span>Low</span>
              <div className="score-spinner-item">
                <div className="score-img">
                  <img src="/img/score.png" alt="" />
                </div>
                <div
                  className="score-line"
                  style={{ transform: `rotate(${angle - 90}deg)` }}
                >
                  <div className="bar-line"></div>
                </div>
              </div>
              <span>High</span>
            </div>
          </div>
          <div className="score-count-item">
            <div className="score-count-content">
              <p className="count-text">Your score</p>
              <h2>
                {score}
                <span className="score-point-item">/30 points</span>
              </h2>
            </div>
            <p className="text-score-abileabe">
              Recommendations are available on the right{" "}
            </p>
          </div>
        </div>
        <div className="score-list">
          <ul>
            <li>
              <h3>Low Risk</h3>
              <p>0 - 10 points</p>
            </li>
            <li>
              <h3>Medium Risk</h3>
              <p>11 - 20 points</p>
            </li>
            <li>
              <h3>High Risk</h3>
              <p>21 - 30 points</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ScoreMeter;
