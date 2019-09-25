import React, { Component } from 'react';
import { connect } from 'react-redux';
import {hideMessage} from '../../store/action/MessageAction'; 
import 'popper.js/dist/popper.min.js'; 
import 'bootstrap/dist/js/bootstrap.min.js'; 

import ProductList from './Products'; 
import RangeSlider from './filter'; 

class Products extends Component {

render() {

    return (
      <React.Fragment>
        <div className="filter_con">
          <RangeSlider path={this.props} />
        </div>
        <div className="product_con">
          <ProductList />
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
    return ({
      messageShow: state.messageReducer.messageShow,
      messageType: state.messageReducer.messageType,
      Message: state.messageReducer.Message
    });
}

function mapDispatchToProps(dispatch) {
  return ({
    hideMessage: () => {
      dispatch(hideMessage());
    }
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);

