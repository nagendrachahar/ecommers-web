import React, { Component } from 'react';
import {Logo} from '../utils/Logo';
import {SearchBar} from './SearchBar';
import ProfileIcon from './Profile';
import {CategoryNav} from './Category';


class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      isMenu: true
    };
  }

  logOut=() => {
    localStorage.clear();
    window.location.href = "/Login";
  };

render() {
    return (
    
      <div className="main-header">
            <Logo Name="IN" />
            
            <div className="search_nav_wrapper">
              <CategoryNav />
              <SearchBar />
            </div>

            <ProfileIcon />
      </div> 
      
    );
  }
}
export default Header;

