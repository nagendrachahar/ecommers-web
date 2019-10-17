import React, { Component } from 'react';
import { connect } from 'react-redux';
import {hideMessage} from '../../../../store/action/MessageAction'; 
import 'popper.js/dist/popper.min.js'; 
import 'bootstrap/dist/js/bootstrap.min.js'; 
import AccountMenu from '../AccountMenu'; 
import {Input} from '../../../UtilComponent/Elements/TextField2';
import {Button} from '../../../UtilComponent/Elements/Button';

const useStyles = {
  width: "100%",
  backgroundColor: "white",
  boxShadow: "0 2px 4px 0 rgba(0,0,0,.08)",
  marginBottom: "10px"
};

class Account extends Component {

  constructor(props){
    super(props)
    this.state = {
      FormGroup: {
        Name: "",
        Phone: "",
        Email: "",
        password: ""
      }
    } 
  }

render() {
    return (
      <div className="small_container">

        <div className="content_wrapper_30">
          <AccountMenu />
        </div>
        
        <div className="content_wrapper_70">
          <div style={useStyles}>
            <h5 style={{padding: "10px"}}>Personal Information</h5>
            <div>

              <div className="col-sm-6 col-md-6 col-lg-6 float-left">
                <Input 
                  Type="text" 
                  Name="Name" 
                  Value={this.state.FormGroup.Name} 
                  Placeholder="Name" 
                  Func={this.handleInputChange} /> 
              </div> 

              <div className="col-sm-6 col-md-6 col-lg-6 float-left">
                <Input 
                  Type="text" 
                  Name="Phone" 
                  Value={this.state.FormGroup.Phone} 
                  Placeholder="Phone" 
                  Func={this.handleInputChange} /> 
              </div>

              <div className="col-sm-6 col-md-6 col-lg-6 float-left">
                <Input 
                  Type="email" 
                  Name="Email" 
                  Value={this.state.FormGroup.Email} 
                  Placeholder="Email" 
                  Func={this.handleInputChange} /> 
              </div>

              <div className="col-sm-6 col-md-6 col-lg-6 float-left">
                <Input 
                  Type="text" 
                  Name="password" 
                  Value={this.state.FormGroup.password} 
                  Placeholder="Password" 
                  Func={this.handleInputChange} /> 
              </div>

              <div className="col-sm-6 col-md-6 col-lg-6">
                  <Button isDisable={false} className="btn btn-primary">Submit</Button>
              </div>

            </div>
            <p style={{clear: "both"}}> </p>
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

