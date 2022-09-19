import { Box } from '@mui/material'
import React from 'react'
import footerStyle from './Footer.module.css' 

const Footer = () => {
  // Reviewed by: use loops/iterators to show same nodes
  // why to use p tags with a?
  return (
    <Box className={footerStyle.Container}>
      <Box>
        
        <p><a href="">Career Advice</a></p>
        <p><a href="">Browse Jobs</a></p>
        <p><a href="">Browse Companies</a></p>
        <p><a href="">Salaries</a></p>
        <p><a href="">Indeed Events</a></p>


      </Box>
      <Box>
        <p><a href="">© 2022 Indeed</a></p>
        <p><a href="">Privacy Center</a></p>
        <p><a href="">Cookies</a></p>
        <p><a href="">Privacy</a></p>
        <p><a href="">Terms</a></p>
      </Box>
    </Box>

  )
}

export default Footer
