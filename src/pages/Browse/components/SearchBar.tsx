import { Search } from 'lucide-react';
import { Form } from 'react-router';

import { Button } from '@/components/ui/button';
import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

export const SearchBar = () => {
  return (
    <Form action="/browse" className="w-full">
      <Field orientation="horizontal">
        <Input type="search" name="query" placeholder="Search series" />
        <Button type="submit">
          <Search />
        </Button>
      </Field>
    </Form>
  );
};
