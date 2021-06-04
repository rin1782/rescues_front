import React from 'react' 
import {connect} from 'react-redux'
import {addDog} from '../actions/addDog'



class DogForm extends React.Component {

    state = {
        name: '',
        description: '',
        img_url: ''
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
            description: '',
            img_url: ''
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
                    <label>Cover Photo:</label>
                    <input type="text" name="img_url" value={this.state.img_url} onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addDog})(DogForm)