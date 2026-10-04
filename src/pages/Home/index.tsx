import { useEffect, useState } from 'react';
import axios from 'axios';
import type { SeriesItem } from '@/types/seriesType';
import { MediaCard } from '@/components/shared/MediaCard';
import noPosterPlaceholder from '@/assets/noPosterPlaceholder.png';
import { ErrorMessage } from '@/components/shared/ErrorMessage';

export const Home = () => {
  const [seriesList, setSeriesList] = useState<SeriesItem[]>([]);
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
        setSeriesList(data);
      } catch {
        setError('Error loading series');
      } finally {
        setLoading(false);
      }
    };

    fetchSeries();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <ErrorMessage title="Failed to load popular series" message={error} />;

  return (
    <>
  <div className="p-5 pb-0">
  <h1 className="text-lg font-medium tracking-tight text-zinc-500 sm:text-xl">
    20 more Popular Series
  </h1>
</div>
      <div className="p-5 grid gap-5 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {Array.isArray(seriesList) &&
          seriesList.map(series => (
            <MediaCard
              key={series.id}
              title={series.title}
              description={series.description}
              imageUrl={
                series.poster
                  ? `https://image.tmdb.org/t/p/w500${series.poster}`
                  : noPosterPlaceholder
              }
              rating={series.rating}
              releaseYear={series.releaseDate ? series.releaseDate.split('-')[0] : ''}
            />
          ))}
      </div>
    </>
  );
};

export default Home;
