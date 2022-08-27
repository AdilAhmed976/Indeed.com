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
import { useNavigate } from "react-router-dom";

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

const ApplyTwo = ({ toogle }) => {
  const navigate = useNavigate();
  return (
    <Stack spacing={3} padding={5}>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button onClick={() => toogle("dec")} disableElevation disableRipple>
            <ArrowBackIcon  />{" "}
          </Button>
          <Button onClick={() => navigate("/")} disableElevation disableRipple>
            Exit
          </Button>
        </Box>
        <BorderLinearProgress variant="determinate" value={50} />
      </Box>
      <Typography>Application step 2 of 4</Typography>
      <Typography fontWeight="bold" variant="h5">
        Add your contact information
      </Typography>
      <Box>
        <InputLabel id="demo-simple-select-label">
          <Typography fontWeight="bold" color="black">
            What is the highest level of education you have completed?
          </Typography>
        </InputLabel>
        <TextField fullWidth label="education" name="title" />
      </Box>
      <Box>
        <InputLabel id="demo-simple-select-label">
          <Typography fontWeight="bold" color="black">
            How many years of total work experience do you have?
          </Typography>
        </InputLabel>
        <TextField fullWidth label="experience" type="number" name="title" />
      </Box>
      <Box>
        <InputLabel id="demo-simple-select-label">
          <Typography fontWeight="bold" color="black">
            How many years of software development experience do you have?
          </Typography>
        </InputLabel>
        <TextField
          fullWidth
          label="software experience"
          type="number"
          name="title"
        />
      </Box>
      <Box>
        <InputLabel id="demo-simple-select-label">
          <Typography fontWeight="bold" color="black">
            How many years of React experience do you have?
          </Typography>
        </InputLabel>
        <TextField fullWidth label="React experience" name="title" />
      </Box>

      <Box>
        <Button onClick={() => toogle("inc")} variant="contained">
          Continue
        </Button>
      </Box>
    </Stack>
  );
};

export default ApplyTwo;
