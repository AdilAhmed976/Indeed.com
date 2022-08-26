import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Signup/pages/Login";
import { HomePage } from "./HomePage";
import PostJob from "./PostJob";

import CompanyReview from "./CompanyReview"

import ReqAuth from "../Components/Signup/pages/ReqAuth";
import Logout from "../Components/Signup/pages/Logout";
import Register from "../Components/Signup/pages/Register";
import About from "./About";


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />;
      <Route path="/login" element={<Login />} />

    
      <Route path="/postjob" element={<PostJob />}/>
      <Route path="/companyreview" element={<CompanyReview/>}/>

      <Route path="/logout" element={<Logout />} />
      <Route path="/register" element={<Register />} />
      <Route path="/postjob" element={ <PostJob />}/>
      <Route path="/about" element={<About/>} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default MainRoutes;
