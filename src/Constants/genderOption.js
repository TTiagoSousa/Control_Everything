import { useTranslation } from 'react-i18next';

const useGenderOptions = () => {
  const { t } = useTranslation();

  return {
    male: t('Male'),
    female: t('Female'),
    secret: t('Secret'),
  };
};

export default useGenderOptions;