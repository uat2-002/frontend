import ComponentSection from '@/components/shared/Container/ComponentSection';
import Item from '@/components/shared/Item';
import { 
  Progress, 
  ProgressTrack, 
  ProgressIndicator, 
  ProgressLabel, 
  ProgressValue 
} from '@/components/ui/progress';

const PROGRESS_PROPS = [
  {
    title: 'value',
    description: 'number (current progress value)',
  },
  {
    title: 'className',
    description: 'custom classes to add or extend styles.',
  },
];

export default function ProgressComponent() {
  return (
    <ComponentSection>
      <section className ="space-y-3">
        <h3 className="text-lg font-semibold">Progress Props</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {PROGRESS_PROPS.map(item => (
            <Item key={item.title} title={item.title} description={item.description} />
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3>Season Progress Example</h3>

        <div className="flex w-full max-w-xl flex-col gap-2 text-sm">
          <Progress value={50} className="flex-row items-center justify-between gap-4 p-4 bg-card rounded-lg border">
            <div className="space-y-1">
              <ProgressLabel className="font-semibold text-foreground">Season 2</ProgressLabel>
              <p className="text-xs text-muted-foreground">4 of 8 episodes watched</p>
            </div>
            
            <div className="flex items-center gap-3 w-1/2">
              <ProgressTrack className="h-2">
                <ProgressIndicator className="bg-destructive" />
              </ProgressTrack>
              <ProgressValue />
            </div>
          </Progress>
        </div>
      </section>
    </ComponentSection>
  );
}