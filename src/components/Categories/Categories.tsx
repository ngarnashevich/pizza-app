import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Categories.module.scss';

type CaregoriesProps = {
    categoryId: number;
    onChangeCategory: (idx: number) => void;
}

const items = ['all', 'meat', 'chicken', 'vegetables', 'spicy', 'seafood'];


export const Categories: React.FC<CaregoriesProps> = ({ categoryId, onChangeCategory }) => {
   const { t } = useTranslation();
    return (
        <ul className={styles.list}>
            {items.map((item, index) => (
                <li key={index} className={`${styles.listItem} ${categoryId === index ? styles.active : ''}`} onClick={() => onChangeCategory(index)}>

                     {t(`categories.${item}`)}
                </li>
            ))}
        </ul>
    );
};

