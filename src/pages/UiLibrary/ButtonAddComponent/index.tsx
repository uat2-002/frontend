import { Button } from '@/components/ui/button';
import ComponentSection from '@/pages/UiLibrary/shared/Container/ComponentSection';
import Item from '@/pages/UiLibrary/shared/Item';
import { Check, Plus } from 'lucide-react';

const BUTTON_PROPS = [
  {
    title: 'variant (default: "default")',
    description: '"default", "secondary", "outline", "ghost", "destructive"',
  },
  {
    title: 'disabled',
    description: 'true / false',
  },
  {
    title: 'className',
    description: 'custom classes to add or extend styles.',
  },
];

export default function ButtonComponent() {
  return (
    <ComponentSection>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Button Props</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {BUTTON_PROPS.map(item => (
            <Item key={item.title} title={item.title} description={item.description} />
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3>Buttons Actions</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button>Add to List</Button>
          <Button variant="secondary">More Info</Button>
          <Button>
            <Plus className="mr-1 h-4 w-4" /> Add
          </Button>
          <Button disabled variant="secondary">
            <Check className="mr-1 h-4 w-4" /> Added
          </Button>
        </div>
      </section>
    </ComponentSection>
  );
}
