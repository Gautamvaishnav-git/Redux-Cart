import { createSlice } from "@reduxjs/toolkit";
import {
  handleAddToCart,
  handleDec,
  handleDelete,
  handleInc,
} from "./cartReducerFunc";

const initialState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => handleAddToCart(state, action),
    increament: (state, action) => handleInc(state, action),
    decrement: (state, action) => handleDec(state, action),
    deleteProduct: (state, action) => handleDelete(state, action),
  },
});

export const { addToCart, increament, decrement, deleteProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
