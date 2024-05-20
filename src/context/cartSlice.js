import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: JSON.parse(localStorage.getItem("carts")) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      let index = state.value?.findIndex(
        (el) => el?.id === action?.payload?.id
      );
      if (index < 0) {
        state.value = [...state.value, { ...action.payload, quantity: 1 }];
      }
      localStorage.setItem("carts", JSON.stringify(state.value));
    },

    incrementCartQuantity(state, action) {
      let index = state.value?.findIndex((el) => el.id === action.payload.id);
      state.value?.map((el, i) => {
        index === i ? { ...el, quantity: el.quantity ++ } : el;
      });
      localStorage.setItem("carts", JSON.stringify(state.value));
    },

    decrementCartQuantity(state, action) {
      let index = state.value.findIndex((el) => el?.id === action?.payload?.id);
      state.value?.map((el, i) => {
        i === index ? { ...el, quantity: el.quantity-- } : el;
      });
      localStorage.setItem("carts", JSON.stringify(state.value));
    },
    removeFromCart: (state, action) => {
      state.value = state.value.filter((el) => el?.id !== action?.payload?.id);
      localStorage.setItem("carts", JSON.stringify(state.value));
    },

    removeAllItemsFromCart(state) {
      state.value = [];
      localStorage.setItem("carts", JSON.stringify(state.value));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementCartQuantity,
  decrementCartQuantity,
  removeAllItemsFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
