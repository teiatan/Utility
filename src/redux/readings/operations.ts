import { createAsyncThunk } from '@reduxjs/toolkit';
import * as apiOperations from 'service/productsRequests';

export const getAllProducts = createAsyncThunk(
  'tasks/getAllProducts',
  async (_, thunkAPI) => {
    try {
      const data = await apiOperations.getAllProducts();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getProductById = createAsyncThunk(
  'tasks/getProductById',
  async (id, thunkAPI) => {
    try {
      const data = await apiOperations.getProductById(id);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
