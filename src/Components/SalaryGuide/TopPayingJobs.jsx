import React from "react";
import Heading from "./Heading";

function TopPayingJobs(props) {
  const heading = "Browse top paying jobs by industry";
  return (
    <div>
      <div className="heading-wrapper">
        <Heading heading={heading} />
        <a href="">Choose an industry</a>
      </div>
    </div>
  );
}

export default TopPayingJobs;
