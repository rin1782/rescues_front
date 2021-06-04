import React from 'react' 
import {connect} from 'react-redux'
import {addDog} from '../actions/addDog'
import {capitalizeFirstLetter} from './CapitalizedText'



class DogForm extends React.Component {

    state = {
        name: '',
        description: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addDog(this.state, this.props.rescue.id)
        this.setState({
            name: '',
            description: ''
        })
    }

    render(){
        return(
            <div>
                <h3>Add A Dog:</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    <br></br>
                    <label>Description:</label>
                    <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
                    <br></br>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addDog})(DogForm)