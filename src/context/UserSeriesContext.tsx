import { addSeries, getUserSeries } from '@/api/watchlist';
import { showToast } from '@/lib/toast';
import axios from 'axios';
import { createContext, useContext, useEffect, useState, type Dispatch, type ReactNode, type SetStateAction} from 'react';
import { useAuth } from './AuthContext';

type UserSeriesContextType = {
  addedSeriesIds: number[],
  setAddedSeriesIds: Dispatch<SetStateAction<number[]>>,
  handleAddSeriesToMyList: (tmdbId: number) => Promise<void>,
}

const UserSeriesContext = createContext<UserSeriesContextType | null>(null);

export const UserSeriesProvider = ({ children }: { children: ReactNode }) => {
  const { isAuth } = useAuth();
  const [addedSeriesIds, setAddedSeriesIds] = useState<number[]>([]);

  const handleAddSeriesToMyList = async (tmdbId: number) => {
    try {
      await axios(`${import.meta.env.VITE_API_URL}/api/series/${tmdbId}`);
      await addSeries(tmdbId);
      setAddedSeriesIds(previousSeriesIds => [...previousSeriesIds, tmdbId]);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        showToast(`Error: ${error.response?.data?.error}`);
      } else {
        showToast(`Couldn't add series: ${error}`);
      }
    }
  };

  useEffect(() => {
    if (!isAuth) {
      setAddedSeriesIds([]);
      return;
    }

    const fetchUserSeries = async () => {
      try {
        const response = await getUserSeries();
        const data = response.data.tmdbIds;
        setAddedSeriesIds(data);
      } catch (error) {
        showToast(`${error}`);
      }
    };

    fetchUserSeries();
  }, [isAuth]);

  return <UserSeriesContext.Provider value={{ addedSeriesIds, setAddedSeriesIds, handleAddSeriesToMyList }}>{children}</UserSeriesContext.Provider>
}

export const useUserSeries = () => {
  const context = useContext(UserSeriesContext);

  if (context === null) {
    throw new Error('useUserSeries must be used within UserSeriesProvider');
  }

  return context;
};
