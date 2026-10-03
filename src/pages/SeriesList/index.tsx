import { ErrorMessage } from "@/components/shared/ErrorMessage";
import { MediaCard } from "@/components/shared/MediaCard";
import { PATH_BROWSE } from "@/router/path";
import type { SeriesItem } from "@/types/seriesType";
import { Button } from "@base-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import noPosterPlaceholder from '@/assets/noPosterPlaceholder.png';
import { getMyList } from "@/api/watchlist";

export const SeriesList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mySeriesList, setMySeriesList] = useState<SeriesItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMySeriesList() {
      try {
        const response = await getMyList();
        const data = Array.isArray(response) ? response : response.data.series || [];
        setMySeriesList(data);
      } catch {
        setError("Couldn't recive your list");
      } finally {
        setLoading(false);
      }
    }

    fetchMySeriesList();
    
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorMessage title="Failed to load your list" message={error} />;
  if (mySeriesList.length === 0) return <Button onClick={ () => navigate(PATH_BROWSE) }>Choose your favourite series</Button>;
    
  return (
    <div>
      <h3 className="text-lg font-semibold pt-4 pb-4">Your Series List</h3>
      <div className="grid grid-cols-5 gap-6">
        {mySeriesList.map(series => (
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
            // actionState={addedSeriesIds.includes(+series.id) ? 'added' : 'add'}
            // onAddClick={ () => handleAddSeriesToMyList(+series.id) }     
          />
        ))}
      </div>
    </div>
  );

}
