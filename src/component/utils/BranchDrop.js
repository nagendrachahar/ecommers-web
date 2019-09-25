import React, { Component } from 'react';
import axios from 'axios';

export default class BranchDrop extends Component {

    constructor(props){

        super(props);
        this.state = {
            BranchList: [],
            Branchloading: true,
            Message: 'wait....!'
        };
        
        axios.get(`${process.env.PUBLIC_URL}/api/getBranchDrop`)
            .then(response => {
                if(response.data.resType === 'success'){
                    this.setState({ BranchList: response.data.branch, Branchloading: false });
                }
            });
    }
    
    render() {

        const renderBranchlist = (BranchList) => {
        return (
            <select name="branchId" value={this.props.BranchId} onChange={this.props.func} className="form-control">
                <option value="">Select</option>
                {BranchList.map(B =>
                    <option key={B._id} value={B._id}>{B.branchName}</option>
                )}
            </select>
        );
    }
        
        let Branchlist = this.state.Branchloading
            ? <p><em>Loading...</em></p>
            : renderBranchlist(this.state.BranchList);
        
      return (

        <div>
            {Branchlist}
        </div>
            
    );
  }
}

BranchDrop.defaultProps = {
    BranchId:'0',
    InputName: "branchId"
}
