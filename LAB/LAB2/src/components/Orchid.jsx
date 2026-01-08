import React from 'react';
import {Button, Card} from 'react-bootstrap';
import OrchidModal from './OrchidModal';

function Orchid ( {orchid} ) {
    const { id, name, image, description, category, isSpecial } = orchid;
    const [showModal, setShowModal] = React.useState(false);
    
    return (
    <Card className="p-3 mx-auto">
        {   
            isSpecial && (
                <span
                    className="badge bg-success position-absolute" style={{ top: "10px", left: "10px", zIndex: 1 }}
                >
                    Special
                </span>
            )
        }    

        <Card.Img variant = "top" style = {{ width: '200px', height: '200px', borderRadius: '0px', objectFit: 'cover', margin: 'auto' }} src = {image} />
        <Card.Body>
            <Card.Title className = "text-center">{name}</Card.Title>
            <Card.Text>Category: {category}</Card.Text>
        </Card.Body>      

        <OrchidModal 
            show = {showModal}
            handleClose = {() => setShowModal(false)}
            title = {`ID: ${id} - ${name}`}
            body = {
                <div>
                    <img style = {{ width: '200px', height: '200px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px', borderRadius: '0px', display: 'block', objectFit: 'cover' }} src = {image} />
                    <h4 className = "text-center">{name}</h4>
                    <p>Description: {description}</p>
                </div>
            }
            onConfirm = {() => setShowModal(false)}
        />  

        <Button variant = "primary" className = "d-block mx-auto w-50" 
                onClick={() => setShowModal(true)}>
        Details</Button>   
    </Card> 
    )
}

export default Orchid;