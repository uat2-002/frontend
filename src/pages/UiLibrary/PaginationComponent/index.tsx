import Item from '@/pages/UiLibrary/shared/Item';
import { Pagination } from '@/components/shared/Pagination';
import ComponentSection from '@/pages/UiLibrary/shared/Container/ComponentSection';

const PAGINATION_PROPS = [
  { title: 'totalPages', description: '(number) total pages' },
  { title: 'currentPage', description: '(number) Currently active page ' },
  {
    title: 'onChange',
    description: ' ((page: number) => void) Callback function triggered when a page changes',
  },
];

export default function PaginationComponent() {
  return (
    <ComponentSection>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Pagination Props</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {PAGINATION_PROPS.map(item => (
            <Item key={item.title} title={item.title} description={item.description} />
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Example</h3>
        <div className="flex flex-wrap gap-3">
          <Pagination totalPages={56} currentPage={2} onChange={() => {}} />
        </div>
      </section>
    </ComponentSection>
  );
}
