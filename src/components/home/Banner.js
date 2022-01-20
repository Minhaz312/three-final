// import { Carousel, Container } from 'react-bootstrap'
// import React, { useEffect, useRef, useState } from 'react'
// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faChevronCircleRight,
//   faChevronCircleLeft,
// } from '@fortawesome/free-solid-svg-icons'

// import SetupScene from '../../lib/sliderlibrary/gltf-loader/SetupScene'
// import SingleModelLoader from '../../lib/sliderlibrary/gltf-loader/SingleModelLoader'
// export default function Banner({ active, data, setActiveIndex }) {
//   const [activeCarouselItem, setActiveCarouselItem] = useState(active)
//   const rel = useRef(null)

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     initialSlide: active,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   }

//   const next = () => {
//     if (data.length === activeCarouselItem) {
//       setActiveCarouselItem(0)
//       setActiveIndex(0)
//     } else {
//       setActiveCarouselItem(activeCarouselItem + 1)
//       setActiveIndex(activeCarouselItem + 1)
//     }
//   }
//   const previous = () => {
//     if (data.length === 0) {
//       setActiveCarouselItem(0)
//       setActiveIndex(0)
//     } else {
//       setActiveCarouselItem(activeCarouselItem - 1)
//       setActiveIndex(activeCarouselItem - 1)
//     }
//   }
//   return (
//     <>
//       <div
//         style={{ position: 'relative', overflow: 'hidden' }}
//         className="banner-model"
//       >
//         {/* <div className="banner-model" key={0}> */}
//         <canvas
//           style={{ display: '100%', width: '100%', display: 'block' }}
//           ref={rel}
//         ></canvas>
//         {/* </div> */}
//         <div
//           className="d-flex banner-model m-0"
//           style={{ overflow: 'hidden' }}
//         ></div>
//         <button
//           style={{
//             position: 'absolute',
//             top: '40%',
//             left: '-30px',
//             width: '100px',
//             height: '30px',
//             background: 'transparent',
//             zIndex: '5',
//             borderWidth: '0',
//             borderRadius: '30%',
//             transform: 'translateY(-50%)',
//           }}
//           onClick={previous}
//         >
//           <FontAwesomeIcon
//             icon={faChevronCircleLeft}
//             style={{ fontSize: '60px', padding: '0', color: 'grey' }}
//           />
//         </button>
//         <button
//           style={{
//             position: 'absolute',
//             top: '45%',
//             right: '-25px',
//             textAlign: 'right',
//             width: '100px',
//             height: '80px',
//             borderWidth: '0',
//             background: 'transparent',
//             zIndex: '5',
//             borderRadius: '30%',
//             transform: 'translateY(-50%)',
//           }}
//           onClick={next}
//         >
//           <FontAwesomeIcon
//             icon={faChevronCircleRight}
//             style={{ fontSize: '60px', padding: '0', color: 'grey' }}
//           />
//         </button>
//       </div>
//     </>
//   )
// }
