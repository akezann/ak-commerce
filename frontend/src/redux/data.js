import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
};

const dataSlice = createSlice({
    name: "productdata",
    initialState,
    reducers: {
        addData: (state, action) => {
            state.data = action.payload
        },
    },
});

export const { addData } =
    dataSlice.actions;

export default dataSlice.reducer;
