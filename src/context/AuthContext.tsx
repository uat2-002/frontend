import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import { getAccessToken, 
  saveTokens, 
  clearTokens, 
  type AuthTokens, 
  getRefreshToken, 
  saveAccessToken } from '@/auth/tokenStorage';
import axios from 'axios';

type AuthContextType = {
  isAuth: boolean;
  login: (tokens: AuthTokens, email: string) => void;
  logout: () => void;
};

type RefreshResponse = {
  accessToken: string;
  refreshToken?: string;
};

const REFRESH_INTERVAL = 12.5 * 60 * 1000;
const REFRESH_URL = `${import.meta.env.VITE_API_URL}/api/auth/refresh`;

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState<boolean>(() => Boolean(getAccessToken()));
  const logout = useCallback(() => {
    clearTokens();
    localStorage.removeItem('userEmail');
    setIsAuth(false);
  }, []);

  const login = (tokens: AuthTokens, email: string) => {
    saveTokens(tokens); 
    localStorage.setItem('userEmail', email);
    setIsAuth(true);
  };

  useEffect(() => {
    if (!isAuth) return;

    let cancelled = false;
    let refreshing = false;

    const refresh = async () => {
      if (cancelled || refreshing) return;

      refreshing = true;

      try {
        const refreshToken = getRefreshToken();

        if (!refreshToken) {
          throw new Error('Refresh token is missing');
        }

        const { data } = await axios.post<RefreshResponse>(
          REFRESH_URL,
          { refreshToken },
          { timeout: 15_000 },
        );

        if (!data.accessToken) {
          throw new Error('Access token is missing');
        }

        if (cancelled) return;

        if (data.refreshToken) {
          saveTokens({
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
          });
        } else {
          saveAccessToken(data.accessToken);
        }
      } catch {
        if (!cancelled) {
          logout();
        }
      } finally {
        refreshing = false;
      }
    };

    const initialTimeoutId = window.setTimeout(() => {
      void refresh();
    }, 0);

    const intervalId = window.setInterval(() => {
      void refresh();
    }, REFRESH_INTERVAL);

    return () => {
      cancelled = true;
      window.clearTimeout(initialTimeoutId);
      window.clearInterval(intervalId);
    };
  }, [isAuth, logout]);

  return <AuthContext.Provider value={{ isAuth, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
