import { configureStore } from "@reduxjs/toolkit";
import githubUserSlice from "./slice/githubUserSlice";
const store = configureStore({
  reducer: {
    githubUsers: githubUserSlice.reducer,
  },
});
export default store;
