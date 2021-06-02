import React from 'react' 
import {connect} from 'react-redux'
import {deleteDog} from '../actions/deleteDog'


const Dogs = (props) => {

    const handleAdopted = (dog) => {
        props.deleteDog(dog.id, dog.rescue_id)
    }

    return(
        <div className="dogShow">
            {props.dogs && props.dogs.map(dog => 
                <div key={dog.id}>
                    <h3>{dog.name}</h3>
                    <p>{dog.description}</p>
                    
                    <button className="adoptedBtn" onClick={() => handleAdopted(dog)}>Adopted</button>
                </div>
            )}
        </div>
    )
}

export default connect(null, {deleteDog})(Dogs)