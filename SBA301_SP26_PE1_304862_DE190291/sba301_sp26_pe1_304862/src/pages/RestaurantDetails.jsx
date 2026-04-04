import { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useRestaurantContext } from "../contexts/RestaurantContext";

function RestaurantDetails() {
  const { id } = useParams();
  const { state, getRestaurantById } = useRestaurantContext();

  useEffect(() => {
    getRestaurantById(id);
  }, [id]);


  return (
    <Container>
      <h2 className="h4 mt-2 mb-3">Details</h2>
      <Table bordered size="sm" style={{ maxWidth: "28rem" }}>
        <tbody>
          <tr>
            <td>Restaurant name: </td>
            <td>{state.restaurant?.restaurantName}</td>
          </tr>

          <tr>
            <td>Owner name: </td>
            <td>{state.restaurant?.ownerName}</td>
          </tr>

          <tr>
            <td>Category: </td>
            <td>{state.restaurant?.categoryName}</td>
          </tr>

          <tr>
            <td>Price range (đ): </td>
            <td>{state.restaurant?.price}</td>
          </tr>

          <tr>
            <td>Address</td>
            <td>{state.restaurant?.address}</td>
          </tr>

          <tr>
            <td>Open date</td>
            <td>{state.restaurant?.importDate}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default RestaurantDetails;
