 import React from "react";
 import { useState } from "react";
import CardOne from "./CardOne";
import CardThree from "./CardThree";
import CardTwo from "./CardTwo";
  
const Middle = () => { 
    const [user , setUser] = useState({
      title:"",
      company_name:"",
      location:"",
      salary:"",
      job_type:"",
      Job_Description:"",
      Schedule:"",
      employee:"",
      name:"",
      phone:""
    })
    const handleSubmit = () => {
      console.log(user)
    }
    const handleChange = (e) => {
      let {name  , value } = e.target
      setUser({...user , [name]:value})
    }
  
    const [page, setPage] = useState(0);
    const toogle = (arg) => {
      if(arg === 'inc'){
          setPage(p => p+1)
      }else if(arg === 'dec'){
          setPage((p) => p-1)
      }
    };
  
    return (
    <>
    { page === 0 &&  <CardOne toogle={toogle} user={user} setUser={handleChange}  /> }
    { page === 1 &&  <CardTwo toogle={toogle} user={user} setUser={handleChange}  /> }
    {page ===2 &&  <CardThree toogle={toogle} user={user} setUser={handleChange} v submit={handleSubmit} /> }
    </>
    );
  };
  
  export default Middle;
  