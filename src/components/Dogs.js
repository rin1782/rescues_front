import React from 'react' 
import {connect} from 'react-redux'
import {deleteDog} from '../actions/deleteDog'


const Dogs = (props) => {

    const handleAdopted = (dog) => {
        props.deleteDog(dog.id, dog.rescue_id)
    }

    return(
        <div>
            {props.dogs && props.dogs.map(dog => 
                <li key={dog.id}>{dog.name}<br></br>
                    {dog.description}<br></br>
                    
                    <button onClick={() => handleAdopted(dog)}>Adopted</button>
                </li>
            )}
        </div>
    )
}

export default connect(null, {deleteDog})(Dogs)