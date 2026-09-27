import { useEffect, useState } from 'react';
import { SearchResultCard } from '@/pages/Browse/components/SearchResultCard';

const API_URL = import.meta.env.VITE_API_URL;

type Series = {
  id: number;
  title: string;
  poster: string;
  releaseDate: string;
};

export const PopularSeriesSection = () => {
  const [data, setData] = useState<Series[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPopularSeries() {
      try {
        const response = await fetch(`${API_URL}/api/series`);
        const result = await response.json();

        const data = Array.isArray(result) ? result : result.data || [];

        setData(data);
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
    <div>
      <h3 className="text-lg font-semibold pt-4 pb-4">Popular series</h3>
      <div className="grid grid-cols-5 gap-6">
        {data.map(series => (
          <SearchResultCard key={series.id} {...series} />
        ))}
      </div>
    </div>
  );
};
