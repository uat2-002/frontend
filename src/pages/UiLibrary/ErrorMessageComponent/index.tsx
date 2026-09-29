import { ErrorMessage } from '@/components/shared/ErrorMessage';
import ComponentSection from '@/pages/UiLibrary/shared/Container/ComponentSection';
import Item from '@/pages/UiLibrary/shared/Item';
import { Button } from '@/components/ui/button';
import { InfoIcon } from 'lucide-react';

const ERROR_MESSAGE_PROPS = [
  {
    title: 'title (default: "Error")',
    description: '(?string) Main heading text inside the alert box ',
  },
  {
    title: 'message (default: "Something went wrong. Please try again later.")',
    description: '(?string | null) text displayed below the title ',
  },
  {
    title: 'icon (default: <AlertCircle />)',
    description: '(?ReactNode) Custom icon displayed next to the title',
  },
  {
    title: 'variant (default: "destructive")',
    description: '("destructive" | "default") Visual style variant of the alert box',
  },
  {
    title: 'action (default: undefined)',
    description: '(?ReactNode) Optional interactive element rendered inside the alert',
  },
  {
    title: 'className',
    description: '(?string) Additional custom CSS classes',
  },
];

const ERROR_MESSAGE_EXAMPLES = [
  {
    heading: 'Destructive Variant ',
    props: {
      title: 'Failed to load data',
      message: 'Could not reach the API server. Please check your connection.',
    },
  },
  {
    heading: 'Default Variant ',
    props: {
      variant: 'default' as const,
      title: 'Could not find anything',
      message: 'Try searching for a different keyword or title.',
    },
  },
  {
    heading: 'With Action Button',
    props: {
      icon: <InfoIcon className="h-4 w-4" />,
      title: 'Connection Lost',
      message: 'We were unable to process your request.',
      action: (
        <Button size="xs" variant="outline" onClick={() => alert('Retry clicked!')}>
          Try again
        </Button>
      ),
    },
  },
];

export default function ErrorMessageComponent() {
  return (
    <ComponentSection>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">ErrorMessage Props</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {ERROR_MESSAGE_PROPS.map(item => (
            <Item key={item.title} title={item.title} description={item.description} />
          ))}
        </ul>
      </section>

      {ERROR_MESSAGE_EXAMPLES.map(example => (
        <section key={example.heading} className="space-y-4">
          <h3 className="text-lg font-semibold">{example.heading}</h3>
          <div className="flex flex-wrap gap-3">
            <ErrorMessage {...example.props} />
          </div>
        </section>
      ))}
    </ComponentSection>
  );
}
