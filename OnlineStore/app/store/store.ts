import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice';
import searchReducer from './productSlice';
const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
        search: searchReducer,
    },
});


export default store;
