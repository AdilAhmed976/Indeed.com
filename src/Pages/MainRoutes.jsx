import React from "react";
import { Route, Routes } from "react-router-dom";
import {Login} from "./Login";
import { HomePage } from "./HomePage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />;
      <Route path="/login" element={<Login />} />
      <Route path="/job/:id" element={''} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default MainRoutes;
