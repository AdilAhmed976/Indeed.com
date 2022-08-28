import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ApplyNowSubmit = () => {


    let data = JSON.parse(localStorage.getItem("Applied_Data"))

    const navigate = useNavigate()

  return (
    <Box sx={{margin:'auto',width:'20%'}}>
        Name
        <Box>
            {data.firstName}
            {data.lastName}
        </Box>
        E-mail
        <Box>
            {data.email}
        </Box>
        E-jobTitle
        <Box>
            {data.jobTitle}
        </Box>
        phone
        <Box>
            {data.phone}
        </Box>
        <Box>
            <button onClick={()=>{ navigate('/') }} > Go to home </button>
        </Box>
        
    </Box>
  )
}

// company: ""
// education: "1"
// email: "adilahmedah976@gmail.com"
// firstName: "Adil"
// jobTitle: "1"
// lastName: "Qureshi"
// phone: "07509144758"
// reactExp: "1"
// softwareExp: "1"
// totalExp: "1"