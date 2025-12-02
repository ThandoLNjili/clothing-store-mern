import React, { useState, useEffect } from 'react';
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
    <div>
      <h1>Latest Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div key={product._id} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;