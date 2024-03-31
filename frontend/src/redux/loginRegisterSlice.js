import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: {
    email: "",
    password: "",
  },
  register: {
    email: "",
    phone: "",
    password: "",
  },
  defualtTab: "LOGIN",
};

const loginRegisterSlice = createSlice({
  name: "loginRegister",
  initialState,
  reducers: {
    setLoginData: (state, action) => {
      state.login = action.payload;
    },
    setRegisterData: (state, action) => {
      state.register = action.payload;
    },
    setDefaultTab: (state, action) => {
      state.defualtTab = action.payload;
    },
  },
});

export const { setLoginData, setRegisterData, setDefaultTab } =
  filterSlice.actions;

export default loginRegisterSlice.reducer;
