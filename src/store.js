import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import imageReducer from "./reducers/imageReducer";
import loginReducer from "./reducers/loginReducer";
import notificationReducer from "./reducers/notificationReducer";
import themeReducer from "./reducers/themeReducer";
import overlayReducer from "./reducers/overlayReducer";

const reducer = {
  images: imageReducer,
  notifications: notificationReducer,
  login: loginReducer,
  theme: themeReducer,
  overlay: overlayReducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
