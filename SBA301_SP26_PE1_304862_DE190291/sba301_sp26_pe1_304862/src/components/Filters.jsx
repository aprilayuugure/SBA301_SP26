import { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { DEFAULT_PAGE_SIZE } from "../constants/pagination";
import { useRestaurantContext } from "../contexts/RestaurantContext";

function buildListParams(filter, pagination) {
  return {
    ...filter,
    page: 0,
    size: pagination.size,
    sortBy: "restaurantName",
  };
}

function Filters() {
  const { state, handleFilterChange, searchRestaurants, getAllCategories } =
    useRestaurantContext();

  useEffect(() => {
    getAllCategories();
    searchRestaurants({
      name: "",
      categoryId: "",
      page: 0,
      size: DEFAULT_PAGE_SIZE,
      sortBy: "restaurantName",
    });
  }, [getAllCategories, searchRestaurants]);

  const runSearch = (filter) => {
    searchRestaurants(buildListParams(filter, state.pagination));
  };

  const submit = (e) => {
    e.preventDefault();
    runSearch(state.filter);
  };

  return (
    <Form className="mb-3" onSubmit={submit}>
      <Row className="g-2 align-items-end">
        <Col md={4}>
          <Form.Label className="small mb-1">Category: </Form.Label>
          <Form.Select
            value={state.filter.categoryId === "" || state.filter.categoryId == null ? "" : String(state.filter.categoryId)}
            onChange={(e) => {
              const v = e.target.value;
              const categoryId = v === "" ? "" : Number(v);
              handleFilterChange("categoryId", categoryId);
            }}
          >
            <option value="">All</option>
            {state.categories.map((c) => (
              <option key={c.categoryId} value={c.categoryId}>
                {c.categoryName}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Label className="small mb-1">Restaurant Name: </Form.Label>
          <Form.Control
            value={state.filter.name}
            onChange={(e) => handleFilterChange("name", e.target.value)}
          />
        </Col>
        <Col md="auto">
          <Button type="submit" variant="primary" size="sm">
            Filter
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default Filters;
