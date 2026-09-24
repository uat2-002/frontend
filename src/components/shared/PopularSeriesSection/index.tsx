import { useEffect, useState } from 'react';
import { SearchResultCard } from '@/components/shared/SearchResultCard';

const API_URL = import.meta.env.VITE_API_URL;

export const PopularSeriesSection = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPopularSeries() {
      try {
        const response = await fetch(`${API_URL}/api/series`);
        const data = await response.json();

        if (!response.ok) {
          setError(data.error || 'Could not reach the API');
          return;
        }

        setData(data.results);
      } catch {
        setError('Could not reach the API');
      }
    }

    fetchPopularSeries();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="grid grid-cols-5 gap-6">
      {data.map(series => (
        <SearchResultCard key={series.id} {...series} />
      ))}
    </div>
  );
};
