import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "http://localhost:3000/advertisements";
export const fetchBlogPosts = createAsyncThunk(
  "categories/fetchBlogPosts",
  async () => {
    const response = await axios.get(apiUrl);
    return response.data;
  }
);

const BlogSlice = createSlice({
  name: "blogs",
  initialState: {
    items: [],
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    status: "nothing",
    loading: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogPosts.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchBlogPosts.fulfilled, (state, action) => {
        state.status = "succeed";
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchBlogPosts.rejected, (state) => {
        state.status = "failed";
        state.loading = false;
      });
  },
});

export default BlogSlice.reducer;
