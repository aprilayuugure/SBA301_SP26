import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function OrchidModal({show, handleClose, title, body, onConfirm}) {
    return (
        <Modal show = {show}>
            <Modal.Header closeButton onHide = {handleClose}>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{body}</Modal.Body>
            <Modal.Footer>
                <Button variant = "primary" onClick = {handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default OrchidModal;