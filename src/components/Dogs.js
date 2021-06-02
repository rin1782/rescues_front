import React from 'react' 


const Dogs = (props) => {

    console.log(props.dogs)
    return(
        <div>
            {props.dogs && props.dogs.map(dog => 
                <li key={dog.id}>{dog.name}<br></br>
                    {dog.description}
                </li>
            )}
        </div>
    )
}

export default Dogs;