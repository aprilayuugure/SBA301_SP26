import { Modal, Form, Button, Alert } from "react-bootstrap";

function RoomTypeModal({ roomTypeHook }) {
    const { state, handleFieldChange, save, closeModal } = roomTypeHook;

    const isView = (state.modalMode === "VIEW");
    const isAdd = (state.modalMode === "ADD");
    const isUpdate = (state.modalMode === "UPDATE");

    const title = isView ? "View room type" 
                : isAdd ? "Add room type" 
                : isUpdate ? "Update room type"
                : ""

    const handleSubmit = async (e) => {
        e.preventDefault();
        await save();
    };

    return (
        <Modal show = {state.isModalOpen}
               onHide = {closeModal}
               centered>
                <Modal.Header closeButton className = "justify-content-center">
                    <Modal.Title className = "w-100 text-center">
                        {title}
                    </Modal.Title>
                </Modal.Header>

                <Form onSubmit = {handleSubmit}>
                    <Modal.Body>
                        {state.errors?.general && (
                            <Alert variant = "danger">
                                {state.errors.general}
                            </Alert>
                        )}

                        <Form.Group className = "mb-3">
                            <Form.Label>Room type name</Form.Label>
                            <Form.Control type = "text"
                                          value = {state.roomType?.roomTypeName || ""}
                                          disabled = {isView}
                                          onChange = {(e) => handleFieldChange("roomTypeName", e.target.value)} />
                        </Form.Group>

                        <Form.Group className = "mb-3">
                            <Form.Label>Type description</Form.Label>
                            <Form.Control as = "textarea"
                                          value = {state.roomType?.typeDescription || ""}
                                          disabled = {isView}
                                          onChange = {(e) => handleFieldChange("typeDescription", e.target.value)} />
                        </Form.Group>

                        <Form.Group className = "mb-3">
                            <Form.Label>Type note</Form.Label>
                            <Form.Control as = "textarea"
                                          value = {state.roomType?.typeNote || ""}
                                          disabled = {isView}
                                          onChange = {(e) => handleFieldChange("typeNote", e.target.value)} />
                        </Form.Group>
                    </Modal.Body>

                    <Modal.Footer className = "justify-content-center">
                        {!isView && (
                            <Button type = "submit" 
                                    style = {{ backgroundColor: "#ef233c",
                                               borderColor: "#ef233c",
                                               padding: "8px 30px"
                                            }}
                            >
                            Save</Button>
                        )}
                    </Modal.Footer>
                </Form>
        </Modal>
    )
}

export default RoomTypeModal;