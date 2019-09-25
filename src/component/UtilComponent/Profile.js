import React , {Component} from 'react';
import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import {checkLogin} from '../../store/action/ProfileAction';

class ProfileIcon extends Component {

  componentDidMount(){
    
    this.props.dispatch(checkLogin())
  }

  render(){
    return (
      <React.Fragment>
        <div className="profile_icon" >
          {this.props.isLogin ? 
            <span className="fas fa-user">
              <Box component="span" display={{ xs: 'none', sm: 'none', md: 'inline' }} 
                    style={{color:"white", fontSize: "14px", paddingLeft:"10px", position:"relative", top:"-3px"}}>{this.props.userName}</Box>
            </span> :
              
            <Link className="fas fa-user" to="/login">
              <Box component="span" display={{ xs: 'none', sm: 'none', md: 'inline' }} 
                    style={{color:"white", fontSize: "14px", paddingLeft:"10px", position:"relative", top:"-3px"}}>Login/Signup</Box>
            </Link>
          }

        </div>
        <div className="cart_icon" >
          <Link className="fas fa-shopping-cart" to="/ViewCart"></Link>
        </div>
      </React.Fragment>
     
    )
  }
}

function mapStateToProps(state) {
  return ({
    isLogin: state.profileReducer.isLogin,
    userName: state.profileReducer.userName
  });
}

export default connect(mapStateToProps)(ProfileIcon);
