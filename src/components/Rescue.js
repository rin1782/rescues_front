import React from 'react'
import {Redirect} from 'react-router-dom'

import DogsContainer from '../containers/DogsContainer'


const Rescue = (props) => {

    let rescue = props.rescues && props.rescues.find(rescue => rescue.id == props.match.params.id)

    return(
        <div>
            <h2>
                {rescue ? rescue.name : null} - {rescue ? rescue.location : null}
            </h2>
            <DogsContainer rescue={rescue}/>
        </div>
    )
}

export default Rescue