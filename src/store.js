import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import imageReducer from "./reducers/imageReducer";
import loginReducer from "./reducers/loginReducer";
import notificationReducer from "./reducers/notificationReducer";
import themeReducer from "./reducers/themeReducer";
import overlayReducer from "./reducers/overlayReducer";

const reducer = combineReducers({
  images: imageReducer,
  notifications: notificationReducer,
  login: loginReducer,
  theme: themeReducer,
  overlay: overlayReducer,
});
const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    //redux tools in browser
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
