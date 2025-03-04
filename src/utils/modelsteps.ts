export const modelStepsData = [
  {
    title: "Model Overview",
    fields: [
      { key: "model_name", label: "Model Name", description: "Name of the ML model.", required: true },
      { key: "model_owner", label: "Model Owner", description: "Person or organization developing the ML model."},
      { key: "license", label: "License", description: "License information for the ML model." },
      { key: "documentation_access", label: "Documentation Access", description: "Links to model documentation, version history, and logs." }
    ]
  },
  {
    title: "Version Details",
    fields: [
      { key: "version_name", label: "Version Name", description: "Name of the model version." },
      { key: "version_date", label: "Version Date", type: "date", description: "Date of release of the new version." },
      { key: "version_diff", label: "Version Differences", description: "Updates or changes from previous versions." }
    ]
  },
  {
    title: "Purpose and Usage",
    fields: [
      { key: "purpose_and_scope", label: "Purpose and Scope", description: "Intended use and applicable domains of the model.", type: "textarea" },
      { key: "intended_users", label: "Intended Users", description: "Target users and expected interactions with the model.", type: "textarea" },
      { key: "operational_environment", label: "Operational Environment", description: "Technical deployment contexts of the model.", type: "textarea" },
      { key: "input_specifications", label: "Input Specifications", description: "Input data format and type required by the model.", type: "textarea" },
      { key: "output_specifications", label: "Output Specifications", description: "Formats and types of output produced by the model.", type: "textarea" }
    ]
  },
  {
    title: "Model Design and Training",
    fields: [
      { key: "architecture_design", label: "Architecture Design", description: "Description of model form and architecture.", type: "textarea" },
      { key: "training_objectives", label: "Training Objectives", description: "Goals aimed for during training.", type: "textarea" },
      { key: "algorithm_choice", label: "Algorithm Choice", description: "Algorithms used in the model.", type: "textarea" },
      { key: "training_data", label: "Training Data", description: "Details of datasets used for training.", type: "textarea" },
      { key: "evaluation_data", label: "Evaluation Data", description: "Datasets used for performance assessment.", type: "textarea" },
      { key: "hyperparameters", label: "Hyperparameters", description: "Key hyperparameters used in training.", type: "textarea" }
    ]
  },
  {
    title: "Testing and Validation",
    fields: [
      { key: "real_world_testing_and_validation", label: "Real-World Testing and Validation", description: "Details on real-world testing and validation.", type: "textarea" },
      { key: "accuracy_metrics", label: "Accuracy Metrics", description: "Metrics used to quantify model accuracy.", type: "textarea" },
      { key: "robustness_tests", label: "Robustness Tests", description: "Tests for robustness against noisy data.", type: "textarea" },
      { key: "performance_testing", label: "Performance Testing", description: "Protocols for validating model performance.", type: "textarea" }
    ]
  },
  {
    title: "Fairness, Ethics and Risks",
    fields: [
      { key: "model_explainability", label: "Model Explainability", description: "Techniques for explaining model decisions.", type: "textarea" },
      { key: "tests_for_fairness_and_bias", label: "Fairness and Bias Tests", description: "Fairness tests and bias assessments.", type: "textarea" },
      { key: "risk_identification_and_mitigation", label: "Risk Identification and Mitigation", description: "Potential risks and mitigation strategies.", type: "textarea" },
      { key: "human_oversight", label: "Human Oversight", description: "Role of human intervention in model operation.", type: "textarea" },
      { key: "stakeholder_accountability", label: "Stakeholder Accountability", description: "Responsibilities of stakeholders.", type: "textarea" },
      { key: "societal_impact_assessment", label: "Societal Impact Assessment", description: "Potential social impacts of the model.", type: "textarea" },
      { key: "stakeholder_engagement", label: "Stakeholder Engagement", description: "Engagement with stakeholders for ethical deployment.", type: "textarea" }
    ]
  },
  {
    title: "Auditing and Feedback",
    fields: [
      { key: "audits", label: "Audits", description: "Details concerning auditing procedures." },
      { key: "feedback_collection", label: "Feedback Collection", description: "Methods for collecting stakeholder feedback." , type: "textarea"},
      { key: "feedback_integration", label: "Feedback Integration", description: "Integration of stakeholder feedback into development.", type: "textarea" },
      { key: "communication_of_updates", label: "Communication of Updates", description: "How updates and documentation changes are communicated.", type: "textarea" }
    ]
  }
];