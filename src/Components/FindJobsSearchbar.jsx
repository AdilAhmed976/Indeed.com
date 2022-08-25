import React, { useState } from 'react'
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import TextField  from '@mui/material/TextField';
import Typography  from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { gettingTheJobData } from '../Redux/AppReducer/action';



export const FindJobsSearchbar = () => {

    const dispatch = useDispatch()
    const jobdata = useSelector((store) => store.AppReducer.jobData)

    const [title,setTitle] = useState("")
    const [location,setLoaction] = useState("")
    const optionsOne = ["React developer", "Software Developer", "Engineer","ReactJS Developer"]
    const optionsTwo = ["Madhya Pardesh", "Uttar Pradesh", "Engineer"]
    

    const handleFindJob = (payload) => {
        dispatch(gettingTheJobData(payload))
    }

  return (
   <Box sx={{ padding:'40px' , display:'flex', flexDirection:'column',  justifyContent:'center' , alignItems:'center'}}   >
    <Box sx={{ width:"70%", padding:'30px' , boxSizing:'border-box' ,  gap:'10px', display:'flex', justifyContent:'space-between' , alignItems:'center'}} >
        <Box > 
            <Autocomplete
                value={title}
                onChange = {((e,i) => setTitle(i) )}
                disablePortal
                id="combo-box-demo"
                options={optionsOne}
                sx={{ width: 400 }}
                renderInput={(params) => <TextField {...params} 
                label="What" />}
                freeSolo
            />
        </Box>

        <Box > 
            <Autocomplete
                value={location}
                onChange = {((e,i) => setLoaction(i) )}
                disablePortal
                id="combo-box-demo"
                options={optionsTwo}
                sx={{ width: 400 }}
                renderInput={(params) => <TextField {...params} 
                label="Where" />}
                freeSolo
            />
        </Box>

        <Box>
            
        </Box>
            <Box id="outlined-start-adornment" >
                <Button sx={{width:'140px'}}
                    variant="contained" 
                    onClick={ ()=>  handleFindJob(title)}
                >Find jobs</Button>
            </Box>
        </Box>

        <Box>
        <Typography variant="body1" component="h1">
            Post your resume – It only takes a few seconds
        </Typography>
        <Typography variant="body1" component="h1">
            Employers: Post a job – Your next hire is here
        </Typography>
        
        </Box>
   </Box>
  )
}
