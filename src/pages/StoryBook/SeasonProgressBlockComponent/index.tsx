import { SeasonProgressBlock } from '@/components/ui/season-progress-block';

export default function SeasonProgressBlockComponent() {
  return (
    <div className="space-y-6 p-6">
      <h3 className="text-lg font-semibold">Season Progress Block</h3>
      
      <div className="flex flex-col gap-4 max-w-sm">
        <div className="space-y-2">
          <span className="text-xs text-muted-foreground">Season Progress Block</span>
          <SeasonProgressBlock
            seasonTitle="Season 2"
            watchedEpisodes={4}
            totalEpisodes={8}
          />
        </div>
      </div>
    </div>
  );
}