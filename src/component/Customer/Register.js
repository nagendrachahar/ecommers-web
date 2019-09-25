import React, { Component } from 'react'; 
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import {ReactMessage} from '../utils/ReactMessage';
import {Register} from '../../Services/customer'
import {Input} from '../UtilComponent/Elements/TextField2'

class CustomerRegister extends Component {

  constructor(props){
    super(props);
    this.state = {
      FormGroup: {
        Name: "", 
        Phone: "", 
        Email: "", 
        password: "", 
        confirmPassword: "" 
      },
      messageShow: false,
      messageType: 'success',
      Message:'',
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

  hideMessage = () => {
    this.setState({
      messageShow: false,
      messageType: 'success',
      Message: '',
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    
    const data = this.state.FormGroup;
   
    Register(data).then(res => {
      console.log(res);
      this.setState({
        messageShow: true, 
        messageType: res.data.resType, 
        Message: res.data.message, 
      });

   }).catch(err => console.log(err));

  }

render() {

    return (

      <React.Fragment>
        {this.state.messageShow ? <ReactMessage func={this.hideMessage} messageType={this.state.messageType} Message={this.state.Message} /> : null}
        
        <div style={{margin: "0px auto", maxWidth: "400px"}}>
          <div className="form_wrapper">
            <p className="head">Register</p>
            <form onSubmit={this.handleSubmit}>

              <div>
                
                <Input 
                  Type="text" 
                  Name="Name" 
                  Value={this.state.FormGroup.Name} 
                  Placeholder="Name" 
                  Func={this.handleInputChange} /> 

              </div>

              <div>
                
                <Input 
                  Type="text" 
                  Name="Phone" 
                  Value={this.state.FormGroup.Phone} 
                  Placeholder="PhoneNo" 
                  Func={this.handleInputChange} /> 

              </div> 

              <div>
                
                <Input 
                  Type="text" 
                  Name="Email" 
                  Value={this.state.FormGroup.Email} 
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
      </React.Fragment>

    );
  }
}

export default CustomerRegister;

