import React, { Component } from 'react';
import axios from 'axios';

export default class CityDrop extends Component {

    constructor(props) {

        super(props);
        this.state = {
            CityList: [],
            loading: false,
            Message: 'wait....!'
        };
        
        this.fillCity = this.fillCity.bind(this);

        this.fillCity(this.props.StateId);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.StateId !== this.props.StateId) {
            //Perform some operation
            this.fillCity(nextProps.StateId);
        }
    }

    fillCity(id) {
        if(id === '' || id === null || id === '0'){
            console.log(id)
        }
        else{
            axios.get(`${process.env.PUBLIC_URL}/api/getCityByStateId/${id}`)
            .then(response => {
                this.setState({ CityList: response.data.city, loading: false });
            });
        }
        
        
      
    }

    render() {

        const renderCitylist = (CityList) => {
            
        return (
            <select name="cityId" value={this.props.CityId} onChange={this.props.func} className="form-control">
                <option value="">Select City</option>
                {CityList.map(C =>
                    <option key={C._id} value={C._id}>{C.cityName}</option>
                )}
            </select>
        );}


        let Citylist = this.state.loading
            ? null
            : renderCitylist(this.state.CityList);

        return (
            
            <div>
                {Citylist}
            </div>
                
        );
    }
}
