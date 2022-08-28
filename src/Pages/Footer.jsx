import { Box } from '@mui/material'
import React from 'react'
import footerStyle from './Footer.module.css' 

const Footer = () => {
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
<<<<<<< HEAD
        <p><a href="">Terms</a></p>
      </Box>
    </Box>
=======
        <p><a href="/term">Terms</a></p>
      </div>
    </div>
>>>>>>> fa24df60c362e95c93000fcefc17213cebf83b47
  )
}

export default Footer
