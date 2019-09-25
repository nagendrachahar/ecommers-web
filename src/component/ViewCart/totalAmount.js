import React, {Component} from 'react';
import { connect } from 'react-redux'; 
//import queryString from 'query-string';
import Grid from '@material-ui/core/Grid';
import {Cart} from '../../Services/master'
import {getCartList, getCartTotal} from '../../store/action/CartAction'

const useStyles = {
  root: {
    width: "100%",
    backgroundColor: "white",
    boxShadow: "0 2px 4px 0 rgba(0,0,0,.08)"
  }
};

class TotalAmount extends Component {

  constructor(props){
    super(props);
    this.state = {
      price:{min: 300, max: 400}
    }
  }

  componentDidMount(){
    if(this.props.isLogin){
      const list = localStorage.getItem("cart");
           
      if(list !== null){
          Cart.fillToCart(JSON.parse(list))
          .then(res => {
              console.log(res.data)
              if(res.data.resType === 'success'){
                localStorage.removeItem("cart")
                this.props.dispatch(getCartList());
                this.props.dispatch(getCartTotal());
              }

          }).catch(err => console.log(err));
          
      }
      else{
        this.props.dispatch(getCartList());
        this.props.dispatch(getCartTotal());
      }
      
    }
    else{
      this.props.dispatch(getCartList());
      this.props.dispatch(getCartTotal());
    }
   
  }

  render(){

    return (
      <div style={useStyles.root}>
        <div style={{borderBottom: "1px solid gray", padding: "10px 10px 0px"}}>
          <h6 style={{display: "inline-block"}}>PRICE DETAIL</h6>
        </div>
        
        <Grid container spacing={1} style={{padding: "10px"}}>
          
          <Grid item xs={6}>
              <span>Price</span>
          </Grid>

          <Grid item xs={6}>
              <span>{this.props.cartTotal}</span>
          </Grid>

          <Grid item xs={6}>
              <span>Delivery</span>
          </Grid>

          <Grid item xs={6}>
              <span>Free</span>
          </Grid>

          <Grid item xs={6}>
              <span>Total Payable</span>
          </Grid>

          <Grid item xs={6}>
              <span>{this.props.cartTotal}</span>
          </Grid>
          
        </Grid>
        
      </div>
    )
  }
  
}

function mapStateToProps(state) {
  return ({
    cartTotal: state.cartReducer.cartTotal,
    isLogin: state.profileReducer.isLogin
  });
}

export default connect(mapStateToProps)(TotalAmount);