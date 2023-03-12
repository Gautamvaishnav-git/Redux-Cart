import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExists = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (isExists) {
        state.items.forEach((item) => {
          if (item.id === isExists.id) {
            item.quantity++;
          }
        });
      } else {
        state.items.push(action.payload);
      }
    },
    increament: (state, action) => {
      let id = action.payload;
      state.items.forEach((item) => {
        if (item.id === id) {
          item.quantity++;
        }
      });
    },
    decrement: (state, action) => {
      state.items.forEach((item) => {
        if (item.id === action.payload) {
          if (item.quantity > 1) {
            item.quantity--;
          }
        }
      });
    },
    deleteProduct: (state, action) => {
      let id = action.payload;
      state.items = state.items.filter((item) => {
        return item.id !== id;
      });
    },
  },
});

export const { addToCart, increament, decrement, deleteProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
