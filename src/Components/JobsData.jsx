import React from 'react'
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { JobCard } from './JobCard';


export const JobsData = () => {
  
  const jobData = useSelector((store) => store.AppReducer.jobData)

  return (
    <Box sx={{display:"flex",gap:'20px'}} >

      <Box sx={{border:1, width:'50%',  }}  >
        {jobData?.map((item) => {
          return <JobCard key={item.id} item={item} />
        })}
      </Box>

      <Box sx={{border:1, width:'50%',  height:'96vh', position:'sticky',top:'6px',overflow:'scroll' }} >
        
      </Box>

      
    </Box>
  )
}
