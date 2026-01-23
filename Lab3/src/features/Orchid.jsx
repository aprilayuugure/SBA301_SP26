import React, { use } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Orchid ( {orchid} ) {
    const { id, name, image, description, category, isSpecial, price } = orchid;
    const navigate = useNavigate();
    
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

        <Card.Img variant = "top" style = {{ width: '200px', height: '200px', borderRadius: '0px', objectFit: 'cover', margin: 'auto' }} 
                  src = {image ? image : "/no_image.jpg"} 
                  onError = {(e) => { e.target.src = "/no_image.jpg" }}/>
        <Card.Body>
            <Card.Title className = "text-center">{name}</Card.Title>
            <Card.Text>Category: {category}</Card.Text>
            <Card.Text style = {{ fontWeight: 'bold', color: 'red' }}>Price: {price}</Card.Text>
        </Card.Body>      

        <Button variant = "primary" className = "d-block mx-auto w-50" 
                onClick = {() => navigate(`/orchids/${id}`)}>
        Details</Button>   
    </Card> 
    )
}

export default Orchid;