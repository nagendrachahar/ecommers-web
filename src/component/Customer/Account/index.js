import React, { Component } from 'react';
import { connect } from 'react-redux';
import {hideMessage} from '../../../store/action/MessageAction'; 
import 'popper.js/dist/popper.min.js'; 
import 'bootstrap/dist/js/bootstrap.min.js'; 

import ProductList from './Products'; 
import TotalAmount from './AccountMenu'; 

class Account extends Component {

render() {
    return (
      <React.Fragment>

        <div className="content_wrapper_30">
          <TotalAmount />
        </div>
        
        <div className="content_wrapper_70">
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

export default connect(mapStateToProps, mapDispatchToProps)(Account);

