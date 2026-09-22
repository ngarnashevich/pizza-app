const API_URL = import.meta.env.VITE_API_URL;
import { createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import type {Pizza, FetchPizzasParams, PizzaSliceState} from './types';

enum Status  {
    LOADING = 'loading',
    PENDING = 'pending',
    SUCCESS = 'success',
    ERROR = 'error',
}

export const fetchPizzas = createAsyncThunk<Pizza[], FetchPizzasParams>('pizza/fetchPizzasStatus', async (params) => {
    const { currentPage, sortBy, order, categoryId } = params;
    const urlParams = [`_page=${currentPage}`, `_limit=8`, `_sort=${sortBy}`, `_order=${order}`];

    if (categoryId > 0) {
        urlParams.push(`category=${categoryId}`);
    }


    const response = await fetch(`${API_URL}/items?${urlParams.join('&')}`);
    return response.json();
});

const initialState: PizzaSliceState = {
    items: [],
    status: Status.LOADING,
};

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setPizzas: (state, action: PayloadAction<Pizza[]>) => {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzas.pending, (state) => {
                state.status = Status.PENDING;
                state.items = [];
            })
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.status = Status.SUCCESS;
                state.items = action.payload;
            })
            .addCase(fetchPizzas.rejected, (state) => {
                state.status =  Status.ERROR;
                state.items = [];
            });
    },
});



export const { setPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;
