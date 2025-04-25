import React, { useState } from "react";
import Link from "next/link";
import Select from "react-select";
import axios from "axios"; // Import axios

const ResultSection = ({ totalScore }) => {
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [designation, setDesignation] = useState("");
  const [employeeBase, setEmployeeBase] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const options = [
    { value: "1-10", label: "1-10 employees" },
    { value: "11-50", label: "11-50 employees" },
    { value: "51-100", label: "51-100 employees" },
    { value: "101-500", label: "101-500 employees" },
    { value: "501-1000", label: "501-1000 employees" },
    { value: "1000+", label: "More than 1000 employees" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors({});
    setSubmissionStatus(null);

    let errors = {};
    if (!firstName.trim()) errors.firstName = "First Name is required";
    if (!lastName.trim()) errors.lastName = "Last Name is required";
    if (!email.trim()) errors.email = "Email is required";
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }
    if (!companyName.trim()) errors.companyName = "Company Name is required";
    if (!location.trim()) errors.location = "Location is required";
    if (!employeeBase) errors.employeeBase = "Employee Base Range is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setSubmissionStatus("error");
      return;
    }

    const formData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      company_name: companyName,
      location: location,
      designation: designation,
      employe_based: employeeBase,
      result_points: String(totalScore), // Convert totalScore to a string
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/exam/store", // Replace with your API endpoint
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("API Response:", response.data);

      if (response.data.success) {
        setSubmissionStatus("success");
        // Redirect to score page with totalScore as a query parameter
        window.location.href = `/score?totalScore=${totalScore}`;
      } else {
        setSubmissionStatus("error");
        setFormErrors({ api: "Failed to submit data.  Check the server." });
      }
    } catch (error) {
      console.error("API Error:", error);
      setSubmissionStatus("error");
      if (error.response) {
        setFormErrors({
          api: error.response.data.message || "An error occurred.",
        });
      } else if (error.request) {
        setFormErrors({ api: "No response from server." });
      } else {
        setFormErrors({
          api: "Error setting up the request: " + error.message,
        });
      }
    }
  };

  return (
    <div className="result-section">
      <div className="result-title">
        <h2>Thanks! We&apos;ve got your responses.</h2>
        <h2>Please enter your email to see your Ergonomics Risk score.</h2>
        {totalScore && (
          <p className="total-score-item">Your Total Score: {totalScore}</p>
        )}
      </div>
      <form onSubmit={handleSubmit}>
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
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {formErrors.firstName && (
                  <p className="text-danger">{formErrors.firstName}</p>
                )}
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
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {formErrors.lastName && (
                  <p className="text-danger">{formErrors.lastName}</p>
                )}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {formErrors.email && (
                  <p className="text-danger">{formErrors.email}</p>
                )}
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
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
                {formErrors.companyName && (
                  <p className="text-danger">{formErrors.companyName}</p>
                )}
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
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                {formErrors.location && (
                  <p className="text-danger">{formErrors.location}</p>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group-item">
                <label htmlFor="desination">Designation/Title</label>
                <input
                  type="text"
                  id="desination"
                  placeholder="Enter your designation"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group-item">
                <label htmlFor="employee">Employee Base Range</label>
                <Select
                  classNamePrefix="custom-select"
                  options={options}
                  placeholder="Select your employee base range"
                  required
                  value={options.find(
                    (option) => option.value === employeeBase
                  )}
                  onChange={(selectedOption) =>
                    setEmployeeBase(selectedOption.value)
                  }
                />
                {formErrors.employeeBase && (
                  <p className="text-danger">{formErrors.employeeBase}</p>
                )}
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
              <button className="custom-btn  custom-test-btn" type="submit">
                <span> Check Score</span>
              </button>
            </div>
            {submissionStatus === "success" && (
              <p className="text-green-500">
                Form submitted successfully! Redirecting to score page.
              </p>
            )}
            {submissionStatus === "error" && (
              <p className="text-red-500">
                {formErrors.api || "An error occurred. Please try again."}
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResultSection;
