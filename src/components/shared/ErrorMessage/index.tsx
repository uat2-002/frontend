import type { ReactNode } from 'react';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useTranslation } from 'react-i18next';

interface ErrorMessageProps {
  title?: string;
  message?: string | null;
  icon?: ReactNode;
  variant?: 'destructive' | 'default';
  action?: ReactNode;
  className?: string;
}

export const ErrorMessage = ({
  title = 'Error',
  message,
  icon = <AlertCircle className="h-4 w-4" />,
  variant = 'destructive',
  action,
  className = 'w-full max-w-md mx-auto my-8',
}: ErrorMessageProps) => {
  const { t } = useTranslation();

  const errorMessage =
    message ?? t('somethingWentWrongPleaseTryAgainLater');

  return (
    <div className={className}>
      <Alert variant={variant} role="alert" aria-live="assertive">
        {icon}
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription className="mt-1 flex flex-col gap-3">
          <span>{errorMessage}</span>
          {action && <div className="pt-1">{action}</div>}
        </AlertDescription>
      </Alert>
    </div>
  );
};
