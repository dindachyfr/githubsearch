import { configureStore } from "@reduxjs/toolkit";
import userReducer from './actions/userSlice';
import repoSlice from "./actions/repoSlice";

export default configureStore({
   reducer: {
      user: userReducer,
      repo: repoSlice,
   },
})