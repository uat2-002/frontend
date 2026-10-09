import { getAccessToken } from '@/auth/tokenStorage';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { PATH_HOME } from '@/router/path';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

const API_URL = import.meta.env.VITE_API_URL;

export const SignOutButton = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  async function handleLogOut() {
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
      logout();
      navigate(PATH_HOME);
    }
  }

  return (
    <Button size="lg" onClick={handleLogOut} className="w-full">
      {t('signOut')}
    </Button>
  );
};