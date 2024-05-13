import { configureStore } from "@reduxjs/toolkit";
import { blogReducer } from "./blogSlice";
import signupReducer from "./userSlice";
import { blogInteractionReducer } from "./blogInteractSlice";
import { blogManagementReducer } from "./blogManagementSlice";
import {messageReducer} from "./messageSlice";



export const store = configureStore({
  reducer: {
    blog: blogReducer,
    signup: signupReducer,
    blogManagement: blogManagementReducer,
    blogInteraction: blogInteractionReducer,
    message:messageReducer
  },
});
