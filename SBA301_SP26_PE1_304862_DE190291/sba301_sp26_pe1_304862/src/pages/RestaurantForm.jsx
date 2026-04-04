import { Alert, Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRestaurantContext } from "../contexts/RestaurantContext";

function RestaurantForm() {
  const navigate = useNavigate();
  const { state, handleFieldChange, getAllCategories, addRestaurant, resetForm } =
    useRestaurantContext();

  useEffect(() => {
    resetForm();
    getAllCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ok = await addRestaurant(state.restaurant);
    if (ok) navigate("/");
  };

  return (
    <Container className="py-4" style={{ maxWidth: 720 }}>
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-4">
        <div>
          <Link
            to="/"
            className="text-decoration-none small text-muted d-inline-flex align-items-center gap-1 mb-1"
          >
            ← Back to list
          </Link>
          <h1 className="h4 mb-0 fw-semibold">Add restaurant</h1>
          <p className="text-muted small mb-0 mt-1">
            Fill in the details below. Fields marked * are required.
          </p>
        </div>
      </div>

      {state.generalError ? (
        <Alert variant="danger" className="py-2 mb-4">
          {state.generalError}
        </Alert>
      ) : null}

      <Card className="border-0 shadow-sm">
        <Card.Header className="bg-light border-bottom py-3">
          <span className="fw-semibold text-secondary small text-uppercase">
            New entry
          </span>
        </Card.Header>
        <Card.Body className="p-4">
          <Form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <h2 className="h6 text-body-secondary mb-3">Basic information</h2>
              <Row className="g-3">
                <Col xs={12}>
                  <Form.Group controlId="restaurantName">
                    <Form.Label className="small fw-medium">
                      Restaurant name <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      placeholder="e.g. Pho 24"
                      value={state.restaurant.restaurantName}
                      onChange={(e) =>
                        handleFieldChange("restaurantName", e.target.value)
                      }
                      isInvalid={!!state.errors.restaurantName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {state.errors.restaurantName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group controlId="address">
                    <Form.Label className="small fw-medium">Address</Form.Label>
                    <Form.Control
                      placeholder="Street, district, city"
                      value={state.restaurant.address}
                      onChange={(e) =>
                        handleFieldChange("address", e.target.value)
                      }
                      isInvalid={!!state.errors.address}
                    />
                    <Form.Control.Feedback type="invalid">
                      {state.errors.address}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
            </div>

            <hr className="text-secondary opacity-25 my-4" />

            <div className="mb-4">
              <h2 className="h6 text-body-secondary mb-3">Price range (₫)</h2>
              <Row className="g-3">
                <Col xs={12} sm={6}>
                  <Form.Group controlId="priceFrom">
                    <Form.Label className="small fw-medium">
                      From <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="number"
                      min={1001}
                      step={100}
                      placeholder="1001"
                      value={state.restaurant.priceFrom}
                      onChange={(e) =>
                        handleFieldChange(
                          "priceFrom",
                          e.target.value === ""
                            ? 0
                            : Number(e.target.value)
                        )
                      }
                      isInvalid={!!state.errors.priceFrom}
                    />
                    <Form.Text muted className="small">
                      Min. 1001
                    </Form.Text>
                    <Form.Control.Feedback type="invalid">
                      {state.errors.priceFrom}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col xs={12} sm={6}>
                  <Form.Group controlId="priceTo">
                    <Form.Label className="small fw-medium">
                      To <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="number"
                      min={1001}
                      step={100}
                      placeholder="5000"
                      value={state.restaurant.priceTo}
                      onChange={(e) =>
                        handleFieldChange(
                          "priceTo",
                          e.target.value === ""
                            ? 0
                            : Number(e.target.value)
                        )
                      }
                      isInvalid={!!state.errors.priceTo}
                    />
                    <Form.Text muted className="small">
                      Must be ≥ From
                    </Form.Text>
                    <Form.Control.Feedback type="invalid">
                      {state.errors.priceTo}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
            </div>

            <hr className="text-secondary opacity-25 my-4" />

            <div className="mb-4">
              <h2 className="h6 text-body-secondary mb-3">Details</h2>
              <Row className="g-3">
                <Col xs={12}>
                  <Form.Group controlId="ownerName">
                    <Form.Label className="small fw-medium">Owner name</Form.Label>
                    <Form.Control
                      placeholder="Contact or owner"
                      value={state.restaurant.ownerName}
                      onChange={(e) =>
                        handleFieldChange("ownerName", e.target.value)
                      }
                      isInvalid={!!state.errors.ownerName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {state.errors.ownerName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group controlId="categoryId">
                    <Form.Label className="small fw-medium">
                      Category <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select
                      value={state.restaurant.categoryId ?? ""}
                      onChange={(e) => {
                        const v = e.target.value;
                        handleFieldChange(
                          "categoryId",
                          v === "" ? null : Number(v)
                        );
                      }}
                      isInvalid={!!state.errors.categoryId}
                    >
                      <option value="">Select a category</option>
                      {state.categories.map((c) => (
                        <option key={c.categoryId} value={c.categoryId}>
                          {c.categoryName}
                        </option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {state.errors.categoryId}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group controlId="openDate">
                    <Form.Label className="small fw-medium">Open date</Form.Label>
                    <Form.Control
                      type="date"
                      value={state.restaurant.openDate}
                      onChange={(e) =>
                        handleFieldChange("openDate", e.target.value)
                      }
                      isInvalid={!!state.errors.openDate}
                    />
                    <Form.Text muted className="small">
                      Not in the future
                    </Form.Text>
                    <Form.Control.Feedback type="invalid">
                      {state.errors.openDate}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
            </div>

            <div className="d-flex flex-wrap gap-2 justify-content-end pt-2 border-top mt-2">
              <Button
                as={Link}
                to="/"
                variant="outline-secondary"
                type="button"
              >
                Cancel
              </Button>
              <Button type="submit" variant="primary">
                Save restaurant
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default RestaurantForm;
