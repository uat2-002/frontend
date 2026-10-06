import { useSearchParams } from 'react-router';
import { useEffect, useState } from 'react';
import { SearchBar } from '@/pages/Browse/components/SearchBar';
import { PopularSeriesSection } from '@/pages/Browse/components/PopularSeriesSection';
import { MediaCard } from '@/components/shared/MediaCard';
import type { SeriesItem } from '@/types/seriesType';
import noPosterPlaceholder from '@/assets/noPosterPlaceholder.png';
import { Pagination } from '@/components/shared/Pagination';
import { ErrorMessage } from '@/components/shared/ErrorMessage';
import { SkeletonCard } from '@/components/shared/skeletons/SkeletonCard';
import { useUserSeries } from '@/context/UserSeriesContext';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router';
import { PATH_SIGN_IN } from '@/router/path';

const API_URL = import.meta.env.VITE_API_URL;

type SearchResponse = {
  results: SeriesItem[];
  total_results: number;
  total_pages: number;
};

export const BrowsePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addedSeriesIds, handleAddSeriesToMyList } = useUserSeries();

  const { isAuth } = useAuth();
  const navigate = useNavigate();

  const [data, setData] = useState<SearchResponse>({
    results: [],
    total_results: 0,
    total_pages: 0,
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const query = searchParams.get('query');
  const page = searchParams.get('page') || '1';
  const currentPage = parseInt(page, 10);

  const handleProtectedAddSeries = (seriesId: number) => {
    if (!isAuth) {
      sessionStorage.setItem('pendingAddSeries', JSON.stringify({ seriesId }));
      navigate(PATH_SIGN_IN);
      return;
    }

    handleAddSeriesToMyList(seriesId);
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    async function fetchSearchResults() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${API_URL}/api/search/series?query=${query}&page=${currentPage}`
        );
        const result: SearchResponse & { error?: string } = await response.json();

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
  }, [query, currentPage]);

  const handlePageChange = (newPage: number) => {
    searchParams.set('page', newPage.toString());
    setSearchParams(searchParams);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  let renderedContent;

  if (!query) {
    renderedContent = <PopularSeriesSection />;
  } else if (loading) {
    renderedContent = (
      <div className="w-full">
        <div className="grid grid-cols-5 gap-6">
          {Array.from({ length: 10 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    );
  } else if (error) {
    renderedContent = <ErrorMessage title="Failed to load search results" message={error} />;
  } else if (data.results.length > 0) {
    renderedContent = (
      <div className="w-full">
        <h3 className="text-lg font-semibold pt-4 pb-4">{data.total_results} series found</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {data.results.map(series => (
            <MediaCard
              key={series.id}
              title={series.name}
              description={series.overview}
              imageUrl={
                series.poster_path
                  ? `https://image.tmdb.org/t/p/w500${series.poster_path}`
                  : noPosterPlaceholder
              }
              rating={series.vote_average}
              releaseYear={series.first_air_date ? series.first_air_date.split('-')[0] : ''}
              actionState={addedSeriesIds.includes(+series.id) ? 'added' : 'add'}
              onAddClick={() => handleProtectedAddSeries(+series.id)}
            />
          ))}
        </div>
        <Pagination
          totalPages={data.total_pages}
          currentPage={currentPage}
          onChange={handlePageChange}
        />
      </div>
    );
  } else {
    renderedContent = (
      <ErrorMessage
        title="Could not find anything"
        variant="default"
        message="Try another search"
      />
    );
  }

  return (
    <div className="flex items-center w-full flex-col gap-6">
      <div className="w-full max-w-8/10 md:max-w-6/10">
        <SearchBar />
      </div>

      {renderedContent}
    </div>
  );
};
