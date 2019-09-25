import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
//import { connect } from 'react-redux';
import Layout from './component/UtilComponent/Layout'

import Home from './component/Home/index';
import LoginComponent from './component/Customer/Login';
import CustomerRegister from './component/Customer/Register';
import SellerRegister from './component/Seller/Register';
import Products from './component/Product/index';
import ProductDetailIndex from './component/ProductDetailPage/index';
import ViewCart from './component/ViewCart/index';

class App extends Component {

  render() {
    return (
      <div>
          <Layout>
            <Route exact path='/' component={Home}/> 
            <Route path='/Home' component={Home}/> 
            <Route path='/SellerRegister' component={SellerRegister}/> 
            <Route path='/Products' component={Products}/> 
            <Route path='/DetailPro' component={ProductDetailIndex}/> 
            <Route path='/ViewCart' component={ViewCart}/> 
          </Layout>
          
          <Route path='/Login' component={LoginComponent}/> 
          <Route path='/Register' component={CustomerRegister}/> 
        
      </div>
       
    );
  }
}

export default App;

(function getSession(){

  if(localStorage.getItem("x-token") != null){
    axios.defaults.headers.common['x-token'] = localStorage.getItem("x-token");
  }

})();

