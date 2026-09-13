import {Button} from '../../../components/ui/button';

const ButtonComponent = () => {
  return (
    <div className="space-y-8 p-6">
      <section className="space-y-3">
        <h3>Buttons Props</h3>

        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>
            <strong className="text-foreground">variant (default: "default"):</strong> "default",
            "outline", "secondary", "ghost", "destructive", "link"
          </li>

          <li>
            <strong className="text-foreground">size (default: "default"):</strong> "default", "sm",
            "lg", "xs", "icon", "icon-xs", "icon-sm", "icon-lg"
          </li>

          <li>
            <strong className="text-foreground">disabled:</strong> true / false
          </li>

          <li>
            <strong className="text-foreground">onClick:</strong> event handler
          </li>

          <li>
            <strong className="text-foreground">className:</strong> custom classes to add or extend
            styles.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3>Variants</h3>

        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>

          <Button variant="outline">Outline</Button>

          <Button variant="secondary">Secondary</Button>

          <Button variant="ghost">Ghost</Button>

          <Button variant="destructive">Destructive</Button>

          <Button variant="link">Link</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h3>Sizes</h3>

        <div className="flex flex-wrap items-center gap-3">
          <Button size="xs">Extra Small</Button>

          <Button size="sm">Small</Button>

          <Button size="default">Default</Button>

          <Button size="lg">Large</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h3>Disabled</h3>

        <div className="flex gap-3">
          <Button disabled>Disabled</Button>

          <Button variant="destructive" disabled>
            Disabled Destructive
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ButtonComponent;
