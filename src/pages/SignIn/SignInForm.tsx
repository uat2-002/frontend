import { Button } from '@/components/ui/button.tsx';
import { Card, CardContent, CardHeader, CardTitle, } from '@/components/ui/card.tsx';
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/components/ui/field.tsx';
import { Input } from '@/components/ui/input.tsx';
import { AlertDestructive } from '@/pages/SignUp/AlertDestructive';
import { PATH_MY_LIST, PATH_SIGN_UP, PATH_HOME } from '@/router/path';
import { cn } from 'cn';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const API_URL = import.meta.env.VITE_API_URL;

export const SignInForm = ({ className, ...props }: React.ComponentProps<'div'>) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

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
      };

      navigate(PATH_HOME);
    } catch {
      setError('Could not connect to the server');
    }
  };

  const handleSignUpRedirect = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(PATH_SIGN_UP);
  };

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      {error && <AlertDestructive errorDescription={error} />}
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
                  <span> </span>
                  <a href="#" onClick={ handleSignUpRedirect }>Sign Up</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
