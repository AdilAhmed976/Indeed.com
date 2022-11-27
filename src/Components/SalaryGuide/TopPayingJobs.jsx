import React, { useState, useEffect } from "react";
import axios from "axios";
import Heading from "./Heading";
import "./TopPayingJobs.css";

function TopPayingJobs(props) {
  const heading = "Browse top paying jobs by industry";
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("https://foremost-bronzed-galley.glitch.me/topPayingJobs")
      .then((r) => {
        setData(r.data);
        console.log("DATA", r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="top-paying-heading-wrapper">
        <Heading heading={heading} />
        <select name="" id="">
          <option value="">
            <a href="">Choose an industry</a>
          </option>
        </select>
      </div>
      <div className="top-paying-container">
        {data.map((item) => {
          return (
            <div className="top-paying-card">
              <a href="" className="a-tag">
                <div>
                  <p className="job-title">{item.job_title}</p>
                </div>
                <div className="salary-wrapper">
                  <p className="average-salary">Average Salary</p>
                  <p className="salary">{`₹${item.average_salary} per year`}</p>
                </div>
                <div className="button-wrapper">
                  <a href="">Job Openings</a>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TopPayingJobs;
