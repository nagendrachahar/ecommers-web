import React, { Component } from 'react';
import { connect } from 'react-redux';
import {hideMessage} from '../../../../store/action/MessageAction'; 
import 'popper.js/dist/popper.min.js'; 
import 'bootstrap/dist/js/bootstrap.min.js'; 
import AccountMenu from '../AccountMenu'; 

const useStyles = {
  width: "100%",
  backgroundColor: "white",
  boxShadow: "0 2px 4px 0 rgba(0,0,0,.08)",
  marginBottom: "10px"
};

class Account extends Component {

render() {
    return (
      <div className="small_container">

        <div className="content_wrapper_30">
          <AccountMenu />
        </div>
        
        <div className="content_wrapper_70">
          <div style={useStyles}>
            <h5>Personal Information</h5>
          </div>
        </div>

      </div>
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

