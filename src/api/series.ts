import { apiClient } from '@/api/client';

export type SeriesSeasonSummary = {
  tmdbId: number;
  seasonNumber: number;
  name: string;
  overview: string | null;
  poster: string | null;
};

export type SeriesDetails = {
  tmdbId: number;
  title: string;
  poster: string | null;
  backdrop: string | null;
  overview: string | null;
  firstAirDate: string | null;
  numberOfSeasons: number | null;
  numberOfEpisodes: number | null;
  status: 'ongoing' | 'ended' | 'canceled';
  seasons: SeriesSeasonSummary[];
};

export type Episode = {
  tmdbId: number;
  seasonNumber: number;
  episodeNumber: number;
  title: string;
  overview: string | null;
  stillPath: string | null;
  airDate: string | null;
};

export type SeasonWithEpisodes = {
  tmdbId: number;
  seasonNumber: number;
  name: string;
  overview: string | null;
  poster: string | null;
  episodes: Episode[];
};

export const fetchSeriesDetails = async (id: string | number): Promise<SeriesDetails> => {
  const { data } = await apiClient.get<SeriesDetails>(`/api/series/${id}`);
  return data;
};

export const fetchSeasonEpisodes = async (
  seriesId: string | number,
  seasonNumber: number
): Promise<SeasonWithEpisodes> => {
  const { data } = await apiClient.get<SeasonWithEpisodes>(
    `/api/series/${seriesId}/season/${seasonNumber}`
  );
  return data;
};
