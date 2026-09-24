import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import ComponentSection from '@/pages/UiLibrary/shared/Container/ComponentSection';
import Item from '@/pages/UiLibrary/shared/Item';

const CARD_PROPS = [
  {
    title: 'size (default: "default")',
    description: '"default", "sm"',
  },
];

export default function CardComponent() {
  return (
    <ComponentSection>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Card Props</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {CARD_PROPS.map(item => (
            <Item key={item.title} title={item.title} description={item.description} />
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3>Basic card example</h3>

        <div className="flex w-full max-w-sm flex-col gap-2 text-sm">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
              <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </section>
    </ComponentSection>
  );
}
