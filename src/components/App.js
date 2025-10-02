import React, { useState } from "react";
import Step from "./Step.js";

const App = () => {
  const [index, setIndex] = useState(1);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    make: "",
    model: "",
    card_info: "",
    expiry_date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePrev = (index) => {
    setCurrentStep(index - 1);
  };
  const handleNext = (index) => {
    setCurrentStep(index + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div>
      <Step
        formData={formData}
        currentStep={currentStep}
        handleChange={handleChange}
        handlePrev={handlePrev}
        handleNext={handleNext}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;
