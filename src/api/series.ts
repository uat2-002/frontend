import { apiClient } from '@/api/client';
import { getAccessToken } from '@/auth/tokenStorage';
export type SeriesSeasonSummary = {
  tmdbId: number;
  seasonNumber: number;
  name: string;
  overview: string | null;
  poster: string | null;
  episodeCount: number;
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

export type UserStatus = 'watching' | 'plan_to_watch' | 'watched' | 'not_worth_it' | 'none';

interface UserSeriesStatusResponse {
  userStatus: UserStatus;
  seriesId?: number;
}

interface UpdateUserStatusResponse {
  seriesId: number;
  userStatus: UserStatus;
  message: string;
}

export type WatchedEpisode = {
  episodeId: number;
  seasonNumber: number;
};

export type WatchedEpisodeResponse = {
  watchedEpisodes: WatchedEpisode[];
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

export const fetchUserSeriesStatus = async (seriesId: number | string): Promise<UserStatus> => {
  const token = getAccessToken();

  const { data } = await apiClient.get<UserSeriesStatusResponse>(`/user/series/${seriesId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data.userStatus;
};

export const updateUserStatus = async (seriesId: number | string, userStatus: string) => {
  const token = getAccessToken();

  const { data } = await apiClient.patch<UpdateUserStatusResponse>(
    `/user/series/${seriesId}`,
    { userStatus },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};
export const updateUserEpisodeStatus = async (episodeId: number): Promise<void> => {
  const token = getAccessToken();

  await apiClient.post(
    `api/user/episodes/${episodeId}/status`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
export const fetchUserWatchedEpisodes = async (
  seriesId: number | string
): Promise<WatchedEpisode[]> => {
  const token = getAccessToken();

  const { data } = await apiClient.get<WatchedEpisodeResponse>(`/api/series/${seriesId}/watched`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data.watchedEpisodes;
};
