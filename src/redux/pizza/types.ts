export type Pizza = {
    id: number;
    imageUrl: string;
    title: string;
    price: number;
    sizes: string[];
    types: string[];
    count: number;
}

export type FetchPizzasParams = {
    currentPage: number;
    sortBy: string;
    order: string;
    categoryId: number;
};

export interface PizzaSliceState {
    items: Pizza[];
    status: string;
}