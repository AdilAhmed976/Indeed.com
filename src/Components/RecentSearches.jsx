import { ArrowForward } from '@mui/icons-material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import "../index.css";

export const RecentSearches = () => {

  return (
    <Box  sx={{width:'40%',margin:'auto',display:'flex',flexDirection:'column',padding:'20px',gap:'20px'}}>
        <Box sx={{backgroundColor:'white', width:'100%',heigth:'90px',border:'0.5 solid gray', borderColor:'divider',padding:'20px',fontWeight:'500',fontFamily:"Nato+Sans"}} >React Developer <ArrowForward/> </Box>
        <Box sx={{backgroundColor:'white', width:'100%',heigth:'90px',border:'0.5 solid gray', borderColor:'divider',padding:'20px',fontWeight:'500',fontFamily:"Nato+Sans"}} >Software Developer <ArrowForward/> </Box>
        <Box sx={{backgroundColor:'white', width:'100%',heigth:'90px',border:'0.5 solid gray', borderColor:'divider',padding:'20px',fontWeight:'500',fontFamily:"Nato+Sans"}} >Engineer <ArrowForward/> </Box>
        <Box sx={{backgroundColor:'white', width:'100%',heigth:'90px',border:'0.5 solid gray', borderColor:'divider',padding:'20px',fontWeight:'500',fontFamily:"Nato+Sans"}} >ReactJs Developer <ArrowForward/> </Box>
    </Box>
  )
}
