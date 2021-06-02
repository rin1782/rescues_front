import React from 'react' 
import DogForm from '../components/DogForm'
import Dogs from '../components/Dogs'

class DogsContainer extends React.Component {

    
    render() {
        return(
            <div>
                <Dogs dogs={this.props.rescue && this.props.rescue.dogs}/><br></br>
                <DogForm rescue={this.props.rescue}/>
            </div>
        )
    }

}


export default DogsContainer