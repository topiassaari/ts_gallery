/* eslint-disable react/prop-types */
import React from "react";
import { useState, useEffect } from "react";
import placeholder from "../assets/placeholder.png";
import { useDispatch } from "react-redux";
import { updateImage, deleteImage } from "../reducers/imageReducer";
import Button from "./Button";

const ImageForm = (props) => {
  //clean form if user is forced to logout
  useEffect(() => {
    return () => {
      setUrl("");
      setDesc("");
      setYear(2017);
    };
  }, []);

  const dispatch = useDispatch();
  const [url, setUrl] = useState(props.img?.url ? props.img.url : "");
  const [desc, setDesc] = useState(props.img?.desc ? props.img.desc : "");
  const [year, setYear] = useState(props.img?.year ? props.img.year : 2017);

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(updateImage({ id: props.img.id, url, desc, year }));
  };
  const deleteImg = async () => {
    dispatch(deleteImage(props.img.id)).then(() => props.onClose());
  };
  const handleUrl = (event) => {
    setUrl(event.target.value);
  };
  const handleDesc = (event) => {
    setDesc(event.target.value);
  };
  const handleYear = (event) => {
    setYear(event.target.value);
  };
  return (
    <div className="form">
      <div className="preview">
        <img src={url ? url : placeholder} />
      </div>
      <div>
        <form onSubmit={handleSubmit} id="form">
          <div>
            <label htmlFor="url">url</label>
            <input
              value={url}
              onChange={handleUrl}
              type="url"
              name="url"
              id="url"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="desc">desc</label>
            <input
              value={desc}
              onChange={handleDesc}
              type="text"
              name="desc"
              id="desc"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="year">year</label>
            <input
              value={year}
              onChange={handleYear}
              type="number"
              min="2017"
              name="year"
              id="year"
              required
            ></input>
          </div>
          {props.img ? (
            <>
              <Button variant="update" />
              <Button variant="delete" onClick={deleteImg} type="reset" />
            </>
          ) : (
            <Button variant="submit" />
          )}
        </form>
      </div>
    </div>
  );
};
export default ImageForm;
