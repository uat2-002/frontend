import { Button } from '@/components/ui/button';
import Item from '@/components/shared/Item';

const BUTTON_PROPS = [
  {
    title: 'variant',
    description: '"primary" / "secondary"',
  },
  {
    title: 'children',
    description: 'string ',
  },
  {
    title: 'icon',
    description: 'ReactNode ',
  },
  {
    title: 'disabled',
    description: 'true / false ',
  },
];

const BUTTON_VARIANTS = [
  { label: 'Add to List', variant: 'primary' as const },
  { label: 'More Info', variant: 'secondary' as const },
];

export default function ButtonComponent() {
  return (
    <div className="space-y-8 p-6">
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Button Props</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {BUTTON_PROPS.map(item => (
            <Item key={item.title} title={item.title} description={item.description} />
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-semibold">Variants</h3>
        <div className="flex flex-wrap items-center gap-3">
          {BUTTON_VARIANTS.map(({ variant, label }) => (
            <Button key={label} variant={variant}>
              {label}
            </Button>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-semibold">Button with Icon</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary">
            <span>+</span> Add
          </Button>
          <Button variant="secondary" disabled>
            <span>✓</span> Added
          </Button>
        </div>
      </section>
    </div>
  );
}