import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import noPosterPlaceholder from '@/assets/noPosterPlaceholder.png';

export const SearchResultCard = ({ ...props }) => {
  let seriesPosterPath;
  if (props.poster_path == null) {
    seriesPosterPath = noPosterPlaceholder;
  } else {
    seriesPosterPath = 'https://image.tmdb.org/t/p/w185' + props.poster_path;
  }

  return (
    <Card className="relative w-full max-w-[220px] pt-0 cursor-pointer">
      <img
        src={seriesPosterPath}
        alt="Serial cover"
        className="relative z-20 aspect-[2/3] w-full object-cover brightness-100"
      />
      <CardHeader>
        <CardTitle>{props.name}</CardTitle>
        <CardDescription>First aired : {props.first_air_date}</CardDescription>
      </CardHeader>
    </Card>
  );
};
