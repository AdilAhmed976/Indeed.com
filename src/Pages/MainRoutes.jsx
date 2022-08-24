import React from "react";
import { Route, Routes } from "react-router-dom";
// import {Login} from "../Components/Signup/pages/Login";
import { HomePage } from "./HomePage";
import PostJob from "./PostJob";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />;
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/job/:id" element={''} />
      <Route path="/postjob" element={<PostJob />}/>
      <Route path="*" element={<div>Page Not Found</div>} />
      
    </Routes>
  );
};

export default MainRoutes;
