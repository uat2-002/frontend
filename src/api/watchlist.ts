import { getAccessToken } from '@/auth/tokenStorage';
import axios from 'axios';

export const addSeries = async (tmdbId: number) => {
  const token = getAccessToken();

  await axios.post(
    `${import.meta.env.VITE_API_URL}/user/series`, 
    { tmdbId }, 
    { 
      headers: { Authorization: `Bearer ${token}` },
    },
  );
};

export const getUserSeries = async () => {
  const token = getAccessToken();

  const tmdmIds = await axios.get(
    `${import.meta.env.VITE_API_URL}/user/series`, 
    { 
      headers: { Authorization: `Bearer ${token}` },
    },
  );

  return tmdmIds;
};

export const getMyList = async () => {
  const token = getAccessToken();

  const tmdmIds = await axios.get(
    `${import.meta.env.VITE_API_URL}/user/series-data`, 
    { 
      headers: { Authorization: `Bearer ${token}` },
    },
  );

  return tmdmIds;
};
