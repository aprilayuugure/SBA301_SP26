import { Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Filters from "../components/Filters";
import RestaurantsPagination from "../components/RestaurantsPagination";
import ConfirmationModal from "../components/ConfirmationModal";
import { useRestaurantContext } from "../contexts/RestaurantContext";

function Restaurants() {
  const { state, searchRestaurants, goToPage } = useRestaurantContext();

  useEffect(() => {
    searchRestaurants({
      name: "",
      category: "",
      pageNumber: 0,
      pageSize: 10,
      sortBy: "restaurantName",
      direction: "asc",
    });
  }, []);

   const { pageNumber, totalPages, pageSize, totalElements } = state.pagination;

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
                <td>{r.priceFrom} - {r.priceTo}</td>
                <td>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center text-muted py-4">
                No data
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <RestaurantsPagination
        pageNumber = {pageNumber}
        numberOfElements = {state.restaurantList?.length ?? 0}
        totalPages = {totalPages}
        totalElements = {totalElements}
        pageSize = {pageSize}
        onPageChange = {goToPage}
      />

      {state.generalError ? (
        <p className="text-danger small mt-2">{state.generalError}</p>
      ) : null}
    </Container>
  );
}

export default Restaurants;
