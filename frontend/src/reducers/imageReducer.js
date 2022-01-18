/* eslint-disable indent */
import postalService from "../services/postalService";

const imageReducer = (state = [], action) => {
  switch (action.type) {
    case "GET":
      return action.data;
    case "NEW":
      return [...state, action.data];
    case "UPDATE":
      return state.map((a) => (a.id !== action.data.id ? a : action.data));
    case "DELETE": {
      return state.filter((b) => b.id !== action.id);
    }
    default:
      return state;
  }
};
export const getAll = () => {
  return async (dispatch) => {
    const data = await postalService.getAll();

    data.sort((a, b) => new Date(b.year) - new Date(a.year));
    dispatch({
      type: "GET",
      data,
    });
  };
};

export const addImage = (content) => {
  return async (dispatch) => {
    const data = await postalService.create(content);

    dispatch({
      type: "NEW",
      data,
    });
  };
};

export const updateImage = (img) => {
  return async (dispatch) => {
    const data = await postalService.update(img.id, {
      url: img.url,
      desc: img.desc,
      year: img.year,
    });
    dispatch({
      type: "UPDATE",
      data,
    });
  };
};

export const deleteImage = (id) => {
  return async (dispatch) => {
    await postalService.deleteImage(id);
    dispatch({
      type: "DELETE",
      id,
    });
  };
};

export default imageReducer;
