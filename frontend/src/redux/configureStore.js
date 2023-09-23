import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import FavoriteReducer from "./favoriteSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorite: FavoriteReducer,
  },
});

export default store;
