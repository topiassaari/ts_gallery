/* eslint-disable indent */
import postalService from "../services/postalService";

const imageReducer = (state = [], action) => {
  switch (action.type) {
    case "GET":
      return action.data;
    case "NEW":
      return [...state, action.data];
    default:
      return state;
  }
};
export const getAll = () => {
  return async (dispatch) => {
    const images = await postalService.getAll();
    dispatch({
      type: "GET",
      data: images,
    });
  };
};

export const createBlog = (content) => {
  return async (dispatch) => {
    const newImg = await postalService.create(content);
    dispatch({
      type: "NEW",
      data: newImg,
    });
  };
};

export default imageReducer;
