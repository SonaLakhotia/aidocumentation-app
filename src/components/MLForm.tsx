import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import { Box, Button, Input, Label, TextArea } from "@adminjs/design-system";
import { modelStepsData } from "../utils/modelsteps.js";
import { calculateTrustworthyScore } from "../utils/trustworthiness.js";

const FormStep = ({ values, handleChange, stepFields, errors }) => (
  <Box>
    {stepFields.map(({ key, label, type, description }) => (
      <Box key={key} mb="20px">
        <Label>{label}</Label>
        {description && <Box fontSize="sm" color="grey80" mb="sm">{description}</Box>}
        {type === "textarea" ? (
          <TextArea name={key} value={values[key] || ""} onChange={handleChange} width="100%" />
        ) : (
          <Input name={key} value={values[key] || ""} onChange={handleChange} type={type || "text"} width="100%" />
        )}
        {errors[key] && <Box color="red" fontSize="sm">{errors[key]}</Box>}
      </Box>
    ))}
  </Box>
);

const MLForm = ({ action }) => {
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateFields = () => {
    const newErrors = {};
  
    modelStepsData.forEach(step => {
      step.fields.forEach(field => {
        if (field.required && !formData[field.key]) {
          newErrors[field.key] = `${field.label} is required`;
        }
      });
    });
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    const newErrors = {};
  
    modelStepsData[currentStep].fields.forEach(field => {
      if (field.required && !formData[field.key]) {
        newErrors[field.key] = `${field.label} is required`;
      }
    });
  
    setErrors(newErrors);
  
    // If no errors, proceed to the next step
    if (Object.keys(newErrors).length === 0) {
      setCurrentStep(prev => prev + 1);
    }
  };
  

  const handleSubmit = async () => {
    if (!validateFields()) return;
  
    const transparencyScore = calculateTrustworthyScore(modelStepsData, formData);
  
    try {
      const response = await fetch(`/admin/api/resources/${action.resourceId}/actions/${action.name}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ payload: formData, transparencyScore }),
      });
  
      if (response.ok) {
        console.log("Form submitted successfully");
        window.location.href = `/admin/resources/${action.resourceId}`;
      } else {
        console.error("Submission error", await response.json());
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  
  return (
    <Box variant="white">
      <Stepper activeStep={currentStep}>
        {modelStepsData.map((step, index) => <Step key={index} label={step.title}  onClick={() => setCurrentStep(index)} />)}
      </Stepper>
      <Box mt="20px">
        {currentStep < modelStepsData.length ? (
          <FormStep values={formData} handleChange={handleChange} stepFields={modelStepsData[currentStep].fields} errors={errors} />
        ) : (
          <Button onClick={handleSubmit}>Submit</Button>
        )}
      </Box>
      <Box mt="20px" display="flex" justifyContent="space-between">
        <Button onClick={() => setCurrentStep((prev) => prev - 1)} disabled={currentStep === 0}>Back</Button>
        <Button onClick={handleNext} disabled={currentStep >= modelStepsData.length}>Next</Button>
        {/* <Button onClick={() => setCurrentStep((prev) => prev + 1)} disabled={currentStep >= stepsData.length}>Next</Button> */}
      </Box>
    </Box>
  );
};

export default MLForm;