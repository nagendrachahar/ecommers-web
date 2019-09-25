import React, {Component} from 'react';
import { connect } from 'react-redux'; 
import queryString from 'query-string';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import BrandFilter from './brandFilter';  
import {getProductList} from '../../store/action/ProductListingAction'

const useStyles = {
  root: {
    width: "100%",
    backgroundColor: "white",
    boxShadow: "0 2px 4px 0 rgba(0,0,0,.08)"
    
  },
  slide: {
    color: "#ff7d0e"
  },
  textField: {
    padding: "2px"
  }
};

function valuetext(value) {
  return `${value}`;
}

class RangeSlider extends Component {

  constructor(props){
    super(props);
    this.state = {
      price:{min: 300, max: 400}
    }
  }

  componentDidMount(){
    const query = queryString.parse(this.props.path.location.search);
    this.props.dispatch(getProductList(query));

    const price = this.state.price;

    if('minPrice' in query){
      price.min = query.minPrice;
      this.setState({
        price:price
      })
    }

    if('maxPrice' in query){
      price.max = query.maxPrice;
      this.setState({
        price:price
      })
    }
  }

  handleRangeSlider = (event, newValue) => {

    this.setState({
      price:{min: newValue[0], max: newValue[1]}
    })

    const query = queryString.parse(this.props.path.location.search);

    const modifiedQuery = {
      ...query,
      minPrice: newValue[0],
      maxPrice: newValue[1]
    }

    this.props.path.history.replace({
      pathname: this.props.path.location.pathname,
      search: queryString.stringify(modifiedQuery)
    })

  };

  handleTextChange = (index, event) => {
    
    const query = queryString.parse(this.props.path.location.search);

    let modifiedQuery = {}
    const price = this.state.price;

    if(index === 0) {
      price.min = event.target.value;
      this.setState({
        price: price
      })

      modifiedQuery = {
        ...query,
        minPrice: event.target.value
      }
    }
    else {
      price.max = event.target.value;
      this.setState({
        price: price
      })

      modifiedQuery = {
        ...query,
        maxPrice: event.target.value
      }
    }

    this.props.path.history.replace({
      pathname: this.props.path.location.pathname,
      search: queryString.stringify(modifiedQuery)
    })
    
  };

  componentWillReceiveProps(nextProps){
    if(this.props.path.location.search !== nextProps.path.location.search){
      const query = queryString.parse(nextProps.path.location.search);
    
      this.props.dispatch(getProductList(query));

    }
  }

  render(){

    return (
      <div style={useStyles.root}>
        <div style={{borderBottom: "1px solid gray", padding: "10px 10px 0px"}}>
          <h6 style={{display: "inline-block"}}>Filter</h6>
          <i className="fas fa-filter float-right"></i>
        </div>
        
        <Grid container spacing={1} style={{padding: "10px"}}>
          <Grid item xs={12} className="filter_head" >
            Price
          </Grid>
          <Grid item xs={6}>
  
            <TextField 
              id="outlined-dense" 
              type="number" 
              label="Min" 
              value={this.state.price.min} 
              style={useStyles.textField} 
              onChange={this.handleTextChange.bind(this, 0)} 
              margin="dense" 
              variant="outlined" 
             />
          
          </Grid>
          <Grid item xs={6}>
            <TextField
                id="outlined-dense"
                type="number"
                label="Max"
                value={this.state.price.max}
                style={useStyles.textField}
                onChange={this.handleTextChange.bind(this, 1)}
                margin="dense"
                variant="outlined"
              />
          </Grid>
          <Grid item>
            ₹ {this.state.price.min}
          </Grid>
          <Grid item xs>
            <Slider
              style={useStyles.slide}
              value={[Number(this.state.price.min), Number(this.state.price.max)]} 
              min={0}
              max={5000}
              onChangeCommitted={this.handleRangeSlider}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
            />
          </Grid>
          <Grid item>
            ₹ {this.state.price.max}
          </Grid>
          
        </Grid>
        
        <BrandFilter path={this.props.path} />
      </div>
    )
  }
  
}

function mapStateToProps(state) {
  return ({
    productList: state.productListing.productList
  });
}

export default connect(mapStateToProps)(RangeSlider);