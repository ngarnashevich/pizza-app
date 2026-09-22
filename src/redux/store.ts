import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import filter from './filter/slice';
import cart from './cart/slice';
import pizza from './pizza/slice';

import storageModule from 'redux-persist/lib/storage';

// @ts-ignore
const storage = storageModule.default ?? storageModule;

const cartPersistConfig = {
    key: 'cart',
    storage,
};

const persistedCartReducer = persistReducer(cartPersistConfig, cart);

export const store = configureStore({
    reducer: {
        filter,
        cart: persistedCartReducer,
        pizza,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
