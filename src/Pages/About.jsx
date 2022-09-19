import React from 'react'
import aboutStyle from './About.module.css'

const About = () => {
  // Reviewd by: move static content to some constant file
  // image URLs should be picked from url constant file
  return (
    <div>
        <div className={aboutStyle.Container}>
            <div >
                <h1>About Indeed</h1>
                <p>Indeed is the #1 job site in the world1 with over 250M unique visitors every month. Indeed strives to put job seekers first, giving them free access to search for jobs, post resumes, and research companies. Every day, we connect millions of people to new opportunities.</p>
                <h3>Please note that Indeed and its affiliates are directly or indirectly owned by a publicly traded Japanese parent company, Recruit Holdings Co., Ltd.</h3>
            </div>
            <div >
              <img src="https://d341ezm4iqaae0.cloudfront.net/jobseeker/wp-content/uploads/2021/07/08192932/Image-Frame.png" alt="" />
            </div>
        </div>
        <div className={aboutStyle.Views}>
          <div >
            <h1>250M</h1>
            <p>Unique monthly visitors</p>

          </div>
          <div >
            <h1>225M</h1>
            <p>Resumes on Indeed</p>

          </div>          <div >
            <h1>700M+</h1>
            <p>Total ratings and reviews</p>
          </div>
        </div>
        <div className={aboutStyle.Bottom}>
          <div>
            <img src="https://d341ezm4iqaae0.cloudfront.net/jobseeker/wp-content/uploads/2021/07/08194002/6col.png" alt="img122354" />
          </div>
          <div>
            <h1>
              Our people
            </h1>
            <p>
            At Indeed, our mission is to help people get jobs. We have more than 13,330 global employees passionately pursuing this purpose and improving the recruitment journey through real stories and data. We foster a collaborative workplace that strives to create the best experience for job seekers.
            </p>
            <button>work for Indeed</button>
            <button>Leadership</button>
          </div>
        </div>
      
    </div>
  )
}

export default About
