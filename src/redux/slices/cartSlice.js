import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    cart: [],
  },

  reducers: {
    addToCart: (state, action) => {
      if (state.cart.find((item) => item.id == action.payload.id)) {
        const product = state.cart.find((item) => item.id == action.payload.id);
        product.quantity += 1;
        alert("Item quantity updated!");
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
        alert("Item added to cart!");
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id != action.payload);
      alert("Item removed from cart!");
    },

    increaseQuantity: (state, action) => {
      const product = state.cart.find((item) => item.id == action.payload);
      product.quantity += 1;
    },

    decreaseQuantity: (state, action) => {
      const product = state.cart.find((item) => item.id == action.payload);
      if (product.quantity == 1) {
        state.cart = state.cart.filter((item) => item.id != action.payload);
      } else {
        product.quantity -= 1;
      }
    },

    clearCart: (state) => {
      state.cart = [];
      alert("Cart cleared!");
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
