import { useEffect } from "react";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { useCars } from "../hooks/useCars";
import { useNavigate, useParams } from "react-router-dom";

function CarDetail() {
    const carHook = useCars();
    const { state, handleFieldChange, getById, getAllCountries, add, update } = carHook;

    const { id } = useParams();
    const navigate = useNavigate();

    const title = id ? "Update car" : "Add car";

    useEffect(() => {
        getAllCountries();
        if (id) getById(id);
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const success = id ? await update(id, state.car) : await add(null, state.car);

        if (success) navigate("/cars");
    }

    return (
       <Container className = "mt-5 d-flex justify-content-center">
            <Card className = "shadow-sm p-4" 
                  style = {{
                                width: "100%",
                                maxWidth: "500px",
                                borderRadius: "12px"
                          }}
            >
                <Card.Body>
                    <h3 className = "text-center mb-4">{title}</h3>

                    {state.generalError && (
                        <Alert variant = "danger">
                            {state.generalError}
                        </Alert>
                    )}

                    <Form onSubmit = {handleSubmit}>
                        <Form.Group className = "mb-3">
                            <Form.Label>Car name</Form.Label>
                            <Form.Control type = "text"
                                          value = {state.car?.carName || ""}
                                          onChange = {(e) => handleFieldChange("carName", e.target.value)} 
                                          isInvalid = {!!state.errors.carName} />
                            <Form.Control.Feedback type = "invalid">
                                {state.errors.carName}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className = "mb-3">
                            <Form.Label>Country</Form.Label>
                            <Form.Select
                                value = {state.car?.countryId || ""}
                                onChange={(e) => handleFieldChange("countryId", Number(e.target.value))}
                                isInvalid = {!!state.errors.countryId}
                            >
                            <option value = ""></option>
                            {state.countries?.map((country) => (
                                <option
                                    key = {country.countryId}
                                    value = {country.countryId}
                                >
                                    {country.countryName}
                                </option>
                            ))}
                            </Form.Select>
                            <Form.Control.Feedback type = "invalid">
                                {state.errors.countryId}
                            </Form.Control.Feedback>
                        </Form.Group>
                        
                        <Form.Group>
                            <Form.Label>Units</Form.Label>
                            <Form.Control type = "number"
                                          min = "5" max = "20"
                                          value = {state.car?.unitsInStock ?? ""}
                                          onChange = {(e) => handleFieldChange("unitsInStock", Number(e.target.value))} 
                                          isInvalid = {!!state.errors.unitsInStock} />
                            <Form.Control.Feedback type = "invalid">
                                {state.errors.unitsInStock}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Unit price</Form.Label>
                            <Form.Control type = "number"
                                          min = "1"
                                          value = {state.car?.unitPrice || ""}
                                          onChange = {(e) => handleFieldChange("unitPrice", Number(e.target.value))} 
                                          isInvalid = {!!state.errors.unitPrice} />
                            <Form.Control.Feedback type = "invalid">
                                {state.errors.unitPrice}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <div className = "text-center m-3">
                            <Button type = "submit" 
                                    style = {{ backgroundColor: "#ef233c",
                                               borderColor: "#ef233c",
                                               padding: "8px 30px"
                                            }}
                            >
                            Save</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default CarDetail;