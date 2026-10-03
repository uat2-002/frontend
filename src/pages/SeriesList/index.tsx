import { ErrorMessage } from "@/components/shared/ErrorMessage";
import { MediaCard } from "@/components/shared/MediaCard";
import { PATH_BROWSE } from "@/router/path";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import noPosterPlaceholder from '@/assets/noPosterPlaceholder.png';
import { deleteUserSeries, getMyList } from "@/api/watchlist";
import { useUserSeries } from "@/context/UserSeriesContext";
import { showToast } from "@/lib/toast";
import { Button } from "@/components/ui/button";

type MySeriesItem = {
  tmdbId: number;
  title: string;
  poster: string | null;
  overview: string | null;
  userStatus: 'plan_to_watch' | 'watching' | 'watched' | 'not_worth_it';
};

export const SeriesList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mySeriesList, setMySeriesList] = useState<MySeriesItem[]>([]);
  const navigate = useNavigate();
  const { setAddedSeriesIds } = useUserSeries();

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

  const handleDeleteSeries = async (tmdbId: number) => {
    try {
      await deleteUserSeries(tmdbId);

      setMySeriesList(previousList =>
        previousList.filter(series => series.tmdbId !== tmdbId)
      );

      setAddedSeriesIds(previousIds =>
        previousIds.filter(id => id !== tmdbId)
      );
    } catch (error) {
      showToast(`Couldn't delete series: ${error}`);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorMessage title="Failed to load your list" message={error} />;
  if (mySeriesList.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 p-8 text-center">
        <h2 className="text-xl font-semibold">
          Your list is empty
        </h2>

        <p className="text-muted-foreground">
          Find a series you'd like to watch and add it to your list
        </p>

        <Button className="cursor-pointer" onClick={() => navigate(PATH_BROWSE) }>
          Click here to search your first series
        </Button>
      </div>
    );
  }
    
  return (
    <div>
      <h3 className="text-lg font-semibold pt-4 pb-4">Your Series List</h3>
      <div className="grid grid-cols-5 gap-6">
        {mySeriesList.map(series => (
          <MediaCard
            key={series.tmdbId}
            title={series.title}
            description={series.overview ?? undefined}
            imageUrl={
              series.poster
                ? `https://image.tmdb.org/t/p/w500${series.poster}`
                : noPosterPlaceholder
            }
            actionState='delete'
            onDeleteClick={ () => handleDeleteSeries(series.tmdbId) }
          />
        ))}
      </div>
    </div>
  );

}
