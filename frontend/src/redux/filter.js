import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: {
    prixmax: 0,
    prixmin: 0,
    category: 0,
  },
  searchValue: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filter = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const {setFilters, setSearchValue} = filterSlice.actions;

export default filterSlice.reducer
