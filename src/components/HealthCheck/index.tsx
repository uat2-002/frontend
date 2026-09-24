import { checkHealth } from '@/api/checkHealth';
import { useEffect, useState } from 'react';

export const HealthCheck = () => {
  const [data, setData] = useState<string>('Checking health...');

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await checkHealth();
        setData(`${response.service}: ${response.status}`);
      } catch (error) {
        console.error('Error checking health:', error);
        setData('Health check failed');
      }
    };

    void getData();
  }, []);

  return <>Series Tracker ({data})</>;
};
