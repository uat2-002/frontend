import { showToast } from '@/lib/toast';
import type { SeriesItem } from '@/types/seriesType';
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


type TopSeriesType = {
  error: string | null,
  loading: boolean,
  // setError: Dispatch<SetStateAction<string | null>>,
  // setLoading: Dispatch<SetStateAction<boolean>>,
  topSeriesList: SeriesItem[],
  
}

const TopSeriesContext = createContext<TopSeriesType | null>(null);

export const TopSeriesProvider = ({ children }: { children: ReactNode }) => {
  const [topSeriesList, setTopSeriesList] = useState<SeriesItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        setLoading(true);
        setError(null);
        const API_URL = import.meta.env.VITE_API_URL;
        const response = await axios.get(`${API_URL}/api/series`);
        const data = Array.isArray(response.data) ? response.data : response.data.data || [];
        setTopSeriesList(data);
      } catch {
        setError('Error loading series');
      } finally {
        setLoading(false);
      }
    };

    fetchSeries();
  }, []);
  
  return (
    <TopSeriesContext.Provider 
      value={{ error, loading, topSeriesList }}
    >
      {children}
    </TopSeriesContext.Provider>
  );
};

export const useTopSeries = () => {
  const context = useContext(TopSeriesContext);

  if (context === null) throw new Error('useTopSeries must be used within TopSeriesContext');

  return context;
};