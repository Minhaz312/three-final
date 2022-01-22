import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import data from './../data.json'

export default function Models() {
  const modelList = data.modelList
  return (
    <div>
      <Container fluid="md">
        <h1 className="text-center my-3">Model List</h1>
        <Row>
          {modelList.map((item, i) => (
            <Col md={4} sm={6}>
              <div className="text-center">
                <Link to={`/model/${item.id}`}>
                  <div className="border rounded shadow-sm bg-light m-1">
                    <img
                      src={`/images/${item.images[0].image}`}
                      style={{ height: '250px', width: '100%' }}
                    />
                  </div>
                </Link>
                <p>{item.filename.split('.')[0].toUpperCase()}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}
