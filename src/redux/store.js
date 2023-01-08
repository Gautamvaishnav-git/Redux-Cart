import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";

const store = configureStore({
  reducer: {
    cartReducer: cartReducer,
  },
});

export default store;
