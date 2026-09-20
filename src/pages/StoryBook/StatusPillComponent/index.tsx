import { StatusPill } from '@/components/ui/status-pill';
import Item from '@/components/shared/Item';

const STATUS_PILL_PROPS = [
  {
    title: 'type',
    description: '"user" / "series"',
  },
  {
    title: 'status',
    description: 'string (watching, watched, ongoing, ended)',
  },
];

export default function StatusPillComponent() {
  return (
    <div className="space-y-8 p-6">
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">StatusPill Props</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {STATUS_PILL_PROPS.map(item => (
            <Item key={item.title} title={item.title} description={item.description} />
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-semibold">User Statuses</h3>
        <div className="flex flex-wrap items-center gap-3">
          <StatusPill type="user" status="watching" />
          <StatusPill type="user" status="plan_to_watch" />
          <StatusPill type="user" status="watched" />
          <StatusPill type="user" status="not_worth_it" />
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-semibold">Series Statuses</h3>
        <div className="flex flex-wrap items-center gap-3">
          <StatusPill type="series" status="ongoing" />
          <StatusPill type="series" status="ended" />
        </div>
      </section>
    </div>
  );
}