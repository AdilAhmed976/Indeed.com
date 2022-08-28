import React from "react";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

import { FindJobsSearchbar } from "../Components/FindJobsSearchbar";
import JobsFeedsPage from "../Components/JobsFeedsPage";
import Footer from "./Footer";

export const HomePage = () => {

  console.log(localStorage.getItem('dataUser'))



  return (
    <Box>
      <FindJobsSearchbar />
      <JobsFeedsPage />
      <Footer />
    </Box>
  );
};
