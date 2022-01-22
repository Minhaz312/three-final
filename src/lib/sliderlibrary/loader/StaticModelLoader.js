import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import GUI from 'lil-gui'
import RotationHelper from './helpers/RotationHelper'
export default function StaticModelLoader(
  filename,
  canvas,
  camera,
  scene,
  filesize,
  renderer,
  defaultRotation,
  rotateAt,
) {
  const loader = new GLTFLoader().setPath('/models/')
  loader.load(
    `${filename}`,
    function (glb) {
      glb.scene.traverse((c) => {
        c.castShadow = true
      })
      console.log('cache from three: ', THREE.Cache.files)
      console.log('scene: ', glb)
      const box = new THREE.Box3().setFromObject(glb.scene)
      var size = new THREE.Vector3()
      box.getSize(size)
      var center = new THREE.Vector3()
      box.getCenter(center)
      console.log('box: ', size)

      let scale = canvas.clientHeight / canvas.clientWidth / size.y
      if (size.y > 15) {
        camera.position.set(0, 0.1, 0.4)
      } else {
        camera.position.set(0, 0, 1.3)
      }
      if (window.innerWidth < 992) {
        if (size.y > 15) {
          camera.position.set(0, 0, 2.3)
        } else {
          camera.position.set(0, 3.25, 8)
        }
      }

      const screenshotPageWidth = document.innerWidth
      const screenshotPageHeight = document.innerHeight

      // renderer

      var height = screenshotPageHeight / 2
      var width = screenshotPageWidth / 2
      if (screenshotPageHeight < screenshotPageWidth) {
        // landscape orientation
        if (width > (3 * height) / 2) {
          width = (3 * height) / 2
        } else if (width < (3 * height) / 2) {
          height = (2 * width) / 3
        }
      } else if (screenshotPageHeight > screenshotPageWidth) {
        // portrait orientation
        if (height > (2 * width) / 3) {
          height = (2 * width) / 3
        } else if (height < (2 * width) / 3) {
          width = (3 * height) / 2
        }
      }

      // let limitHeight = screen.height - 137;

      renderer.setSize(width, height)

      console.log('glb: ', glb)
      glb.scene.scale.setScalar(scale)

      glb.scene.position.sub(center.multiplyScalar(scale))

      console.log('defaultRotation and rotateAt: ', defaultRotation, rotateAt)

      if (defaultRotation === true) {
        rotateAt = null
      } else {
        defaultRotation = false
      }

      let sliderItem = document.getElementsByClassName('slider-item')

      for (let i = 0; i < sliderItem.length; i++) {
        sliderItem[i].addEventListener('click', () => {
          let rotateOn = sliderItem[i].dataset.rotate
          camera.position.set(0, 0.5, 1.5)
          defaultRotation = false
          // glb.scene.rotateY(1.5707963267948966)
          RotationHelper(rotateOn, camera, glb, size)
        })
      }

      let prevBtn = document.getElementById('previousBtn')
      let nextBtn = document.getElementById('nextBtn')

      prevBtn.addEventListener('click', function () {
        defaultRotation = false
        let presentId = Number(prevBtn.dataset.activesliderid)
        console.log(
          'presentId from prev, length: ',
          presentId,
          sliderItem.length,
        )
        camera.position.set(0, 0.5, 1.5)
        let rotateOn

        if (presentId >= 0 && presentId < sliderItem.length) {
          rotateOn = sliderItem[presentId - 1].dataset.rotate
          RotationHelper(rotateOn, camera, glb, size)
        }
      })

      nextBtn.addEventListener('click', function () {
        defaultRotation = false
        let presentId = Number(nextBtn.dataset.activesliderid)
        console.log(
          'presentId from next, length: ',
          presentId,
          sliderItem.length,
        )
        camera.position.set(0, 0.5, 1.5)
        if (presentId >= 0 && presentId <= sliderItem.length - 2) {
          let rotateOn = sliderItem[presentId + 1].dataset.rotate
          RotationHelper(rotateOn, camera, glb, size)
        }
      })
      document
        .getElementsByClassName('banner-model')[0]
        .addEventListener('mouseover', () => {
          defaultRotation = false
          console.log('mouse event listent')

          rotateAt = null
        })
      function animate() {
        requestAnimationFrame(animate)

        // if ((defaultRotation === true) & (rotateAt === null)) {
        //   // glb.scene.rotation.y += 0.01
        //   var timer = Date.now() * 0.0001
        //   camera.position.x = Math.cos(timer)
        //   camera.position.z = Math.sin(timer)
        //   camera.lookAt(scene.position)
        // }
        renderer.render(scene, camera)
      }
      animate()
      class ColorGUIHelper {
        constructor(object, prop) {
          this.object = object
          this.prop = prop
        }
        get value() {
          return `#${this.object[this.prop].getHexString()}`
        }
        set value(hexString) {
          this.object[this.prop].set(hexString)
        }
      }

      {
        const color = 0xffffff
        const intensity = 1
        const light = new THREE.AmbientLight(color, intensity)
        scene.add(light)

        const gui = new GUI()
        gui.addColor(new ColorGUIHelper(light, 'color'), 'value').name('color')
        gui.add(light, 'intensity', 0, 2, 0.01)
      }

      scene.add(glb.scene)
    },
    function (xhr) {
      console.log('loaded: ', xhr.loaded)
      let modalSize = Math.round(filesize)
      let loaded = Math.round(
        (Math.round(xhr.loaded / 1024) / Math.round(modalSize)) * 100,
      )
      console.log(xhr.loaded)
      let element = document.createElement('h3')
      let textNode = document.createTextNode(`${loaded}%`)
      element.classList.add('loading-model')
      element.appendChild(textNode)
      // renderer.domElement.classList.add('d-none')
      document.getElementById('loadedModel').classList.remove('d-none')
      document.getElementById('total-loaded').innerText = `loaded ${loaded}%`
      document.getElementById('loading-progress').style.width = `${loaded}%`
      if (loaded >= 100) {
        setTimeout(() => {
          document.getElementById('loadedModel').style.display = `none`
          document.getElementById('loadedModel').classList.add('d-none')
          // renderer.domElement.classList.remove('d-none')
        }, [800])
      }
    },
    function (error) {
      console.log('glb load error: ', error)
    },
  )
}
