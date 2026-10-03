import { addSeries, getUserSeries } from '@/api/watchlist';
import { showToast } from '@/lib/toast';
import axios from 'axios';
import { 
  createContext, 
  useContext, 
  useEffect, 
  useState, 
  type Dispatch, 
  type ReactNode, 
  type SetStateAction,
} from 'react';
import { useAuth } from '@/context/AuthContext';

type UserSeriesContextType = {
  addedSeriesIds: number[],
  setAddedSeriesIds: Dispatch<SetStateAction<number[]>>,
  handleAddSeriesToMyList: (tmdbId: number) => Promise<void>,
}

const UserSeriesContext = createContext<UserSeriesContextType | null>(null);

export const UserSeriesProvider = ({ children }: { children: ReactNode }) => {
  const { isAuth } = useAuth();
  const [addedSeriesIds, setAddedSeriesIds] = useState<number[]>([]);
  const [previousIsAuth, setPreviousIsAuth] = useState(isAuth);

  if (previousIsAuth !== isAuth) {
    setPreviousIsAuth(isAuth);
    setAddedSeriesIds([]);
  }

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
    if (!isAuth) return;

    let ignore = false;

    const fetchUserSeries = async () => {
      try {
        const response = await getUserSeries();

        if (!ignore) {
          setAddedSeriesIds(response.data.tmdbIds);
        }
      } catch (error) {
        if (!ignore) {
          showToast(`${error}`);
        }
      }
    };

    fetchUserSeries();

    return () => {
      ignore = true;
    };
  }, [isAuth]);

  return (
    <UserSeriesContext.Provider 
      value={{ addedSeriesIds, setAddedSeriesIds, handleAddSeriesToMyList }}
    >
      {children}
    </UserSeriesContext.Provider>
  );
};

export const useUserSeries = () => {
  const context = useContext(UserSeriesContext);

  if (context === null) throw new Error('useUserSeries must be used within UserSeriesProvider');

  return context;
};
