import { EpisodeRow } from '@/components/ui/episode-row';
import Item from '@/components/shared/Item';

const EPISODE_ROW_PROPS = [
  {
    title: 'episodeNumber',
    description: 'string "Ep. 1"',
  },
  {
    title: 'title',
    description: 'string ',
  },
  {
    title: 'isWatched',
    description: 'true / false',
  },
];

export default function EpisodeRowComponent() {
  return (
    <div className="space-y-8 p-6">
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">EpisodeRow Props</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {EPISODE_ROW_PROPS.map(item => (
            <Item key={item.title} title={item.title} description={item.description} />
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3>Watched state (Left / Checked)</h3>
        <div className="flex w-full max-w-sm flex-col gap-2 text-sm">
          <EpisodeRow 
            episodeNumber="Ep. 1" 
            title="The Return" 
            isWatched={true} 
          />
        </div>
      </section>

      <section className="space-y-4">
        <h3>Unwatched state (Right / Unchecked)</h3>
        <div className="flex w-full max-w-sm flex-col gap-2 text-sm">
          <EpisodeRow 
            episodeNumber="Ep. 2" 
            title="The Old House" 
            isWatched={false} 
          />
        </div>
      </section>
    </div>
  );
}