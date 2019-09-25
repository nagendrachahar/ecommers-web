import React from 'react';

export const SearchBar = ({icon, title, Url}) => {
    return (
      <div className="search_bar_wrapper" >
        <input type="text" />
        <span><i className="fas fa-search"></i></span>
      </div>
    )
}
