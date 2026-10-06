export type HealthCheckResponse = {
  status: string;
  service: string;
};

const API_URL = import.meta.env.VITE_API_URL;

export const checkHealth = async (): Promise<HealthCheckResponse> => {
  const response = await fetch(`${API_URL}/health`);

  if (!response.ok) {
    throw new Error(`Health check failed with status ${response.status}`);
  }

  return response.json() as Promise<HealthCheckResponse>;
};
