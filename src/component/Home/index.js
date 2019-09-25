import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import {hideMessage} from '../../store/action/MessageAction'; 
import 'popper.js/dist/popper.min.js'; 
import 'bootstrap/dist/js/bootstrap.min.js'; 

import {Card} from '../UtilComponent/Card'; 
import {seller} from '../../Services/seller'; 

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      sellerList:[],
      loading: true
    }

    const parsed = queryString.parse(this.props.location.search);
    console.log(parsed);

    //CheckSession(this.props);
    seller.getSeller().then(res => {
      if(res.data.resType === "success"){
        console.log(res.data)
        this.setState({
          sellerList: res.data.seller, 
          loading: false 
        })
      }
    })
  }


render() {

  const renderList = (list) => {
    return(
      <React.Fragment>
        {list.map((p, i) => 
            <Link to={`/Products?s=${p._id}`} key={i} className="col-sm-3 float-left" style={{color: "black", textDecoration: "none"}}> 
              <Card 
                Name={p.sellerName} 
                Img={'photoPath' in p ? p.photoPath : ""} 
                Address={"Address" in p ? p.Address : ""} 
                City={"cityId" in p ? p.cityId : null} 
                State={"stateId" in p ? p.stateId : null} />
            </Link>
        )}
      </React.Fragment>
    )
  }

  const seller = this.state.loading ? <em>Loading.......</em> : renderList(this.state.sellerList);

    return (

      <React.Fragment>
        {seller}
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);

