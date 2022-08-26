import React from "react";
import SalaryGuideTop from "./SalaryGuideTop";
import TopPayingJobs from "./TopPayingJobs";
import TopPayingCompany from "./TopPayingCompany";
import SalaryGuideBottom from "./SalaryGuideBottom";

function SalaryGuide(props) {
  return (
    <>
      <SalaryGuideTop />
      <TopPayingJobs />
      <TopPayingCompany />
      <SalaryGuideBottom />
    </>
  );
}

export default SalaryGuide;
