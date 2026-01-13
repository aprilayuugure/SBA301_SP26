import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Orchid from "./Orchid"; 
import FilterSort from "./FilterSort"; 

function ListOfOrchids( { orchids, searchText } ) {
    const [filterCategory, setFilterCategory] = React.useState('');
    const [sortOrder, setSortOrder] = React.useState('');

    const handleFilterChange = (category) => {
        setFilterCategory(category);
    };

    const handleSortChange = (order) => {
        setSortOrder(order);
    };

    let filteredOrchids = orchids
        .filter(orchid => orchid.name.toLowerCase().includes(searchText))
        .filter(orchid => filterCategory === '' || orchid.category === filterCategory);
    
    if (sortOrder === "price-asc") {
        filteredOrchids.sort((a, b) => a.price - b.price);
    }
    else if (sortOrder === "price-desc") {
        filteredOrchids.sort((a, b) => b.price - a.price);
    }
    else if (sortOrder === "name-asc") {
        filteredOrchids.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (sortOrder === "name-desc") {
        filteredOrchids.sort((a, b) => b.name.localeCompare(a.name));
    }

    let categories = [...new Set(orchids.map(orchid => orchid.category))];

    return (
        <>
            <h3 className = "mb-3">Orchids</h3>

            <FilterSort categories = {categories} 
                        onFilterChange = {handleFilterChange}
                        onSortChange = {handleSortChange}
            />

            <Container> 
                <Row xs = {1} md = {2} lg = {4} className = "g-4">
                    {filteredOrchids.map( (orchid) => (
                        <Col key = {orchid.id}>
                            <Orchid orchid = {orchid} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default ListOfOrchids;