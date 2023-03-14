import React, { useState, useEffect } from 'react';
import ShowProduct from './ShowProduct';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/models/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products: ', error);
      });
  }, []);

  return (
    <div>
      <h3>Latest Products</h3>
      <Row>
        {products.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <ShowProduct product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
