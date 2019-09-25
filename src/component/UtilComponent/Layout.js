import React, { Component } from 'react';
import Header from './Header';

class Layout extends Component {
  constructor(props){
    super(props);
    this.state = {
      isMenu: true
    };
  }


render() {
    return (
    
      <div>
            <Header />
            {this.props.children}
      </div> 
      
    );
  }
}
export default Layout;

