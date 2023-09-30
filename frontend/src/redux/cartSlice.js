import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

// useFull functions

const updateTotalPrice = (cartItems) => {
  return cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
};

function itemExistsInCart(cartItems, itemId) {
  return cartItems.some((item) => item.id === itemId);
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const itemId = newItem.id;
      if (!itemExistsInCart(state.cartItems, itemId))
        state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    clearCart: (state, action) => {
      state.cartItems = [];
    },
    totalPrice: (state) => {
      state.totalPrice = updateTotalPrice(state.cartItems);
    },
  },
});

export const { addToCart, removeFromCart, clearCart, totalPrice } =
  cartSlice.actions;

export default cartSlice.reducer;
