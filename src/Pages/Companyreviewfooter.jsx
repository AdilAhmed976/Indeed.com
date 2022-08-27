import React from 'react'

const Companyreviewfooter = () => {
    const footerone=[
   "Career Advice",'Browse Jobs','Browse Companies',
   'Salaries','Indeed Events','Work at Indeed','Countries','About',
   'Help Center'


    ]
    const footertwo=[
       ' © 2022 Indeed','Accessibility at Indeed','Privacy Center','Cookies','Privacy','Terms'
       

    ]
  return (
    <div style={{margin:"120px 0 0 30px"}}>
        <div style={{display:"flex",gap:"40px"}}>
        {footerone.map((item)=>(
            <div>{item}</div>
        ))}

     </div>

     <div style={{display:"flex",gap:"40px", margin:"30px 0 0 0"}}>
        {footertwo.map((item)=>(
            <div>{item}</div>
        ))}

     </div>
    </div>
  )
}

export default Companyreviewfooter