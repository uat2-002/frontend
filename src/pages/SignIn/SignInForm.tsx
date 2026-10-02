import { saveTokens } from '@/auth/tokenStorage';
import { Button } from '@/components/ui/button.tsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/components/ui/field.tsx';
import { Input } from '@/components/ui/input.tsx';
import { PATH_MY_LIST, PATH_SIGN_UP } from '@/router/path';
import { cn } from 'cn';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { showToast } from '@/lib/toast';

const API_URL = import.meta.env.VITE_API_URL;

export const SignInForm = ({ className, ...props }: React.ComponentProps<'div'>) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState(() => {
    const savedEmail = localStorage.getItem('registered_email');
    if (savedEmail) {
      localStorage.removeItem('registered_email');
      return savedEmail;
    }
    return '';
  });
  const [password, setPassword] = useState('');
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
        setError(data.error || 'Log In failed');
        return;
      }

      saveTokens({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      });

      localStorage.setItem('userEmail', email);

      navigate(PATH_MY_LIST);
    } catch {
      setError('Could not connect to the server');
    }
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Log in to Series Tracker</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
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
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input
                    id="password"
                    type="password"
                    required
                    onChange={e => setPassword(e.target.value)}
                  />
                </Field>
              </Field>
              <Field>
                <Button type="submit">Log In</Button>
                <FieldDescription className="text-center">
                  New to Series Tracker?
                  <Button variant="link" onClick={() => navigate(PATH_SIGN_UP)}>
                    Sign Up
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
