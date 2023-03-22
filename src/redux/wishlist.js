import { createSlice } from "@reduxjs/toolkit";

const initialState = { list: [] };

// what I learn

// We can't change state object directly

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      let exists = state.list.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.list.push(action.payload);
      } else {
        return;
      }
    },
    removeFromWishlist: (state, action) => {
      let id = action.payload;
      state.list = state.list.filter((item) => {
        return item.id !== id;
      });
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
