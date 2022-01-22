import * as THREE from 'three'
export default function RotationHelper(rotateOn, camera, glb, size) {
  let width = window.innerWidth
  let height = window.innerHeight
  let ratio = width / height
  console.log('size from helper: ', size)

  if (rotateOn === 'front') {
    if (window.innerWidth < 992) {
      if (size.y > 15) {
        camera.position.set(0, 0, 2)
        camera.position.x = 0
      } else {
        camera.position.set(0, 2.5, 7.5)
        camera.position.x = 0
      }
    } else {
      if (size.y > 15) {
        camera.position.set(0, 0, 0.5)
        // camera.position.x = 0
      } else {
        camera.position.set(0, 0, 1.5)
      }
    }
  } else if (rotateOn === 'back') {
    // glb.scene.rotateY(1.5707963267948966) //

    if (window.innerWidth < 992) {
      if (size.y > 15) {
        camera.position.z = -1.5
      } else {
        camera.position.z = -7.5
      }
    } else {
      if (size.y > 15) {
        camera.position.set(0, 0, -0.5)
        // camera.position.x = 0
      } else {
        camera.position.z = -1.5
      }
    }
  } else if (rotateOn === 'top') {
    if (window.innerWidth < 992) {
      if (size.y > 15) {
        camera.position.set(0, 1, 0.2)
      } else {
        camera.position.set(0, 5, 5)
      }
    } else {
      if (size.y > 15) {
        camera.position.set(0, 0.5, 0)
        // camera.position.x = 0
      } else {
        camera.position.set(0, 1, 0)
      }
    }
  } else if (rotateOn === 'bottom') {
    if (window.innerWidth < 992) {
      if (size.y > 15) {
        camera.position.set(0, -1, -0.5)
      } else {
        camera.position.set(0, -5, -7.5)
      }
    } else {
      if (size.y > 15) {
        camera.position.set(0, -0.5, 0)
        // camera.position.x = 0
      } else {
        camera.position.set(0, -1, 0)
      }
    }
  } else if (rotateOn === 'left') {
    // glb.scene.rotateY(1.5707963267948966)
    if (window.innerWidth < 992) {
      if (size.y > 15) {
        camera.position.set(-2, 0, -0.2)
        // camera.position.z = 3
      } else {
        camera.position.x = 5
      }
    } else {
      if (size.y > 15) {
        camera.position.set(-0.5, 0, 0)
        // camera.position.x = 0
      } else {
        camera.position.set(1.5, 0, 0)
      }
    }
  } else if (rotateOn === 'right') {
    // glb.scene.rotateY(1.5707963267948966)
    if (window.innerWidth < 992) {
      if (size.y > 15) {
        camera.position.set(2, 0, 0.2)
        // camera.position.x = -1
      } else {
        camera.position.x = -5
      }
    } else {
      if (size.y > 15) {
        camera.position.set(0.5, 0, 0)
        // camera.position.x = 0
      } else {
        camera.position.set(-1.5, 0, 0)
      }
    }
  }
}
