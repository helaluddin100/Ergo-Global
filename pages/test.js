import React, { useState, useEffect } from "react";
import ResultSection from "../component/ResultSection";
import Head from "next/head";

const TestPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [totalScore, setTotalScore] = useState(0);

  const totalSteps = questions.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;
  console.log("Total Score:", totalScore); // দেখার জন্য যোগ করা

  const currentQuestion = questions[currentStep];

  const handleSelect = (selectedOption) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: selectedOption.value,
    });
  };

  const goNext = () => {
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
        if (answerValue !== '') {
          score += parseInt(answerValue);
        }
      }
      setTotalScore(score);
      console.log("Final Total Score:", totalScore); // ফাইনাল স্কোর দেখার জন্য
    }
  }, [currentStep, answers]);

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
                {currentStep === totalSteps
                  ? totalSteps
                  : currentStep + 1} of {totalSteps} answered {totalScore}
              </p>
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {currentStep === totalSteps ? (
              <ResultSection totalScore={totalScore} answers={answers} questions={questions} />
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
              <button
                className="custom-btn custom-test-btn"
                onClick={goNext}
                disabled={answers[currentQuestion?.id] === undefined}
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
      { text: "Comprehensive program", value: '' },
      { text: "Basic measures (e.g., some adjustable chairs, occasional training)", value: 0 },
      { text: "No formal approach", value: 1 },
      { text: "I don’t know", value: 2 },
    ],
  },
  {
    id: 2,
    sectionTitle: "Section 02:",
    sectionName: "Training, Awareness & Engagement",
    text: "Does your organization track the effectiveness of ergonomic measures (e.g., through injury rates, employee feedback)?",
    options: [
      { text: "Yes, comprehensively", value: '' },
      { text: "Yes, but minimally", value: 0 },
      { text: "No", value: 1 },
      { text: "I don’t know", value: 2 },
    ],
  },
  // ... rest of your questions array
];