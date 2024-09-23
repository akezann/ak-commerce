import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
};

const dataSlice = createSlice({
  name: "productdata",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      console.log(1337, action.payload);
      state.loading = action.payload;
    },
  },
});

const selectProducts = (state) => state.productdata || initialState;

const products = createSelector([selectProducts], (substate) => substate.data);
const loading = createSelector(
  [selectProducts],
  (substate) => substate.loading
);

export const selectors = { products, loading };

export const { addData, setLoading } = dataSlice.actions;

export default dataSlice.reducer;
