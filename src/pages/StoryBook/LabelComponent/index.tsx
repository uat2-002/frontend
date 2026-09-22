import ComponentSection from '@/components/shared/Container/ComponentSection';
import { Label } from '@/components/ui/label';
import Item from '@/components/shared/Item';

const LABEL_PROPS = [
  {
    title: 'className',
    description: 'custom classes to add or extend styles.',
  },
];

export default function LabelComponent() {
  return (
    <ComponentSection>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Label Props</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {LABEL_PROPS.map(item => (
            <Item key={item.title} title={item.title} description={item.description} />
          ))}
        </ul>
        <p>Label isn't really used as a component and is mostly a dependency for Field Component</p>
      </section>

      <section className="space-y-4">
        <h3>Example usage</h3>

        <div className="flex gap-2">
          <input type="checkbox" name="terms" id="" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </section>
    </ComponentSection>
  );
}
