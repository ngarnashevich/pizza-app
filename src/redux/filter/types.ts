
export type SortType = {
    key: string;
    name: string;
    property:  string;
    order:  string;
}

export interface FilterState {
    searchValue: string;
    sort: SortType,
    categoryId: number;
    currentPage: number;
}

