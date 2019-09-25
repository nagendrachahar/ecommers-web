import React, { Component } from 'react';

export default class GenderDrop extends Component {

    constructor(props) {

        super(props);
        this.state = {
            GenderList: ['Male', 'Female'],
            loading: false,
            Message: 'wait....!'
        };

    }
    
    render() {

        const renderGenderlist = (GenderList) => {
            
            return (
                <select name="Gender" value={this.props.Gender} onChange={this.props.func} className="form-control">
                    <option value="">Select</option>
                    {GenderList.map(G =>
                        <option key={G} value={G}>{G}</option>
                    )}
                </select>
            );
        }

        let Genderlist = this.state.loading
            ? <p><em>Loading...</em></p>
            : renderGenderlist(this.state.GenderList);

        return (
            <div>
                {Genderlist}
            </div>
        );
    }
}
