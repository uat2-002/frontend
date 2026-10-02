import { useEffect, useState } from 'react';
import { MediaCard } from '@/components/shared/MediaCard';
import type { SeriesItem } from '@/types/seriesType';
import noPosterPlaceholder from '@/assets/noPosterPlaceholder.png';
import { ErrorMessage } from '@/components/shared/ErrorMessage';

const API_URL = import.meta.env.VITE_API_URL;

type PopularSeriesSectionProps = {
  addedSeriesIds: number[];
  onAddClick: (tmdbId: number) => void;
}

export const PopularSeriesSection = ({ addedSeriesIds, onAddClick }: PopularSeriesSectionProps) => {
  const [seriesList, setSeriesList] = useState<SeriesItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPopularSeries() {
      try {
        const response = await fetch(`${API_URL}/api/series`);
        const result = await response.json();

        const data = Array.isArray(result) ? result : result.data || [];

        setSeriesList(data);
      } catch {
        setError('Could not reach the API');
      }
    }

    fetchPopularSeries();
  }, []);

  if (error) {
    return <ErrorMessage title="Failed to load popular series" message={error} />;
  }

  return (
    <div>
      <h3 className="text-lg font-semibold pt-4 pb-4">Popular series</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {seriesList.map(series => (
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
            onAddClick={() => onAddClick(+series.id)}     
          />
        ))}
      </div>
    </div>
  );
};
