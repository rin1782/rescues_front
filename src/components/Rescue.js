import React from 'react'
import {Redirect} from 'react-router-dom'

import DogsContainer from '../containers/DogsContainer'


const Rescue = (props) => {

    let rescue = props.rescues && props.rescues.find(rescue => rescue.id == props.match.params.id)

    return(
        <div className="rescueShow">
            <h2 className="newRescueName">{rescue ? rescue.name : null} {rescue ? rescue.location : null}</h2>
            <h5 className="newRescueLocation">{rescue ? rescue.location : null}</h5>
            <DogsContainer rescue={rescue}/>
        </div>
    )
}

export default Rescue