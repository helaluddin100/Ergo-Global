import React, { useState } from "react";

const ResultSection = () => {
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = () => {
    console.log("Submitted:", { email, agree });
    // You can send this to your backend here
  };
  return (
    <div className="result-section">
      <div className="result-title">
        <h2>Thanks! We&apos;ve got your responses.</h2>
        <h2>Please enter your email to see your score.</h2>
      </div>

      <div className="form-group-item">
        <label htmlFor="email">Work Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your work email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group-item checkbox">
        <input
          type="checkbox"
          id="agree"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        <label htmlFor="agree">
          I agree to receive marketing communications related to Ergo Global
          products and services.
        </label>
      </div>

      <div className="result-section-btn">
        <button className="custom-btn  custom-test-btn" disabled={!email}>
          <span> Check Score</span>
        </button>
      </div>
    </div>
  );
};

export default ResultSection;
