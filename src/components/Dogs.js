import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, CardDeck} from 'react-bootstrap';


import {connect} from 'react-redux'
import {deleteDog} from '../actions/deleteDog'



const Dogs = (props) => {

    const handleAdopted = (dog) => {
        props.deleteDog(dog.id, dog.rescue_id)
    }

    // const handlePics = (dog) => {
    //     props.addPic(dog.id, dog.rescue_id, dog.img_url)
    // }

    return(
        <CardDeck className="dogCardContainer" style={{display: 'flex-inline', width: '50%', color: 'black'}}>
            {props.dogs && props.dogs.map(dog => 
                <Card key={dog.id} text={dog.name.toUpperCase()}>
                    <Card.Body className="dogCard">
                    <Card.Img className="dogPic" variant="top" src={dog.img_url} alt="puppy pic" />
                        <Card.Title className="dogName">Hi, I'm {dog.name}!</Card.Title>
                        <Card.Text className="dogInfo">{dog.description}</Card.Text>
                        
                        <Card.Footer className="dogFooter">
                        <Button className="adoptedBtn"variant="dark" onClick={() => handleAdopted(dog)}>Adopted</Button>
                        </Card.Footer>
                        </Card.Body>
                </Card>
            )}
        
        </CardDeck>
    )
}

export default connect(null, {deleteDog})(Dogs)