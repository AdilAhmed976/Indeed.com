import React from 'react'
// import Box from '@mui/material/Box';
// import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {JobsData} from '../Components/JobsData'
import { RecentSearches } from './RecentSearches';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function JobsfeedsPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{backgroundColor:'rgb(250,249,249)'}}  >
      <Box sx={{ backgroundColor:'white', borderBottom: 0,borderColor:"divider", height:'90px',  display:'flex', margin:'auto' , justifyContent:'center'}}>
        <Tabs  value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{fontSize:'24px',height:'90px',textTransform:"capitalize",color:'black'}} label="Job feed" {...a11yProps(0)} />
          <Tab sx={{fontSize:'24px',height:'90px',textTransform:"capitalize",color:'black'}} label="Recent searches" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {<JobsData/>}
      </TabPanel>
      <TabPanel  value={value} index={1}>
        <RecentSearches/>
      </TabPanel>
    </Box>
  );
}
