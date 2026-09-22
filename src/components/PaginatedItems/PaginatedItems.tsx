import React from 'react';
import { useDispatch } from 'react-redux';
import ReactPaginateModule from 'react-paginate';

import { setCurrentPage } from '@/redux/filter/slice';
import styles from './PaginatedItems.module.scss';

// @ts-ignore
const ReactPaginate = ReactPaginateModule.default;

type PaginatedItemsProps = {
  currentPage: number;

};

type ChangePageEvent = {
      selected: number;
}

export const PaginatedItems: React.FC<PaginatedItemsProps> = ({ currentPage }) => {
  const dispatch = useDispatch();

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event: ChangePageEvent) => {
        dispatch(setCurrentPage(event.selected + 1));
      }}
      pageRangeDisplayed={8}
      pageCount={3}
      forcePage={currentPage - 1}
      renderOnZeroPageCount={null}
    />
  );
};