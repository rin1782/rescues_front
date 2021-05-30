import React from 'react' 

const Rescues = (props) => {
    
    

    return(
        <div>
            {props.rescues.map(rescue => <li key={rescue.id}>{rescue.name} located in {rescue.location}</li>)}
        </div>
    )
}

export default Rescues