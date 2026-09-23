import ComponentSection from '@/components/shared/Container/ComponentSection';
import { showToast } from '@/lib/toast';
import Item from '@/components/shared/Item';
import { Button } from '@/components/ui/button';

const SHOWTOAST_PROPS = [
  { title: 'message', description: '(string)  The text message to display' },
  {
    title: 'type',
    description:
      '"success" | "error" | "info" | "warning" The category of the notification determining its visual style',
  },
];

export default function ToastComponent() {
  return (
   <ComponentSection>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">showToast Props</h3>
        <p className="text-sm text-muted-foreground">
          Helper function to trigger a short-lived feedback message
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {SHOWTOAST_PROPS.map(item => (
            <Item key={item.title} title={item.title} description={item.description} />
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Example</h3>
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => showToast('Example message', 'info')}>Show Toast Example</Button>
        </div>
      </section>
    </ComponentSection>
  );
}
