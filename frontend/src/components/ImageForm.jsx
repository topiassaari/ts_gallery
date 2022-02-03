/* eslint-disable react/prop-types */
import React from "react";
import { useState, useEffect } from "react";
import placeholder from "../assets/placeholder.png";

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

  const [url, setUrl] = useState(props.img?.url ? props.img.url : "");
  const [desc, setDesc] = useState(props.img?.desc ? props.img.desc : "");
  const [year, setYear] = useState(props.img?.year ? props.img.year : 2017);

  const handleUrl = (event) => {
    setUrl(event.target.value);
  };
  const handleDesc = (event) => {
    setDesc(event.target.value);
  };
  const handleYear = (event) => {
    setYear(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let img = { url, desc, year };
    if (props.img?.id) {
      img = { id: props.img.id, ...img };
    }
    props.handleSubmit(img);
  };
  return (
    <div className="formContainer">
      <div className="preview">
        <img src={url ? url : placeholder} alt="preview" />
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="formUrl">url</label>
            <input
              value={url}
              onChange={handleUrl}
              type="url"
              name="url"
              id="formUrl"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="formDesc">desc</label>
            <input
              value={desc}
              onChange={handleDesc}
              type="text"
              name="desc"
              id="formDesc"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="formYear">year</label>
            <input
              value={year}
              onChange={handleYear}
              type="number"
              min="2017"
              name="year"
              id="formYear"
              required
            ></input>
          </div>
          {props.img ? (
            <>
              <Button variant="update" />
              <Button
                variant="delete"
                onClick={() => props.deleteImg(props.img)}
                type="reset"
              />
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
