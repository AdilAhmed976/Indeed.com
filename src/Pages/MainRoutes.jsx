import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Signup/pages/Login";
import { HomePage } from "./HomePage";
import PostJob from "./PostJob";
import ReqAuth from "../Components/Signup/pages/ReqAuth";
import  Logout  from "../Components/Signup/pages/Logout";
import Register from "../Components/Signup/pages/Register";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ReqAuth><HomePage/></ReqAuth>} />;
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/job/:id" element={''} />
      <Route path="/postjob" element={<ReqAuth> <PostJob /></ReqAuth>}/>
      <Route path="*" element={<div>Page Not Found</div>} />
      
    </Routes>
  );
};

export default MainRoutes;
