import React from 'react';
import {baseUrl} from '../../Services/Urls';

export const Card = ({Name, Img, Address, City, State}) => {
    console.log(State)
    return (
      
      <div className="card_container"> 
        <img src={`${baseUrl}/Seller/${Img === "" ? "noImage.png" : Img}`} style={{width:"100%", height:"200px"}} alt="sell" />
        <div className="card_discription"> 
          <h5>{Name}</h5> 
          <p><i className="fas fa-map-marker-alt"></i> {`${Address}  ${City !== null ? City.cityName : ""} 
           ${State !== null ? State.stateName : ""}`}</p>
           
          <img src={baseUrl+"/Images/Star_rating.png"} style={{width:"100px"}} alt="rate" /> 
        </div> 
      </div> 

    )
} 
