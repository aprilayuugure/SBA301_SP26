import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import { useRoomInformations } from "../hooks/useRoomInformations";
import RoomCard from "../features/RoomCard";
import RoomModal from "../features/RoomModal";

function RoomTypeManagement() {
    const roomInformationHook = useRoomInformations();
    const { state, getAll, openModal, remove } = roomInformationHook;

    useEffect(() => {
        getAll();
    }, []);

    return (
        <>
            <div className = "py-4 text-center">
                <button
                    className = "btn"
                    style= {{
                        backgroundColor: "#ef233c",
                        borderColor: "#ef233c",
                        color: "white",
                        padding: "8px 25px"
                    }}
                    onClick={() => openModal("ADD")}
                >
                    Add room
                </button>
            </div>

            <Container>
                <Row>
                    {state.roomInformations.map(room => (
                        <Col key = {room.roomId} md = {4}>
                            <RoomCard room = {room}
                                      openModal= {openModal}
                                      remove={remove} />
                        </Col>
                    ))}
                    </Row>
            </Container>

            {state.isModalOpen && (
                <RoomModal roomInformationHook = {roomInformationHook} />
            )}
        </>
    );
}

export default RoomTypeManagement;