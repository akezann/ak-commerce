import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteItems: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      if (!state.favoriteItems.includes(action.payload))
        state.favoriteItems.push(action.payload);
      else {
        state.favoriteItems = state.favoriteItems.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
    clearFavorite: (state, action) => {
      state.favoriteItems = [];
    },
  },
});

export const { addToFavorite, removeFromFavorite, clearFavorite } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
