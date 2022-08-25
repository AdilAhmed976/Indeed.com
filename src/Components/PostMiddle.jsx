 import React from "react";
 import { useState } from "react";
import CardOne from "./CardOne";
import CardThree from "./CardThree";
import CardTwo from "./CardTwo";
  
const Middle = () => { 
    const [namec , setNamec] = useState('')
    const handleSubmit = () => {
      alert(namec)
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
    { page === 0 &&  <CardOne toogle={toogle} namec={namec} setNamec={setNamec} /> }
    { page === 1 &&  <CardTwo toogle={toogle}  /> }
    {page ===2 &&  <CardThree toogle={toogle}  submit={handleSubmit} /> }
    </>
    );
  };
  
  export default Middle;
  