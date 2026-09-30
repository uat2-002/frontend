import { useEffect, useState } from 'react';
import axios from 'axios';
// import { HealthCheck } from '@/components/HealthCheck';
import type { SeriesItem } from '@/types/seriesType';
import { MediaCard } from '@/components/shared/MediaCard';
import noPosterPlaceholder from '@/assets/noPosterPlaceholder.png';
import { ErrorMessage } from '@/components/shared/ErrorMessage';
import { addSeries } from '@/api/watchlist';
import { showToast } from '@/lib/toast';

export const Home = () => {
  const [seriesList, setSeriesList] = useState<SeriesItem[]>([]);
  const [addedSeriesIds, setAddedSeriesIds] = useState<number[]>([]);
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
  if (error) {
    return <ErrorMessage title="Failed to load popular series" message={error} />;
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

  return (
    <>
      {/* <h1>Home page</h1>
      <HealthCheck /> */}
      <div className="p-5 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
              actionState={addedSeriesIds.includes(+series.id) ? 'added' : 'add'}
              onAddClick={() => handleAddSeriesToMyList(+series.id)}
            />
          ))}
      </div>
    </>
  );
};

export default Home;
