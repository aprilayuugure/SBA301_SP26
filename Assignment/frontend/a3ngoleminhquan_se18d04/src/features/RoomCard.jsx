import { Card } from "react-bootstrap";

function RoomCard({ room, openModal, remove }) {
    return (
        <Card 
            style={{ width: "20rem" }} 
            className="m-3 shadow-sm"
        >
            <Card.Img
                variant="top"
                src="/images/hotel-room.jpg"
            />

            <Card.Body>
                <Card.Title>Room {room.roomNumber}</Card.Title>

                <Card.Text>
                    {room.roomType?.roomTypeName}
                </Card.Text>

                <Card.Text>
                    Max capacity: {room.roomMaxCapacity}
                </Card.Text>

                <Card.Text>
                    $ {room.roomPricePerDay} / day
                </Card.Text>
            </Card.Body>

            <Card.Footer className="d-flex justify-content-end gap-3">
                <i
                    className="bi bi-pencil-square"
                    style={{
                        cursor: "pointer",
                        fontSize: "18px",
                        color: "#ffb703"
                    }}
                    onClick={() => openModal("UPDATE", room)}
                ></i>

                <i
                    className="bi bi-trash"
                    style={{
                        cursor: "pointer",
                        fontSize: "18px",
                        color: "#ef233c"
                    }}
                    onClick={() => remove(room.roomId)}
                ></i>
            </Card.Footer>
        </Card>
    );
}

export default RoomCard;