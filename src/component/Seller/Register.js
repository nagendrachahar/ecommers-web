import React, { Component } from 'react'; 
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Register} from '../../Services/seller'
import {Input} from '../UtilComponent/Elements/TextField2'

class SellerRegister extends Component {

  constructor(props){
    super(props);
    this.state = {
      FormGroup: {
        sellerName: "", 
        sellerPhone: "", 
        sellerEmail: "", 
        password: "", 
        confirmPassword: ""
      }
    }
    //CheckSession(this.props);
  }

  handleInputChange = (event) => {
       
    const target = event.target;
    const value = target.value;
    const name = target.name;

    const UserInput = this.state.FormGroup;

    UserInput[name] = value;

    this.setState({
      FormGroup:UserInput
    })

  }

  handleSubmit = async (event) => {
    event.preventDefault();
    
    const data = this.state.FormGroup;
   
    Register(data).then(res => {
      console.log(res);
      this.props.showMessage({
        messageType: res.data.resType,
        Message: res.data.message
      });

   }).catch(err => console.log(err));

  }

render() {

    return (

        <div style={{margin: "0px auto", maxWidth: "400px"}}>
          <div className="form_wrapper">
            <p className="head">Register</p>
            <form onSubmit={this.handleSubmit}>

              <div>
                
                <Input 
                  Type="text" 
                  Name="sellerName" 
                  Value={this.state.FormGroup.sellerName} 
                  Placeholder="Name" 
                  Func={this.handleInputChange} /> 

              </div>

              <div>
                
                <Input 
                  Type="text" 
                  Name="sellerPhone" 
                  Value={this.state.FormGroup.sellerPhone} 
                  Placeholder="PhoneNo" 
                  Func={this.handleInputChange} /> 

              </div> 

              <div>
                
                <Input 
                  Type="text" 
                  Name="sellerEmail" 
                  Value={this.state.FormGroup.sellerEmail} 
                  Placeholder="Email" 
                  Func={this.handleInputChange} /> 

              </div>

              <div>
                
                <Input 
                  Type="text" 
                  Name="password" 
                  Value={this.state.FormGroup.password} 
                  Placeholder="Password" 
                  Func={this.handleInputChange} /> 

              </div>

              <div>
                
                <Input 
                  Type="text" 
                  Name="confirmPassword" 
                  Value={this.state.FormGroup.confirmPassword} 
                  Placeholder="Confirm Password" 
                  Func={this.handleInputChange} /> 

              </div>

              <div className="col-sm-12 col-md-12 col-lg-12" style={{clear:"both"}}>
                  <button type="submit" className="btn btn-primary">Submit</button>
              </div>

            </form>
          </div>
        </div>
     

    );
  }
}

export default SellerRegister;

