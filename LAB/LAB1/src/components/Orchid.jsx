import {Button, Card} from 'react-bootstrap';

function Orchid ( {orchid} ) {
    const { id, name, image, description, category, isSpecial } = orchid;

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
            <Card.Title className = "text-center">ID: {id}</Card.Title>
            <Card.Title className = "text-center">{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>Category: {category}</Card.Text>
        </Card.Body>  

        <Button variant = "primary" className = "d-block mx-auto w-50">Detail</Button>                    
    </Card> 
    )
}

export default Orchid;