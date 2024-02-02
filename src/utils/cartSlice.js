import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: [],
  },

  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removerItems: (state, action) => {
      state.items.pop(action.payload);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItems, removerItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
