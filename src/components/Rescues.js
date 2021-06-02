import React from 'react' 
import {Route, Link} from 'react-router-dom'
import Rescue from './Rescue'

const Rescues = (props) => {
    
    return(
        <div className="rescues">
            {props.rescues.map(rescue => 
          <h2 key={rescue.id}>
              <Link to={`/rescues/${rescue.id}`} style={{color:'whitesmoke'}}>{rescue.name}</Link>
          </h2> )}
        </div>
    )
}

export default Rescues

