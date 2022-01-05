import React from "react";
import postalService from "../services/postalService";
import { useState } from "react";
import placeholder from "../assets/placeholder.png";

const NewPostForm = () => {
  const [url, setUrl] = useState("");
  const [desc, setDesc] = useState("");
  const [year, setYear] = useState(2017);

  const handleSubmit = async (event) => {
    event.preventDefault();
    postalService.create({ url, desc, year }).then(() => {
      setUrl("");
      setDesc("");
      setYear(2017);
    });
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
    <div id="newPostForm">
      <div id="preview">
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
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};
export default NewPostForm;
