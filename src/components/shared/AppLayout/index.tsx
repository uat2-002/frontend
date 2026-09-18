import { Outlet } from 'react-router';

import Header from '@/components/shared/Header';

const AppLayout = () => {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <Header />

      <main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;