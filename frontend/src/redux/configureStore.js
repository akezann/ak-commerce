import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import FavoriteReducer from "./favoriteSlice";
import FilterReducer from "./filter"
import DataReducer from './data'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorite: FavoriteReducer,
    filter: FilterReducer,
    productdata: DataReducer
  },
});

export default store;
