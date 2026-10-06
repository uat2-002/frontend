import { Badge, type badgeVariants } from '@/components/ui/badge';
import ComponentSection from '@/pages/UiLibrary/shared/Container/ComponentSection';
import Item from '@/pages/UiLibrary/shared/Item';
import type { VariantProps } from 'class-variance-authority';

const STATUS_PROPS = [
  {
    title: 'variant',
    description: '"default", "outline", "secondary", "ghost", "destructive", "link"',
  },
  {
    title: 'className',
    description: 'custom classes for status colors.',
  },
];

const USER_STATUSES: {
  label: string;
  variant: NonNullable<VariantProps<typeof badgeVariants>['variant']>;
  subtext: string;
}[] = [
  { label: 'Watching', variant: 'destructive', subtext: 'user_status: watching' },
  { label: 'Plan to Watch', variant: 'secondary', subtext: 'user_status: plan_to_watch' },
  { label: 'Watched', variant: 'default', subtext: 'user_status: watched' },
  { label: 'Not Worth It', variant: 'secondary', subtext: 'user_status: not_worth_it' },
];

const SERIES_STATUSES: {
  label: string;
  variant: NonNullable<VariantProps<typeof badgeVariants>['variant']>;
  subtext: string;
}[] = [
  { label: 'Ongoing', variant: 'default', subtext: 'series_status: ongoing' },
  { label: 'Ended', variant: 'secondary', subtext: 'series_status: ended' },
];

const StatusPillsComponent = () => {
  return (
    <ComponentSection>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Status Pills Props</h3>

        <ul className="space-y-2 text-sm text-muted-foreground">
          {STATUS_PROPS.map(item => (
            <Item key={item.title} title={item.title} description={item.description} />
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3>User Status</h3>
        <div className="flex flex-wrap gap-6">
          {USER_STATUSES.map(({ label, variant, subtext }) => (
            <div key={label} className="flex flex-col gap-1">
              <Badge variant={variant}>{label}</Badge>
              <span className="text-xs text-muted-foreground">{subtext}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h3>Series Status</h3>
        <div className="flex flex-wrap gap-6">
          {SERIES_STATUSES.map(({ label, variant, subtext }) => (
            <div key={label} className="flex flex-col gap-1">
              <Badge variant={variant}>{label}</Badge>
              <span className="text-xs text-muted-foreground">{subtext}</span>
            </div>
          ))}
        </div>
      </section>
    </ComponentSection>
  );
};

export default StatusPillsComponent;
