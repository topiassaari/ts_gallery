/* eslint-disable indent */

const themeReducer = (state = [], action) => {
  switch (action.type) {
    case "LIGHT":
      return action.data;
    case "DARK":
      return action.data;
    default:
      return state;
  }
};

export const lightTheme = () => {
  return async (dispatch) => {
    document.getElementById("root").classList.remove("dark");
    document.getElementById("root").classList.add("light");
    //a bit ugly way to do this but shall do for now
    document.querySelector("html").style.backgroundColor = "white";
    const data = "light";
    dispatch({
      type: "LIGHT",
      data,
    });
  };
};
export const darkTheme = () => {
  return async (dispatch) => {
    document.getElementById("root").classList.remove("light");
    document.getElementById("root").classList.add("dark");
    document.querySelector("html").style.backgroundColor = "black";
    const data = "dark";
    dispatch({
      type: "DARK",
      data,
    });
  };
};

export default themeReducer;
