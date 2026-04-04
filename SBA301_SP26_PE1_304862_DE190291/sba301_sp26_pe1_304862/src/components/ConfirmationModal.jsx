import { Button, Modal } from "react-bootstrap";

function ConfirmationModal({ show, onConfirm, onCancel, message }) {
    return (
        <Modal show = {show} onHide = {onCancel}>
            <Modal.Header>
            </Modal.Header>

            <Modal.Body>{message}</Modal.Body>

            <Modal.Footer>
                <Button variant = "primary" onClick = {onConfirm}>Yes</Button>

                <Button variant = "secondary" onClick = {onCancel}>No</Button>  
            </Modal.Footer>
        </Modal>
    )
}

export default ConfirmationModal;