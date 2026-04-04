import { Container, Table } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import Filters from "../components/Filters";
import RestaurantsPagination from "../components/RestaurantsPagination";
import ConfirmationModal from "../components/ConfirmationModal";
import { useRestaurantContext } from "../contexts/RestaurantContext";

function Restaurants() {
  const { state, deleteRestaurant, goToPage, reloadList } = useRestaurantContext();
  const [selectedId, setSelectedId] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);

   const handleDelete = (e, id) => {
     e.preventDefault();
     setSelectedId(id);
     setShowConfirm(true);
   };

   const handleConfirmDelete = async () => {
     const ok = await deleteRestaurant(selectedId);
     setShowConfirm(false);
     if (ok) reloadList();
   };

   const { page, totalPages, totalElements } = state.pagination;

  return (
    <Container>
      <h2 className = "h4 mb-3">Restaurant List</h2>
      <Filters />
      
      <Table striped bordered hover responsive size = "sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Restaurant Name</th>
            <th>Category</th>
            <th>Owner</th>
            <th>Address</th>
            <th>Price range(đ)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.restaurantList?.length ? (
            state.restaurantList.map((r) => (
              <tr key = {r.restaurantId}>
                <td>{r.restaurantId}</td>
                <td>{r.restaurantName}</td>
                <td>{r.categoryName}</td>
                <td>{r.ownerName}</td>
                <td>{r.address}</td>
                <td>{r.priceFrom} – {r.priceTo}</td>
                <td>
                  <Link to={`/restaurants/${r.restaurantId}`} className="me-2">View</Link>
                  <button
                    type="button"
                    className="btn btn-link btn-sm text-danger p-0 align-baseline"
                    onClick={(e) => handleDelete(e, r.restaurantId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="text-center text-muted py-4">
                No data
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <RestaurantsPagination
        page={page}
        totalPages={totalPages}
        totalElements={totalElements}
        onPageChange={goToPage}
      />

      {state.generalError ? (
        <p className="text-danger small mt-2">{state.generalError}</p>
      ) : null}

      <ConfirmationModal
        show={showConfirm}
        onConfirm={handleConfirmDelete}
        onCancel={() => setShowConfirm(false)}
        message="Delete this item?"
      /> 
    </Container>
  );
}

export default Restaurants;
