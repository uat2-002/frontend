import ComponentSection from '@/components/shared/Container/ComponentSection';
import Item from '@/components/shared/Item';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Plus } from 'lucide-react';

const SEARCH_CARD_PROPS = [
  {
    title: 'variant',
    description: 'custom states: already_in_list, not_yet_added',
  },
];

export default function SearchResultCardComponent() {
  return (
    <ComponentSection>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Search Result Card Props</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {SEARCH_CARD_PROPS.map(item => (
            <Item key={item.title} title={item.title} description={item.description} />
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3>Search Result Card Examples</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          
          {/* Already in list */}
          <Card className="p-4 space-y-3 bg-card border w-full max-w-[320px]">
            <div className="w-full h-36 bg-blue-950 rounded-lg" />
            <div>
              <h4 className="font-semibold text-foreground text-base">Northbound</h4>
              <p className="text-xs text-muted-foreground">2019 · Drama</p>
            </div>
            <Button 
              variant="secondary" 
              className="w-full bg-secondary/80 text-muted-foreground hover:bg-secondary cursor-default"
              disabled
            >
              <Check className="w-4 h-4 mr-2" />
              Added
            </Button>
          </Card>

          {/* Not yet added */}
          <Card className="p-4 space-y-3 bg-card border w-full max-w-[320px]">
            <div className="w-full h-36 bg-emerald-950 rounded-lg" />
            <div>
              <h4 className="font-semibold text-foreground text-base">North Wind</h4>
              <p className="text-xs text-muted-foreground">2022 · Thriller</p>
            </div>
            <Button 
              variant="default" 
              className="w-full bg-white text-black hover:bg-white/90"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add
            </Button>
          </Card>

        </div>
      </section>
    </ComponentSection>
  );
}