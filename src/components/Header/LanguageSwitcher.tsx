import React from 'react'
import { useTranslation } from 'react-i18next';

import styles from './Header.module.scss';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className={styles.lang}>
      <button className={i18n.language === 'uk' ? styles.active : ''} onClick={() => i18n.changeLanguage('uk')}>
        UA
      </button>

      <button className={i18n.language === 'en' ? styles.active : ''} onClick={() => i18n.changeLanguage('en')}>
        EN
      </button>
    </div>
  );
};