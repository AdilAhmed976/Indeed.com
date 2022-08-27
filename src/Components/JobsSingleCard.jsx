import React, { useEffect,useState } from 'react'
import Box from '@mui/material/Box';
import axios from 'axios';
import Button  from '@mui/material/Button';
import Typography  from '@mui/material/Typography';
import "../Styles/Navbar.css";
import { FavoriteBorder } from '@mui/icons-material';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';

export const JobsSingleCard = ({check}) => {

    const [single,setSingleData] = useState([

    ])

    const navigate = useNavigate()

    const singleData = () => {
        // https://indeedprojectreact.herokuapp.com/jobdata
        axios.get(`https://indeedprojectreact.herokuapp.com/jobdata/${check}`)
        .then((r) => setSingleData(r.data))
        .then((e) => (e) )
    }

    useEffect(() => {
        singleData()
      return () => {
        
      }
    }, [check])

    // const truncetText = (text,maxWords) => {
    //     console.log(text)
    //     let textArray = text.split("")
     
    //     if (textArray.length>maxWords) {
    //          return `${textArray.splice(0,maxWords).join(" ")}...` 
    //     }
    //     return text
    //  }

  return (
    <Box sx={{padding:'16px'}} className={`${check? '' : 'block'}`} >
        <Box sx={{boxShadow:'gba(0, 0, 0, 0.15) 0px 3px 3px 0px',borderBottom:1,borderColor:'divider',paddingBottom:'20px'}} >
            <Box sx={{marginTop:'16px'}} >
                <Typography variant="h5" component="h5" fontFamily={"Nato+Sans"} fontWeight="bold" >
                {single.title}
                </Typography>
            </Box>

            <Box sx={{marginTop:'16px',display:'flex',flexDirection:'column'}} >
                <Box>
                    <Typography variant="h6" component="h6" >
                    {single.company_name}
                    </Typography>
                </Box>

                <Box>
                    <Typography variant="body5" component="body5" >
                    {single.location}
                    </Typography>
                </Box>
                
                <Box>
                    <Typography variant="body5" component="body5" >
                    {single.salary}
                    </Typography>
                </Box>
            </Box>

            <Box sx={{display:'flex',gap:'10px',marginTop:'6px' }} >
                <Box>
                    <Button variant="contained" onClick={()=> { navigate("/ApplyNow") }} >Apply Now</Button>
                </Box>
                <Box>
                    <Button variant="outlined"   >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
                    </Button>
                </Box>
            </Box>
            
        </Box>

        <Box className='main' sx={{height:'450px',overflow:'scroll',paddingTop:"30px",borderBottom:1,borderColor:'divider'}} >
            
            <Box sx={{display:"flex",flexDirection:'column',gap:'20px'}} >           
                <Box>
                    <Typography variant="body3" component="body3" fontFamily={"Nato+Sans"} fontWeight="500" fontSize="22px" >
                    Job Description
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="body3" component="body3" fontFamily={"Nato+Sans"} fontWeight="bold" >
                    Salary
                    </Typography>
                    <br/> 
                    <Typography variant="body3" component="body3" >
                    {single.salary}
                    </Typography> 
                </Box>
                <Box>
                    <Typography variant="body3" component="body3" fontFamily={"Nato+Sans"} fontWeight="bold" >
                    Job Type
                    </Typography>
                    <br/> 
                    <Typography variant="body3" component="body3" >
                    {single.job_type}
                    </Typography> 
                </Box>
            </Box>

            <Divider orientation="vertical" variant="middle" flexItem />

            <Box sx={{display:"flex",flexDirection:'column',gap:'20px'}} >           
                <Box>
                    <Typography variant="body3" component="body3" fontFamily={"Nato+Sans"} fontWeight="500" fontSize="22px" >
                    Qualification
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="body3" component="body3" >
                    {/* { truncetText(single.Qualifications_Experience,20)} */}
                    { single.Qualifications_Experience}
                    </Typography> 
                </Box>
            </Box>

            <Divider orientation="vertical" variant="middle" flexItem />

            <Box sx={{display:"flex",flexDirection:'column',gap:'20px'}} >           
                <Box>
                    <Typography variant="body3" component="body3" fontFamily={"Nato+Sans"} fontWeight="500" fontSize="22px" >
                    Full Job Description
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="body3" component="body3" >
                    {/* { truncetText(single.Qualifications_Experience,20)} */}
                    { single.Qualifications_Experience}
                    </Typography> 
                </Box>
            </Box>

        </Box>

    </Box>
    
  )
}
