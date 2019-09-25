import React from 'react';
// import { Link } from 'react-router-dom';

export const CategoryNav = ({icon, title, Url}) => {
    return (
      <div className="nav_wrapper" >
        <span>CATEGORY <i className="fas fa-angle-down" style={{marginLeft:"20px"}}></i></span>
        <ul className="nav_menu">
          <li>
            <a href='/product'>Men</a>
            <ul className="sub_nav_menu">
              <li>
                <a href='/product'>Cloths</a>
                <ul className="sub_nav_menu">
                  <li>
                    <a href='/product'>Cloths</a>
                  </li>
                  <li>
                    <a href='/product'>Shoes</a>
                  </li>
                  <li>
                    <a href='/product'>Pents</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='/product'>Shoes</a>
              </li>
              <li>
                <a href='/product'>Pents</a>
              </li>
            </ul>
          </li>
          <li>
            <a href='/product'>Girls</a>
          </li>
          <li>
            <a href='/product'>Women</a>
          </li>
          <li>
            <a href='/product'>Child</a>
          </li>
          <li>
            <a href='/product'>Latest</a>
          </li>
          <li>
            <a href='/product'>Offers</a>
          </li>
        </ul>
        
      </div>
    )
}
