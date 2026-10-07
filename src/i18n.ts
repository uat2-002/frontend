import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '@/locales/en/translation.json';
import ukTranslation from '@/locales/uk/translation.json';

const savedLanguage = localStorage.getItem('language');

i18next
  .use(initReactI18next)
  .init({
    returnEmptyString: false,
    fallbackLng: 'en',
    lng: savedLanguage === 'uk' ? 'uk' : 'en',
    defaultNS: 'translation',

    resources: {
      en: { translation: enTranslation },
      uk: { translation: ukTranslation },
    },
  });

export default i18next;