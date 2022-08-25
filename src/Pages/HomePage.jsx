import React from "react";
import Box from "@mui/material/Box";



import { FindJobsSearchbar } from '../Components/FindJobsSearchbar';
import  JobsFeedsPage from '../Components/JobsFeedsPage';
import Footer from './Footer';


export const HomePage = () => {
  return (
    <Box>



      <FindJobsSearchbar/>
      <JobsFeedsPage/>
      <Footer/>

    </Box>
  );
};
