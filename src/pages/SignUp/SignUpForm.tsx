import { Button } from '@/components/ui/button.tsx';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx';
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/components/ui/field.tsx';
import { Input } from '@/components/ui/input.tsx';
import { PATH_SIGN_IN } from '@/router/path';
import { cn } from 'cn';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { showToast } from '@/lib/toast';

const API_URL = import.meta.env.VITE_API_URL;

export const SignUpForm = ({ className, ...props }: React.ComponentProps<'div'>) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
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
        setError(data.error || 'Registration failed');
        return;
      }

      localStorage.setItem('registered_email', data.email || email);
      showToast('Registration successful! Please log in', 'success');

      navigate(PATH_SIGN_IN);
    } catch {
      setError('Could not connect to the server');
    }
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Create your account</CardTitle>
          <CardDescription>Enter your information below to create your account</CardDescription>
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
                  <FieldDescription>Must be at least 8 characters long.</FieldDescription>
                </Field>
              </Field>
              <Field>
                <Button type="submit">Create Account</Button>
                <FieldDescription className="text-center">
                  Already have an account?
                  <Button variant="link" onClick={() => navigate(PATH_SIGN_IN)}>
                    Sign In
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
