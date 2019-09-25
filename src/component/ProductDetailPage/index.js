import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import {hideMessage} from '../../store/action/MessageAction'; 
import 'popper.js/dist/popper.min.js'; 
import 'bootstrap/dist/js/bootstrap.min.js'; 

import ProductDetail from './Product'; 
//import {seller} from '../../Services/seller'; 

class ProductDetailIndex extends Component {

  constructor(props){
    super(props);
    this.state = {
      sellerList:[],
      loading: true
    }
    //CheckSession(this.props);
    
  }


render() {

    return (
      <React.Fragment>
        <div className="product_detail_con">
          <ProductDetail path={this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailIndex);

