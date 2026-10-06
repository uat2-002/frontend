import { ThemeProvider } from '@/components/Header/components/ColorThemeSwitch/ThemeProvider';
import { ModeToggle } from '@/components/Header/components/ColorThemeSwitch/ModeToggle';

export const ColorThemeSwitch = () => {
  return (
    <ThemeProvider defaultMode="light" storageKeyMode="vite-ui-theme">
      <ModeToggle />
    </ThemeProvider>
  );
};
