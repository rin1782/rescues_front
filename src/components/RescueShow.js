import React from 'react'

const RescueShow = (props) => {

    console.log(props)

    let rescueShow = props.rescues[props.match.params.id -1]
    console.log(rescueShow)

    return(
        <li>
            {rescueShow ? rescueShow.name : null} - {rescueShow ? rescueShow.location : null}
        </li>
    )

}

export default RescueShow