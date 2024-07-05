

import { IMAGE_URL } from "../utils/constants"

const ResturentCard=({resData})=>{
    // const {resData}=props 


    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img  className ="res-logo" alt="logo" src={IMAGE_URL+resData.info.cloudinaryImageId}/>
            <h1>{resData.info.name}</h1>
            <h4>{resData.info.cuisines}</h4>
            <div className="rating-time" style={{display:"flex"}}>
                <h4 > {resData.info.avgRating}</h4>
                <h4 >{resData.info.slaString}</h4>
                
            </div>
            <h4 >{resData.info.costForTwoString}</h4>
        </div>
    )
}

export default ResturentCard