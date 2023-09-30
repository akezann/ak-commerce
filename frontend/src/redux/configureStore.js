import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import FavoriteReducer from "./favoriteSlice";
import FilterReducer from "./filter"

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorite: FavoriteReducer,
    filter: FilterReducer
  },
});

export default store;
