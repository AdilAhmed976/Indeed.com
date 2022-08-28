import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import {
  Button,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ApplyOne from "../Components/ApplyNow/ApplyOne";
import ApplyTwo from "../Components/ApplyNow/ApplyTwo";
import ApplyThree from "../Components/ApplyNow/ApplyThree";
import ApplyFour from "../Components/ApplyNow/ApplyFour";
import { useNavigate } from "react-router-dom";
import { ApplyNowSubmit } from "./ApplyNowSubmit";


export const ApplyNow = () => {


  const [page, setPage] = React.useState(0);
  const navigate = useNavigate()

  const toogle = (arg) => {
    if(arg === 'inc'){
        setPage(p => p+1)
    }else if(arg === 'dec'){
        setPage((p) => p-1)
    }
  };

  const [data , setData] = React.useState({
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    education:"",
    totalExp:"",
    softwareExp:"",
    reactExp:"",
    jobTitle:"",
    company:""
  })
  const handleChange = (e) => {
    let {name  , value } = e.target
    setData({...data , [name]:value})
  }
  const handleSubmit = () => {
    navigate('/applynowsubmit')
    localStorage.setItem("Applied_Data" , JSON.stringify(data))
  }
  return (
    <Box
      width="auto"
      height="900px"aaa
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Box width="35%" height="90%">
        {page === 0  && <ApplyOne data={data} setData={handleChange}  toogle={toogle} /> }
        {page === 1  && <ApplyTwo data={data} setData={handleChange}  toogle={toogle} /> }
        {page === 2  && <ApplyThree data={data} setData={handleChange}  toogle={toogle} /> }
        {page === 3  && <ApplyFour data={data} setData={handleSubmit}  toogle={toogle} /> }
      </Box>
      <Box width="30%" height="90%">
        
      </Box>
    </Box>
  );
};
