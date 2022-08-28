import React from 'react'
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
  } from "@mui/material";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  import HelpIcon from "@mui/icons-material/Help";

const CardThree = ({submit , user , setUser , toogle}) => {
  return (
         <Box  paddingTop={13} height="auto" width="auto" sx={{
        paddingX:{
            xs:"0px",
            sm:"0px",
            md:'0px',
            lg:"200px",
            xl:"200px"
        }
    }}>
      <Box width="auto" height="auto" sx={{ display: "flex" }}>
        <Stack spacing={2} padding={2}  height="auto" sx={{
            width: { 
                xs:"100%",
                sm:"100%",
                md:'100%',
                lg:"55%",
                xl:"55%"
            }
        }}>
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
                Salary
              </Typography>
            </InputLabel>
            <TextField fullWidth label="salary" name="salary" type="number" value={user.salary} onChange={setUser}  />
          </Box>
          <Box paddingBottom={5} display="flex" justifyContent="space-between">
            <Button  onClick={() => toogle('dec')} variant='outlined' size='large'>Next</Button>
            <Button onClick={submit} size='large' variant="contained">Submit</Button>
          </Box>
          </Stack>
          <Box width="45%" height="600px" sx={{display:{
            xs:"none",
            sm:"none",
            md:'none',
            lg:"flex",
            xl:"flex"
          }
          ,justifyContent:'center', alignItems:"center"}}>
              <img src="https://explore.zoom.us/docs/image/Computer-guy.gif" alt="logo" style={{width:"100%",height:"360px"}}/>
          </Box>
          </Box>
    </Box>
  )
}

export default CardThree