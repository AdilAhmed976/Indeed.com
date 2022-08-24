import React from "react";
import "./SalaryGuideTop.css";

function SalaryGuideTop(props) {
  return (
    <div className="container">
      <div className="image-wrapper"></div>
      <div className="heading-wrapper">
        <div className="text-wrapper">
          <h1>Find a career you'll love"</h1>
          <span>
            Explore which careers have the highest job satisfaction, best
            salaries, and more
          </span>
        </div>
        <div className="search-wrapper">
          <div className="input-wrapper">
            <div className="what">
              <label htmlFor="">What</label>
              <input type="search" placeholder="job title" />
            </div>
            <div className="where">
              <label htmlFor="">What</label>
              <input type="search" placeholder="location" />
            </div>
            <div className="button">
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalaryGuideTop;
