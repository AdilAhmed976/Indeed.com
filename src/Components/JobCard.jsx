import React from 'react'
import Box from '@mui/material/Box';
import Typography  from '@mui/material/Typography';
import JobCardMenu from './JobCardMenu';
import { Bolt, Payments, Send } from '@mui/icons-material';


export const JobCard = ({item,getid}) => {
  


  return (
    <Box sx={{ border:1, maxHeight:'304px', overflow:'hidden',padding:'8px',borderRadius:'10px'}} onClick={()=>getid(item.id)} >

      <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between' }} >
          <Box  >
            <Typography variant="h5" component="h5" >
              {item.title}
            </Typography>
          </Box>

          <Box >
              <JobCardMenu/>
          </Box>
      </Box>

      <Box>
          <Box>
            <Typography variant="body3" component="body3" >
            {item.company_name}
            </Typography>
          </Box>

          <Box>
          {item.location}
          </Box>
      </Box>

      <Box sx={{display:'flex', flexDirection:'row', justifyContent:'flex-start',  }} >

          <Box sx={{
              border:1,
              width:'fit-content', 
              padding:'2px', 
              margin:'2px',
              backgroundColor:'lightgray'
              }}
          >
              <Payments/>
              <Typography variant="body3" component="body3" >
              {item.salary} a month
              </Typography>
          </Box>

          <Box sx={{
              border:1,
              width:'fit-content', 
              padding:'2px', 
              margin:'2px',
              backgroundColor:'lightgray'
              }}
          >
              <Typography variant="body3" component="body3" >
              {item.job_type[0]}
              </Typography> 
              <Typography variant="body3" component="body3" >
              {item.job_type[1]}
              </Typography> 
              <Typography variant="body3" component="body3" >
              {item.job_type[2]}
              </Typography> 
              <Typography variant="body3" component="body3" >
              {item.job_type[3]}
              </Typography> 
          </Box>
      </Box>

      <Box sx={{display:'flex', flexDirection:'row', justifyContent:'flex-start',gap:'20px' }} >
          <Box  >
            <Send color='blue' fontSize='20px' backgroundColor='red' />
            <Typography variant="h8" component="h8" >
              Apply with Indeed resume
            </Typography>
          </Box>

          <Box >
            <Bolt/>
          <Typography variant="h8" component="h8" >
              Responsive employer
            </Typography>
          </Box>
      </Box>

      <Box  >
            Job - Description
          <Box  >
            <Typography variant="h8" component="h8" >
              {item.Job_Description[0]}
            </Typography>
          </Box>
          
          <Box>
            <Typography variant="h8" component="h8" >
              {item.Job_Description[1]}
            </Typography>
          </Box>

          <Box  >
            <Typography variant="h8" component="h8" >
              {item.Job_Description[2]}
            </Typography>
          </Box>

          <Box>
            <Typography variant="h8" component="h8" >
              {item.Job_Description[3]}
            </Typography>
          </Box>
          <Box  >
            <Typography variant="h8" component="h8" >
              {item.Job_Description[4]}
            </Typography>
          </Box>
          
          <Box>
            <Typography variant="h8" component="h8" >
              {item.Job_Description[5]}
            </Typography>
          </Box>

          <Box  >
            <Typography variant="h8" component="h8" >
              {item.Job_Description[6]}
            </Typography>
          </Box>

          <Box>
            <Typography variant="h8" component="h8" >
              {item.Job_Description[7]}
            </Typography>
          </Box>

      </Box>

    </Box>
  )
}
