import { useSearchParams, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { SearchBar } from './components/SearchBar.tsx';
import { SearchResultCard } from '@/components/shared/SearchResultCard';
import { PopularSeriesSection } from '@/components/shared/PopularSeriesSection';

const API_URL = import.meta.env.VITE_API_URL;

export const BrowsePage = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const query = searchParams.get('query');
  const page = searchParams.get('page');

  useEffect(() => {
    if (!query) {
      return;
    }

    async function fetchSearchResults() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${API_URL}/api/search/series?query=${query}&page=${page}`);
        const result = await response.json();

        if (!response.ok) {
          setError(result.error || "Couldn't reach the API");
          return;
        }

        setData(result.results);
      } catch (err) {
        setError("Couldn't reach the API");
      } finally {
        setLoading(false);
      }
    }

    fetchSearchResults();
  }, [query, page]);

  let renderedContent;

  if (!query) {
    renderedContent = <PopularSeriesSection />;
  } else if (loading) {
    renderedContent = <p>Loading...</p>;
  } else if (error) {
    renderedContent = <p>{error}</p>;
  } else if (data.length > 0) {
    renderedContent = (
      <div className="grid grid-cols-5 gap-6">
        {data.map(series => (
          <SearchResultCard
            key={series.id}
            {...series}
            onClick={() => redirect(`/series_page?id=${series.id}`)}
          />
        ))}
      </div>
    );
  } else {
    renderedContent = <p>Couldn't find anything</p>;
  }

  function redirect(link: string) {
    navigate(link);
  }

  return (
    <div className="flex items-center w-full max-w-9/10 flex-col gap-6">
      <div className="w-full max-w-6/10">
        <SearchBar />
      </div>

      {renderedContent}
    </div>
  );
};
