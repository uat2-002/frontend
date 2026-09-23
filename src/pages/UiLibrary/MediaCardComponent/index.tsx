import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import ComponentSection from '@/pages/UiLibrary/shared/Container/ComponentSection';
import Item from '@/pages/UiLibrary/shared/Item';
import { Play } from 'lucide-react';

const MEDIA_CARD_PROPS = [
  {
    title: 'variant',
    description: 'custom states: watching, watched, not_worth_it',
  },
];

export default function MediaCardComponent() {
  return (
    <ComponentSection>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Media Card Props</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {MEDIA_CARD_PROPS.map(item => (
            <Item key={item.title} title={item.title} description={item.description} />
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3>Media Card Examples</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <Card className="p-4 space-y-3 bg-card border w-full max-w-[320px]">
            <div className="w-full h-36 bg-blue-950 rounded-lg relative flex items-end p-2.5">
              <div
                className="absolute top-2.5 right-2.5 w-6 h-6 bg-black/40 rounded-full flex items-center
              justify-center"
              >
                <Play className="w-3 h-3 text-white fill-white" />
              </div>
              <div className="w-full bg-muted/40 h-1.5 rounded-full overflow-hidden">
                <div className="bg-destructive w-1/2 h-full" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground text-base">Northbound</h4>
              <p className="text-xs text-muted-foreground">Season 2 · Episode 4 of 8</p>
            </div>
            <Badge variant="destructive" className="text-xs">
              Watching
            </Badge>
          </Card>

          <Card className="p-4 space-y-3 bg-card border w-full max-w-[320px]">
            <div className="w-full h-36 bg-emerald-950 rounded-lg relative flex items-start justify-end p-2.5">
              <span className="text-emerald-400 font-bold text-sm">✓</span>
            </div>
            <div>
              <h4 className="font-semibold text-foreground text-base">Autumn Light</h4>
              <p className="text-xs text-muted-foreground">3 seasons · ended</p>
            </div>
            <Badge variant="default" className="text-xs">
              Watched
            </Badge>
          </Card>

          <Card className="p-4 space-y-3 bg-card border opacity-50 w-full max-w-[320px]">
            <div className="w-full h-36 bg-zinc-900 rounded-lg border border-border/20" />
            <div>
              <h4 className="font-semibold text-foreground text-base">City Clock</h4>
              <p className="text-xs text-muted-foreground">1 season · canceled</p>
            </div>
            <Badge variant="secondary" className="text-xs">
              Not Worth It
            </Badge>
          </Card>
        </div>
      </section>
    </ComponentSection>
  );
}
