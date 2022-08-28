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


const ApplyOne = ({toogle , data, setData}) => {
    const navigate = useNavigate()
  return (
    <Stack spacing={3} padding={5}>
    <Box>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Button onClick={() => navigate("/")} disableElevation disableRipple >Exit</Button>
      </Box>
      <BorderLinearProgress variant="determinate" value={25} />
    </Box>
    <Typography>Application step 1 of 4</Typography>
    <Typography fontWeight="bold" variant="h5">
      Add your contact information
    </Typography>
    <Box>
      <InputLabel id="demo-simple-select-label">
        <Typography fontWeight="bold" color="black">
          First Name
        </Typography>
      </InputLabel>
      <TextField fullWidth label="first name" value={data.firstName} onChange={setData} name="firstName" />
    </Box>
    <Box>
      <InputLabel id="demo-simple-select-label">
        <Typography fontWeight="bold" color="black">
          Last name
        </Typography>
      </InputLabel>
      <TextField fullWidth label="last name" value={data.lastName} onChange={setData} name="lastName" />
    </Box>
    <Box>
      <InputLabel id="demo-simple-select-label">
        <Typography fontWeight="bold" color="black">
          Email
        </Typography>
      </InputLabel>
      <TextField fullWidth label="email" type="email" value={data.email} onChange={setData} name="email" />
    </Box>
    <Box>
      <InputLabel id="demo-simple-select-label">
        <Typography fontWeight="bold" color="black">
          Phone Number
        </Typography>
      </InputLabel>
      <TextField fullWidth label="number" value={data.phone} onChange={setData}  name="phone" type="number" />
    </Box>
    <Box>
      <Button onClick={() => toogle("inc")} variant="contained">
        Continue
      </Button>
    </Box>
  </Stack>
  )
}

export default ApplyOne