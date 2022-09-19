import React from "react";
import {
  Stack,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  Button,
  Card,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpIcon from "@mui/icons-material/Help";

// Reviewed for: fw17_1110 - You can create on component for Card
// instead of having three different component, they are quite similar to each other
const CardOne = ({user , setUser , toogle }) => {
  console.log(user)
  return (
    <Box
      paddingTop={13}
      height="auto"
      width="auto"
      sx={{
        paddingX: {
          xs: "0px",
          sm: "0px",
          md: "0px",
          lg: "200px",
          xl: "200px",
        },
      }}
    >
      <Box width="auto" height="auto" sx={{ display: "flex" }}>
        <Stack
          spacing={2}
          padding={2}
          height="auto"
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "55%",
              xl: "55%",
            },
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Create an employer account
          </Typography>
          <Typography color="gray">
            You haven't posted a job before, so you'll need to create an
            employer account.
          </Typography>
          <Accordion>
            <AccordionSummary
              sx={{
                backgroundColor: "#e9ecef",
                border: "1px solid #adb5bd",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <HelpIcon /> Not here to post a job?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "white",
                border: "1px solid #adb5bd",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            >
              <Stack spacing={2}>
                <Typography fontWeight="bold">
                  People looking for a jobs:
                </Typography>
                <Link>Search for a new job</Link>
                <Link>Upload your resume</Link>
                <Typography fontWeight="bold">Employers:</Typography>
                <Link>Open a previous job post</Link>
                <Link>Request access to company account</Link>
              </Stack>
            </AccordionDetails>
          </Accordion>
          <Box>
            <InputLabel id="demo-simple-select-label">
              <Typography fontWeight="bold" color="black">
                Your company's name*
              </Typography>
            </InputLabel>
            <TextField
              fullWidth
              label="Company"
              name="company_name"
              value={user.company_name}
              onChange={setUser}
            />
          </Box>
          <Box>
            <InputLabel id="demo-simple-select-label">
              <Typography fontWeight="bold" color="black">
                Your company's number of employees
              </Typography>
            </InputLabel>
            <Select
              label="employee"
              fullWidth
              displayEmpty
              value={user.employee}
              onChange={setUser}
              name="employee"
            >
              <MenuItem value={100}>100 to 1000</MenuItem>
              <MenuItem value={1000}>1000 to 5000</MenuItem>
              <MenuItem value={5000}>more than 5000</MenuItem>
            </Select>
          </Box>
          <Box>
            <InputLabel fontWeight="bold" id="demo-simple-select-label">
              <Typography fontWeight="bold" color="black">
                Your first and last name*
              </Typography>
            </InputLabel>
            <TextField fullWidth value={user.name} onChange={setUser} name="name" label="Name" />
          </Box>

          <Box>
            <InputLabel id="demo-simple-select-label">
              <Typography fontWeight="bold" color="black">
                Your phone number
              </Typography>
            </InputLabel>
            <TextField fullWidth label="Phone Number" name="phone"  value={user.phone}  onChange={setUser}/>
          </Box>

          <Box>
            <InputLabel id="demo-simple-select-label">
              <Typography fontWeight="bold" color="black">
                Your company's location
              </Typography>
            </InputLabel>
            <TextField fullWidth label="location" name="location" value={user.location} onChange={setUser} />
          </Box>
          <Box paddingBottom={5} display="flex" justifyContent="flex-end">
            <Button
              onClick={() => toogle("inc")}
              size="large"
              variant="contained"
            >
              Save and Next
            </Button>
          </Box>
        </Stack>
        <Box
          width="45%"
          height="600px"
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "flex",
              xl: "flex",
            },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://explore.zoom.us/docs/image/Computer-guy.gif"
            alt="logo"
            style={{ width: "100%", height: "360px" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CardOne;
