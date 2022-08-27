import React from 'react'
import footerStyle from './Footer.module.css' 

const Footer = () => {
  return (
    <div className={footerStyle.Container}>
      <div>
        
        <p><a href="">Career Advice</a></p>
        <p><a href="">Browse Jobs</a></p>
        <p><a href="">Browse Companies</a></p>
        <p><a href="">Salaries</a></p>
        <p><a href="">Indeed Events</a></p>
        <p><a href="">Work at Indeed</a></p>
        <p><a href="">Countries</a></p>
        <p><a href="/about">About</a></p>
        <p><a href="/help">Help Center</a></p>
        <p><a href="">Post a job</a></p>
        {/* <link rel="stylesheet" href="" /> */}

      </div>
      <div>
        <p><a href="">© 2022 Indeed</a></p>
        <p><a href="">Accessibility at Indeed</a></p>
        <p><a href="">Privacy Center</a></p>
        <p><a href="">Cookies</a></p>
        <p><a href="">Privacy</a></p>
        <p><a href="/term">Terms</a></p>
      </div>
    </div>
  )
}

export default Footer
