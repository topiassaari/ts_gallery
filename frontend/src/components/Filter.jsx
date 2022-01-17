/* eslint-disable react/prop-types */
import React from "react";
import filter from "../assets/filter.jpg";
import { useState } from "react";

const Filter = (props) => {
  const [open, setOpen] = useState(false);
  const years = [2017, 2018, 2019, 2020, 2021];

  const filterByYear = (yr) => {
    const all = document.querySelectorAll(".yearFilters");
    const el = document.getElementById(yr);
    if (!props.filtered) {
      el.style.fontWeight = 800;
      return props.byYear(yr);
    }
    if (props.filtered && props.filtered.map((img) => img.year).includes(yr)) {
      el.style.fontWeight = 300;
      return props.byYear(yr);
    }
    if (props.filtered) {
      all.forEach((year) => (year.style.fontWeight = 300));
      el.style.fontWeight = 800;
      return props.byYear(yr);
    }
  };
  return (
    <div id="filter">
      <div>
        <img
          src={filter}
          onClick={open ? () => setOpen(false) : () => setOpen(true)}
        />
        <div style={{ display: open ? "flex" : "none" }}>
          <div>
            {years.map((yr) => (
              <span
                key={yr}
                id={yr}
                className="yearFilters"
                onClick={() => filterByYear(yr)}
              >
                {yr}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Filter;
