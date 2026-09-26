const ACCESS_KEY = 'accessToken';
const REFRESH_KEY = 'refreshToken';

export type AuthTokens = {
  accessToken: string;
  refreshToken: string;
};

export const saveTokens = (tokens: AuthTokens): void => {
  localStorage.setItem(ACCESS_KEY, tokens.accessToken);
  localStorage.setItem(REFRESH_KEY, tokens.refreshToken);
};

export const clearTokens = (): void => {
  localStorage.removeItem(ACCESS_KEY);
  localStorage.removeItem(REFRESH_KEY);
};

export const getAccessToken = () => localStorage.getItem(ACCESS_KEY);
export const getRefreshToken = () => localStorage.getItem(REFRESH_KEY);
export const saveAccessToken = (token: string): void => localStorage.setItem(ACCESS_KEY, token);
