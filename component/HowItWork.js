import Link from "next/link";
import React from "react";

const HowItWork = ({ isOpen, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("model-overlay")) {
      onClose();
    }
  };
  return (
    <>
      {isOpen && (
        <div className="model-overlay" onClick={handleOverlayClick}>
          <div className="model">
            <div className="model-content-wrapper">
              <div className="how-close-btn" onClick={onClose}>
                <img src="/img/icon/close.svg" alt="" />
              </div>
              <div className="how-work-img">
                <img src="/img/how-banner.png" alt="" />
              </div>
              <div className="how-work-content">
                <div className="how-work-title">
                  <h2>Ergonomic Risk Calculator</h2>
                  <p>
                    Evaluate the ergonomic setup at your company in just a few
                    minutes.
                  </p>
                </div>
                <div className="how-work-item-list">
                  <h4>How It Works</h4>
                  <p>
                    You’ll be asked 15 multiple choice questions about the
                    ergonomics in your workplace. Each answer you give will
                    contribute to your final risk score, indicating whether your
                    team is at:
                  </p>
                  <ul>
                    <li>Low Risk</li>
                    <li>Medium Risk</li>
                    <li>High Risk</li>
                  </ul>
                </div>
                <div className="how-work-item-list">
                  <h4>What You’ll Get</h4>
                  <p>
                    Along with your risk score, you’ll receive professional
                    recommendations from an ergonomist on:
                  </p>
                  <ul>
                    <li>Lowering your ergonomic risk</li>
                    <li>
                      Improving the overall health and wellbeing of your team
                    </li>
                  </ul>
                </div>
                <div className="how-work-link">
                  <h5>Ready to assess your setup?</h5>
                  <Link href="/test">
                    Start the calculator and get your score →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HowItWork;
