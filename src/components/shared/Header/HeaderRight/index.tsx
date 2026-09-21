import BellButton from './BellButton';
import UserAvatar from './UserAvatar';
import SearchBar from '@/components/shared/SearchBar'

const HeaderRight = () => {
  return (
    <div className="ml-auto flex items-center gap-1">
      <SearchBar />
      <BellButton />
      <UserAvatar></UserAvatar>
    </div>
  );
};

export default HeaderRight;
