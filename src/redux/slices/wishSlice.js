import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState: {
    wishlist: [],
  },

  reducers: {
    addToWishlist: (state, action) => {
      if (state.wishlist.find((item) => item.id == action.payload.id)) {
        Swal.fire({
          title: "Already Added!",
          text: "Item is already in your wishlist!",
          icon: "warning",
          timer: 1500,
          showConfirmButton: false,
        });
      } else {
        state.wishlist.push(action.payload);

        Swal.fire({
          title: "Added!",
          text: "Item added to wishlist!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    },

    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id != action.payload,
      );

      Swal.fire({
        title: "Removed!",
        text: "Item removed from wishlist!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
