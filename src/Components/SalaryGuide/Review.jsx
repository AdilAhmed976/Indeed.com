import React from "react";
import Heading from "./Heading";
import "./Review.css";

function Review(props) {
  const heading = "Was this page helpful?";
  // Reviewed for: fw13_096 - don't use svg like this in the view
  return (
    <>
      <div className="review-container">
        <div className="review-left-wrapper">
          <Heading heading={heading} />
        </div>
        <div className="review-right-wrapper">
          <div>
            <svg width="34" height="34">
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#2557A7"
                  d="M24 25c0-3.314-3.134-6-7-6s-7 2.686-7 6h14z"
                ></path>
                <circle
                  cx="17"
                  cy="17"
                  r="16"
                  stroke="#2557A7"
                  stroke-width="2"
                ></circle>
                <circle cx="11" cy="14" r="3" fill="#2557A7"></circle>
                <circle cx="24" cy="14" r="3" fill="#2557A7"></circle>
              </g>
            </svg>
            <p>Not helpful</p>
          </div>
          <div>
            <svg width="34" height="34">
              <g fill="none" fill-rule="evenodd">
                <circle
                  cx="17"
                  cy="17"
                  r="16"
                  stroke="#2557A7"
                  stroke-width="2"
                ></circle>
                <circle cx="11" cy="14" r="3" fill="#2557A7"></circle>
                <circle cx="24" cy="14" r="3" fill="#2557A7"></circle>
                <path
                  stroke="#2557A7"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M23.5 25.585C22.295 23.48 19.982 22 17.38 22a6.999 6.999 0 00-6.175 3.702"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <svg width="34" height="34">
              <g fill="none" fill-rule="evenodd">
                <circle
                  cx="17"
                  cy="17"
                  r="16"
                  stroke="#2557A7"
                  stroke-width="2"
                ></circle>
                <circle cx="11" cy="14" r="3" fill="#2557A7"></circle>
                <circle cx="24" cy="14" r="3" fill="#2557A7"></circle>
                <path stroke="#2557A7" stroke-width="2" d="M11 24.5h12"></path>
              </g>
            </svg>
            <p>Helpful</p>
          </div>
          <div>
            <svg width="34" height="34">
              <g fill="none" fill-rule="evenodd">
                <circle
                  cx="17"
                  cy="17"
                  r="16"
                  stroke="#2557A7"
                  stroke-width="2"
                ></circle>
                <circle cx="11" cy="14" r="3" fill="#2557A7"></circle>
                <circle cx="24" cy="14" r="3" fill="#2557A7"></circle>
                <path
                  stroke="#2557A7"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 22.117c1.207 2.105 3.52 3.585 6.12 3.585A6.999 6.999 0 0023.296 22"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <svg width="34" height="34">
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#2557A7"
                  d="M10 20c0 3.314 3.134 6 7 6s7-2.686 7-6H10z"
                ></path>
                <circle
                  cx="17"
                  cy="17"
                  r="16"
                  stroke="#2557A7"
                  stroke-width="2"
                ></circle>
                <circle cx="11" cy="14" r="3" fill="#2557A7"></circle>
                <circle cx="24" cy="14" r="3" fill="#2557A7"></circle>
              </g>
            </svg>
            <p>Very Helpful</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
