import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'; 
import {baseUrl} from '../../../Services/Urls';

const useStyles = {
    width: "100%",
    backgroundColor: "white",
    boxShadow: "0 2px 4px 0 rgba(0,0,0,.08)",
    marginBottom: "10px"
};

class AccountMenu extends Component {

  constructor(props){
    super(props);
    this.state = {
      price:{min: 300, max: 400}
    }
  }

  render(){

    return (
      <div>
        <div style={useStyles} className="dis_flex">
          <div style={{width: "60px"}}>
              <img src={baseUrl+"/Images/icon/user.png"} style={{width: "100%", height: "auto"}} />
          </div>
          <div style={{padding: "10px", width: "calc(100% - 60px)"}}>
            <p style={{margin: "0px", fontSize: "12px"}}>Hello,</p>
            <p style={{margin: "0px"}}>Nagendra Singh</p>
          </div>

        </div>

        <div style={useStyles}>
          <div>
            <p className="acchead">
              <i className="fas fa-user" style={{fontSize:"20px", color: "#ff7d0e"}}></i>
              <span style={{fontSize:"20px", paddingLeft: "15px"}}>ACCOUNT SETTINGS</span>
            </p>
            <Link to="/Account" className="accmenu">Profile Informaton</Link>
            <Link to="/" className="accmenu">Manage Address</Link>
          </div>
        </div>

        <div style={useStyles}>
          <div>
            <p className="acchead">
              <i className="fas fa-gift" style={{fontSize:"20px", color: "#ff7d0e"}}></i>
              <span style={{fontSize:"20px", paddingLeft: "15px"}}>PAYMENTS</span>
            </p>
            <Link to="/Account" className="accmenu">My Points</Link>
            <Link to="/" className="accmenu">Gift Cards</Link>
          </div>
        </div>
        
      </div>
    )
  }
  
}

function mapStateToProps(state) {
  return ({
    isLogin: state.profileReducer.isLogin
  });
}

export default connect(mapStateToProps)(AccountMenu);