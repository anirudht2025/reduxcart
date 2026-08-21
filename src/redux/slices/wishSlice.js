import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState: {
    wishlist: [],
  },

  reducers: {
    addToWishlist: (state, action) => {
      if (state.wishlist.find((item) => item.id == action.payload.id)) {
        alert("Item already in wishlist!");
      } else {
        state.wishlist.push(action.payload);
        alert("Item added to wishlist!");
      }
    },

    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id != action.payload,
      );

      alert("Item removed from wishlist!");
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
