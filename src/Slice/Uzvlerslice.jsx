import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "http://localhost:3000/products";
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await axios.get(apiUrl);
    return response.data;
  }
);

const CategorySlice = createSlice({
  name: "uzvler",
  initialState: {
    items: [],
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    status: "nothing",
    loading: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeed";
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.status = "failed";
        state.loading = false;
      });
  },
});

export default CategorySlice.reducer;
