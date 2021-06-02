import React from 'react'
import {Redirect} from 'react-router-dom'

import DogsContainer from '../containers/DogsContainer'


const RescueShow = (props) => {

    let rescueShow = props.rescues[props.match.params.id -1]

    return(
        <div>
            <h2>
            {rescueShow ? null : <Redirect to='/rescues'/>}
            {rescueShow ? rescueShow.name : null}
            </h2>
            <p>{rescueShow ? rescueShow.location : null}</p>
                <DogsContainer rescueShow={rescueShow} />
        </div>
    )

}

export default RescueShow