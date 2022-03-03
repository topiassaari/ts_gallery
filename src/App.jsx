import React from "react";
import Gallery from "./views/Gallery";
import Admin from "./views/Admin";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import "./styles/light.scss";
import "./styles/dark.scss";
import "./styles/App.scss";
import { useDispatch } from "react-redux";
import { getAll } from "./reducers/imageReducer";
import Notification from "./components/Notification";
import { userValidation } from "./reducers/loginReducer";
import { lightTheme } from "./reducers/themeReducer";
import { removeOverlay } from "./reducers/overlayReducer";

const App = () => {
  const [nav, setNav] = useState("gallery");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);
  useEffect(() => {
    dispatch(userValidation());
    dispatch(lightTheme());
    //bad naming here but it initiates the overlay to be false...
    dispatch(removeOverlay());
  }, []);
  const handleNav = (val) => {
    setNav(val);
  };
  return (
    <div className="App" role="main">
      <Header handleNav={handleNav} />
      <Notification />
      {nav === "gallery" ? <Gallery /> : <Admin />}
    </div>
  );
};

export default App;
