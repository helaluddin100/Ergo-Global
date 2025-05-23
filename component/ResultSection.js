import React, { useState } from "react";
import Select from "react-select";
import axios from "axios"; // Import axios
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResultSection = ({ totalScore }) => {
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [designation, setDesignation] = useState("");
  const [employeeBase, setEmployeeBase] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state

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
    setLoading(true); // Start loading

    let errors = {};
    if (!firstName.trim()) errors.firstName = "First Name is required";
    if (!lastName.trim()) errors.lastName = "Last Name is required";
    if (!email.trim()) errors.email = "Email is required";
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!companyName.trim()) errors.companyName = "Company Name is required";
    if (!location.trim()) errors.location = "Location is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setSubmissionStatus("error");
      toast.error("Please fill out all required fields.", { position: "top-right" });
      setLoading(false); // Stop loading
      return;
    }

    const formData = {
      firstName,
      lastName,
      email,
      companyName,
      location,
      designation,
      employeeBase,
      resultPoints: String(totalScore), // Convert totalScore to a string
    };

    try {
      // Send data to the first API (submitForm)
      const submitResponse = await axios.post('/api/submitForm', formData);

      // Send data to the second API (createContact in HubSpot)
      const contactResponse = await axios.post('/api/createContact', formData);

      if (submitResponse.data.success && contactResponse.data.success) {
        setSubmissionStatus("success");
        toast.success("Data submitted successfully!", { position: "top-right" });
        window.location.href = `/score?totalScore=${totalScore}`;
      } else {
        setSubmissionStatus("error");
        setFormErrors({ api: "Failed to submit data. Check the server." });
        toast.error("Failed to submit data. Please try again.", { position: "top-right" });
      }
    } catch (error) {
      console.error("API Error:", error);
      setSubmissionStatus("error");
      if (error.response) {
        setFormErrors({
          api: error.response.data.message || "An error occurred.",
        });
        toast.error("An error occurred: " + error.response.data.message, { position: "top-right" });
      } else if (error.request) {
        setFormErrors({ api: "No response from server." });
        toast.error("No response from server. Please check your connection.", { position: "top-right" });
      } else {
        setFormErrors({
          api: "Error setting up the request: " + error.message,
        });
        toast.error("Error setting up the request: " + error.message, { position: "top-right" });
      }
    } finally {
      setLoading(false); // Stop loading after the request is complete
    }
  };


  return (
    <div className="result-section">
      <div className="result-title">
        <h2>Thanks! We&apos;ve got your responses.</h2>
        <h2>Please enter your email to see your Ergonomics Risk score.</h2>
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
                <label htmlFor="employee">Team Size</label>
                <Select
                  classNamePrefix="custom-select"
                  options={options}
                  placeholder="Select your team size"
                  value={options.find(
                    (option) => option.value === employeeBase
                  )}
                  onChange={(selectedOption) =>
                    setEmployeeBase(selectedOption.value)
                  }
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
              <button className="custom-btn  custom-test-btn" type="submit">
                {loading ? <span>Loading...</span> : <span>Check Score</span>}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResultSection;
