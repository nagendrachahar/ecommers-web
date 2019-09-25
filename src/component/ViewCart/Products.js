import React, {Component} from 'react';
import { connect } from 'react-redux';
import {baseUrl} from '../../Services/Urls';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import {Cart} from '../../Services/master';
import {getCartList, getCartTotal} from '../../store/action/CartAction'

class ProductList extends Component {
  // constructor(props){
  //   super(props);
  // }

  addItem = (id) => {
    if(localStorage.getItem("x-token") != null){
      //if user logged in
      Cart.addToCart(id).then(res => {
        console.log(res)
        if(res.data.resType === "success"){
  
          this.props.dispatch(getCartList());
          this.props.dispatch(getCartTotal());
  
        }
      })
    }
    else{
      let cart = [];
      if(localStorage.getItem("cart") != null){
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      let existIndex = -1;
      for(let i = 0; i<cart.length; i++){
        if(cart[i]["productId"] === id){
          existIndex = i
        }
      }
      
      if(existIndex !== -1){
        cart[existIndex]["quantity"] = cart[existIndex]["quantity"] + 1;
      }
      else{
        cart.push({productId: id, quantity: 1})
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      this.props.dispatch(getCartList());
      this.props.dispatch(getCartTotal());

    }
  }


  removeItem = (id) => {
    if(localStorage.getItem("x-token") != null){
      //if user logged in
      Cart.removeFromCart(id).then(res => {
        console.log(res)
        if(res.data.resType === "success"){
  
          this.props.dispatch(getCartList());
          this.props.dispatch(getCartTotal());
  
        }
      })
    }
    else{
      let cart = [];
      if(localStorage.getItem("cart") != null){
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      let existIndex = -1;
      for(let i = 0; i<cart.length; i++){
        if(cart[i]["productId"] === id){
          existIndex = i;
          break;
        }
      }
      
      if(existIndex !== -1){
        if(cart[existIndex]["quantity"] > 1){
          cart[existIndex]["quantity"] = cart[existIndex]["quantity"] - 1;
        }
        else{
          cart.splice(existIndex, 1);
        }
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      this.props.dispatch(getCartList());
      this.props.dispatch(getCartTotal());
    }
  }

  render(){

    const renderProducts = (list) => {
      return(

        <React.Fragment>
          {list.map((p, index) => 
            <div key={index} className="border_bottom_light" style={{padding: "5px"}} >
              <Grid container spacing={1} >
                
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <img src={`${baseUrl}/Product/${p.photoPath}`} style={{width:"100%", height:"auto"}} alt="produ" />
                </Grid>

                <Grid item xs={12} sm={4} md={4} lg={4}> 

                  <div className="product_card_detail"> 
                    <h6 style={{color:"gray", marginBottom: "5px"}}>{p.brandName}</h6> 
                    <Link to={`/DetailPro?pid=${p._id}`} > {p.productName}</Link> 
                    <p style={{marginBottom: "0px"}}><span>₹</span> {p.RevisedPrice}</p> 
                  </div> 

                  <div className="cart_update_con"> 
                    <span className="btn_dic" onClick={this.removeItem.bind(this, p.productId)}><i className="fas fa-minus"></i></span>
                    <span className="pro_qty">{p.quantity}</span>
                    <span className="btn_inc" onClick={this.addItem.bind(this, p.productId)}><i className="fas fa-plus"></i></span>
                  </div> 

                </Grid>
                  
              </Grid>
            </div>
          )}
        </React.Fragment>
      )
    }

    const list = renderProducts(this.props.cartList);

    return (
      <div className="product_wrapper">
        <div className="product_head">
          <h5>Shopping Cart</h5>
        </div>
        
        <div>
          {list}
        </div>
      </div> 
    )
  }
}

function mapStateToProps(state) {
  return ({
    cartList: state.cartReducer.cartList
  });
}

export default connect(mapStateToProps)(ProductList);