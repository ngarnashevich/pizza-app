import React from 'react';


import styles from './Categories.module.scss';

type CaregoriesProps = {
    categoryId: number;
    onChangeCategory: (idx: number) => void;
}

const items = ['Усі', 'Мясні', 'Вегетаріанські', 'Гриль', 'Гострі', 'Морепродукти'];

export const Categories: React.FC<CaregoriesProps> = ({ categoryId, onChangeCategory }) => {

    return (
        <ul className={styles.list}>
            {items.map((item, index) => (
                <li key={index} className={`${styles.listItem} ${categoryId === index ? styles.active : ''}`} onClick={() => onChangeCategory(index)}>
                    {item}
                </li>
            ))}
        </ul>
    );
};

