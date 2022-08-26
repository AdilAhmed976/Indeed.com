import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Signup/pages/Login";
import { HomePage } from "./HomePage";
import PostJob from "./PostJob";
import ReqAuth from "../Components/Signup/pages/ReqAuth";
import  Logout  from "../Components/Signup/pages/Logout";
import Register from "../Components/Signup/pages/Register";
import About from "./About";
import HelpCenter from "./HelpCenter";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />;
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/job/:id" element={''} />
      <Route path="/postjob" element={<ReqAuth> <PostJob /></ReqAuth>}/>
      <Route path="/help" element={<HelpCenter/>} />
      <Route path="/about" element={<About/>} />
      <Route path="*" element={<div>Page Not Found</div>} />
      
    </Routes>
  );
};

export default MainRoutes;
