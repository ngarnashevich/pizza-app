import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type {CartItem, CartSliceState } from './types';

const initialState: CartSliceState = {
    totalCount: 0,
    totalPrice: 0,
    items: [],
};

const updateCartTotals = (state: CartSliceState) => {
    state.totalPrice = state.items.reduce((sum, obj) => {
        return sum + obj.price * obj.count;
    }, 0);

    state.totalCount = state.items.reduce((sum, obj) => {
        return sum + obj.count;
    }, 0);
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const findItem = state.items.find((obj) => obj.id === action.payload.id);

            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({ ...action.payload, count: 1 });
            }

            updateCartTotals(state);
        },

        plusItem: (state, action: PayloadAction<number>) => {
            const findItem = state.items.find((obj) => obj.id === action.payload);

            if (findItem) {
                findItem.count++;
            }
            updateCartTotals(state);
        },

        minusItem: (state, action: PayloadAction<number>) => {
            const findItem = state.items.find((obj) => obj.id === action.payload);

            if (findItem && findItem.count > 1) {
                findItem.count--;
            } else {
                state.items = state.items.filter((obj) => obj.id !== action.payload);
            }
            updateCartTotals(state);
        },

        removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((obj) => obj.id !== action.payload);

            updateCartTotals(state);
        },

        clearItems: (state) => {
            state.items = [];
            state.totalCount = 0;
            state.totalPrice = 0;
        },
    },
});



export const { addItem, removeItem, clearItems, plusItem, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
