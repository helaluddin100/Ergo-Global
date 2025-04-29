import React, { useState, useEffect } from "react";
import ResultSection from "../component/ResultSection";
import Head from "next/head";

const TestPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [totalScore, setTotalScore] = useState(0);
  const [error, setError] = useState("");

  const totalSteps = questions.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const currentQuestion = questions[currentStep];

  const handleSelect = (selectedOption) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: selectedOption.value,
    });
    setError("");
  };

  const goNext = () => {
    const selected = answers[currentQuestion.id];
    if (selected === undefined) {
      setError("Please select an option before proceeding.");
      return;
    }
    setError(""); // Clear error if selection is valid
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(totalSteps);
    }
  };

  const goPrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  useEffect(() => {
    if (currentStep === totalSteps) {
      let score = 0;
      for (const questionId in answers) {
        const answerValue = answers[questionId];
        if (answerValue !== undefined && answerValue !== "") {
          score += parseInt(answerValue);
        }
      }
      setTotalScore(score);
    }
  }, [currentStep, answers]);

  const answeredCount = Object.keys(answers).length;

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
                {/* {currentStep === totalSteps ? totalSteps : currentStep + 1} of{" "}
                {totalSteps} answered */}
                {answeredCount} of {totalSteps} answered
              </p>
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {currentStep === totalSteps ? (
              <ResultSection
                totalScore={totalScore}
                answers={answers}
                questions={questions}
              />
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
                          value={opt.value}
                          checked={answers[currentQuestion.id] === opt.value}
                          onChange={() => handleSelect(opt)}
                        />
                        <span>{opt.text}</span>
                      </label>
                    ))}
                  </div>
                  {error && <p className="error-message">{error}</p>}
                </div>
              </div>
            )}
          </div>
        </div>

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
              {currentStep === 14 ? <button
                className="custom-btn custom-test-btn"
                onClick={goNext}
              >
                <span>Submit</span>
              </button> : <button
                className="custom-btn custom-test-btn"
                onClick={goNext}
              >
                <span>Next</span>
              </button>}
              {/* <button
                className="custom-btn custom-test-btn"
                onClick={goNext}
              >
                <span>Next</span>
              </button> */}
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
      { text: "Comprehensive program", value: "" },
      {
        text: "Basic measures (e.g., some adjustable chairs, occasional training)",
        value: "0",
      },
      { text: "No formal approach", value: "1" },
      { text: "I don’t know", value: "2" },
    ],
  },
  {
    id: 2,
    sectionTitle: "Section 02:",
    sectionName: "Training, Awareness & Engagement",
    text: "Does your organization track the effectiveness of ergonomic measures (e.g., through injury rates, employee feedback)?",
    options: [
      { text: "Yes, comprehensively", value: "" },
      { text: "Yes, but minimally", value: "0" },
      { text: "No", value: "1" },
      { text: "I don’t know", value: "2" },
    ],
  },
  {
    id: 3,
    sectionTitle: "Section 03:",
    sectionName: "Training, Awareness & Engagement",
    text: "Are ergonomic standards consistently applied when designing workstations or purchasing new furniture/equipment (e.g., ensuring desks are adjustable, monitors at eye level)?",
    options: [
      { text: "Always", value: "" },
      { text: "Sometimes", value: "0" },
      { text: "Never", value: "1" },
      { text: "I don’t know", value: "2" },
    ],
  },
  {
    id: 4,
    sectionTitle: "Section 04:",
    sectionName: "Training, Awareness & Engagement",
    text: "How often does your organization provide ergonomic training to employees (e.g., workshops on posture, workstation setup)?",
    options: [
      { text: "Regularly (e.g., annually or more)", value: "" },
      { text: "Occasionally (e.g., once a year)", value: "0" },
      { text: "Never", value: "1" },
      { text: "I don’t know", value: "2" },
    ],
  },
  {
    id: 5,
    sectionTitle: "Section 05:",
    sectionName: "Training, Awareness & Engagement",
    text: "What resources are provided to employees to promote ergonomic awareness and reduce MSD risks (e.g., posters, workshops, online guides)?",
    options: [
      { text: "Comprehensive resources (e.g., regular workshops)", value: "" },
      { text: "Basic materials (e.g., occasional flyers)", value: "0" },
      { text: "None", value: "1" },
      { text: "I don’t know", value: "2" },
    ],
  },
  {
    id: 6,
    sectionTitle: "Section 06:",
    sectionName: "Training, Awareness & Engagement",
    text: "How actively are employees encouraged to report ergonomic discomfort or health concerns (e.g., through formal reporting systems, open-door policies)?",
    options: [
      { text: "Strongly encouraged with formal processes", value: "" },
      { text: "Encouraged informally", value: "0" },
      { text: "Not encouraged ", value: "1" },
      { text: "I don’t know", value: "2" },
    ],
  },
  {
    id: 7,
    sectionTitle: "Section 07:",
    sectionName: "Training, Awareness & Engagement",
    text: "Are there formal channels for employees to provide feedback on ergonomics (e.g., surveys, dedicated HR contact for workplace issues)?",
    options: [
      { text: "Yes, actively used", value: "" },
      { text: "Yes, but not widely used", value: "0" },
      { text: "No", value: "1" },
      { text: "I don’t know", value: "2" },
    ],
  },
  {
    id: 8,
    sectionTitle: "Section 08:",
    sectionName: "Equipment & Workstation Design",
    text: "To what extent are employees provided with ergonomic equipment (e.g., adjustable chairs, ergonomic keyboards, standing desks)?",
    options: [
      { text: "Standard for all employees", value: "" },
      { text: "Provided upon request", value: "0" },
      { text: "Not provided", value: "1" },
      { text: "I don’t know", value: "2" },
    ],
  },
  {
    id: 9,
    sectionTitle: "Section 09:",
    sectionName: "Equipment & Workstation Design",
    text: "To what extent are tasks and workstations designed to minimize ergonomic risks (e.g., reducing repetitive motions, ensuring comfortable postures)?",
    options: [
      { text: "Fully designed", value: "" },
      { text: "To some extent", value: "0" },
      { text: "Not at all", value: "1" },
      { text: "I don’t know", value: "2" },
    ],
  },
  {
    id: 10,
    sectionTitle: "Section 10:",
    sectionName: "Monitoring & Assessment",
    text: "How frequently are ergonomic assessments conducted to ensure workstations meet employee needs (e.g., checking chair height, monitor position)?",
    options: [
      { text: "Regularly (e.g., annually or for new hires)", value: "" },
      { text: "Only when issues arise ", value: "0" },
      { text: "Never", value: "1" },
      { text: "I don’t know", value: "2" },
    ],
  },
  {
    id: 11,
    sectionTitle: "Section 11:",
    sectionName: "Monitoring & Assessment",
    text: "In the past 12 months, have employees reported issues related to physical discomfort (e.g., back pain, wrist strain, neck fatigue)?",
    options: [
      { text: "No", value: "" },
      { text: "Yes, occasionally ", value: "0" },
      { text: "Yes, frequently ", value: "1" },
      { text: "I’m not sure", value: "2" },
    ],
  },
  {
    id: 12,
    sectionTitle: "Section 12:",
    sectionName: "Monitoring & Assessment",
    text: "Have employees had to take time off due to physical discomfort from workplace conditions in the past year (e.g., due to back pain or repetitive strain injuries)?",
    options: [
      { text: "No", value: "" },
      { text: "Yes, a few instances ", value: "0" },
      { text: " Yes, several instances", value: "1" },
      { text: "I don’t know", value: "2" },
    ],
  },
  {
    id: 13,
    sectionTitle: "Section 13:",
    sectionName: "Monitoring & Assessment",
    text: "Are you aware of any employees who have experienced discomfort or injury due to poor workplace ergonomics (e.g., carpal tunnel syndrome, lower back pain)?",
    options: [
      { text: "No, none that I know of", value: "" },
      { text: "Yes, a few", value: "0" },
      { text: "Yes, several", value: "1" },
      { text: "I don’t know", value: "2" },
    ],
  },
  {
    id: 14,
    sectionTitle: "Section 14:",
    sectionName: "Movement & Remote Work Support",
    text: "How actively are employees supported to incorporate movement into their workday to prevent discomfort (e.g., through break policies, standing desk options)?",
    options: [
      { text: "Strongly supported with policies", value: "" },
      { text: "Supported informally", value: "0" },
      { text: "Not supported ", value: "1" },
      { text: "I don’t know", value: "2" },
    ],
  },
  {
    id: 15,
    sectionTitle: "Section 15:",
    sectionName: "Movement & Remote Work Support",
    text: "How well are remote and hybrid workers supported with ergonomic solutions (e.g., home office assessments, equipment provision)?",
    options: [
      { text: "Fully supported", value: "" },
      { text: "Partially supported", value: "0" },
      { text: "Not supported ", value: "1" },
      { text: "I don’t know", value: "2" },
    ],
  },
];
