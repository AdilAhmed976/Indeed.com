import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';

const PostFooter = () => {
  return (
    <>
    <Box width="auto" height="90px" sx={{
        padding:"10px",
        border:"1px solid gray",
        display:'flex',
        justifyContent:"space-between"
    }}>
        <Box>
            <Typography variant="body2" color="GrayText"><CopyrightIcon fontSize='10px' /> 2022 Indeed</Typography>
        </Box>
        <Box>
            <Typography variant="body2" sx={{textDecoration:"underline",cursor:"pointer"}} color="gray">Cookies, privacy and terms–Privacy center–Security–Contact</Typography>
        </Box>
    </Box>
    </>
  )
}

export default PostFooter