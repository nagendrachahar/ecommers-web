import React, {Component} from 'react';
import { connect } from 'react-redux'; 
import queryString from 'query-string';
import Grid from '@material-ui/core/Grid';
// import Checkbox from '@material-ui/core/Checkbox';  
// import {getProductList} from '../../store/action/ProductListingAction';
import {Brand} from '../../Services/master';

class BrandFilter extends Component {

  constructor(props){
    super(props);
    this.state = {
      brandList:[]
    }
  }

  componentDidMount(){
    const query = queryString.parse(this.props.path.location.search);

    Brand.fetchList().then(res => {
      console.log(res)
      if(res.data.resType === 'success'){
        const list =  res.data.brand;
        
        for(let i=0; i<list.length; i++){
          if("brand" in query){
            let brand = query.brand;
            let brandArr = brand.split(",");
            if(brandArr.includes(list[i]["_id"])){
              list[i]["checked"] = true;
            }
            else{
              list[i]["checked"] = false;
            }
          }
          else{
            list[i]["checked"] = false;
          }
          
        }

        this.setState({
          brandList: list
        })

      }
    })
    
  }

  handleBrandChange = (e, index) => {
    const query = queryString.parse(this.props.path.location.search);
    let list = this.state.brandList;
    let brand = "";

    if(list[index].checked) {
      list[index].checked = false
    }
    else {
      list[index].checked = true
    }

    this.setState({
      brandList:list
    });

    if("brand" in query){
      brand = query.brand;
      let brandArr = brand.split(",");
      if(brandArr.includes(e.target.value)){

        brandArr = brandArr.filter((b) => {
          return b !== e.target.value
        })

        brand = brandArr.toString();
      }
      else{
        brand += ',' + e.target.value;
      }
      
    }
    else{
      brand += e.target.value;
    }
    
    const modifiedQuery = {
      ...query,
      brand: brand
    }

    if(modifiedQuery.brand === ''){
      delete modifiedQuery['brand'];
    }

    this.props.path.history.replace({
      pathname: this.props.path.location.pathname,
      search: queryString.stringify(modifiedQuery)
    })

  };

 
  render(){

    return (
      <React.Fragment>
        
        <Grid container spacing={1} style={{padding: "10px"}} >
          <Grid item xs={12} className="filter_head" style={{borderTop: "1px solid #d2caca"}} >
            Brand
          </Grid>
          <Grid item>
            <ul className="l_sty_non">
              {this.state.brandList.map((item, index) => 
                <li style={{fontSize:"14px"}} key={index}>
                    <input type="checkbox" value={item._id} onChange={(e) => {this.handleBrandChange(e, index)}} checked={item.checked} /> {item.brandName}
                </li>
              )}
            </ul>
          </Grid>
        </Grid>
  
      </React.Fragment>
    )
  }
  
}

function mapStateToProps(state) {
  return ({
    productList: state.productListing.productList
  });
}

export default connect(mapStateToProps)(BrandFilter);