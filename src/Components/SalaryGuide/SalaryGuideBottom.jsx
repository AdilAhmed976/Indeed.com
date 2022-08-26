import React from "react";
import Heading from "./Heading";
import "./SalaryGuideBottom.css";

function SalaryGuideBottom(props) {
  const heading = "How much should you be earning?";
  return (
    <>
      <div className="main-container">
        <div className="left-wrapper">
          <div className="top-wrapper">
            <Heading heading={heading} />
            <p>
              Get an estimated calculation of how much you should be earning and
              insight into your career options.
            </p>
          </div>
          <div className="bottom-wrapper">
            <a href="" className="pay-range">
              Get estimated pay range
            </a>
            <a href="" className="more-details">
              See more details
            </a>
          </div>
        </div>
        <div className="right-wrapper">
          <img
            src="https://d3fw5vlhllyvee.cloudfront.net/mosaic-provider-salary-calculator-entries/dist/images/src/components/ResponsiveDefaultEntry/chart_desktop_janish-36baaa.svg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default SalaryGuideBottom;
