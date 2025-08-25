// @ts-nocheck
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'react-native-localize';
import en from './locales/en.json';
import tr from './locales/tr.json';


const resources = {
  en: {
    translation: en,
  },
  tr: {
    translation: tr,
  },
 
};

const supportedLanguages = ['en', 'tr']; 

const getDefaultLanguage = (): string => {
  const locales = getLocales();

  if (locales && locales.length > 0) {
    const fullLanguageCode = locales[0].languageTag;
    if (supportedLanguages.includes(fullLanguageCode)) {
      return fullLanguageCode;
    }

    const languageCode = locales[0].languageCode;
    if (supportedLanguages.includes(languageCode)) {
      return languageCode;
    }
  }

  return 'en';
};

i18n
  .use(initReactI18next) 
  .init({
    resources,

    lng: getDefaultLanguage(),

    fallbackLng: 'en',

    debug: __DEV__,

    defaultNS: 'translation',

    returnKeyIfNotFound: true,

    interpolation: {
      escapeValue: false,
    },

    cache: {
      enabled: true,
    },

    react: {
      useSuspense: false, 
    },
  });

export default i18n;