import { getAccessToken } from '@/auth/tokenStorage';
import axios from 'axios';

export const addSeries = async (tmdbId: number) => {
  const token = getAccessToken();

  // ToDo: add refresh from auth and error to user
  if(!token) {
    throw new Error('Log in to add a series');
  }

  await axios.post(
    `${import.meta.env.VITE_API_URL}/user/series`, 
    { tmdbId }, 
    { 
      headers: { Authorization: `Bearer ${token}` },
    },
  );
};