import mongoose from 'mongoose';

const DatasetCardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      description: "The name of the dataset."
    },
    version_name: {
      type: String,
      trim: true,
      description: "The dataset version."
    },
    version_date: {
      type: Date,
      description: "The date of this dataset version."
    },
    version_diff: {
      type: String,
      trim: true,
      description: "The differences in this version."
    },
    license: {
      type: String,
      trim: true,
      description: "The license for distribution."
    },
    data_sources_and_collection_methods: {
      type: String,
      trim: true,
      description: "Data sources and collection methods."
    },
    number_of_entries: {
      type: Number,
      description: "Total number of entries in the dataset."
    },
    attributes: {
      type: String,
      trim: true,
      description: "Attributes of the dataset."
    },
    format: {
      type: String,
      trim: true,
      description: "The format of the dataset."
    },
    primary_intended_uses: {
      type: String,
      trim: true,
      description: "Primary intended uses of the dataset."
    },
    limitations: {
      type: String,
      trim: true,
      description: "Known limitations of the dataset."
    },
    context: {
      type: String,
      trim: true,
      description: "Context in which the dataset was created."
    },
    geographical_relevance: {
      type: String,
      trim: true,
      description: "Geographical relevance of the dataset."
    },
    potential_additional_applications: {
      type: String,
      trim: true,
      description: "Other possible applications of the dataset."
    },
    potential_ethical_concerns: {
      type: String,
      trim: true,
      description: "Ethical concerns related to the dataset."
    },
    legal_owners: {
      type: String,
      trim: true,
      description: "Legal owners of the dataset."
    },
    funding_sources: {
      type: String,
      trim: true,
      description: "Sources of funding for the dataset."
    },
    publisher: {
      type: String,
      trim: true,
      description: "The entity publishing the dataset."
    },
    design_choices: {
      type: String,
      trim: true,
      description: "Design choices made in dataset creation."
    },
    data_quality_summary: {
      type: String,
      trim: true,
      description: "Summary of dataset quality."
    },
    dataset_and_documentation_availability: {
      type: String,
      trim: true,
      description: "Where the dataset and documentation are available."
    },
    origin_and_collection: {
      type: String,
      trim: true,
      description: "Dataset origin and collection details."
    },
    transformations: {
      type: String,
      trim: true,
      description: "Transformations applied to the dataset."
    },
    tools_and_technologies_used: {
      type: String,
      trim: true,
      description: "Tools and technologies used in dataset processing."
    },
    record_keeping_procedures: {
      type: String,
      trim: true,
      description: "Procedures for keeping dataset records."
    },
    retention_period: {
      type: String,
      trim: true,
      description: "The dataset retention period."
    },
    auditability: {
      type: String,
      trim: true,
      description: "Auditability of the dataset."
    },
    audit_process: {
      type: String,
      trim: true,
      description: "Processes for dataset auditing."
    },
    governance_structure_and_accountability: {
      type: String,
      trim: true,
      description: "Governance and accountability of the dataset."
    },
    bias_assessment: {
      type: String,
      trim: true,
      description: "Assessment of dataset bias."
    },
    bias_mitigation: {
      type: String,
      trim: true,
      description: "Measures taken to mitigate bias."
    },
    outlier_detection: {
      type: String,
      trim: true,
      description: "Methods for detecting outliers."
    },
    accuracy_validation: {
      type: String,
      trim: true,
      description: "Validation of dataset accuracy."
    },
    assessment_techniques: {
      type: String,
      trim: true,
      description: "Techniques used for dataset assessment."
    },
    compliance_with_regulations: {
      type: String,
      trim: true,
      description: "Regulatory compliance information."
    },
    anonymization_and_de_identification: {
      type: String,
      trim: true,
      description: "Processes for anonymization and de-identification."
    },
    data_minimization_and_purpose_limitation: {
      type: String,
      trim: true,
      description: "Data minimization and usage restrictions."
    },
    data_retention_and_wipe_out_policies: {
      type: String,
      trim: true,
      description: "Policies for data retention and deletion."
    },
    data_storage_and_encryption: {
      type: String,
      trim: true,
      description: "Dataset storage and encryption details."
    },
    incident_response_plan: {
      type: String,
      trim: true,
      description: "Plan for responding to data incidents."
    },
    increased_representation_and_reduced_disparities: {
      type: String,
      trim: true,
      description: "Efforts to improve representation and reduce disparities."
    },
    mitigated_risks: {
      type: String,
      trim: true,
      description: "Measures taken to mitigate risks."
    },
    transparencyScore: {
      type: Number
    }
  },
  { timestamps: true }
);

export default mongoose.model("DatasetCard", DatasetCardSchema);
