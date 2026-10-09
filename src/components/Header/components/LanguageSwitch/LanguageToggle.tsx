import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.tsx';
import { useTranslation } from 'react-i18next';

export const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language === 'uk' ? 'UA' : 'EN';

  const changeLanguage = (language: 'en' | 'uk') => {
    i18n.changeLanguage(language);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="outline" size="sm">
            {currentLanguage}
            <span className="sr-only">Change language</span>
          </Button>
        }
      />
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage('en')}>
          EN
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => changeLanguage('uk')}>
          UA
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};