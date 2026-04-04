import { Alert, Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRestaurantContext } from "../contexts/RestaurantContext";

function RestaurantForm() {
  const navigate = useNavigate();
  const { state,handleFieldChange, getAllCategories, addRestaurant, resetForm } = useRestaurantContext();

  useEffect(() => {
    resetForm();
    getAllCategories();
  }, []);

  const handleSubmit = async (e) => {
     e.preventDefault();

     await addRestaurant;
  };

  return (
    <Container className = "py-3">
      <h2 className = "h4 mt-2 mb-3">Add restaurant</h2>

      {state.generalError ? (
        <Alert variant = "danger" className = "py-2">
          {state.generalError}
        </Alert>
      ) : null}

      <Card className = "shadow-sm">
        <Card.Body>
          <Form onSubmit = {handleSubmit}>
            <Row className = "mb-3">
              <Col md = {6}>
                <Form.Group controlId = "restaurantName">
                  <Form.Label>Restaurant name: </Form.Label>
                  <Form.Control
                    value = {state.restaurant.restaurantName}
                    onChange = {(e) => handleFieldChange("restaurantName", e.target.value)}
                    isInvalid = {!!state.errors.restaurantName}
                  />
                  <Form.Control.Feedback type = "invalid">
                    {state.errors.restaurantName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row className = "mb-3">
              <Col md = {6}>
                <Form.Group controlId = "restaurantName">
                  <Form.Label>Price from (đ): </Form.Label>
                    <Form.Control
                        value = {state.restaurant.priceFrom}
                        onChange = {(e) => handleFieldChange("priceFrom", e.target.value)}
                        isInvalid = {!!state.errors.priceFrom}
                    />
                  <Form.Control.Feedback type = "invalid">
                    {state.errors.priceFrom}
                  </Form.Control.Feedback>

                  <Form.Label>To: </Form.Label>
                    <Form.Control
                        value = {state.restaurant.priceTo}
                        onChange = {(e) => handleFieldChange("priceTo", e.target.value)}
                        isInvalid = {!!state.errors.priceTo}
                    />
                  <Form.Control.Feedback type = "invalid">
                    {state.errors.priceTo}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row className = "mb-3">
              <Col md = {6}>
                <Form.Group controlId = "address">
                  <Form.Label>Address: </Form.Label>
                  <Form.Control
                    value = {state.restaurant.address}
                    onChange = {(e) => handleFieldChange("address", e.target.value)}
                    isInvalid = {!!state.errors.address}
                  />
                  <Form.Control.Feedback type = "invalid">
                    {state.errors.address}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>         

            <Row className = "mb-3">
              <Col md = {3}>
                <Form.Group controlId = "categoryId">
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    value = {state.restaurant.categoryId ?? ""}
                    onChange={(e) => {
                      const v = e.target.value;
                      handleFieldChange("categoryId", v === "" ? null : Number(v));
                    }}
                    isInvalid={!!state.errors.categoryId}
                  >
                    <option value="">—</option>
                    {state.categories.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.categoryName}
                      </option>
                    ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {state.errors.categoryId}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md = {3}>
                <Form.Group controlId = "openDate">
                  <Form.Label>Open Date</Form.Label>
                  <Form.Control type = "date"
                    value = {state.restaurant.openDate}
                    onChange = {(e) =>
                      handleFieldChange("openDate", e.target.value)
                    }
                    isInvalid={!!state.errors.openDate}
                  />
                  <Form.Control.Feedback type="invalid">
                    {state.errors.openDate}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>  

            <Button type="submit" variant="primary">
              Save
            </Button>  
        </Form>
        </Card.Body>
        </Card>
    </Container>
  )
}

export default RestaurantForm;
