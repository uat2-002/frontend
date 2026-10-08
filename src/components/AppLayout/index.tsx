import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Outlet } from 'react-router';

export const AppLayout = () => (
  <div className="min-h-svh bg-background text-foreground flex flex-col">
    <Header />
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 md:px-6">
      <Outlet />
    </main>
    <Footer />
  </div>
);
