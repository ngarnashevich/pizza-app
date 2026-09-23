import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '@/redux/filter/slice';
import { filterSelector } from '@/redux/filter/selectors';
import type { SortType } from '@/redux/filter/types';

import styles from './Sort.module.scss';

type SortItems = {
    key: string;
    name: string;
    property: string;
    order: string;
}

const items = [
    {
        key: 'popular',
        name: 'За популярністю',
        property: 'rating',
        order: 'desc',
    },
    {
        key: 'priceA',
        name: 'Ціна: за зростанням',
        property: 'price',
        order: 'desc',
    },
    {
        key: 'priceD',
        name: 'Ціна: за спаданням',
        property: 'price',
        order: 'asc',
    },
    {
        key: 'nameA',
        name: 'Назва: А → Я',
        property: 'title',
        order: 'asc',
    },
    {
        key: 'nameZ',
        name: 'Назва: Я → А',
        property: 'title',
        order: 'desc',
    },
];

 export const Sort:React.FC = () => {
     const { t } = useTranslation();
    const dispatch = useDispatch();
    const { sort } = useSelector(filterSelector);
    const sortRef = React.useRef<HTMLDivElement>(null);

    const [isOpen, setIsOpen] = React.useState(false);

    const handleSortClick = (index: SortType) => {
        dispatch(setSort(index));
        setIsOpen(!isOpen);
    };

   React.useEffect(() => {
        const handleClickOutside = (event: PointerEvent) => {
            if (
                sortRef.current &&
                event.target instanceof Node &&
                !sortRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    return (
        <div ref={sortRef} className={styles.sort}>
            <div className={styles.label}>
                <b>{t('sort.title')}</b>
                <span onClick={() => setIsOpen(!isOpen)}> {t(`sort.${sort.key}`)}</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
            </div>

            {isOpen && (
                <div className={styles.popup}>
                    <ul>
                        {items.map((obj, index) => (
                            <li key={index} className={obj.property === sort.name ? 'active' : ''} onClick={() => handleSortClick(obj)}>
                                {/* {obj.name} */}
                                {t(`sort.${obj.key}`)}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
