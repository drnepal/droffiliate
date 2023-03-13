import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ShowProduct from './ShowProduct'
import products from '../products'
const Home = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <ShowProduct product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Home
