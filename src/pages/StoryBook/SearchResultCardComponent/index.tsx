import { SearchResultCard } from '@/components/ui/search-result-card';

export default function SearchResultCardComponent() {
  return (
    <div className="space-y-4 p-4">
      <h3 className="text-lg font-semibold">Search Result Cards</h3>
      
      <div className="flex flex-wrap gap-4">
        {/* Already In List */}
        <div className="space-y-2">
          <span className="text-xs text-muted-foreground">Card / already in list</span>
          <SearchResultCard
            title="Northbound"
            subtitle="2019 · Drama"
            isAdded={true}
          />
        </div>

        {/* Not Yet Added */}
        <div className="space-y-2">
          <span className="text-xs text-muted-foreground">Card / not yet added</span>
          <SearchResultCard
            title="North Wind"
            subtitle="2022 · Thriller"
            isAdded={false}
          />
        </div>
      </div>
    </div>
  );
}