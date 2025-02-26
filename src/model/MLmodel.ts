import mongoose from 'mongoose';

const ModelDocumentationSchema = new mongoose.Schema(
  {
    model_name: {
      type: String,
      required: true,
      trim: true,
      description: "Name of the ML model."
    },
    model_owner: {
      type: String,
      description: "Person or organization developing the ML model."
    },
    version_name: {
      type: String,
      description: "Name of the model version."
    },
    version_date: {
      type: Date,
      description: "Date of release of the new version."
    },
    version_diff: {
      type: String,
      description: "Updates or changes from previous versions."
    },
    purpose_and_scope: {
      type: String,
      description: "Intended use and applicable domains of the model."
    },
    intended_users: {
      type: String,
      description: "Target users and expected interactions with the model."
    },
    input_specifications: {
      type: String,
      description: "Input data format and type required by the model."
    },
    output_specifications: {
      type: String,
      description: "Formats and types of output produced by the model."
    },
    operational_environment: {
      type: String,
      description: "Technical deployment contexts of the model."
    },
    real_world_testing_and_validation: {
      type: String,
      description: "Details on real-world testing and validation."
    },
    license: {
      type: String,
      description: "License information for the ML model."
    },
    documentation_access: {
      type: String,
      description: "Links to model documentation, version history, and logs."
    },
    architecture_design: {
      type: String,
      description: "Description of model form and architecture."
    },
    training_objectives: {
      type: String,
      description: "Goals aimed for during training."
    },
    algorithm_choice: {
      type: String,
      description: "Algorithms used in the model."
    },
    training_data: {
      type: String,
      description: "Details of datasets used for training."
    },
    evaluation_data: {
      type: String,
      description: "Datasets used for performance assessment."
    },
    hyperparameters: {
      type: String,
      description: "Key hyperparameters used in training."
    },
    audits: {
      type: String,
      description: "Details concerning auditing procedures."
    },
    accuracy_metrics: {
      type: String,
      description: "Metrics used to quantify model accuracy."
    },
    model_explainability: {
      type: String,
      description: "Techniques for explaining model decisions."
    },
    tests_for_fairness_and_bias: {
      type: String,
      description: "Fairness tests and bias assessments."
    },
    risk_identification_and_mitigation: {
      type: String,
      description: "Potential risks and mitigation strategies."
    },
    human_oversight: {
      type: String,
      description: "Role of human intervention in model operation."
    },
    stakeholder_accountability: {
      type: String,
      description: "Responsibilities of stakeholders."
    },
    robustness_tests: {
      type: String,
      description: "Tests for robustness against noisy data."
    },
    performance_testing: {
      type: String,
      description: "Protocols for validating model performance."
    },
    feedback_collection: {
      type: String,
      description: "Methods for collecting stakeholder feedback."
    },
    feedback_integration: {
      type: String,
      description: "Integration of stakeholder feedback into development."
    },
    communication_of_updates: {
      type: String,
      description: "How updates and documentation changes are communicated."
    },
    societal_impact_assessment: {
      type: String,
      description: "Potential social impacts of the model."
    },
    stakeholder_engagement: {
      type: String,
      description: "Engagement with stakeholders for ethical deployment."
    },
    transparencyScore: { type: Number}
  },
  { timestamps: true }
);

export default mongoose.model("ModelDocumentation", ModelDocumentationSchema);
