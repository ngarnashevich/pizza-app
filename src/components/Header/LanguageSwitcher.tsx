import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      <button onClick={() => i18n.changeLanguage('uk')}>
        UA
      </button>

      <button onClick={() => i18n.changeLanguage('en')}>
        EN
      </button>
    </div>
  );
};