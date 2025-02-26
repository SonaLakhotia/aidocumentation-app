export const stepsData = [
  {
      title: "System Identification",
      fields: [
        { key: "system_name", label: "System Name", description: "Name of the AI system.", required: true  },
        { key: "version_name", label: "Version Name", description: "Name of the version." },
        { key: "version_date", label: "Version Date", type: "date", description: "Date of release of the new version.", required: true},
        { key: "version_diff", label: "Version Differences", description: "Updates or changes from previous versions." },
        { key: "system_provider", label: "System Provider", description: "Organization or entity providing the AI system.", required: true },
      ],
    },
    {
      title: "AI Models and Datasets",
      fields: [
        {
          key: "ml_models",
          label: "ML Models Used",
          type: "multi-select",
          description: "Select ML models used in the system.",
        },
        {
          key: "used_datasets",
          label: "Datasets Used",
          type: "multi-select",
          description: "Select datasets used in the AI system.",
        },
        {
          key: "used_ai_systems",
          label: "AI Systems Used",
          type: "multi-select",
          description: "Select other AI systems used as dependencies.",
        },
      ],
    },
    {
      title: "Purpose and Scope",
      fields: [
        { key: "intended_purpose", label: "Intended Purpose", description: "Intended purpose and scope of the AI system.", type: "textarea" },
        { key: "not_intended_for", label: "Not Intended For", description: "Use cases the AI system is not intended for.", type: "textarea" },
        { key: "intended_users", label: "Intended Users", description: "Target users and expected interactions.", type: "textarea" },
      ],
    },
    {
      title: "Compliance and Standards",
      fields: [
        { key: "high_risk_classification", label: "High Risk Classification", description: "Indicates if the AI system is classified as high risk." },
        { key: "compliance", label: "Compliance", description: "Relevant compliance requirements and industry standards.", type: "textarea" },
        { key: "certification_and_conformity_assessment", label: "Certification and Conformity Assessment", description: "Certifications and conformity assessments for the system.", type: "textarea" },
      ],
    },
    {
      title: "System Design",
      fields: [
        { key: "model_architecture", label: "Model Architecture", description: "Information on the type of ML model and algorithms used.", type: "textarea" },
        { key: "data_flow", label: "Data Flow", description: "Details on the overview of data inputs, processing, and outputs within the AI system.", type: "textarea" },
        { key: "geographical_context", label: "Geographical Context", description: "Details on any location-specific or regional adaptations made to the AI system.", type: "textarea" },
        { key: "hardware_requirements", label: "Hardware Requirements", description: "Details of computational resources and hardware specifications required for the AI system.", type: "textarea" },
        { key: "software_dependencies", label: "Software Dependencies", description: "Details of software requirements, libraries, and tools used in the AI system." , type: "textarea"},
        { key: "operational_environment", label: "Operational Environment", description: "Description of where and how the AI system will be deployed.", type: "textarea" },
      ],
    },
    {
      title: "System Performance and Safety",
      fields: [
        { key: "accuracy_metrics", label: "Accuracy Metrics", description: "Details on metrics used to measure the AI system’s accuracy, including thresholds for proper working." , type: "textarea"},
        { key: "system_robustness", label: "System Robustness", description: "Information on metrics used to assess the robustness and cybersecurity of the AI system.", type: "textarea" },
        { key: "robustness_measures", label: "Robustness Measures", description: "Information on steps taken to ensure that the AI system operates robustly against errors or changes in the environment.", type: "textarea" },
        { key: "instruction_for_use", label: "Instruction for Use", description: "Description of how the AI system will be used by its intended users.", type: "textarea" },
        { key: "human_machine_interface", label: "Human-Machine Interface", description: "Details on the interaction points between the AI system and its users.", type: "textarea" },
        { key: "vulnerable_groups", label: "Vulnerable Groups", description: "Information on special considerations for specific groups such as children or other vulnerable populations when interacting with the AI system.", type: "textarea" },
        { key: "feedback_loops", label: "Feedback Loops", description: "Information on feedback mechanisms, including user reports, automated monitoring, and post-market surveillance, to prevent bias and ensure ongoing improvement of the AI system.", type: "textarea" },
        { key: "known_limitations", label: "Known Limitations", description: "Details on known or foreseeable circumstances that may affect the performance of the AI system.", type: "textarea"},
      ],
    },
    {
      title: "Risk Management",
      fields: [
        { key: "risk_identification", label: "Risk Identification", description: "Details on the known and foreseeable risks that the AI system may pose to health, safety, and fundamental rights.", type: "textarea" },
        { key: "risk_assessment", label: "Risk Assessment", description: "Details on the metrics or methods used to estimate and assess the identified risks associated with the AI system.", type: "textarea" },
        { key: "residual_risk", label: "Residual Risk", description: "Details on the assessment of acceptable residual risks after mitigation measures have been implemented.", type: "textarea" },
        { key: "mitigation_measures", label: "Mitigation Measures", description: "An overview of the strategies, measures, and oversight mechanisms implemented to manage and minimize the identified and emergent risks associated with the AI system.", type: "textarea" },
        { key: "cybersecurity_controls", label: "Cybersecurity Controls", description: "Information on the cybersecurity measures implemented to protect the AI system from tampering, data poisoning, and adversarial attacks.", type: "textarea" },
        { key: "testing_and_validation", label: "Testing and Validation", description: "Details on testing protocols, including real-world scenarios, designed to assess and mitigate the potential risks associated with the AI system.", type: "textarea" },
      ],
    },
    {
      title: "Accountability and Transparency",
      fields: [
        { key: "explainability", label: "Explainability", description: "The degree to which the AI system can explain its output to its users, providing insights into its decision-making processes.", type: "textarea" },
        { key: "log_mechanism", label: "Log Mechanism", description: "Description of the method of automated logging of the AI system’s operations, capturing relevant events and data for monitoring and auditing purposes.", type: "textarea" },
        { key: "events_to_be_recorded", label: "Events to be Recorded", description: "Information on the specific events that are captured by the logging mechanism, such as timestamps, data inputs, user interactions, and system outputs.", type: "textarea"},
        { key: "traceability", label: "Traceability", description: "Information on how the logs facilitate post-market monitoring, auditing, and risk management of the AI system by providing a traceable record of its operations.", type: "textarea" },
        { key: "version_history", label: "Version History", description: "Information on how changes and updates made to the AI system are tracked and documented, ensuring a clear record of its evolution over time.", type: "textarea" },
        { key: "training_and_maintenance_requirements", label: "Training and Maintenance Requirements", description: "Information regarding the training requirements for individuals involved in deploying and maintaining the AI system, as well as the recommended maintenance schedules.", type: "textarea" },
        { key: "document_availability", label: "Document Availability", description: "Information on where documents related to the AI system, such as instructions for use, updates, and logs, are available to relevant stakeholders.", type: "textarea" },
      ],
    },
    {
      title: "Human Oversight",
      fields: [
        { key: "mechanisms_for_oversight", label: "Mechanisms for Oversight", description: "Details on the tools and interfaces that allow for human oversight during the AI system’s use, enabling monitoring, intervention, and control.", type: "textarea" },
        { key: "oversight_responsibilities", label: "Oversight Responsibilities", description: "Information on the accountability framework for human oversight, specifying who is responsible for monitoring the AI system and their roles in ensuring its safe and ethical operation.", type: "textarea"},
        { key: "preventing_over_reliance", label: "Preventing Over-Reliance", description: "Measures taken to prevent over-reliance on the AI system’s outputs, encouraging critical thinking and human judgment in decision-making processes.", type: "textarea"},
        { key: "intervention_capabilities", label: "Intervention Capabilities", description: "Details on the capabilities for human intervention in the AI system’s operation, such as stop buttons, override mechanisms, or manual control options, to ensure safety and address unexpected situations." , type: "textarea"},
      ],
    },
    {
      title: "Societal and Ethical Considerations",
      fields: [
        { key: "societal_impact", label: "Societal Impact", description: "Details on whether the AI system poses any potential harm or threat to society, considering its impact on various social groups and communities.", type: "textarea"},
        { key: "human_ai_collaboration_assessment", label: "Human-AI Collaboration Assessment", description: "Details on how the AI system is designed to enhance the working capability of humans, promoting collaboration and augmentation rather than complete replacement.", type: "textarea" },
        { key: "human_job_displacement_assessment", label: "Human Job Displacement Assessment", description: "An assessment of the potential for the AI system to surpass human efficiency and replace human workers in certain tasks, considering the implications for employment and the workforce.", type: "textarea" },
      ],
    }
];
