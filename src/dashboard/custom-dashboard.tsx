import React, { useEffect, useState } from "react";
import {
  Box,
  H2,
  Text,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@adminjs/design-system";
import { useTranslation } from "adminjs";

interface AIModel {
  id: string;
  model_name: string;
}

interface Dataset {
  id: string;
  name: string;
}

interface AISystem {
  id: string;
  system_name: string;
  version_date: string;
  trust_score: string,
  ml_models: AIModel[];
  used_datasets: Dataset[];
}

const Dashboard: React.FC = () => {
  const { translateMessage } = useTranslation();
  const [aiSystems, setAiSystems] = useState<AISystem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); 
  const [loading, setLoading] = useState(true);
  const perPage = 7; 

  useEffect(() => {
    const fetchAISystems = async () => {
      try {
        const res = await fetch(`/admin/api/resources/AISystem/actions/list?page=${currentPage}&perPage=${perPage}`);
        const data = await res.json();

        setAiSystems(data.records);
        setTotalPages(data.totalPages || 1); // Ensure totalPages is at least 1
        console.log("AI Systems API Response:", data);

        setAiSystems(
          data.records.map((system: any) => ({
          id: system.id,
          system_name: system.params.system_name,
          version_date: system.params.version_date,
            trust_score: system.params.trustworthinessScore,
          ml_models: Object.keys(system.params)
            .filter((key) => key.startsWith("ml_models."))
            .map((key) => ({
              id: system.populated[key]?.id || "",
              model_name: system.populated[key]?.params?.model_name || "Unknown Model",
            })),

          // Extract datasets correctly
          used_datasets: Object.keys(system.params)
            .filter((key) => key.startsWith("used_datasets."))
            .map((key) => ({
              id: system.populated[key]?.id || "",
              name: system.populated[key]?.params?.name || "Unknown Dataset",
            })),
          }))
        );
        setTotalPages(Math.ceil(data.meta.total / perPage));
      } catch (error) {
        console.error("Error fetching AI systems:", error);
      }finally{
        setLoading(false);
      }
    };

    fetchAISystems();
  }, [currentPage]); // Refetch only on page change

  return (
    <Box bg="white" p="lg">
      <Text textAlign="center" color="grey100" mb={1}>
        <H2 fontWeight="bold" color="grey100">AI/ML System Documentation</H2>
          </Text>
      <Box display="flex" flexDirection="column" alignItems="center">
      {loading ? (  
        <Text textAlign="center" color="grey60">Loading AI System Information...</Text>
        ) : aiSystems.length === 0 ? ( 
        <Text textAlign="center" color="grey60">No AI Systems Found.</Text>
        ) : 
        (
        <Box width="95%" bg="white" borderRadius="8px" boxShadow="sm" p="md">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell fontWeight="bold" bg="primary40">AI System</TableCell>
                <TableCell fontWeight="bold" bg="primary40">Datasets Used</TableCell>
                <TableCell fontWeight="bold" bg="primary40">ML Models Used</TableCell>
                <TableCell fontWeight="bold" bg="primary40">Trustworthiness Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {aiSystems.map((system) => (
                <TableRow key={system.id}>
                  <TableCell fontWeight="bold">
                    <Text as="a" href={`/admin/resources/AISystem/records/${system.id}/show`} color="primary100">
                    {system.system_name}
                  </Text>
                  </TableCell>

                  {/* Datasets Used */}
                  <TableCell>
                    {system.used_datasets.length > 0 ? (
                      <ul>
                        {system.used_datasets.map((dataset) => (
                          <li key={dataset.id}>
                            <Text as="a" href={`/admin/resources/DatasetCard/records/${dataset.id}/show`} color="primary100">
                              {dataset.name}
                        </Text>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <Text color="grey60">No datasets linked</Text>
                    )}
                  </TableCell>

                  {/* ML Models Used */}
                  <TableCell>
                    {system.ml_models.length > 0 ? (
                      <ul>
                        {system.ml_models.map((model) => (
                          <li key={model.id}>
                            <Text as="a" href={`/admin/resources/ModelDocumentation/records/${model.id}/show`} color="primary100">
                              {model.model_name}
                        </Text>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <Text color="grey60">No models linked</Text>
                    )}
                  </TableCell>
                  <TableCell fontWeight="bold">
                    <Text color="primary100">
                      {`${system.trust_score} %`}
                    </Text>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          {/* Pagination Below Table */}
          <Box display="flex" justifyContent="center">
            <Pagination
              page={currentPage}
              perPage={perPage}
              total={totalPages * perPage}
              onChange={setCurrentPage}
            />
          </Box>
        </Box>
        )}
      </Box>
    </Box>
  );
};

export default Dashboard;
