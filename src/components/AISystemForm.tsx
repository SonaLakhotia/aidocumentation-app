import React, { useState, useEffect } from "react";
import { Stepper, Step } from "react-form-stepper";
import { Box, Button, Input, Label, TextArea, Select } from "@adminjs/design-system";
import { stepsData } from "../utils/aisteps.js";
import { calculateTrustworthyScore } from "../utils/trustworthiness.js";

const FormStep = ({ values, handleChange, stepFields, errors, options }) => (
  <Box>
    {stepFields.map(({ key, label, type, description }) => (
      <Box key={key} mb="20px">
        <Label>{label}</Label>
        {description && <Box fontSize="sm" color="grey80" mb="sm">{description}</Box>}

        {type === "textarea" ? (
          <TextArea name={key} value={values[key] || ""} onChange={(e) => handleChange(key, e.target.value)} width="100%" />
        ) : type === "multi-select" ? (
          <Select
            name={key}
            value={options[key]?.filter((option) => values[key]?.includes(option.value)) || []}
            onChange={(selected) => handleChange(key, selected.map((s) => s.value))}
            options={options[key] || []}
            isMulti
          />
        ) : type === "select" ? (
          <Select
            name={key}
            value={options[key]?.find((option) => option.value === values[key]) || ""}
            onChange={(selected) => handleChange(key, selected ? selected.value : "")}
            options={options[key] || []}
          />
        ) : (
          <Input name={key} value={values[key] || ""} onChange={(e) => handleChange(key, e.target.value)} type={type || "text"} width="100%" />
        )}

        {errors[key] && <Box color="red" fontSize="sm">{errors[key]}</Box>}
      </Box>
    ))}
  </Box>
);



const AISystemForm = ({ action }) => {
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState({});
  const [options, setOptions] = useState({});

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const [modelsRes, datasetsRes, aiSystemsRes] = await Promise.all([
          fetch("/admin/api/resources/ModelDocumentation/actions/list"),
          fetch("/admin/api/resources/DatasetCard/actions/list"),
          fetch("/admin/api/resources/AISystem/actions/list"),
        ]);

        const modelsData = await modelsRes.json();
        const datasetsData = await datasetsRes.json();
        const aiSystemsData = await aiSystemsRes.json();

        console.log("Fetched datasets:", datasetsData);
        console.log("Fetched models:", modelsData);

        setOptions({
          ml_models: modelsData.records.map(m => ({
            value: m.id,
            label: m.params.model_name || `Unnamed Model (${m.id})`,
          })),
          used_datasets: datasetsData.records.map(d => ({
            value: d.id,
            label: d.params.name || `Unnamed Dataset (${d.id})`,
          })),
          used_ai_systems: aiSystemsData.records.map(a => ({
            value: a.id,
            label: a.params.system_name || `Unnamed AI System (${a.id})`,
          })),
        });
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchOptions();
  }, []);

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateFields = () => {
    const newErrors = {};

    stepsData.forEach(step => {
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
  
    stepsData[currentStep].fields.forEach(field => {
      if (field.required && !formData[field.key]) {
        newErrors[field.key] = `${field.label} is required`;
      }
    });
  
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleSubmit = async () => {
    if (!validateFields()) return;
  
    const trustworthinessScore = calculateTrustworthyScore(stepsData, formData);
    console.log(`Trustworthiness Score: ${trustworthinessScore}%`);
  
    try {
      const response = await fetch(`/admin/api/resources/${action.resourceId}/actions/${action.name}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ payload: formData, trustworthinessScore}),
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
        {stepsData.map((step, index) => (
          <Step key={index} label={step.title} onClick={() => setCurrentStep(index)} />
        ))}
      </Stepper>

      <Box mt="20px">
        {currentStep < stepsData.length ? (
          <FormStep values={formData} handleChange={handleChange} stepFields={stepsData[currentStep].fields} errors={errors} options={options} />
        ) : (
          <Button onClick={handleSubmit}>Submit</Button>
        )}
      </Box>

      <Box mt="20px" display="flex" justifyContent="space-between">
        <Button onClick={() => setCurrentStep(prev => prev - 1)} disabled={currentStep === 0}>
          Back
        </Button>
        <Button onClick={handleNext} disabled={currentStep >= stepsData.length}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default AISystemForm;