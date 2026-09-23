import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import { filterSelector } from '@/redux/filter/selectors';
import { setSearchValue } from '@/redux/filter/slice';
import styles from './Search.module.scss';

export const Search:React.FC = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [value, setValue] = React.useState('');
    const { searchValue } = useSelector(filterSelector);

    const searchDebounce = React.useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str));
        }, 1000),
        [],
    );

    const onChangeSerachInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        searchDebounce(event.target.value);
    };

    return (
        <div className={styles.root}>
            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" aria-hidden="true">
                <path d="M11 2a9 9 0 105.641 16.01.966.966 0 00.152.197l3.5 3.5a1 1 0 101.414-1.414l-3.5-3.5a1 1 0 00-.197-.153A8.96 8.96 0 0020 11a9 9 0 00-9-9Zm0 2a7 7 0 110 14 7 7 0 010-14Z"></path>
            </svg>
            <input name="search" className={styles.input} type="search" placeholder={t('header.search')} value={value} onChange={onChangeSerachInput} />
        </div>
    );
}
