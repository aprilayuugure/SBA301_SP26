import { Form } from "react-bootstrap";

function Searchbar({ onSearchChange }) {
    const handleSearchChange = (e) => {
        onSearchChange(e.target.value);
    };

    return (
        <Form className="d-flex"> 

            <Form.Group controlId="searchOrchids">
                <Form.Control type = "text" placeholder = "Search" className = "w-100" onChange = {handleSearchChange} />
            </Form.Group>
            
        </Form>
    );
}

export default Searchbar;