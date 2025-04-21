import React, { useState } from "react";
import ResultSection from "../component/ResultSection";

const TestPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const totalSteps = questions.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const currentQuestion = questions[currentStep];

  const handleSelect = (option) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: option,
    });
  };

  const goNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Directly go to the result page after final question
      setCurrentStep(totalSteps);
    }
  };

  const goPrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <div className="test">
        <div className="container test-container">
          <div className="test-wrapper">
            <div className="progress-bar-item">
              <p className="progress-text">
                {/* {currentStep + 1} of {totalSteps} answered */}
                {currentStep === totalSteps
                  ? totalSteps
                  : currentStep + 1} of {totalSteps} answered
              </p>
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {currentStep === totalSteps ? (
              <ResultSection />
            ) : (
              <div className="question-section">
                <h2 className="question-number">{currentStep + 1}.</h2>
                <div className="question-section-content">
                  <h3 className="question-text">{currentQuestion.text}</h3>
                  <p className="question-subtext">
                    (Please select from the following options)
                  </p>
                  <div className="options">
                    {currentQuestion.options.map((opt, idx) => (
                      <label className="option" key={idx}>
                        <input
                          type="radio"
                          name={`question-${currentQuestion.id}`}
                          checked={answers[currentQuestion.id] === opt}
                          onChange={() => handleSelect(opt)}
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* <div className="footer-nav">
          <h4 className="section-title">
            <span>Section 01:</span>
            <br />
            Ergonomics Program Structure & Implementation
          </h4>
          <div className="hero-btns pt-0">
            <button
              className="custom-btn"
              onClick={goPrev}
              disabled={currentStep === 0}
            >
              Previous
            </button>
            <button
              className="custom-btn custom-test-btn"
              onClick={goNext}
              disabled={
                currentStep < totalSteps - 1 && !answers[currentQuestion?.id]
              }
            >
              <span>Next</span>
            </button>
          </div>
        </div> */}
        {/* {currentStep !== totalSteps && (
          <div className="footer-nav">
            <h4 className="section-title">
              <span>Section 01:</span>
              <br />
              Ergonomics Program Structure & Implementation
            </h4>
            <div className="hero-btns pt-0">
              <button
                className="custom-btn"
                onClick={goPrev}
                disabled={currentStep === 0}
              >
                Previous
              </button>
              <button
                className="custom-btn custom-test-btn"
                onClick={goNext}
                disabled={
                  currentStep < totalSteps - 1 && !answers[currentQuestion?.id]
                }
              >
                <span>Next</span>
              </button>
            </div>
          </div>
        )} */}
        {currentStep < totalSteps && (
          <div className="footer-nav">
            <h4 className="section-title">
              <span>{currentQuestion?.sectionTitle}</span>
              <br />
              {currentQuestion?.sectionName}
            </h4>
            <div className="hero-btns pt-0">
              <button
                className="custom-btn"
                onClick={goPrev}
                disabled={currentStep === 0}
              >
                Previous
              </button>
              <button
                className="custom-btn custom-test-btn"
                onClick={goNext}
                disabled={!answers[currentQuestion?.id]}
              >
                <span>Next</span>
              </button>
            </div>
          </div>
        )}

        <div className="test-bg-item">
          <img src="/img/right-side-bg.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default TestPage;
const questions = [
  {
    id: 1,
    sectionTitle: "Section 01:",
    sectionName: "Ergonomics Program Structure & Implementation",
    text: "How would you describe your organisation’s current approach to workplace ergonomics?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  },
  {
    id: 2,
    sectionTitle: "Section 01:",
    sectionName: "Ergonomics Program Structure & Implementation",
    text: "Does your team receive regular ergonomics training?",
    options: ["Yes", "No", "Sometimes", "Not sure"],
  },
  {
    id: 3,
    sectionTitle: "Section 02:",
    sectionName: "Workstation Setup & Equipment",
    text: "Are there adjustable desks or chairs available?",
    options: ["All", "Some", "Few", "None"],
  },
  {
    id: 4,
    sectionTitle: "Section 02:",
    sectionName: "Workstation Setup & Equipment",
    text: "How often are ergonomic assessments conducted?",
    options: ["Monthly", "Quarterly", "Yearly", "Never"],
  },
  {
    id: 5,
    sectionTitle: "Section 03:",
    sectionName: "Employee Feedback",
    text: "Do employees report ergonomic discomforts?",
    options: ["Frequently", "Sometimes", "Rarely", "Never"],
  },
];
