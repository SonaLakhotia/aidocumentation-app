import mongoose from "mongoose";

const AISystemSchema = new mongoose.Schema(
  {
    // Basic Info
    system_name: { type: String, required: true, trim: true, description: "Name of the AI system." },
    version_name: { type: String, description: "Name of the version." },
    version_date: { type: Date, required: true, description: "Date of release of the new version." },
    version_diff: { type: String, description: "Updates or changes from previous versions." },
    system_provider: { type: String, required: true, description: "Organization or entity providing the AI system." },

    // AI Models and Datasets
    ml_models: [{ type: mongoose.Schema.Types.ObjectId, ref: "ModelDocumentation", description: "ML models used in the AI system." }],
    used_datasets: [{ type: mongoose.Schema.Types.ObjectId, ref: "DatasetCard", description: "Datasets used in the AI system." }],
    used_ai_systems: [{ type: mongoose.Schema.Types.ObjectId, ref: "AISystem", description: "Other AI systems used as dependencies." }],

    // Purpose & Users
    intended_purpose: { type: String, description: "Intended purpose and scope of the AI system." },
    not_intended_for: { type: String, description: "Use cases the AI system is not intended for." },
    intended_users: { type: String, description: "Target users and expected interactions." },

    // Compliance & Standards
    high_risk_classification: { type: String, enum: ["Yes", "No"], description: "Is this AI system high risk?" },
    compliance: { type: String, description: "Relevant compliance requirements and industry standards." },
    certification_and_conformity_assessment: { type: String, description: "Certifications and conformity assessments." },

    // System Design
    model_architecture: { type: String, description: "Type of ML model and algorithms used." },
    data_flow: { type: String, description: "Overview of data inputs, processing, and outputs." },
    geographical_context: { type: String, description: "Location-specific adaptations." },
    hardware_requirements: { type: String, description: "Computational resources required." },
    software_dependencies: { type: String, description: "Software requirements, libraries, and tools." },
    operational_environment: { type: String, description: "Where and how the AI system is deployed." },

    // System Performance & Safety
    accuracy_metrics: { type: String, description: "Metrics used to measure accuracy." },
    system_robustness: { type: String, description: "Metrics used to assess robustness and cybersecurity." },
    robustness_measures: { type: String, description: "Steps to ensure robustness against errors." },
    instruction_for_use: { type: String, description: "How the AI system will be used." },
    human_machine_interface: { type: String, description: "Interaction points between AI system and users." },
    vulnerable_groups: { type: String, description: "Special considerations for specific groups like children." },
    feedback_loops: { type: String, description: "Mechanisms for ongoing improvement and bias prevention." },
    known_limitations: { type: String, description: "Circumstances affecting performance." },

    // Risk Management
    risk_identification: { type: String, description: "Known and foreseeable risks." },
    risk_assessment: { type: String, description: "Methods used to assess risks." },
    residual_risk: { type: String, description: "Assessment of remaining risks after mitigation." },
    mitigation_measures: { type: String, description: "Strategies to manage and minimize risks." },
    cybersecurity_controls: { type: String, description: "Security measures against threats." },
    testing_and_validation: { type: String, description: "Protocols for assessing and mitigating risks." },

    // Accountability & Transparency
    explainability: { type: String, description: "How the AI system explains its outputs." },
    log_mechanism: { type: String, description: "Method for logging system operations." },
    events_to_be_recorded: { type: String, description: "Specific events captured in logs." },
    traceability: { type: String, description: "Monitoring and auditing mechanisms." },
    version_history: { type: String, description: "Tracking changes and updates." },
    training_and_maintenance_requirements: { type: String, description: "Requirements for training and system maintenance." },
    document_availability: { type: String, description: "Where relevant AI system documents are available." },

    // Human Oversight
    mechanisms_for_oversight: { type: String, description: "Tools enabling human oversight." },
    oversight_responsibilities: { type: String, description: "Who is responsible for monitoring?" },
    preventing_over_reliance: { type: String, description: "Measures to prevent over-reliance." },
    intervention_capabilities: { type: String, description: "Options for human intervention." },

    // Societal & Ethical Considerations
    societal_impact: { type: String, description: "Potential societal harm or benefits." },
    human_ai_collaboration_assessment: { type: String, description: "How the AI system enhances human work." },
    human_job_displacement_assessment: { type: String, description: "Potential job displacement risks." },

    // Trustworthiness Score
    trustworthinessScore: { type: Number },
  },
  { timestamps: true }
);

export default mongoose.model("AISystem", AISystemSchema);
