import React from 'react' 
import {Route} from 'react-router-dom'
import RescueShow from './RescueShow'


export default function Rescues(props) {
    
    return(
        <div>
            {props.rescues.map(rescueShow => 
            <div key={rescueShow.id}><RescueShow rescue={rescueShow}/></div>)}
        </div>
    )
}

