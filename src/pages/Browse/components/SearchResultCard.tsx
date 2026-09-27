import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import noPosterPlaceholder from '@/assets/noPosterPlaceholder.png';

type SearchResultProps = {
  name?: string;
  title?: string;

  first_air_date?: string;
  releaseDate?: string;

  poster_path?: string | null;
  poster?: string | null;
};

export const SearchResultCard = (props: SearchResultProps) => {
  const name = props.name ?? props.title;
  const releaseDate = props.first_air_date ?? props.releaseDate;
  const posterPath = props.poster_path ?? props.poster;

  const seriesPosterPath = posterPath
    ? `https://image.tmdb.org/t/p/w185${posterPath}`
    : noPosterPlaceholder;

  return (
    <Card className="relative w-full max-w-[220px] pt-0 cursor-pointer">
      <img
        src={seriesPosterPath}
        alt="Serial cover"
        className="relative z-20 aspect-[2/3] w-full object-cover brightness-100"
      />
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>First aired : {releaseDate}</CardDescription>
      </CardHeader>
    </Card>
  );
};
