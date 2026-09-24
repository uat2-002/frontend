import { Header } from '@/components/Header';
import { Outlet } from 'react-router';

export const AppLayout = () => (
  <div className="min-h-svh bg-background text-foreground">
    <Header />
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6">
      <Outlet />
    </main>
  </div>
);
