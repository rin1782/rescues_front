import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, CardGroup } from 'react-bootstrap';

import {connect} from 'react-redux'
import {deleteDog} from '../actions/deleteDog'



const Dogs = (props) => {

    const handleAdopted = (dog) => {
        props.deleteDog(dog.id, dog.rescue_id)
    }

    return(
        <CardGroup>
        
        <Card.ImgOverlay src="https://www.petmd.com/sites/default/files/styles/article_image/public/petmd-puppy-weight.jpg?itok=IwMOwGSX" alt="puppy pic" />
            {props.dogs && props.dogs.map(dog => 
                <Card key={dog.id} text={dog.name.toUpperCase()}>
                    <Card.Body>
                        <Card.Title>{dog.name}</Card.Title>
                        <Card.Text>{dog.description}</Card.Text>
                        <Button variant="primary" onClick={() => handleAdopted(dog)}>Adopted</Button>
                        </Card.Body>
                    {/* <button className="adoptedBtn" onClick={() => handleAdopted(dog)}>Adopted</button> */}
                </Card>
            )}
        
        </CardGroup>
    )
}

export default connect(null, {deleteDog})(Dogs)