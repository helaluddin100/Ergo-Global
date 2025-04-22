import React, { useState } from "react";
import ResultSection from "../component/ResultSection";
import Head from "next/head";

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
      <Head>
        <title>Check your Ergonomic Risk Score for Free</title>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>
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
            <div className="section-title">
              <span>{currentQuestion?.sectionTitle}</span>

              <h4> {currentQuestion?.sectionName}</h4>
            </div>
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
    text: "How would you describe your organization’s current approach to workplace ergonomics (e.g., training programs, adjustable workstations, regular assessments)?",
    options: [
      "Comprehensive program",
      "Basic measures (e.g., some adjustable chairs, occasional training)",
      "No formal approach",
      "I don’t know",
    ],
  },
  {
    id: 2,
    sectionTitle: "Section 02:",
    sectionName: "Training, Awareness & Engagement",
    text: "Does your organization track the effectiveness of ergonomic measures (e.g., through injury rates, employee feedback)?",
    options: [
      "Yes, comprehensively",
      "Yes, but minimally",
      "No",
      "I don’t know",
    ],
  },
  {
    id: 3,
    sectionTitle: "Section 02:",
    sectionName: "Training, Awareness & Engagement",
    text: "Are ergonomic standards consistently applied when designing workstations or purchasing new furniture/equipment (e.g., ensuring desks are adjustable, monitors at eye level)?",
    options: ["Always", "Sometimes", "Never", "I don’t know"],
  },
  {
    id: 4,
    sectionTitle: "Section 02:",
    sectionName: "Training, Awareness & Engagement",
    text: "How often does your organization provide ergonomic training to employees (e.g., workshops on posture, workstation setup)?",
    options: [
      "Regularly (e.g., annually or more)",
      "Occasionally (e.g., once a year)",
      "Never",
      "I don’t know",
    ],
  },
  {
    id: 5,
    sectionTitle: "Section 02:",
    sectionName: "Training, Awareness & Engagement",
    text: "What resources are provided to employees to promote ergonomic awareness and reduce MSD risks (e.g., posters, workshops, online guides)?",
    options: [
      "Comprehensive resources (e.g., regular workshops)",
      "Basic materials (e.g., occasional flyers)",
      "None",
      "I don’t know",
    ],
  },
  {
    id: 6,
    sectionTitle: "Section 02:",
    sectionName: "Training, Awareness & Engagement",
    text: "How actively are employees encouraged to report ergonomic discomfort or health concerns (e.g., through formal reporting systems, open-door policies)?",
    options: [
      "Strongly encouraged with formal processes",
      "Encouraged informally",
      "Not encouraged ",
      "I don’t know",
    ],
  },
  {
    id: 7,
    sectionTitle: "Section 02:",
    sectionName: "Training, Awareness & Engagement",
    text: "Are there formal channels for employees to provide feedback on ergonomics (e.g., surveys, dedicated HR contact for workplace issues)?",
    options: [
      "Yes, actively used",
      "Yes, but not widely used",
      "No",
      "I don’t know",
    ],
  },
  {
    id: 8,
    sectionTitle: "Section 03:",
    sectionName: "Equipment & Workstation Design",
    text: "To what extent are employees provided with ergonomic equipment (e.g., adjustable chairs, ergonomic keyboards, standing desks)?",
    options: [
      "Standard for all employees",
      "Provided upon request",
      "Not provided",
      "I don’t know",
    ],
  },
  {
    id: 9,
    sectionTitle: "Section 03:",
    sectionName: "Equipment & Workstation Design",
    text: "To what extent are tasks and workstations designed to minimize ergonomic risks (e.g., reducing repetitive motions, ensuring comfortable postures)?",
    options: ["Fully designed", "To some extent", "Not at all", "I don’t know"],
  },
  {
    id: 10,
    sectionTitle: "Section 03:",
    sectionName: "Monitoring & Assessment",
    text: "How frequently are ergonomic assessments conducted to ensure workstations meet employee needs (e.g., checking chair height, monitor position)?",
    options: [
      "Regularly (e.g., annually or for new hires)",
      "Only when issues arise ",
      "Never",
      "I don’t know",
    ],
  },
  {
    id: 11,
    sectionTitle: "Section 03:",
    sectionName: "Monitoring & Assessment",
    text: "In the past 12 months, have employees reported issues related to physical discomfort (e.g., back pain, wrist strain, neck fatigue)?",
    options: ["No", "Yes, occasionally ", "Yes, frequently ", "I’m not sure"],
  },
  {
    id: 12,
    sectionTitle: "Section 03:",
    sectionName: "Monitoring & Assessment",
    text: "Have employees had to take time off due to physical discomfort from workplace conditions in the past year (e.g., due to back pain or repetitive strain injuries)?",
    options: [
      "No",
      "Yes, a few instances ",
      " Yes, several instances",
      "I don’t know",
    ],
  },
  {
    id: 13,
    sectionTitle: "Section 03:",
    sectionName: "Monitoring & Assessment",
    text: "Are you aware of any employees who have experienced discomfort or injury due to poor workplace ergonomics (e.g., carpal tunnel syndrome, lower back pain)?",
    options: [
      "No, none that I know of",
      "Yes, a few",
      "Yes, several",
      "I don’t know",
    ],
  },
  {
    id: 14,
    sectionTitle: "Section 04:",
    sectionName: "Movement & Remote Work Support",
    text: "How actively are employees supported to incorporate movement into their workday to prevent discomfort (e.g., through break policies, standing desk options)?",
    options: [
      "Strongly supported with policies",
      "Supported informally",
      "Not supported ",
      "I don’t know",
    ],
  },
  {
    id: 15,
    sectionTitle: "Section 04:",
    sectionName: "Movement & Remote Work Support",
    text: "How well are remote and hybrid workers supported with ergonomic solutions (e.g., home office assessments, equipment provision)?",
    options: [
      "Fully supported",
      "Partially supported",
      "Not supported ",
      "I don’t know",
    ],
  },
];
