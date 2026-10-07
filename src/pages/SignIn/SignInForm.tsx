import React, { useEffect, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button.tsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/components/ui/field.tsx';
import { Input } from '@/components/ui/input.tsx';
import { PATH_MY_LIST, PATH_SIGN_UP } from '@/router/path';
import { cn } from 'cn';
import { showToast } from '@/lib/toast';
import { useAuth } from '@/context/AuthContext';
import { useUserSeries } from '@/context/UserSeriesContext';

const API_URL = import.meta.env.VITE_API_URL;

export const SignInForm = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login } = useAuth();
  const { handleAddSeriesToMyList } = useUserSeries();

  const [email, setEmail] = useState(() => {
    const savedEmail = localStorage.getItem('registered_email');

    if (savedEmail) {
      localStorage.removeItem('registered_email');
      return savedEmail;
    }

    return '';
  });

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (error) {
      showToast(error, 'error');
    }
  }, [error]);

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch(`${API_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || t('logInFailed'));
        return;
      }

      login(
        {
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
        },
        email,
      );

      const pendingAction = sessionStorage.getItem('pendingAddSeries');

      if (pendingAction) {
        try {
          const { seriesId } = JSON.parse(pendingAction);

          await handleAddSeriesToMyList(seriesId);
          sessionStorage.removeItem('pendingAddSeries');

          showToast(t('seriesAutomaticallyAdded'), 'success');
        } catch (err) {
          console.error('Failed to process pending action', err);
        }
      }

      navigate(PATH_MY_LIST);
    } catch {
      setError(t('couldNotConnectToServer'));
    }
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">
            {t('logInToSeriesTracker')}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">{t('email')}</FieldLabel>

                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </Field>

              <Field>
                <Field>
                  <FieldLabel htmlFor="password">
                    {t('password')}
                  </FieldLabel>

                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      onChange={e => setPassword(e.target.value)}
                      className="pr-10"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(prev => !prev)}
                      className="absolute top-1/2 right-3 -translate-y-1/2 
                      cursor-pointer text-muted-foreground hover:text-foreground focus:outline-none"
                      tabIndex={-1}
                      aria-label={
                        showPassword
                          ? t('hidePassword')
                          : t('showPassword')
                      }
                    >
                      {showPassword ? (
                        <Eye className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <EyeOff className="h-4 w-4" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                </Field>
              </Field>

              <Field>
                <Button type="submit">{t('logIn')}</Button>

                <FieldDescription className="text-center">
                  {t('newToSeriesTracker')}

                  <Button
                    type="button"
                    variant="link"
                    onClick={() => navigate(PATH_SIGN_UP)}
                  >
                    {t('signUp')}
                  </Button>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};