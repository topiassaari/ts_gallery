/* eslint-disable indent */
import postalService from "../services/postalService";
import { setNotification } from "./notificationReducer";

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
    case "ERROR": {
      return state;
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
    postalService.create(content).then((data) => {
      if (data.error) {
        if (data.error) {
          return dispatch(errorNotification(data.error));
        }
      }
      dispatch({
        type: "NEW",
        data,
      });
    });
  };
};

export const updateImage = (img) => {
  return async (dispatch) => {
    postalService
      .update(img.id, {
        url: img.url,
        desc: img.desc,
        year: img.year,
      })
      .then((data) => {
        if (data.error) {
          if (data.error) {
            return dispatch(errorNotification(data.error));
          }
        }
        dispatch({
          type: "UPDATE",
          data,
        });
      });
  };
};

export const deleteImage = (id) => {
  return async (dispatch) => {
    postalService.deleteImage(id).then((data) => {
      if (data.error) {
        return dispatch(errorNotification(data.error));
      }
      dispatch({
        type: "DELETE",
        id,
      });
    });
  };
};

const errorNotification = (error) => {
  return async (dispatch) => {
    if (error === "token expired") {
      dispatch(setNotification("token expired, log in again", "error", 5));
    }
    if (error === "token invalid") {
      dispatch(setNotification("token invalid", "error", 5));
    } else {
      dispatch(setNotification("idk something happened", "error", 5));
    }
    return { type: "ERROR" };
  };
};

export default imageReducer;
