import React from 'react'
import styles from "./CompanyReview.module.css"
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import PopularCompany from './PopularCompany';
import CompanyWorking from './CompanyWorking';
import Companyreviewfooter from './Companyreviewfooter';


const CompanyReview = () => {
  return (
    <div>
   <h1 className={styles.topportion_htag}>Find great places to work</h1>
   <div className={styles.topportion_div}>Get access to millions of company reviews</div>
   <div style={{margin:"27px 0 0 200px"}}>
   <label style={{fontWeight:"bold"}}>Company name or job title</label>
   
   <div >
    <TextField sx={{width:"560px",margin:"6px 0 0 3px" }} size="small" InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}></TextField>
              <Button variant="contained" sx={{width:"300px"  ,margin:"5.3px 0 0 50px", height:"40px",fontWeight:"bold"}} size="small">Find Companies</Button>
   </div>
   </div>

   <div style={{ fontSize: "40px", margin:"40px  0 0 200px",fontWeight:"bold"}}>Popular companies</div>
   <PopularCompany/>

   <div style={{ fontSize: "40px", margin:"40px  0 0 200px",fontWeight:"bold"}}>Compare working at</div>

   <CompanyWorking/>
   <div style={{margin:"70px 0 0 250px"}}>
    <img src="https://user-images.githubusercontent.com/95959029/187026741-047cc295-ba87-4e46-93cc-7f55e95b36e6.PNG" alt="" />
   </div>
   <Companyreviewfooter/>
        
    </div>
  )
}

export default CompanyReview