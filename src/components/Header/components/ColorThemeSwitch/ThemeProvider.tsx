import { createContext, useContext, useEffect, useState } from 'react';
import React from 'react';

type ThemeMode = 'light' | 'dark' | 'system';
type ColorTheme = string | null;

interface ThemeContextType {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
}

const initialState: ThemeContextType = {
  mode: 'system',
  colorTheme: null,
  setMode: () => {},
  setColorTheme: () => {},
};

const ThemeProviderContext = createContext<ThemeContextType>(initialState);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultMode?: ThemeMode;
  defaultColorTheme?: ColorTheme;
  storageKeyMode?: string;
  storageKeyColorTheme?: string;
}

export const ThemeProvider = ({
  children,
  defaultMode = 'system',
  defaultColorTheme = null,
  storageKeyMode = 'vite-ui-mode',
  storageKeyColorTheme = 'vite-ui-color-theme',
}: ThemeProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const stored = localStorage.getItem(storageKeyMode);

    if (stored === 'light' || stored === 'dark' || stored === 'system') {
      return stored;
    }

    return defaultMode;
  });

  const [colorTheme, setColorTheme] = useState<ColorTheme>(() => {
    return localStorage.getItem(storageKeyColorTheme) ?? defaultColorTheme;
  });

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove('light', 'dark');

    if (mode === 'system') {
      const systemMode = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';

      root.classList.add(systemMode);
    } else {
      root.classList.add(mode);
    }
  }, [mode]);

  useEffect(() => {
    const root = document.documentElement;

    if (colorTheme) {
      root.setAttribute('data-theme', colorTheme);
    } else {
      root.removeAttribute('data-theme');
    }
  }, [colorTheme]);

  useEffect(() => {
    localStorage.setItem(storageKeyMode, mode);
  }, [mode, storageKeyMode]);

  useEffect(() => {
    if (colorTheme) {
      localStorage.setItem(storageKeyColorTheme, colorTheme);
    } else {
      localStorage.removeItem(storageKeyColorTheme);
    }
  }, [colorTheme, storageKeyColorTheme]);

  return (
    <ThemeProviderContext.Provider
      value={{
        mode,
        colorTheme,
        setMode,
        setColorTheme,
      }}
    >
      {children}
    </ThemeProviderContext.Provider>
  );
};

export function useTheme() {
  return useContext(ThemeProviderContext);
}
