import React from 'react' 
import {connect} from 'react-redux'
import {addRescue} from '../actions/addRescue'

class RescueForm extends React.Component {

    state = {
        name: '',
        location: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addRescue(this.state)
        
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Rescue Name:</label>
                    <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br></br>
                    <label>Located In:</label>
                    <input type='text' placeholder='City, State' value={this.state.location} name="location" onChange={this.handleChange}/>
                    <input type="Submit"/>
                </form>
            </div>
        )
    }

}

export default connect(null, {addRescue})(RescueForm)