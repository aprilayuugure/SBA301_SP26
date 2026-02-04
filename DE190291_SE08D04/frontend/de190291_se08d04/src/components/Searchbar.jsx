import { Form } from 'react-bootstrap';

function Searchbar() {
    return (
        <Form className = "d-flex">
            <Form.Group>
                <Form.Control type = "text"></Form.Control>
            </Form.Group>
        </Form>
    )
}

export default Searchbar;