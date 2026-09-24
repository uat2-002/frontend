import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import SearchResultCard from '@/components/shared/SearchResultCard';

const API_URL = import.meta.env.VITE_API_URL;

export default function PopularSeriesSection() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [error, setError] = useState<string | null>(null);

  function redirect(link: string) {
    navigate(link);
  }

  useEffect(() => {
    async function fetchPopularSeries() {
      try {
        const response = await fetch(`${API_URL}/api/series`); 
        const data = await response.json();

        if (!response.ok) {
          setError(data.error || "Couldn't reach the API");
          return;
        }

        setData(data.results);
      } catch (err) {
        setError("Couldn't reach the API");
      }
    }

    fetchPopularSeries();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="grid grid-cols-5 gap-6">
      {data.map((series) => (
        <SearchResultCard
          key={series.id}
          {...series}
          onClick={() => redirect(`/series_page?id=${series.id}`)}
        />
      ))}
    </div>
  );
}
