import { useEffect, useState } from 'react';
import axios from 'axios';
import { HealthCheck } from '@/components/HealthCheck';
import type { SeriesItem } from '@/types/seriesType';
import { MediaCard } from '@/components/shared/MediaCard';

export const Home = () => {
  const [seriesList, setSeriesList] = useState<SeriesItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        setLoading(true);
        const API_URL = import.meta.env.VITE_API_URL;
        const response = await axios.get(`${API_URL}/api/series`);
        
       
        const data = Array.isArray(response.data) ? response.data : response.data.data || [];
        setSeriesList(data);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
  console.error('Деталі помилки:', err);
  setError('Error loading series');

      } finally {
        setLoading(false);
      }
    };

    fetchSeries();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <>
      <h1>Home page</h1>
      <HealthCheck />

      <div style={{ padding: '20px', display: 'grid', gap: '20px' }}>
        {Array.isArray(seriesList) && seriesList.map(series => (
          <MediaCard
            key={series.id}
            title={series.title}
            description={series.description}
            imageUrl={`https://image.tmdb.org/t/p/w500${series.poster}`}
            rating={series.rating}
            releaseYear={series.releaseDate ? series.releaseDate.split('-')[0] : ''}
            onAddClick={() => console.log('Add clicked', series.id)}
          />
        ))}
      </div>
    </>
  );
};

export default Home;