import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
};

const dataSlice = createSlice({
    name: "productdata",
    initialState,
    reducers: {
        addData: (state, action) => {
            console.log(111, action.payload)
            state.data = action.payload
        },
    },
});

export const { addData } =
    dataSlice.actions;

export default dataSlice.reducer;
