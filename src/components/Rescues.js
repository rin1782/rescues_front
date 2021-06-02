import React from 'react' 
import {Route, Link} from 'react-router-dom'
import RescueShow from './RescueShow'


export default function Rescues(props) {
    
    return(
        <div>
            {props.rescues.map(rescueShow => 
            <li key={rescueShow.id}>
                <Link to={`/rescues/${rescueShow.id}`}>{rescueShow.name}</Link>
            </li>)}
        </div>
    )
}

