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
import {useNavigate} from 'react-router-dom'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 7,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));
const ApplyFour = ({toogle , setData}) => {
    const navigate = useNavigate();
  return ( 
    <Stack spacing={3} padding={5}>
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={() => toogle("dec")} disableElevation disableRipple>
          <ArrowBackIcon />{" "}
        </Button>
        <Button onClick={() => navigate("/")}  disableElevation disableRipple >Exit</Button>
      </Box>
      <BorderLinearProgress variant="determinate" value={100} />
    </Box>
    <Typography>Application step 4 of 4</Typography>
    <Typography fontWeight="bold" variant="h5">
       Are you confirm to apply this
    </Typography>
      <Button variant="contained" onClick={setData}>
        Submit
      </Button>
  </Stack>
  )
}

export default ApplyFour