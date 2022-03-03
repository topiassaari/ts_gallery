/* eslint-disable indent */

const overlayReducer = (state = [], action) => {
  switch (action.type) {
    case "SET-OVERLAY":
      return action.data;
    case "REMOVE-OVERLAY":
      return action.data;
    default:
      return state;
  }
};

export const setOverlay = () => {
  return async (dispatch) => {
    const data = true;
    dispatch({
      type: "SET-OVERLAY",
      data,
    });
  };
};
export const removeOverlay = () => {
  return async (dispatch) => {
    const data = false;
    dispatch({
      type: "REMOVE-OVERLAY",
      data,
    });
  };
};

export default overlayReducer;
