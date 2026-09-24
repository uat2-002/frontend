import { PATH_HOME } from '@/router/path';
import { useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';
import { getAccessToken, clearTokens } from '@/auth/tokenStorage';

const API_URL = import.meta.env.VITE_API_URL;

export const SignOutButton = () => {
  const navigate = useNavigate();

  async function hendleLogOut() {
    const accessToken = getAccessToken();

    try {
      if (accessToken) {
        const response = await fetch(`${API_URL}/api/logout`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Logout failed: ${response.status}`);
        }
      }
    } catch (error) {
      console.error('Server logout failed', error);
    } finally {
      clearTokens();
      navigate(PATH_HOME);
    }
  }

  return <Button size="lg" onClick={hendleLogOut}>Sign Out</Button>;
};
