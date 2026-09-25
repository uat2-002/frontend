import { useSearchParams } from 'react-router';
import { useEffect, useState } from 'react';
import { SearchBar } from '@/pages/Browse/components/SearchBar';
import { SearchResultCard } from '@/pages/Browse/components/SearchResultCard';
import { PopularSeriesSection } from '@/pages/Browse/components/PopularSeriesSection';

const API_URL = import.meta.env.VITE_API_URL;

export const BrowsePage = () => {
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
          setError(result.error || 'Could not reach the API');
          return;
        }

        setData(result);
      } catch {
        setError('Could not reach the API');
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
  } else if (data.results.length > 0) {
    renderedContent = (

      <div>
      <h3 className="text-lg font-semibold pt-4 pb-4">{data.total_results} series found</h3>
      <div className="grid grid-cols-5 gap-6">
        {data.results.map(series => (
          <SearchResultCard
            key={series.id}
            {...series}
          />
        ))}
      </div>
    </div>

    );
  } else {
    renderedContent = <p>Could not find anything</p>;
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
