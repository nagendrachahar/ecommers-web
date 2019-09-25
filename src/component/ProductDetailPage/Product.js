import React, {Component} from 'react';
import { connect } from 'react-redux';
import {baseUrl} from '../../Services/Urls';
import queryString from 'query-string';
import Grid from '@material-ui/core/Grid';
import {TextField} from '../UtilComponent/Elements/TextField';
import {AddCart} from '../UtilComponent/Elements/Button';
import {Product, Cart} from '../../Services/master'
//import { Link } from 'react-router-dom';

class ProductDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      query : queryString.parse(this.props.path.location.search),
      Pincode: "",
      product: {},
      productLoading: true
    }
  }

  componentDidMount(){
    const {query} = this.state;

    Product.getProductDetail(query.pid).then(res => {
      //console.log(res)
      if(res.data.resType === "success"){

        this.setState({
          product: res.data.product[0],
          productLoading: false
        })

      }
    })

  }

  handleInputChange = (event) => {
        
    const target = event.target;
    const value = target.value;
    const name = target.name;

    const UserInput = this.state;

    UserInput[name] = value;

    this.setState({
      UserInput
    });

  }

  addToCart = () => {
    const {query} = this.state;

    if(localStorage.getItem("x-token") != null){
      //if user logged in
      Cart.addToCart(query.pid).then(res => {
        console.log(res)
        // if(res.data.resType === "success"){
  
        //   console.log(res);
  
        // }
      })
    }
    else{
      let cart = [];
      if(localStorage.getItem("cart") != null){
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      let existIndex = -1;
      for(let i = 0; i<cart.length; i++){
        if(cart[i]["productId"] === query.pid){
          existIndex = i
        }
      }
      
      if(existIndex !== -1){
        cart[existIndex]["quantity"] = cart[existIndex]["quantity"] + 1;
      }
      else{
        cart.push({productId: query.pid, quantity: 1})
      }

      localStorage.setItem("cart", JSON.stringify(cart));

    }
    
  }
  

  render(){

    return (
      <React.Fragment>
        {this.state.productLoading ? null : 
        <Grid container spacing={1} style={{padding: "10px", backgroundColor:"white"}}>
          <Grid item xs={12} sm={5} md={5} lg={5}>
            <div>
              <img src={`${baseUrl}/Product/${this.state.product.photoPath}`} style={{width:"100%", height:"500px"}} alt="produ" />
            </div>
          </Grid>

          <Grid item xs={12} sm={7} md={7} lg={7}>
            
            <div className="product_detail">
              <p className="head_brand">{this.state.product.brandName} </p>
              <p className="head_name">{this.state.product.productName}</p>
              <p className="head_price"><i className="fas fa-rupee-sign"></i> {this.state.product.RevisedPrice}</p>
              <small style={{color:"gray"}}>Inclusive of all Taxes</small>

              <div style={{maxWidth:"300px", position: "relative"}}>
                <TextField 
                  style={{paddingRight:"70px"}} 
                  Type="text" 
                  Name="Pincode" 
                  Value={this.state.Pincode} 
                  Placeholder="delivery pincode" 
                  Func={this.handleInputChange} />

                <span style={{position: "absolute", top:"9px", right:"3px", color:"green", cursor:"pointer"}}>check</span>
              </div>
              
              <div>
                <AddCart func={this.addToCart} style={{width:"150px", padding:"13px", color:"white", borderRadius: "3px"}} />
              </div>

              <div style={{paddingTop: "30px"}}>
                <p style={{fontWeight: "500"}}>Discription : </p>
                <p>
                  {this.state.product.discription}
                </p>
              </div>

              <div style={{paddingTop: "30px"}}>
                <p style={{fontWeight:"500", color: "gray"}}>Sold by :</p>
                <p>{this.state.product.sellerName}</p>
              </div>

            </div>
            
          </Grid>
        </Grid>
        }
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return ({
    productList: state.productListing.productList
  });
}

export default connect(mapStateToProps)(ProductDetail);