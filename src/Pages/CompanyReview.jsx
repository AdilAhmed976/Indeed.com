import React from 'react'
import styles from "./CompanyReview.module.css"
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { AccountCircle } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';


const CompanyReview = () => {
  return (
    <div>
   <h1 className={styles.topportion_htag}>Find great places to work</h1>
   <div className={styles.topportion_div}>Get access to millions of company reviews</div>
   <label style={{margin:"4px 0px 0px 200px"}}>Company name or job title</label>
   <div>
    <TextField sx={{width:"1000px"}} InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}></TextField>
   </div>
        
    </div>
  )
}

export default CompanyReview