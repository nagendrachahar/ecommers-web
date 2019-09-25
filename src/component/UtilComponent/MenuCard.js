import React from 'react';
import { Link } from 'react-router-dom'

export const MenuCard = ({icon, title, Url}) => {
    return (
      <div className="col-sm-4 col-md-3 col-lg-2" style={{marginBottom:"20px"}}>
        <div className="card_wrapper">
            <Link to={Url}>
              <img className="card_icon" 
                  src={process.env.PUBLIC_URL+"/Images/icon/"+icon+".png"} 
                  alt="Card Icon" />
            </Link> 
            
            <h5 className="">{title}</h5> 
        </div>
      </div>
    )
}
