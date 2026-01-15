import { Container, Row, Col } from "react-bootstrap";
import { useState, useMemo } from "react";
import Orchid from "./Orchid"; 
import FilterSort from "./FilterSort"; 

function ListOfOrchids( { orchids, searchText } ) {
    const [filterCategory, setFilterCategory] = useState('');
    const [sortOrder, setSortOrder] = useState('');

    const handleFilterChange = (category) => {
        setFilterCategory(category);
    };

    const handleSortChange = (order) => {
        setSortOrder(order);
    };

    const categories = useMemo(() => { 
        return [...new Set(orchids.map(orchid => orchid.category))];
    }, [orchids]);

    const filteredOrchids = useMemo(() => {
        let result = orchids
                            .filter(orchid => orchid.name.toLowerCase().includes(searchText))
                            .filter(orchid => filterCategory === '' || orchid.category === filterCategory);
    
        switch (sortOrder) {
            case "price-asc": return [...result].sort((a, b) => a.price - b.price);
            case "price-desc": return [...result].sort((a, b) => b.price - a.price);
            case "name-asc": return [...result].sort((a, b) => a.name.localeCompare(b.name));
            case "name-desc": return [...result].sort((a, b) => b.name.localeCompare(a.name));
            default: return result;
        }   
    }, [orchids, searchText, filterCategory, sortOrder]);

    return (
        <>
            <h3 className = "text-center mb-2">Orchids</h3>

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