import { AlertCircleIcon } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert.tsx';

export function AlertDestructive(props: { errorDescription: string }) {
  return (
    <Alert variant="destructive" className="max-w-md">
      <AlertCircleIcon />
      <AlertTitle>An error occured</AlertTitle>
      <AlertDescription>{props.errorDescription}</AlertDescription>
    </Alert>
  );
}
