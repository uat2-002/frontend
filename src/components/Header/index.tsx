import { HeaderRight } from '@/components/Header/components/HeaderRight';
import { Logotype } from '@/components/Header/components/Logotype';
import { Navbar } from '@/components/Header/components/Navbar';

export const Header = () => (
  <header className="border-b bg-background">
    <div className="mx-auto flex h-14 max-w-6xl items-center px-6">
      <Logotype>Serial Tracker</Logotype>
      <Navbar />
      <HeaderRight />
    </div>
  </header>
);
