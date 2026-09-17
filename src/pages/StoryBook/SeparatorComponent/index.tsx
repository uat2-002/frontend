import { Separator } from '@/components/ui/separator.tsx';
import Item from '@/components/shared/Item';

const SEPARATOR_PROPS = [
  {
    title: 'orientation (default: "horizontal") ',
    description: '"horizontal", "vertical"',
  },
  {
    title: 'className',
    description: 'custom classes to add or extend styles.',
  },
];
export default function SeparatorComponent() {
  return (
    <div className="space-y-8 p-6">
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Separator Props</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {SEPARATOR_PROPS.map(item => (
            <Item key={item.title} title={item.title} description={item.description} />
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3>Horizontal variant</h3>

        <div className="flex w-full max-w-sm flex-col gap-2 text-sm">
          <dl className="flex items-center justify-between">
            <dt>Item 1</dt>
            <dd className="text-muted-foreground">Value 1</dd>
          </dl>
          <Separator />
          <dl className="flex items-center justify-between">
            <dt>Item 2</dt>
            <dd className="text-muted-foreground">Value 2</dd>
          </dl>
          <Separator />
          <dl className="flex items-center justify-between">
            <dt>Item 3</dt>
            <dd className="text-muted-foreground">Value 3</dd>
          </dl>
        </div>
      </section>
      <section className="space-y-4">
        <h3>Vertical variant</h3>

        <div className="flex items-center gap-2 text-sm md:gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-medium">Settings</span>
            <span className="text-xs text-muted-foreground">Manage preferences</span>
          </div>
          <Separator orientation="vertical" />
          <div className="flex flex-col gap-1">
            <span className="font-medium">Account</span>
            <span className="text-xs text-muted-foreground">Profile & security</span>
          </div>
          <Separator orientation="vertical" className="hidden md:block" />
          <div className="hidden flex-col gap-1 md:flex">
            <span className="font-medium">Help</span>
            <span className="text-xs text-muted-foreground">Support & docs</span>
          </div>
        </div>
      </section>
    </div>
  );
}
