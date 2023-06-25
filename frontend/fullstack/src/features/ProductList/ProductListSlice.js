import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllProducts,
  fetchBrand,
  fetchCategory,
  FilterAllProducts,
} from "./ProductListApi";

const initialState = {
  products: [],
  brands: [],
  category: [],
  status: "idle",
  total: 0,
};

//data fetch
export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetchAllProducts();
    return response.data;
  }
);

//data filter by category and brand
export const FilterAllProductsAsync = createAsyncThunk(
  "product/FilterAllProducts",
  async ({ data, sorted, pagination }) => {
    console.log(pagination, "pallaib");
    const response = await FilterAllProducts(data, sorted, pagination);
    return response.data;
  }
);

//fetch by category
export const fetchCategoryAsync = createAsyncThunk(
  "product/fetchCategory",
  async () => {
    const response = await fetchCategory();
    return response.data;
  }
);

//fetch by brand
export const fetchBrandAsync = createAsyncThunk(
  "product/fetchBrand",
  async () => {
    const response = await fetchBrand();
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload.products;
      })

      //filter

      .addCase(FilterAllProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(FilterAllProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload.products;
        state.total = action.payload.totalItems;
      })

      //category
      .addCase(fetchCategoryAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategoryAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.category = action.payload;
      })

      //brand
      .addCase(fetchBrandAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBrandAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.brands = action.payload;
      });
  },
});

export const { increment } = productSlice.actions;

export const selectAllProducts = (state) => state.product.products;
export const totalItemProduct = (state) => state.product.total;
export const AllCategory = (state) => state.product.category;
export const AllBrand = (state) => state.product.brands;

export default productSlice.reducer;
