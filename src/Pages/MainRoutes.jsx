import React from "react";
import SalaryGuide from "../Components/SalaryGuide/SalaryGuide";
import Register from "../Components/Signup/pages/Register";
import ReqAuth from "../Components/Signup/pages/ReqAuth";
import Logout from "../Components/Signup/pages/Logout";
import Login from "../Components/Signup/pages/Login";
import { Route, Routes } from "react-router-dom";
import CompanyReview from "./CompanyReview";
import { ApplyNow } from "./ApplyNow";
import HelpCenter from "./HelpCenter";
import { HomePage } from "./HomePage";
import PostJob from "./PostJob";
import About from "./About";
import Term from "./Term";
import { ApplyNowSubmit } from "./ApplyNowSubmit";


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />;
      <Route path="/login" element={<Login />} />
      <Route path="/companyreview" element={<CompanyReview />} />
      <Route path="/salaryguide" element={<SalaryGuide />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/register" element={<Register />} />
      <Route path="/applynowsubmit" element={<ApplyNowSubmit/>} />
      <Route path="/postjob" element={<ReqAuth> <PostJob /></ReqAuth>}/>
      <Route path="/help" element={<HelpCenter/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/term" element={<Term/>} />
      <Route path="/ApplyNow" element={<ApplyNow/>} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default MainRoutes;
