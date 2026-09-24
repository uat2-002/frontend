import ComponentSection from '@/pages/UiLibrary/shared/Container/ComponentSection';
import { AlertCircleIcon, AlertTriangleIcon, CheckCircle2Icon } from 'lucide-react';

import { Alert, AlertAction, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import Item from '@/pages/UiLibrary/shared/Item';

const ALERT_PROPS = [
  {
    title: 'variant (default: "default")',
    description: '"default", "destructive"',
  },
];

export default function AlertComponent() {
  return (
    <ComponentSection>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Alert Props</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {ALERT_PROPS.map(item => (
            <Item key={item.title} title={item.title} description={item.description} />
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3>Default alert</h3>

        <div className="flex w-full max-w-sm flex-col gap-2 text-sm">
          <Alert className="max-w-md">
            <CheckCircle2Icon />
            <AlertTitle>Account updated successfully</AlertTitle>
            <AlertDescription>
              Your profile information has been saved. Changes will be reflected immediately.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      <section className="space-y-4">
        <h3>Destructive alert</h3>

        <div className="flex w-full max-w-sm flex-col gap-2 text-sm">
          <Alert variant="destructive" className="max-w-md">
            <AlertCircleIcon />
            <AlertTitle>Payment failed</AlertTitle>
            <AlertDescription>
              Your payment could not be processed. Please check your payment method and try again.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      <section className="space-y-4">
        <h3>Action alert</h3>

        <div className="flex w-full max-w-sm flex-col gap-2 text-sm">
          <Alert className="max-w-md">
            <AlertTitle>Dark mode is now available</AlertTitle>
            <AlertDescription>
              Enable it under your profile settings to get started.
            </AlertDescription>
            <AlertAction>
              <Button size="xs" variant="default">
                Enable
              </Button>
            </AlertAction>
          </Alert>
        </div>
      </section>

      <section className="space-y-4">
        <h3>Colored alert</h3>

        <div className="flex w-full max-w-sm flex-col gap-2 text-sm">
          <Alert
            className="max-w-md border-amber-200 bg-amber-50 text-amber-900
           dark:border-amber-900 dark:bg-amber-950 dark:text-amber-50"
          >
            <AlertTriangleIcon />
            <AlertTitle>Your subscription will expire in 3 days.</AlertTitle>
            <AlertDescription>
              Renew now to avoid service interruption or upgrade to a paid plan to continue using
              the service.
            </AlertDescription>
          </Alert>
        </div>
      </section>
    </ComponentSection>
  );
}
