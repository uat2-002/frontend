import { createContext, useContext, useState, type ReactNode } from 'react';
import { getAccessToken, saveTokens, clearTokens, type AuthTokens } from '@/auth/tokenStorage';

type AuthContextType = {
  isAuth: boolean;
  login: (tokens: AuthTokens, email: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState<boolean>(() => Boolean(getAccessToken()));

  const login = (tokens: AuthTokens, email: string) => {
    saveTokens(tokens); 
    localStorage.setItem('userEmail', email);
    setIsAuth(true);
  };

  const logout = () => {
    clearTokens();
    localStorage.removeItem('userEmail');
    setIsAuth(false);
  };

  return <AuthContext.Provider value={{ isAuth, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
