import React from "react";
import Heading from "./Heading";
import "./TopPayingJobs.css";

function TopPayingJobs(props) {
  const heading = "Browse top paying jobs by industry";
  return (
    <>
      <div className="toppaying-heading-wrapper">
        <Heading heading={heading} />
        <a href="">Choose an industry</a>
      </div>
      <div className="card-wrapper"></div>
    </>
  );
}

export default TopPayingJobs;
