import React from "react";
import SalaryGuideTop from "./SalaryGuideTop";
import TopPayingJobs from "./TopPayingJobs";
import TopPayingCompany from "./TopPayingCompany";
import SalaryGuideBottom from "./SalaryGuideBottom";
import Review from "./Review";
import Footer from "../../Pages/Footer";

function SalaryGuide(props) {
  return (
    <>
      <SalaryGuideTop />
      <TopPayingJobs />
      <TopPayingCompany />
      <SalaryGuideBottom />
      <Review />
      <Footer />
    </>
  );
}

export default SalaryGuide;
