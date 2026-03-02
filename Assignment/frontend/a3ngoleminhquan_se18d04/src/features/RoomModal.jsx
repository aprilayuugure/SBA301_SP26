import { Modal, Form, Button, Alert } from "react-bootstrap";

function RoomModal({ roomInformationHook }) {
    const { state, handleFieldChange, save, closeModal } = roomInformationHook;

    const isView = state.modalMode === "VIEW";
    const isAdd = state.modalMode === "ADD";
    const isUpdate = state.modalMode === "UPDATE";

    const title =
        isView ? "View Room"
        : isAdd ? "Add Room"
        : isUpdate ? "Update Room"
        : "";

    const handleSubmit = async (e) => {
        e.preventDefault();
        await save();
    };

    return (
        <Modal show={state.isModalOpen}
               onHide={closeModal}
               centered>

            <Modal.Header closeButton className="justify-content-center">
                <Modal.Title className="w-100 text-center">
                    {title}
                </Modal.Title>
            </Modal.Header>

            <Form onSubmit={handleSubmit}>
                <Modal.Body>

                    {state.errors?.general && (
                        <Alert variant = "danger">
                            {state.errors.general}
                        </Alert>
                    )}

                    <Form.Group className="mb-3">
                        <Form.Label>Room Number</Form.Label>
                        <Form.Control
                            type = "number"
                            value = {state.roomInformation?.roomNumber || ""}
                            disabled={isView}
                            onChange={(e) =>
                                handleFieldChange("roomNumber", Number(e.target.value))
                            }
                        />
                    </Form.Group>

                    <Form.Group className = "mb-3">
                        <Form.Label>Room Type</Form.Label>
                        <Form.Select
                            value = {state.roomInformation?.roomType?.roomTypeId || ""}
                            disabled = {isView}
                            onChange={(e) =>
                                handleFieldChange("roomTypeId", Number(e.target.value))
                            }
                        >
                            <option value = "">-- Select Room Type --</option>
                            {state.roomTypes?.map((type) => (
                                <option
                                    key = {type.roomTypeId}
                                    value = {type.roomTypeId}
                                >
                                    {type.roomTypeName}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Max Capacity</Form.Label>
                        <Form.Control
                            type = "number" min = "1" max = "10"
                            value={state.roomInformation?.roomMaxCapacity || ""}
                            disabled={isView}
                            onChange={(e) =>
                                handleFieldChange("roomMaxCapacity", Number(e.target.value))
                            }
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Price Per Day</Form.Label>
                        <Form.Control type = "number" step = "0.01" min ="0"
                            value={state.roomInformation?.roomPricePerDay || ""}
                            disabled={isView}
                            onChange={(e) =>
                                handleFieldChange("roomPricePerDay", Number(e.target.value))
                            }
                        />
                    </Form.Group>

                    <Form.Group className = "mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as = "textarea"
                            rows={3}
                            value = {state.roomInformation?.roomDetailDescription || ""}
                            disabled = {isView}
                            onChange = {(e) =>
                                handleFieldChange("roomDetailDescription", e.target.value)
                            }
                        />
                    </Form.Group>

                </Modal.Body>

                <Modal.Footer className="justify-content-center">
                    {!isView && (
                        <Button
                            type="submit"
                            style={{
                                backgroundColor: "#ef233c",
                                borderColor: "#ef233c",
                                padding: "8px 30px"
                            }}
                        >
                            Save
                        </Button>
                    )}
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default RoomModal;