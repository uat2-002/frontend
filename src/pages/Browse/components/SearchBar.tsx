import { Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

import { Button } from '@/components/ui/button';
import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

export default function SearchBar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  return (
    <Field orientation="horizontal">
      <Input
        type="search"
        placeholder="Search series"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <Button onClick={() => {
        navigate(`/browse?query=${query}&page=1`);
      }}>
        <Search></Search>
      </Button>
    </Field>
  );
}