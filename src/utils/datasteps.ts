export const dataStepsData = [
  {
    title: "Dataset Overview",
    fields: [
      { key: "name", label: "Dataset Name", description: "The name of the dataset.", required: true },
      { key: "version_name", label: "Version Name", description: "The dataset version." },
      { key: "version_date", label: "Version Date", type: "date", description: "The date of this dataset version." },
      { key: "version_diff", label: "Version Differences", description: "Changes in this dataset version." },
      { key: "license", label: "License", description: "The license for distribution." },
      { key: "publisher", label: "Publisher", description: "The entity publishing the dataset." },
      { key: "legal_owners", label: "Legal Owners", description: "The legal owners of the dataset." },
      { key: "funding_sources", label: "Funding Sources", description: "Sources of funding for the dataset.", type: "textarea" },
    ],
  },
  {
    title: "Dataset Characteristics",
    fields: [
      { key: "number_of_entries", label: "Number of Entries", type: "number", description: "Total number of entries in the dataset." },
      { key: "format", label: "Data Format", description: "The format of the dataset." },
      { key: "attributes", label: "Attributes", description: "The attributes available in the dataset.", type: "textarea" },
      { key: "primary_intended_uses", label: "Primary Intended Uses", description: "The primary applications of this dataset.", type: "textarea"},
      { key: "limitations", label: "Limitations", description: "Known limitations of the dataset.", type: "textarea" },
      { key: "context", label: "Context", description: "Context in which this dataset is relevant.", type: "textarea"},
    ],
  },
  {
    title: "Collection and Origin",
    fields: [
      { key: "data_sources_and_collection_methods", label: "Data Sources and Collection Methods", description: "How the dataset was collected.", type: "textarea"},
      { key: "origin_and_collection", label: "Origin and Collection", description: "Where and how the dataset originated.", type: "textarea" },
      { key: "geographical_relevance", label: "Geographical Relevance", description: "The dataset's geographical relevance.", type: "textarea" },
      { key: "record_keeping_procedures", label: "Record Keeping Procedures", description: "How dataset records are maintained.", type: "textarea" },
      { key: "retention_period", label: "Retention Period", description: "The dataset retention period.", type: "textarea" },
      { key: "dataset_and_documentation_availability", label: "Dataset and Documentation Availability", description: "Availability of dataset and related documentation.", type: "textarea"},
    ],
  },
  {
    title: "Data Quality and Design",
    fields: [
      { key: "data_quality_summary", label: "Data Quality Summary", description: "Summary of dataset quality.", type: "textarea" },
      { key: "design_choices", label: "Design Choices", description: "Decisions made in dataset design.", type: "textarea" },
      { key: "transformations", label: "Transformations", description: "Data transformations applied.", type: "textarea" },
      { key: "tools_and_technologies_used", label: "Tools and Technologies Used", description: "Tools used in dataset processing.", type: "textarea" },
    ],
  },
  {
    title: "Bias and Ethical Considerations",
    fields: [
      { key: "bias_assessment", label: "Bias Assessment", description: "Assessment of dataset bias.", type: "textarea" },
      { key: "bias_mitigation", label: "Bias Mitigation", description: "Steps taken to mitigate bias.", type: "textarea" },
      { key: "outlier_detection", label: "Outlier Detection", description: "Methods for detecting outliers.", type: "textarea" },
      { key: "accuracy_validation", label: "Accuracy Validation", description: "Methods to validate dataset accuracy.", type: "textarea" },
      { key: "assessment_techniques", label: "Assessment Techniques", description: "Techniques used for dataset assessment.", type: "textarea" },
    ],
  },
  {
    title: "Regulatory Compliance and Governance",
    fields: [
      { key: "compliance_with_regulations", label: "Compliance with Regulations", description: "Regulatory compliance information.", type: "textarea"},
      { key: "anonymization_and_de_identification", label: "Anonymization and De-identification", description: "Anonymization techniques used.", type: "textarea"},
      { key: "data_minimization_and_purpose_limitation", label: "Data Minimization and Purpose Limitation", description: "Data minimization policies.", type: "textarea" },
      { key: "data_retention_and_wipe_out_policies", label: "Data Retention and Wipe-out Policies", description: "Retention and deletion policies.", type: "textarea" },
      { key: "data_storage_and_encryption", label: "Data Storage and Encryption", description: "Storage and encryption details.", type: "textarea" },
      { key: "incident_response_plan", label: "Incident Response Plan", description: "Plan for responding to data incidents.", type: "textarea" },
      { key: "auditability", label: "Auditability", description: "The dataset's auditability status.", type: "textarea" },
      { key: "audit_process", label: "Audit Process", description: "The dataset auditing process.", type: "textarea" },
      { key: "governance_structure_and_accountability", label: "Governance Structure and Accountability", description: "Details on governance and accountability measures.", type: "textarea" },
    ],
  },
  {
    title: "Ethical and Social Impact",
    fields: [
      { key: "potential_additional_applications", label: "Potential Additional Applications", description: "Other possible dataset applications.", type: "textarea" },
      { key: "potential_ethical_concerns", label: "Potential Ethical Concerns", description: "Ethical concerns associated with the dataset.", type: "textarea"},
      { key: "increased_representation_and_reduced_disparities", label: "Increased Representation and Reduced Disparities", description: "Steps taken to improve representation.", type: "textarea" },
      { key: "mitigated_risks", label: "Mitigated Risks", description: "Measures taken to mitigate risks.", type: "textarea" },
    ],
  },
];