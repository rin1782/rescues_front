import React from 'react' 
import {Redirect} from 'react-router-dom'

import DogsContainer from '../containers/Dogs'


const Dog = (props) => {

    return (
        <div>
            {props.dog.name} 
        </div>
    )

}

export default Dog