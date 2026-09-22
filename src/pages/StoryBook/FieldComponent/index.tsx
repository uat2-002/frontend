import ComponentSection from '@/components/shared/Container/ComponentSection';
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import Item from '@/components/shared/Item';

const FIELD_PROPS = [
  {
    title: 'orientation (default: "vertical")',
    description: '"vertical", "horizontal", "responsive"',
  },
  {
    title: 'className',
    description: 'custom classes to add or extend styles.',
  },
];

export default function FieldComponent() {
  return (
    <ComponentSection>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Field Props</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {FIELD_PROPS.map(item => (
            <Item key={item.title} title={item.title} description={item.description} />
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3>Example usage</h3>

        <div className="w-full max-w-xs">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="username">Username</FieldLabel>
              <Input id="username" type="text" placeholder="Max Leiter" />
              <FieldDescription>Choose a unique username for your account.</FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <FieldDescription>Must be at least 8 characters long.</FieldDescription>
              <Input id="password" type="password" placeholder="••••••••" />
            </Field>
          </FieldGroup>
        </div>
      </section>
    </ComponentSection>
  );
}
