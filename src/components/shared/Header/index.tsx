import HeaderRight from './HeaderRight';
import Logotype from './Logotype';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="border-b bg-background">
      <div className="mx-auto flex h-14 max-w-6xl items-center px-6">
        <Logotype>Serial Tracker</Logotype>
        <Navbar />
        <HeaderRight />
      </div>
    </header>
  );
};

export default Header;
