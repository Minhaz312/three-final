import React from 'react'
import { Col } from 'react-bootstrap'

export default function ProductCard() {
  return (
    <Col md={3}>
      <div
        className="px-3 my-3 py-5 bg-white shadow-sm border rounded w-100"
        style={{ height: '200px' }}
      ></div>
    </Col>
  )
}
