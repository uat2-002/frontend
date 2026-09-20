import { MediaCard } from '@/components/ui/media-card';

export default function MediaCardComponent() {
  return (
    <div className="space-y-4 p-4">
      <h3 className="text-lg font-semibold">Media Cards</h3>
      
     
      <div className="flex flex-wrap gap-4">
        {/* Watching */}
        <div className="space-y-2">
          <span className="text-xs text-muted-foreground">Card / watching – play badge + progress line</span>
          <MediaCard
            title="Northbound"
            subtitle="Season 2 · Episode 4 of 8"
            status="watching"
            progress={45}
          />
        </div>

        {/* Watched */}
        <div className="space-y-2">
          <span className="text-xs text-muted-foreground">Card / watched – check badge</span>
          <MediaCard
            title="Autumn Light"
            subtitle="3 seasons · ended"
            status="watched"
          />
        </div>

        {/* Not Worth It */}
        <div className="space-y-2">
          <span className="text-xs text-muted-foreground">Card / not worth it – dimmed thumb</span>
          <MediaCard
            title="City Clock"
            subtitle="1 season · canceled"
            status="not_worth_it"
          />
        </div>
      </div>
    </div>
  );
}