import React from 'react'
import Box from '@mui/material/Box';
import Typography  from '@mui/material/Typography';
import JobCardMenu from './JobCardMenu';
import { Bolt, BusinessCenter, Payments, Send } from '@mui/icons-material';


export const JobCard = ({item,getid}) => {
  

const truncetText = (text,maxWords) => {
   let textArray = text.split(" ")

   if (textArray.length>maxWords) {
        return `${textArray.splice(0,maxWords).join(" ")}...` 
   }
   return text
}


  return (
    <Box sx={{ border:'0.5px solid gray', borderColor:'divider', backgroundColor:'white', marginBottom:"12px", maxHeight:'304px', overflow:'hidden', textOverflow:'elipsis', padding:'16px',borderRadius:'10px'}} onClick={()=>getid(item.id)} >

      <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between' }} >
          <Box  >
            <Typography variant="h5" component="h5" fontSize={'22px'} fontWeight='bold' fontFamily={'Noto+Sans'} >
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
              borderRadius:'4px',
              width:'fit-content', 
              padding:'4px', 
              margin:'4px',
              backgroundColor:'rgb(243,242,241)'
              }}
          >
              <Payments color={'rgb(89,89,89)'}/>
              <Typography variant="body3" component="body3" >
              {item.salary} a month
              </Typography>
          </Box>

          <Box sx={{
              borderRadius:'4px',
              width:'fit-content', 
              padding:'4px', 
              margin:'4px',
              backgroundColor:'rgb(243,242,241)'
              }}
          >
            <BusinessCenter color={'rgb(89,89,89)'} />
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
            <Send fontSize='20px' color="primary" />
            <Typography variant="h7" component="h7" marginLeft='6px' >
              Apply with Indeed resume
            </Typography>
          </Box>

          <Box >
            <Bolt color="primary"/>
          <Typography variant="h8" component="h8" marginLeft='6px' >
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
              { truncetText( item.Job_Description[1],30 )   }
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
