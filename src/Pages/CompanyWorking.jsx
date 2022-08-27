import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import styles from "./CompanyWorking.module.css"

const CompanyWorking = () => {
    const company=[
        {
            id:1,
            image1:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/96x96/bcaa55ffe2abf43dd5af968419da22b9",
            name1:"Deutsche Bank",
            ratingone:3.8,
            statone:<StarIcon/>,
            noofreviewone:"3.1k reviews",
            image2:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/96x96/7b9cdd7bc283efa5c6031775dd62b1eb",
            name2:"Citi",
            ratingtwo:3.9,
            startwo:<StarIcon/>,
            noofreviewtwo:"18.7k reviews",
        }
        ,
        {
            id:2,
            image1:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/96x96/6dab2f9e01e4bb467ce4416015c323e8",
            name1:"Kotak Mahindra Bank ",
            ratingone:3.9,
            statone:<StarIcon/>,
            noofreviewone:"2k reviews",
            image2:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/96x96/6e157f72c30f075f8bfa46a6ab8f9551",
            name2:"Kotak life insurance",
            ratingtwo:"3.9",
            startwo:<StarIcon/>,
            noofreviewtwo:"237",
        },
        {
            id:3,
            image1:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/96x96/ce433440c510a0e6bee7eb64aec89dbe",
            name1:"Axis Bank",
            ratingone:4.0,
            statone:<StarIcon/>,
            noofreviewone:"3.3k reviews",
            image2:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/96x96/c1e88bb71d075bbc247a2dd8ffeb4b75",
            name2:"HDFC Bank",
            ratingtwo:"3.9",
            startwo:<StarIcon/>,
            noofreviewtwo:"7.1k reviews",
        },
        {
            id:4,
            image1:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/96x96/5335229f1b22e90f1e5eafb892704339",
            name1:"Indigo Airlines ",
            ratingone:4.2,
            statone:<StarIcon/>,
            noofreviewone:"416 reviews",
            image2:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/96x96/57080c8fd69601f4e388188f6954bf93",
            name2:"SpiceJet",
            ratingtwo:"4.0",
            startwo:<StarIcon/>,
            noofreviewtwo:"340 reviews",
        }
    ]
  return (
    <div className={styles.companycontainer}>
        {company.map((item)=>(
            <div className={styles.cardcontainerdiv}>
                <div className={styles.firstcompanyparentdiv}>
                    <div><img src={item.image1} className={styles.companylogo}/></div>
                    <div>
                    <div>{item.name1}</div>
                    <div className={styles.ratingone}>
                        <div>{item.ratingone}</div>
                        <div>{item.statone}</div>
                        <div>{item.noofreviewone}</div>
                    </div>
                    </div>
                   
                </div>
                <div>Vs</div>
                <div className= {styles.firstcompanyparentdiv}>
                <div><img src={item.image2} className={styles.companylogo}/></div>
                    <div>
                    <div>{item.name2}</div>
                    <div className={styles.ratingone}>
                        <div>{item.ratingtwo}</div>
                        <div>{item.stattwo}</div>
                        <div>{item.noofreviewtwo}</div>
                    </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CompanyWorking