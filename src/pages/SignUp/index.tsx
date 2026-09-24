import { SignUpForm } from '@/pages/SignUp/SignUpForm';

export const SignUp = () => (
  <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
    <div className="flex w-full max-w-sm flex-col gap-6">
      <SignUpForm />
    </div>
  </div>
);
