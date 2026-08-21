import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://dummyjson.com/products");
    sessionStorage.setItem("products", JSON.stringify(response.data.products));
    return response.data;
  },
);

const productSlice = createSlice({
  name: "products",

  initialState: {
    pending: false,
    products: [],
    error: "",
    productsCopy: [],
    currentPage: 1,
  },

  reducers: {
    searchProduct: (state, action) => {
      const searchkey = action.payload;

      state.products = state.productsCopy.filter((item) =>
        item.title.toLowerCase().includes(searchkey.toLowerCase()),
      );
    },

    nextPage: (state) => {
      state.currentPage += 1;
    },

    prevPage: (state) => {
      state.currentPage -= 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.pending = true;
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.pending = false;
        state.products = action.payload.products;
        state.productsCopy = action.payload.products;
      })

      .addCase(fetchProducts.rejected, (state) => {
        state.pending = false;
        state.error = "API Calling Failed";
      });
  },
});

export const { searchProduct, nextPage, prevPage } = productSlice.actions;

export default productSlice.reducer;
