import React, {Component} from 'react';
import { connect } from 'react-redux';
import {baseUrl} from '../../Services/Urls';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

class ProductList extends Component {
  // constructor(props){
  //   super(props);
  // }

  render(){

    const renderProducts = (list) => {
      return(

        <Grid container spacing={1}>
          {list.map((p, index) => 
            <Grid key={index} item xs={12} sm={4} md={3} lg={3}>
              <div className="product_card"> 
                <img src={`${baseUrl}/Product/${p.photoPath}`} style={{width:"100%", height:"300px"}} alt="produ" />
                <div className="product_card_detail"> 
                  <h6 style={{color:"gray"}}>{p.brandId === null ? "" : p.brandName}</h6> 
                  <Link to={`/DetailPro?pid=${p._id}`} > {p.productName}</Link>
                  <p style={{marginBottom: "0px"}}><i style={{fontSize:"13px"}} className="fas fa-rupee-sign"></i> {p.RevisedPrice}</p>
                </div> 
              </div> 
            </Grid>
          )}
        </Grid>
      
      )
    }

    const list = renderProducts(this.props.productList);

    return (
      
      <div className="product_wrapper">
        <div className="product_head">
          <h5>Product</h5>
        </div>
        
        <div style={{padding:"8px"}}>
          {list}
        </div>
        
      </div> 

    )
  }
}

function mapStateToProps(state) {
  return ({
    productList: state.productListing.productList
  });
}

export default connect(mapStateToProps)(ProductList);