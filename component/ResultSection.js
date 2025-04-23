import React, { useState } from "react";
import Link from "next/link";
import Select from "react-select";
const ResultSection = () => {
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = () => {
    console.log("Submitted:", { email, agree });
    // You can send this to your backend here
  };
  const options = [
    { value: "1-10", label: "1-10 employees" },
    { value: "11-50", label: "11-50 employees" },
    { value: "51-100", label: "51-100 employees" },
    { value: "101-500", label: "101-500 employees" },
    { value: "501-1000", label: "501-1000 employees" },
    { value: "1000+", label: "More than 1000 employees" },
  ];
  return (
    <div className="result-section">
      <div className="result-title">
        <h2>Thanks! We&apos;ve got your responses.</h2>
        <h2>Please enter your email to see your Ergonomics Risk score.</h2>
      </div>
      <form action="">
        <div className="result-from-wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group-item">
                <label htmlFor="first_name">
                  First Name<span>*</span>
                </label>
                <input
                  type="text"
                  required
                  id="first_name"
                  placeholder="Enter your first name"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group-item">
                <label htmlFor="last_name">
                  Last Name<span>*</span>
                </label>
                <input
                  required
                  type="text"
                  id="last_name"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="form-group-item">
                <label htmlFor="email">
                  Work Email Address<span>*</span>
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  placeholder="Enter your work email address"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group-item">
                <label htmlFor="company_name">
                  Company Name<span>*</span>
                </label>
                <input
                  type="text"
                  required
                  id="company_name"
                  placeholder="Enter your company name"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group-item">
                <label htmlFor="location">
                  Location<span>*</span>
                </label>
                <input
                  type="text"
                  id="location"
                  required
                  placeholder="Enter your location"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group-item">
                <label htmlFor="desination">Designation/Title</label>
                <input
                  type="text"
                  id="desination"
                  placeholder="Enter your designation"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group-item">
                <label htmlFor="employee">Employee Base Range</label>
                <Select
                  classNamePrefix="custom-select"
                  options={options}
                  placeholder="Employee Base Range"
                  required
                />
              </div>
            </div>
            <div className="form-group-item checkbox">
              <input
                type="checkbox"
                id="agree"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              <label htmlFor="agree">
                I agree to receive marketing communications related to Ergo
                Global products and services.
              </label>
            </div>
            <div className="result-section-btn">
              {/* <button className="custom-btn  custom-test-btn" disabled={!email}>
          <span> Check Score</span>
        </button> */}

              <Link href="/score">
                <button
                  className="custom-btn  custom-test-btn"
                  // disabled={!email}
                >
                  <span> Check Score</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResultSection;
