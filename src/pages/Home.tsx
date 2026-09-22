import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import qs from 'qs';
import { useNavigate } from 'react-router';
import type { AppDispatch } from '@/redux/store';
import { setCategoryId } from '@/redux/filter/slice';
import { filterSelector } from '@/redux/filter/selectors';
import { fetchPizzas } from '@/redux/pizza/slice';
import { pizzaSelector } from '@/redux/pizza/selectors';

import { Card, Categories, Sort, CardSkeleton, PaginatedItems } from '@/components/';


const Home = () => {
    const { searchValue } = useSelector(filterSelector);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const { items, status } = useSelector(pizzaSelector);
    const { sort, currentPage, categoryId } = useSelector(filterSelector);


    const onChangeCategory =  (idx: number) => {
        dispatch(setCategoryId(idx));
    };

    const getPizzas = async () => {
        const sortBy = sort.property;
        const order = sort.order;

        try {
            await dispatch(
                fetchPizzas({
                    currentPage,
                    sortBy,
                    order,
                    categoryId,
                }),
            );
        } catch (error) {
            console.log(error);
        }
    };

    React.useEffect(() => {
        getPizzas();

        window.scrollTo(0, 0);
    }, [categoryId, sort, searchValue, currentPage]);

    React.useEffect(() => {
        const queryString = qs.stringify({
            sort: sort.property,
            category: categoryId + 1,
            page: currentPage,
        });

        navigate(`?${queryString}`);
    }, [sort, categoryId, currentPage]);


    return (
        <div className="container">
            <div className="content__top">
                <Categories categoryId={categoryId} onChangeCategory={onChangeCategory} />
                <Sort />
            </div>

            <h2 className="content__title">Усі піцци</h2>
            <div className="content__items">{status == 'loading' ? [...new Array(8)].map((_, index) => <CardSkeleton key={index} />) : items.filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase())).map((obj) => <Card key={obj.id} {...obj} />)}</div>

            <PaginatedItems currentPage={currentPage} />
        </div>
    );
}

export default Home;
