import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishSlice";

const store = configureStore({
  reducer: {
    productReducer,
    cartReducer,
    wishlistReducer,
  },
});

export default store;
