import axios from "axios";
import React, { useState } from "react";

function TopPayingCard(props) {
  const [data, setData] = useState([]);

  axios
    .get("http:localhost:8080/topPayingCompany")
    .then((r) => {
      setData(r.data);
    })
    .catch((e) => {
      console.log(e);
    });
  return (
    <div>
      {data.map((item) => {
        <div>{item.job_title}</div>;
      })}
    </div>
  );
}

export default TopPayingCard;
