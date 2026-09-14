import {Button} from '../../../../components/ui/button';
import Item from './components/Item';

const BUTTON_PROPS = [
  {
    title: 'variant (default: "default")',
    description: '"default", "outline", "secondary", "ghost", "destructive", "link"',
  },
  {
    title: 'size (default: "default")',
    description: '"default", "sm", "lg", "xs", "icon", "icon-xs", "icon-sm", "icon-lg"',
  },
  {
    title: 'disabled',
    description: 'true / false',
  },
  {
    title: 'onClick',
    description: 'event handler',
  },
  {
    title: 'className',
    description: 'custom classes to add or extend styles.',
  },
];

const BUTTON_VARIANTS = [
  {variant: 'default', label: 'Default'},
  {variant: 'outline', label: 'Outline'},
  {variant: 'secondary', label: 'Secondary'},
  {variant: 'ghost', label: 'Ghost'},
  {variant: 'destructive', label: 'Destructive'},
  {variant: 'link', label: 'Link'},
] as const;

const BUTTON_SIZES = [
  {size: 'xs', label: 'Extra Small'},
  {size: 'sm', label: 'Small'},
  {size: 'default', label: 'Default'},
  {size: 'lg', label: 'Large'},
] as const;

const DISABLED_BUTTONS = [
  {label: 'Disabled', variant: 'default'},
  {label: 'Disabled Destructive', variant: 'destructive'},
] as const;

const ButtonComponent = () => {
  return (
    <div className="space-y-8 p-6">
      <section className="space-y-3">
        <h3>Buttons Props</h3>

        <ul className="space-y-2 text-sm text-muted-foreground">
          {BUTTON_PROPS.map((item) => (
            <Item key={item.title} title={item.title} description={item.description} />
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3>Variants</h3>

        <div className="flex flex-wrap gap-3">
          {BUTTON_VARIANTS.map(({variant, label}) => (
            <Button key={label} variant={variant}>
              {label}
            </Button>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h3>Sizes</h3>

        <div className="flex flex-wrap items-center gap-3">
          {BUTTON_SIZES.map(({size, label}) => (
            <Button key={label} size={size}>
              {label}
            </Button>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h3>Disabled</h3>

        <div className="flex gap-3">
          {DISABLED_BUTTONS.map(({label, variant}) => (
            <Button key={label} disabled variant={variant}>
              {label}
            </Button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ButtonComponent;
