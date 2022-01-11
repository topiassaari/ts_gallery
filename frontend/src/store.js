import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import imageReducer from "./reducers/imageReducer";
import loginReducer from "./reducers/loginReducer";

const reducer = combineReducers({
  images: imageReducer,
  login: loginReducer,
});
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
