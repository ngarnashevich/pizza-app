
export type SortType = {
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

