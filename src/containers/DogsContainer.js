import React from 'react' 
import DogForm from '../components/DogForm'
import Dogs from '../components/Dogs'

class DogsContainer extends React.Component {


    render() {
        return(
            <div>
                <DogForm/>
                <Dogs dogs={this.props.rescueShow && this.props.rescueShow.dogs}/>
            </div>
        )
    }

}


export default DogsContainer;