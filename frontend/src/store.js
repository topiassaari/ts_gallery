import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import imageReducer from "./reducers/imageReducer";
import loginReducer from "./reducers/loginReducer";
import notificationReducer from "./reducers/notificationReducer";

const reducer = combineReducers({
  images: imageReducer,
  notifications: notificationReducer,
  login: loginReducer,
});
const store = createStore(reducer, compose(applyMiddleware(thunk)));

export default store;
