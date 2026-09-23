import ComponentSection from '@/components/shared/Container/ComponentSection';
import Item from '@/components/shared/Item';
import { Checkbox } from '@/components/ui/checkbox';

const EPISODE_PROPS = [
  {
    title: 'defaultChecked',
    description: 'true / false (initial state of the checkbox)',
  },
  {
    title: 'className',
    description: 'custom classes to add or extend styles.',
  },
];

export default function EpisodeRowComponent() {
  return (
    <ComponentSection>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Episode Row Props</h3>

        <ul className="space-y-2 text-sm text-muted-foreground">
          {EPISODE_PROPS.map(item => (
            <Item key={item.title} title={item.title} description={item.description} />
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3>Example</h3>

        <div className="flex flex-col gap-3 max-w-xl">
      
          <div className="flex items-center gap-4 p-3 rounded-lg bg-card border text-card-foreground">
            <Checkbox 
              defaultChecked 
              className="data-[state=checked]:bg-destructive data-[state=checked]:border-destructive" 
            />
            <span className="text-muted-foreground w-12">Ep. 1</span>
            <span className="font-medium">The Return</span>
          </div>

      
          <div className="flex items-center gap-4 p-3 rounded-lg bg-card border text-card-foreground">
            <Checkbox 
              className="data-[state=checked]:bg-destructive data-[state=checked]:border-destructive" 
            />
            <span className="text-muted-foreground w-12">Ep. 2</span>
            <span className="font-medium text-muted-foreground">The Old House</span>
          </div>
        </div>
      </section>
    </ComponentSection>
  );
}