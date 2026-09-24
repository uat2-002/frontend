import ComponentSection from '@/pages/UiLibrary/shared/Container/ComponentSection';
import Item from '@/pages/UiLibrary/shared/Item';
import { MediaCard, type UserStatus, type ActionState } from '@/components/shared/MediaCard';

const MEDIA_CARD_PROPS = [
  {
    title: 'title',
    description: 'string (required) - Media card title.',
  },
  {
    title: 'description',
    description: 'string (optional) - Description or metadata (e.g., "Season 2 · Episode 4").',
  },
  {
    title: 'imageUrl',
    description:
      'string | null (optional) - Image poster URL. If null, a fallback placeholder is shown.',
  },
  {
    title: 'status',
    description:
      '"watching" | "plan_to_watch" | "watched" | "not_worth_it" | "none"  (default: "none").Controls the bottom badge',
  },
  {
    title: 'actionState',
    description:
      '"add" | "added" | "none" (default: "none"). Shows the corresponding button instead of the status badge.',
  },
  {
    title: 'progressValue',
    description:
      'number (optional) - Progress percentage (0-100). Renders a progress bar only if status is set to "watching".',
  },
  {
    title: 'onAddClick',
    description: 'function (optional) - Click handler for the "Add" button.',
  },
];

type MockExample = {
  id: number;
  title: string;
  description: string;
  imageUrl: string | null;
  status?: UserStatus;
  actionState?: ActionState;
  progressValue?: number;
};

const MOCK_EXAMPLES: MockExample[] = [
  {
    id: 1,
    title: 'Northbound',
    description: 'Season 2 · Episode 4 of 8',
    imageUrl: null,
    status: 'watching',
    actionState: 'none',
    progressValue: 50,
  },
  {
    id: 2,
    title: 'Autumn Light',
    description: '3 seasons · Ended',
    imageUrl: null,
    status: 'watched',
  },
  {
    id: 3,
    title: 'Old Town Shadows',
    description: '1 season · Ongoing',
    imageUrl: null,
    status: 'plan_to_watch',
  },
  {
    id: 4,
    title: 'City Clock',
    description: '1 season · Canceled',
    imageUrl: null,
    status: 'not_worth_it',
  },
  {
    id: 5,
    title: 'North Wind',
    description: '2022 · Thriller',
    imageUrl: null,
    actionState: 'add',
  },
  {
    id: 6,
    title: 'Come Home Love: Lo and Behold',
    description: '2017 · Hong Kong sitcom',
    imageUrl: 'https://image.tmdb.org/t/p/w342/lgD4j9gUGmMckZpWWRJjorWqGVT.jpg',
    actionState: 'added',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_EXAMPLES.map(item => (
            <MediaCard
              key={item.id}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              status={item.status}
              actionState={item.actionState}
              progressValue={item.progressValue}
              onAddClick={() => {}}
            />
          ))}
        </div>
      </section>
    </ComponentSection>
  );
}
