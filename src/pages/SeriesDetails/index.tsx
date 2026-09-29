import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { fetchSeriesDetails, type SeriesDetails as SeriesDetailsType } from '@/api/series';
import { ErrorMessage } from '@/components/shared/ErrorMessage';
import { SkeletonBackdrop } from '@/components/shared/skeletons/SkeletonBackdrop';
import { SeriesBackdrop } from '@/components/shared/SeriesBackdrop';

export const SeriesDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [series, setSeries] = useState<SeriesDetailsType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchSeriesDetails(id);
        setSeries(data);
      } catch {
        setError('Failed to load series details');
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  if (loading) {
    return <SkeletonBackdrop />;
  }

  if (error || !series) {
    return <ErrorMessage title="Error" message={error ?? 'Series not found'} />;
  }

  return (
    <div className="w-full">
      <SeriesBackdrop series={series} />
    </div>
  );
};
