import React from "react";
import { Container, Form, Col, Row } from "react-bootstrap";

function FilterSort({categories, onFilterChange, onSortChange}) {
    const handleFilterChange = (e) => {
        onFilterChange(e.target.value);
    };

    const handleSortChange = (e) => {
        onSortChange(e.target.value);
    };

    return (
        <Container>
            <Form className = "mb-4">
                <Row>
                    <Col md = {6} className = "align-items-center">
                        <Form.Group controlId="filterCategory" className = "w-100 text-center">
                            <Form.Label className = "text-center">Filter by Category</Form.Label>
                            <Form.Control as = "select" className = "mx-auto w-75" onChange = {handleFilterChange}>
                                <option value = "">All Categories</option>  
                                {
                                    categories.map((category, index) => (
                                    <option key = {index} value = {category.name}>{category.name}</option>
                                    ))
                                }
                            </Form.Control>
                        </Form.Group>
                    </Col>

                    <Col md = {6} className = "align-items-center">
                        <Form.Group controlId="sortOrchids" className = "w-100 text-center">
                            <Form.Label className = "text-center">Sort by</Form.Label>
                            <Form.Control as = "select" className = "mx-auto w-75" onChange = {handleSortChange}>
                                <option value = "">All Categories</option>
                                <option value = "price-asc">Price: Low to High</option>
                                <option value = "price-desc">Price: High to Low</option>
                                <option value = "name-asc">Name: A to Z</option>
                                <option value = "name-desc">Name: Z to A</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default FilterSort;