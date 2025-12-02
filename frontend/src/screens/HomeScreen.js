import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';

const HomeScreen = () => {
    // 1. Prepare the shelves (State)
    // products starts as an empty array []
    const [products, setProducts] = useState([]);

    // 2. The Fetching Logic (Effect)
    // This runs as soon as the component loads
    useEffect(() => {
        const fetchProducts = async () => {
            // We ask the backend for data
            // The proxy in package.json forwards this to localhost:5000
            const { data } = await axios.get('/api/products');

            // We put the data on the shelves
            setProducts(data);
        };

        fetchProducts();
    }, []);

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product) => (
                    // sm={12} means 1 column on mobile (full width)
                    // md={6} means 2 columns on tablets
                    // lg={4} means 3 columns on desktop
                    // xl={3} means 4 columns on huge screens
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default HomeScreen;