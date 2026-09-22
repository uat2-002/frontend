import { Input } from "@/components/ui/input.tsx"
import Item from '@/components/shared/Item';

const INPUT_PROPS = [
  {
    title: 'type',
    description: 'Input field type, like "text", "email", "password", ect.',
  },
  {
    title: 'placeholder',
    description: 'Example text inside input field',
  },
  {
    title: 'required',
    description: 'To specify if the field is required',
  },
  {
    title: 'disabled',
    description: 'To disable the input field',
  },
  {
    title: 'className',
    description: 'custom classes to add or extend styles.',
  },
];
export default function InputComponent() {
  return (
    <div className="space-y-8 p-6">
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Input Props</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {INPUT_PROPS.map(item => (
            <Item key={item.title} title={item.title} description={item.description} />
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3>Normal input</h3>

        <div className="flex w-full max-w-sm flex-col gap-2 text-sm">
          <Input placeholder="Enter text" />
        </div>
      </section>

      <section className="space-y-4">
        <h3>Disabled input</h3>

        <div className="flex w-full max-w-sm flex-col gap-2 text-sm">
          <Input placeholder="You can't type here!" disabled/>
        </div>
      </section>

      
    </div>
  );
}