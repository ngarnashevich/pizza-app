export type CartItem = {
    id: number;
    imageUrl: string;
    title: string;
    price: number;
    sizes: string;
    types: string;
    count: number;
}

export interface CartSliceState {
    totalCount: number;
    totalPrice: number;
    items: CartItem[];
}