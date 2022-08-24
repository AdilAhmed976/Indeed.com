import React from 'react'
import Box from "@mui/material/Box";
import { FindJobsSearchbar } from '../Components/FindJobsSearchbar';
import  JobsFeedsPage from '../Components/JobsFeedsPage';

export const HomePage = () => {
  return (
    <Box>
      <FindJobsSearchbar/>
      <JobsFeedsPage/>
    </Box>
  )
}
