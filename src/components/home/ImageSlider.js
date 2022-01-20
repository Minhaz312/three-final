import React, { useEffect, useState, useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronCircleRight,
  faChevronCircleLeft,
} from '@fortawesome/free-solid-svg-icons'

import { Container } from 'react-bootstrap'
import SingleModelLoader from '../../lib/sliderlibrary/loader/SingleModelLoader'

import modelList from './../../data.json'
import { useParams } from 'react-router-dom'

export default function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [rotateModelOn, setRotateModelOn] = useState(null)
  const rel = useRef(null)

  const { id } = useParams()

  const data = modelList.modelList

  useEffect(() => {
    const { camera, scene } = SingleModelLoader(
      rel.current,
      data[id].filename,
      data[id].filesize,
      data[id].bg,
      rotateModelOn,
      true,
      null,
    )
  }, [])

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    initialSlide: activeIndex,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const next = () => {
    if (activeIndex < data[0].images.length && activeIndex >= 0) {
      if (data[0].images.length - 1 === activeIndex) {
        setRotateModelOn(data[0].images[data[0].images.length - 1].rotateOn)
        setActiveIndex(0)
      } else {
        setRotateModelOn(data[0].images[activeIndex + 1].rotateOn)
        setActiveIndex(activeIndex + 1)
      }
    } else {
      setRotateModelOn('front')
      setActiveIndex(0)
    }
  }
  const previous = () => {
    if (activeIndex < data[0].images.length && activeIndex >= 0) {
      if (activeIndex === 0) {
        setRotateModelOn(data[0].images[data[0].images.length - 1].rotateOn)
        setActiveIndex(data[0].images[data[0].images.length - 1] - 1)
      } else {
        setRotateModelOn(data[0].images[activeIndex - 1].rotateOn)
        setActiveIndex(activeIndex - 1)
      }
    } else {
      setRotateModelOn('front')
      setActiveIndex(0)
    }
  }

  const handleClickSliderItem = (rotationOn, id) => {
    // setActiveIndex(id)
    setRotateModelOn(rotationOn)
    setActiveIndex(id)
  }

  let list = []
  data[0].images.map((item, i) => {
    let id = `sliderimage` + item.id
    // let filename = item.filename.split(".")[0];
    // let filenameArray = filename.split("-")
    // let rotateOn = filenameArray[filenameArray.length-1];
    // console.log('otateOn: ',)
    let rotateOn = item.rotateOn
    list.push(
      <div
        key={i}
        className="px-1 slider-item"
        data-rotate={`${rotateOn}`}
        data-active={`${i}`}
        id={`sliderItem`}
        onClick={handleClickSliderItem.bind(this, rotateOn, i)}
      >
        <div
          className="bg-white hover-bg-grey rounded border"
          style={{
            height: '100px',
            width: 'auto',
            position: 'relative',
            borderRadius: '10px',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: '0',
              left: '0',
              borderRadius: '10px',
              background: activeIndex === i ? 'transparent' : 'rgb(0,0,0,0.5)',
            }}
            className="hover-bg-transparent"
          ></div>
          {/* <img
            src={`./images/${item.image}`}
            style={{ height: '100%', width: '100%', objectFit: 'contain' }}
          /> */}
          <div className="d-flex justify-content-center align-items-center">
            {item.rotateOn}
          </div>
          {/* <h3>item {item.id}</h3> */}
        </div>
      </div>,
    )
  })
  return (
    <>
      <div
        style={{ position: 'relative', margin: '0', padding: '0' }}
        className="banner-model"
      >
        <canvas
          id="three"
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            backgroundColor: 'black',
          }}
          ref={rel}
        ></canvas>
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            height: '100%',
            width: '0px',
            background: 'rgb(0,0,0,0.8)',
            color: 'white',
            fontWeight: 'bold',
          }}
          id="loadedModel"
          className="p-5 text-center d-flex align-itemd-center justify-content-center"
        ></div>
        <button
          id="previousBtn"
          data-activesliderid={activeIndex}
          style={{
            position: 'absolute',
            top: '50%',
            left: '-30px',
            width: '100px',
            height: '30px',
            background: 'transparent',
            zIndex: '5',
            borderWidth: '0',
            borderRadius: '30%',
          }}
          onClick={previous}
          disabled={
            activeIndex < data[0].images.length - 1 && activeIndex > 0
              ? false
              : true
          }
        >
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
            style={{ fontSize: '50px', padding: '0', color: 'black' }}
          />
        </button>
        <button
          id="nextBtn"
          data-activesliderid={activeIndex}
          style={{
            position: 'absolute',
            top: '50%',
            right: '-25px',
            textAlign: 'right',
            width: '100px',
            height: '80px',
            borderWidth: '0',
            background: 'transparent',
            zIndex: '5',
            borderRadius: '30%',
          }}
          onClick={next}
          disabled={
            activeIndex < data[0].images.length && activeIndex >= 0
              ? false
              : true
          }
        >
          <FontAwesomeIcon
            icon={faChevronCircleRight}
            style={{ fontSize: '60px', padding: '0', color: 'black' }}
          />
        </button>
      </div>

      <div className="bg-gray ">
        <Container fluid="md">
          <div className="py-3 px-5">
            <Slider {...settings}>{list.map((item, i) => item)}</Slider>
          </div>
        </Container>
      </div>
    </>
  )
}
