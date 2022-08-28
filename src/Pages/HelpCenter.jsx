import React from 'react'
import helpStyle from './HelpCenter.module.css'

const HelpCenter = () => {

    let data = [
        {
            img:"https://theme.zdassets.com/theme_assets/499832/c40885bb35f3a4536d326729167fdaea39caccea.svg",
            head:"My Indeed Account",
            que1:"How Do I Reset My Password?",
            que2:"I Can't Sign In To My Account",
        },
        {
            img:"https://theme.zdassets.com/theme_assets/499832/1dbbb69f200b91766bc89d80885adcf67de2be88.svg",
            head:"Company Pages & Reviews",
            que1:"How Do I See All Reviews on Company Pages?",
            que2:"How to Add and Delete Your Company Reviews ",
        },        {
            img:"https://theme.zdassets.com/theme_assets/499832/27b11e664903f5c4cec1cf1dbd53b7854e3a5c9f.svg",
            head:"Job Alerts",
            que1:"How to create a Job Alert",
            que2:"How to Cancel Job Alert Emails",
        },        {
            img:"https://theme.zdassets.com/theme_assets/499832/c40885bb35f3a4536d326729167fdaea39caccea.svg",
            head:"Job Search Tips",
            que1:"Getting Started With Your Job Search",
            que2:"Guidelines for a Safe Job Search",
        },        {
            img:"https://theme.zdassets.com/theme_assets/499832/c40885bb35f3a4536d326729167fdaea39caccea.svg",
            head:"Indeed Resume",
            que1:"How Do I Replace an Existing Resume on My Account?",
            que2:"How Do I View My Resume on Indeed?",
        },        {
            img:"https://theme.zdassets.com/theme_assets/499832/1e46d6b0affc46bf0e19d01dad5be19f3426290f.svg",
            head:"Applying for a Job",
            que1:"How to apply to a job on Indeed",
            que2:"I Can't Sign In To My Account",
        },        {
            img:"https://theme.zdassets.com/theme_assets/499832/e4c72ac3207b3bb5229bf85b4691abc6266e7aa1.svg",
            head:"Indeed Assessments",
            que1:"How Do I Reset My Password?",
            que2:"I Can't Sign In To My Account",
        },        {
            img:"https://theme.zdassets.com/theme_assets/499832/afa468401cff0088ed7865bbc1df64e1d1760fec.svg",
            head:"My Indeed Account",
            que1:"Seeing My Assessments Score or Which Questions I Answered Correctly",
            que2:"I Can't Sign In To My Account",
        },        {
            img:"https://theme.zdassets.com/theme_assets/499832/1db2bcec1fc1ac099f4aa10493a715966f9f1c2d.svg",
            head:"Technical Support",
            que1:"My web browser is not up to date. How can I get the latest version?",
        },
    ]


  return (
    <div className={helpStyle.Container}>
        {
            data.map((el) =>{
               return <div key={el.head}>
                <div className={
                    helpStyle.div1122}>
                    <img src={el.img} alt={el.img} />
                </div>
                <div>
                    <h4>{el.head}</h4>
                    <p>{el.que1}</p>
                    <p>{el.que2}</p>
                    <h6>Explore more articles
</h6>
               </div>

               </div>
            })
        }
      
    </div>
  )
}

export default HelpCenter
