import i18n from 'i18next';
import { initReactI18next } from 'react-i18next'
import enJson from './Translations/en.json'
import ptJson from './Translations/pt.json'

const storedLanguage = localStorage.getItem('language');

i18n.use(initReactI18next).init({
  fallbackLng: storedLanguage || 'pt',
  interpolation: {
    // React already escapes by default, so we disable it here
    escapeValue: false
  },
  resources: {
    en: enJson,
    pt: ptJson
  }
});