import React from 'react'
import Box from '@mui/material/Box';

export const JobCard = ({item}) => {
  return (
    <Box sx={{ border:1}}>
        <Box>
            <p>new</p>
        </Box>
        {item.title}
    </Box>
  )
}
