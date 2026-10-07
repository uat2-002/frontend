import { Button } from '@/components/ui/button.tsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/components/ui/field.tsx';
import { Input } from '@/components/ui/input.tsx';
import { PATH_SIGN_IN } from '@/router/path';
import { cn } from 'cn';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { showToast } from '@/lib/toast';
import { Eye, EyeOff } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const API_URL = import.meta.env.VITE_API_URL;

export const SignUpForm = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
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
      const response = await fetch(`${API_URL}/api/register`, {
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
        setError(data.error || t('registrationFailed'));
        return;
      }

      localStorage.setItem('registered_email', data.email || email);

      showToast(t('registrationSuccessful'), 'success');

      navigate(PATH_SIGN_IN);
    } catch {
      setError(t('couldNotConnectToServer'));
    }
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">
            {t('createYourAccount')}
          </CardTitle>

          <CardDescription>
            {t('enterYourInformationBelowToCreateYourAccount')}
          </CardDescription>
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

                  <FieldDescription>
                    {t('mustBeAtLeast8CharactersLong')}
                  </FieldDescription>
                </Field>
              </Field>

              <Field>
                <Button type="submit">
                  {t('createAccount')}
                </Button>

                <FieldDescription className="text-center">
                  {t('alreadyHaveAnAccount')}

                  <Button
                    type="button"
                    variant="link"
                    onClick={() => navigate(PATH_SIGN_IN)}
                  >
                    {t('signIn')}
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