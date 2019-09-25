import React, { Component } from 'react';
import axios from 'axios';

export default class StateDrop extends Component {

    constructor(props) {

        super(props);
        this.state = {
            StateList: [],
            loading: true,
            focus: false,
            dropText: "",
            stateId: this.props.StateId,
            suggestionList: false,
            Message: 'wait....!'
        };

        axios.get(`${process.env.PUBLIC_URL}/api/getStateDrop`)
        .then(response => {
            this.setState({ StateList: response.data.state, loading: false });
        });

    }

    componentWillReceiveProps(nextProps){

         if(nextProps.StateId !== this.props.StateId){
             let filtrWith = nextProps.StateId;
             let states =  this.state.StateList.filter(function(i) {
                 return i._id == filtrWith
             });

             console.log(states);
             if(states.length > 0){
                let {_id, stateName} = states[0];
                this.changeDrop(_id, stateName)
             }
             else{
                this.setState({
                    dropText: "",
                    focus: false
                })
            }

        }
        
    }

    changeDrop = (id, Name) => {
        
        this.setState({
            stateId: id, 
            dropText: Name, 
            focus: true, 
            suggestionList: false 
        })

        this.props.Func('stateId', id)
    }

    onDropBlur = () => { 
       const drop =  setInterval(()=>{ 
            this.setState({
                focus: !["", null, "0", 0].includes(this.props.StateId), 
                suggestionList: false
            }); 
            clearInterval(drop); 
        }, 300) 
    } 

    render(){

        const renderStatelist = (StateList) => {
            return (
                <div className="form-control-wrapper"> 

                    <label htmlFor="stateId" className={this.state.focus ? "form-control-focus" : "null"}>States</label>
                    <input type="text" 
                        autoComplete="off" 
                        id="stateId" 
                        value={this.state.dropText} 
                        onFocus={() => this.setState({focus: true, suggestionList: true})} 
                        onBlur={this.onDropBlur} 
                        onChange={() => console.log("hello")} /> 
                    
                    
                    <ul className={this.state.suggestionList ? "custom-drop-list show" : "custom-drop-list"}> 
                        {StateList.map(S => 
                            <li key={S._id} onClick={this.changeDrop.bind(this, S._id, S.stateName)}>{S.stateName}</li> 
                        )} 
                    </ul> 

                </div> 
            );
        }

        let Statelist = this.state.loading 
            ? <p><em>Loading...</em></p> 
            : renderStatelist(this.state.StateList); 

        return (
            <div> 
                {Statelist} 
            </div> 
        );
    }
}

StateDrop.defaultProps = {
    StateId: "0"
}
