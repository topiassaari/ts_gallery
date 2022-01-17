/* eslint-disable react/prop-types */
import React from "react";
import filter from "../assets/filter.jpg";
import { useState } from "react";

const Filter = (props) => {
  const [open, setOpen] = useState(false);

  const years = [2017, 2018, 2019, 2020, 2021, 2022];
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          width: "1200px",
        }}
      >
        <img
          src={filter}
          style={{ height: "40px" }}
          onClick={open ? () => setOpen(false) : () => setOpen(true)}
        />
        <div
          style={{ display: open ? "flex" : "none", flexDirection: "column" }}
        >
          <div>
            <span>year</span>
            <div>
              {years.map((yr) => (
                <span
                  style={{ marginRight: "2px", cursor: "pointer" }}
                  key={yr}
                  onClick={() => props.byYear(yr)}
                >
                  {yr}
                </span>
              ))}
            </div>
          </div>
          <span onClick={() => props.byDA()}>date added</span>
        </div>
      </div>
    </div>
  );
};
export default Filter;
