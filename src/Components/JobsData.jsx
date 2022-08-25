import React,{useState} from 'react'
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { JobCard } from './JobCard';
import { JobsSingleCard } from './JobsSingleCard';

export const JobsData = () => {
  
  const jobData = useSelector((store) => store.AppReducer.jobData)
 const [check,setCheck] = useState()
 console.log(check)
  // const [params,setSearchParams] = useParams()
  const getid =(id)=>{
    // console.log(id,"id")
    setCheck(id)
  }

  return (
    <Box sx={{display:"flex",gap:'20px' ,width:'80%',margin:'auto'}} >

      <Box sx={{ width:'50%'}}  >
        {jobData?.map((item) => {
          return <JobCard key={item.id} item={item} getid={getid} />
        })}
      </Box>

      <Box sx={{border:1, width:'50%',  height:'96vh', position:'sticky',top:'16px', borderRadius:"10px" }} >
          <JobsSingleCard check={check} />
      </Box>

      
    </Box>
  )
}
