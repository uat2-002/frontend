import BellButton from './BellButton';
import UserAvatar from './UserAvatar';

const HeaderRight = () => {
  return (
    <div className="ml-auto flex items-center gap-1">
      <BellButton />
      <UserAvatar></UserAvatar>
    </div>
  );
};

export default HeaderRight;
