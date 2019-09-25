import React, { Component } from 'react';
import axios from 'axios';

export default class DesignationDrop extends Component {

    constructor(props) {

        super(props);
        this.state = {
            DesignationList: [],
            loading: true,
            Message: 'wait....!'
        };

        this.fillDesignation();
        
    }


    fillDesignation = () => {

      axios.get(`${process.env.PUBLIC_URL}/api/getDesignationDrop`)
      .then(response => {
        this.setState({ DesignationList: response.data.designation, loading: false });
      });

    }
    
    render() {

      const renderDesignationlist = (DesignationList) => {
        
        return (
          <select name="designationId" value={this.props.DesignationId} onChange={this.props.func} className="form-control">
            <option value="">Select</option>
            {DesignationList.map(D =>
              <option key={D._id} value={D._id}>{D.designationName}</option>
            )}
          </select>
        );
       
      }
        
        let Designationlist = this.state.loading
            ? <p><em>Loading...</em></p>
            : renderDesignationlist(this.state.DesignationList);
        
      return (
          
          <div>
              {Designationlist}
          </div>
              
    );
  }
}

DesignationDrop.defaultProps = {
  DesignationId: "0"
}
