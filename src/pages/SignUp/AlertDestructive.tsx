import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert.tsx';
import { AlertCircleIcon } from 'lucide-react';

export const AlertDestructive = (props: { errorDescription: string }) => (
  <Alert variant="destructive" className="max-w-md">
    <AlertCircleIcon />
    <AlertTitle>An error occured</AlertTitle>
    <AlertDescription>{props.errorDescription}</AlertDescription>
  </Alert>
);
