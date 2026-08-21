import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

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

        Swal.fire({
          title: "Updated!",
          text: "Item quantity updated!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });

        Swal.fire({
          title: "Added!",
          text: "Item added to cart!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id != action.payload);

      Swal.fire({
        title: "Removed!",
        text: "Item removed from cart!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    },

    increaseQuantity: (state, action) => {
      const product = state.cart.find((item) => item.id == action.payload);

      if (product) {
        product.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const product = state.cart.find((item) => item.id == action.payload);

      if (product) {
        if (product.quantity == 1) {
          state.cart = state.cart.filter((item) => item.id != action.payload);
        } else {
          product.quantity -= 1;
        }
      }
    },

    clearCart: (state) => {
      state.cart = [];

      Swal.fire({
        title: "Cart Cleared!",
        text: "All items have been removed from your cart.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
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
