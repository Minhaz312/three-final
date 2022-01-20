import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCartPlus,
  faDownload,
  faHeart,
} from '@fortawesome/free-solid-svg-icons'
import ProductCard from '../components/home/ProductCard'
import ImageSlider from '../components/home/ImageSlider'
export default function Home() {
  return (
    <>
      <div className="p-3" style={{ backgroundColor: '#02055A' }}></div>
      <ImageSlider />
      <Container fluid="md">
        <div className="d-flex justify-content-between align-items-center my-3 border-bottom pb-3">
          <p>Text</p>
          <div className="d-flex">
            <p className="text-warning">FREE</p>
            <FontAwesomeIcon
              icon={faCartPlus}
              style={{ fontSize: '20px', color: 'grey', margin: '0 10px' }}
            />
            <FontAwesomeIcon
              icon={faHeart}
              style={{ fontSize: '20px', color: 'grey', margin: '0 10px' }}
            />
            <a href="./models/scene.glb" target="_blank">
              <FontAwesomeIcon
                icon={faDownload}
                style={{ fontSize: '20px', color: 'grey', margin: '0 10px' }}
              />
            </a>
          </div>
        </div>
        <Row>
          <Col md={8}>
            <div>
              <div
                className="d-flex"
                style={{ overflowY: 'hidden', overflowX: 'auto' }}
              >
                <div
                  className="border px-3 py-2 mx-1"
                  style={{ borderRadius: '20px' }}
                >
                  FREE
                </div>
                <div
                  className="border px-3 py-2 mx-1"
                  style={{ borderRadius: '20px' }}
                >
                  BLENDER
                </div>
                <div
                  className="border px-3 py-2 mx-1"
                  style={{ borderRadius: '20px' }}
                >
                  OBJ
                </div>
                <div
                  className="border px-3 py-2 mx-1"
                  style={{ borderRadius: '20px' }}
                >
                  FBX
                </div>
                <div
                  className="border px-3 py-2 mx-1"
                  style={{ borderRadius: '20px' }}
                >
                  3DS
                </div>
                <div
                  className="border px-3 py-2 mx-1"
                  style={{ borderRadius: '20px' }}
                >
                  TEXTURED
                </div>
              </div>
              <div className="bg-light my-3 py-5 px-2">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before the final copy is
              </div>
              <hr className="my-3" />
              <div
                style={{ height: '300px' }}
                className="d-flex justify-content-center align-items-center"
              >
                a text
              </div>
              <div>
                <Row>
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </Row>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <Card className="mb-3">
              <Card.Body className="bg-gray text-white">
                <p className="px-2 py-2 border-bottom  bg-gray text-white">
                  some text
                </p>
                <div className="text-center">
                  <p className="my-3">some text here</p>
                  <p className="my-3">some text here</p>
                  <p className="my-3">some text here</p>
                  <p className="my-3">some text here</p>
                </div>
                <p className="px-2 py-2 border-top  bg-gray text-white">
                  some text
                </p>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <p className="px-2 py-2 border-bottom">some text</p>
                <div className="text-center">
                  <p className="my-3">some text here</p>
                  <p className="my-3">some text here</p>
                  <p className="my-3">some text here</p>
                  <p className="my-3">some text here</p>
                </div>
                <p className="px-2 py-2 border-top">some text</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      s
      <div
        style={{ height: '500px' }}
        className="bg-light d-flex justify-content-center align-items-center  mt-5"
      >
        <h3>Footer</h3>
      </div>
    </>
  )
}
