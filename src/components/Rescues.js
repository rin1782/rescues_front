import React from 'react' 
import {Route, Link} from 'react-router-dom'
import Rescue from './Rescue'

const Rescues = (props) => {
    
    return(
        <div className="rescues">
            {props.rescues.map(rescue => 
          <li key={rescue.id}>
              <Link to={`/rescues/${rescue.id}`}>{rescue.name}</Link>
          </li> )}
        </div>
    )
}

export default Rescues

