import { Search } from 'lucide-react';
import { Form } from 'react-router';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';
import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

export const SearchBar = () => {
  const { t } = useTranslation();

  return (
    <Form action="/browse" className="w-full">
      <Field orientation="horizontal">
        <Input
          type="search"
          name="query"
          placeholder={t('searchSeries')}
        />
        <Button type="submit">
          <Search />
        </Button>
      </Field>
    </Form>
  );
};