import { createSlice } from '@reduxjs/toolkit';
import { getAllProducts, getProductById } from './operations';

const productSchema = {
  id: '',
  name: '',
  price: 0,
  categoryName: ''
}
const initialState = {
  allProducts: [],
  selectedProduct: productSchema,
  isLoading: false,
  error: null
};
export const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(getAllProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.allProducts = [];
    })
    .addCase(getAllProducts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.allProducts = payload;
    })
    .addCase(getAllProducts.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    })
    .addCase(getProductById.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.selectedProduct = productSchema;
    })
    .addCase(getProductById.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.selectedProduct = payload;
    })
    .addCase(getProductById.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    })
  },
});

export const productsReducer = productsSlice.reducer;
