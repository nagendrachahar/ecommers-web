import React, { Component } from 'react';
import axios from 'axios';
import '../../assets/css/login.css';
import {login} from '../../Services/customer';
import {TextField} from '../UtilComponent/Elements/TextField';
import {Submit} from '../UtilComponent/Elements/Button';

class LoginComponent extends Component {
  state = {
    FormGroup: {
      UserId: '',
      Password: ''
    },
    isSubmit : false
  };

  componentWillMount(){
    if(localStorage.getItem("x-token") != null){
      this.props.history.push(localStorage.getItem("redirectTo"));
    }
  }

  handleInputChange = (event) => {
        
    const target = event.target;
    const value = target.value;
    const name = target.name;

    const UserInput = this.state.FormGroup;

    UserInput[name] = value;

    this.setState({
        FormGroup: UserInput
    });

  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({isSubmit: true});
    const User = this.state.FormGroup;

    login(User).then(res => {
      console.log(res);
      if(res.data.resType === "success"){
        localStorage.setItem("x-token", res.data.token);
        localStorage.setItem("redirectTo", res.data.redirectTo);
        axios.defaults.headers.common['x-token'] = res.data.token;
        this.props.history.push(res.data.redirectTo);
      }
      else{
        alert(res.data.message);
        this.setState({isSubmit: false});
      }
    })

  }

render() {

    return (
      <div className="main_login_container theam_color">
        <div className="login_container">

          <form onSubmit={this.handleSubmit}>
              <h2 style={{textAlign:"center"}}>Login</h2>
              
              <TextField 
                Type="text" 
                Name="UserId" 
                Value={this.state.FormGroup.UserId} 
                Placeholder="User Id" 
                Func={this.handleInputChange} /> 

              <TextField 
                Type="password" 
                Name="Password" 
                Value={this.state.FormGroup.Password} 
                Placeholder="Password" 
                Func={this.handleInputChange} /> 

              <Submit isSubmit={this.state.isSubmit} />

          </form>
            
        </div>
      </div>
    );
  }
}

export default LoginComponent;
