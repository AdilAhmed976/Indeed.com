import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import styles from "./PopularCompany.module.css"

const PopularCompany = () => {
    const popular=[
        {
            id:1,
            image:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/c50f14536e0deeae1493678dfe91b816",
            name:"Ericsson-Worldwide",
            rating:4,
            noofreview:"6,721 reviews",
            salaries:"Salaries",
            questions:"Questions",
            openjobs:"Open jobs"
        },
        {
            id:2,
            image:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/eece435f10a54eaced0d7b3e59bc816d",
            name:"Wells Fargo",
            rating:4,
            noofreview:"42,751 reviews",
            salaries:"Salaries",
            questions:"Questions",
            openjobs:"Open jobs"
        },
        {
            id:3,
            image:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/c0bbcf736db51585b833fd597afda32e",
            name:"Adani Group",
            rating:4,
            noofreview:"374 reviews",
            salaries:"Salaries",
            questions:"Questions",
            openjobs:"Open jobs"
        },
        {
            id:4,
            image:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/f352beb47acbe281bb3534e44e8ae048",
            name:"Standard Chartered Bank",
            rating:3,
            noofreview:"2,965 reviews",
            salaries:"Salaries",
            questions:"Questions",
            openjobs:"Open jobs"
        },
        {
            id:5,
            image:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/acfc069b6351c9d83b5b58e07ccb6f49",
            name:"Maersk",
            rating:4,
            noofreview:"2,817 reviews",
            salaries:"Salaries",
            questions:"Questions",
            openjobs:"Open jobs"
        },
        {
            id:6,
            image:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/a64f48d11ba0b7bfe53d35404b2612e0",
            name:"Syntel",
            rating:3,
            noofreview:"2,027 reviews",
            salaries:"Salaries",
            questions:"Questions",
            openjobs:"Open jobs"
        },
        {
            id:7,
            image:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/5ee1795144e601f25421062863c89e3b",
            name:"Hinduja Global Solutions",
            rating:4,
            noofreview:"5,172 reviews",
            salaries:"Salaries",
            questions:"Questions",
            openjobs:"Open jobs"
        },
        {
            id:8,
            image:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/e2eaca60e9dccd01412e28d819cde36a",
            name:"Teleperformance",
            rating:4,
            noofreview:"33,443 reviews",
            salaries:"Salaries",
            questions:"Questions",
            openjobs:"Open jobs"
        }
        ,  {
            id:9,
            image:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/f6eb1cf56db401d1519d8e3d67c4a39d",
            name:"JLL",
            rating:4,
            noofreview:"3,056 reviews",
            salaries:"Salaries",
            questions:"Questions",
            openjobs:"Open jobs"
        }
    ]

  

  return (
    <div className={styles.container}>
        {popular.map((item)=>(
            <div >
            
          <div className={styles.image_rating}>
            <div>
                <img src={item.image} className={styles.popular_company_image}/>
            </div>
            <div >
            <div>{item.name}</div>
            <div className={styles.rating_views}>
                
                <div>
                     { new Array(item.rating).fill(1).map((e)=>(
                        <StarIcon/>
                    ))}
                    </div>
                <div className={styles.noofreview}>{item.noofreview}</div>
            </div>
            </div>
         
          </div>
          <div className={styles.question_container}>
            <div>{item.salaries}</div>
            <div>{item.questions}</div>
            <div>{item.openjobs}</div>
          </div>
          
            </div>
        ))}
    </div>
  )
}

export default PopularCompany