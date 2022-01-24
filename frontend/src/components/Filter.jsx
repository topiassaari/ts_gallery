/* eslint-disable react/prop-types */
import React from "react";

const Filter = (props) => {
  const years = [2022, 2021, 2020, 2019, 2018, 2017];

  const filterByYear = (yr) => {
    const all = document.querySelectorAll(".yearFilters");
    const el = document.getElementById(yr);
    if (!props.content) {
      el.style.color = "black";
      return props.byYear(yr);
    }
    if (props.content && props.content.map((img) => img.year).includes(yr)) {
      el.style.color = "gray";
      return props.byYear(yr);
    }
    if (props.content) {
      all.forEach((year) => (year.style.color = "gray"));
      el.style.color = "black";
      return props.byYear(yr);
    }
  };
  const keydown = (e, yr) => {
    if (e.code === "Enter") {
      filterByYear(yr);
    }
  };
  return (
    <div id="filter">
      <div>
        <div>
          <div>
            {years.map((yr) => (
              <span
                tabIndex={props.isOpen ? -1 : 0}
                key={yr}
                id={yr}
                className="yearFilters"
                onClick={() => filterByYear(yr)}
                role="button"
                onKeyDown={(ev) => keydown(ev, yr)}
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
