import { useSearchParams } from "react-router";

export default function BrowsePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  searchParams.get('search_querry');
  let output;
  if(searchParams.get('search_querry')) {
    output = 'true' //check if can get series, cards for result, "couldn't find" card
  } else {
    output = 'false' //show popular series
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">{output}</div>
    </div>
  );
}
