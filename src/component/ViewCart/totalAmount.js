import React, {Component} from 'react';
import { connect } from 'react-redux'; 
//import queryString from 'query-string';
import Grid from '@material-ui/core/Grid';
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
    this.fillCart(this.props)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.isLogin !== this.props.isLogin){
      this.fillCart(nextProps)
    }
  
  }

  fillCart = (props) => {
      props.dispatch(getCartList());
      props.dispatch(getCartTotal());
  }

  render(){

    return (
      <div style={useStyles.root}>
        <div style={{borderBottom: "1px solid gray", padding: "10px 10px 0px"}}>
          <h6 style={{display: "inline-block"}}>PRICE DETAIL</h6>
        </div>
        
        <Grid container spacing={1} style={{padding: "15px"}}>
          
          <Grid item xs={6}>
              <span>Price</span>
          </Grid>

          <Grid item xs={6} style={{textAlign: "right"}}>
              <span>{this.props.cartTotal}</span>
          </Grid>

          <Grid item xs={6}>
              <span>Delivery</span>
          </Grid>

          <Grid item xs={6} style={{textAlign: "right"}}>
              <span style={{color: "green"}}>Free</span>
          </Grid>

          <p style={{borderBottom: "1px dotted gray", width: "100%"}}></p>

          <Grid item xs={6}>
              <span>Total Payable</span>
          </Grid>

          <Grid item xs={6} style={{textAlign: "right"}}>
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