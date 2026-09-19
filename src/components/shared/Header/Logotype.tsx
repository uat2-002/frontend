import { NavLink } from 'react-router';

interface LogotypeProps {
  children: string;
}

const Logotype = ({children}: LogotypeProps) => {
  return (
    <NavLink to="/" className="text-lg font-semibold">
      {children}
    </NavLink>
  );
}

export default Logotype;
