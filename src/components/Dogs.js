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
        <CardGroup style={{display: 'flex', width: '50%', border: 'solid', color: 'black'}}>
        
            {props.dogs && props.dogs.map(dog => 
                <Card key={dog.id} text={dog.name.toUpperCase()}>
                    <Card.Body>
                    <Card.Img variant="top" src="https://www.petmd.com/sites/default/files/styles/article_image/public/petmd-puppy-weight.jpg?itok=IwMOwGSX" alt="puppy pic" />
                        <Card.Title>{dog.name}</Card.Title>
                        <Card.Text>{dog.description}</Card.Text>
                        <Button variant="dark" onClick={() => handleAdopted(dog)}>Adopted</Button>
                        </Card.Body>
                </Card>
            )}
        
        </CardGroup>
    )
}

export default connect(null, {deleteDog})(Dogs)