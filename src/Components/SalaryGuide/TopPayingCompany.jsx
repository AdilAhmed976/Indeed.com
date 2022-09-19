import React, { useState, useEffect } from "react";
import axios from "axios";
import Heading from "./Heading";
import "./TopPayingCompany.css";

function TopPayingCompany(props) {
  const heading = "Browse top paying companies by industry";
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("http://localhost:8080/topPayingCompany")
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
  
  // Reviewed for: fw13_096 - code indentation 
  return (
    <>
      <div className="toppaying-company-heading-wrapper">
        <Heading heading={heading} />
        <select name="" id="">
          <option value="">
            <a href="">Choose an industry</a>
          </option>
        </select>
      </div>
      <div className="top-paying-company-container">
        {data.map((item) => {
          return (
            <div className="top-paying-company-card">
              <div className="logo-wrapper">
                <img src={item.company_logo} alt="" srcset="" />
              </div>
              <div className="title_review_container">
                <p className="company_title">{item.company_title}</p>
                <div className="review_wrapper">
                  <p className="review_star">{item.review_star}</p>
                  <p className="review">{`${item.review} reviews`}</p>
                </div>
              </div>
              <div className="arrow_button">
                <a href="">{">"}</a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TopPayingCompany;
