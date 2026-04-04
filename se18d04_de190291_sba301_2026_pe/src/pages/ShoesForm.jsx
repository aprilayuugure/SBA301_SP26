import { Alert, Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useShoesContext } from "../contexts/ShoesContext";
import { validateShoesForm } from "../utils/validation";

function ShoesForm() {
  const navigate = useNavigate();
  const {
    state,
    handleFieldChange,
    getAllCategories,
    addShoes,
    resetAddForm,
    setErrors,
  } = useShoesContext();

  useEffect(() => {
    resetAddForm();
    getAllCategories();
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    const errs = validateShoesForm(state.shoes);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const priceNum = Number(state.shoes.price);
    const payload = {
      ...state.shoes,
      price: priceNum,
      quantity: Number(state.shoes.quantity) || 0,
    };
    if (await addShoes(payload)) navigate("/");
  };

  return (
    <Container className="py-3">
      <Link to="/" className="small">
        ← Back
      </Link>
      <h2 className="h4 mt-2 mb-3">Add shoes</h2>

      {state.generalError ? (
        <Alert variant="danger" className="py-2">
          {state.generalError}
        </Alert>
      ) : null}

      <Card className="shadow-sm">
        <Card.Body>
          <Form onSubmit={submit}>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="shoesName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    value={state.shoes.shoesName}
                    onChange={(e) => handleFieldChange("shoesName", e.target.value)}
                    isInvalid={!!state.errors.shoesName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {state.errors.shoesName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="price">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    step="any"
                    placeholder="Price"
                    value={
                      state.shoes.price === 0 || state.shoes.price === ""
                        ? ""
                        : state.shoes.price
                    }
                    onChange={(e) => handleFieldChange("price", e.target.value)}
                    isInvalid={!!state.errors.price}
                  />
                  <Form.Control.Feedback type="invalid">
                    {state.errors.price}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="productionDate">
                  <Form.Label>Production date</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="dd/MM/yyyy"
                    value={state.shoes.productionDate}
                    onChange={(e) =>
                      handleFieldChange("productionDate", e.target.value)
                    }
                    isInvalid={!!state.errors.productionDate}
                  />
                  <Form.Control.Feedback type="invalid">
                    {state.errors.productionDate}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="importDate">
                  <Form.Label>Import date</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="dd/MM/yyyy"
                    value={state.shoes.importDate}
                    onChange={(e) =>
                      handleFieldChange("importDate", e.target.value)
                    }
                    isInvalid={!!state.errors.importDate}
                  />
                  <Form.Control.Feedback type="invalid">
                    {state.errors.importDate}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="manufacturer">
                  <Form.Label>Manufacturer</Form.Label>
                  <Form.Control
                    value={state.shoes.manufacturer}
                    onChange={(e) =>
                      handleFieldChange("manufacturer", e.target.value)
                    }
                    isInvalid={!!state.errors.manufacturer}
                  />
                  <Form.Control.Feedback type="invalid">
                    {state.errors.manufacturer}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="categoryId">
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    value={state.shoes.categoryId ?? ""}
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
            </Row>

            <Button type="submit" variant="primary">
              Save
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ShoesForm;
