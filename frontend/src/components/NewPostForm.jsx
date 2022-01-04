import React from "react";
import postalService from "../services/postalService";

const NewPostForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    postalService
      .create({
        url: event.target.url.value,
        desc: event.target.desc.value,
        year: event.target.year.value,
      })
      .then(() => {
        event.target.reset();
      });
  };
  return (
    <div id="newPostForm">
      <div>
        <form onSubmit={handleSubmit} id="form">
          <div>
            <label htmlFor="url">url</label>
            <input type="url" name="url" id="url" required></input>
          </div>
          <div>
            <label htmlFor="desc">desc</label>
            <input type="text" name="desc" id="desc" required></input>
          </div>
          <div>
            <label htmlFor="year">year</label>
            <input
              type="number"
              min="2017"
              max="2022"
              name="year"
              id="year"
              defaultValue={2017}
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
