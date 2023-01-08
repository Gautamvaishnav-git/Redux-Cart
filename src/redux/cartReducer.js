import { createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction("addToCart");
const increment = createAction("increment");
const decrement = createAction("decrement");
const deleteHandler = createAction("deleteHandler");
const getTotal = createAction("getTotal");

const initialState = {
  cartItems: [],
  subtotal: 0,
  shipping: 0,
  tax: 0,
  total: 0,
};

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state, action) => {
      const item = action.payload;
      const isExist = state.cartItems.find((i) => i.id === item.id);

      if (isExist) {
        state.cartItems.forEach((i) => {
          if (i.id === item.id) i.quantity++;
        });
      } else {
        state.cartItems.push(item);
      }
    })
    .addCase(increment, (state, action) => {
      let id = action.payload;
      state.cartItems.forEach((item) => {
        if (item.id === id) {
          item.quantity++;
        }
      });
    })
    .addCase(decrement, (state, action) => {
      let id = action.payload;
      state.cartItems.forEach((item) => {
        if (item.quantity > 1) {
          if (item.id === id) {
            item.quantity--;
          }
        }
      });
    })
    .addCase(deleteHandler, (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    })
    .addCase(getTotal, (state) => {
      let sum = 0;
      state.cartItems.forEach((item) => {
        sum += item.price * item.quantity;
      });
      state.subtotal = sum;
      state.shipping = state.subtotal < 1000 ? 0 : 10;
      state.tax = Math.floor(state.subtotal * 0.18);
      state.total = state.subtotal + state.shipping + state.tax;
    });
});
export default cartReducer;
