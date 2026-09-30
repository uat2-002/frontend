import { Header } from '@/components/Header';
import { Outlet } from 'react-router';

export const AppLayout = () => (
  <div className="min-h-svh bg-background text-foreground flex flex-col">
    <Header />
    <main className="flex-1 w-full">
      <Outlet />
    </main>
  </div>
);
