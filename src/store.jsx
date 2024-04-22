import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./Slice/Uzvlerslice";
import BlogSlice from "./Slice/Blogslice";

export const store = configureStore({
  reducer: {
    uzvler: CategorySlice,
    blogs: BlogSlice,
  },
});
