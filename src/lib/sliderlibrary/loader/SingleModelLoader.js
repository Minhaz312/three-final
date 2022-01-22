import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import AnimatedModalLoader from './AnimatedModalLoader'

import RotationHelper from './helpers/RotationHelper'
import StaticModelLoader from './StaticModelLoader'

export default function SingleModelLoader(
  canvas,
  filename,
  filesize,
  bg,
  rotateAt,
  defaultRotation,
  defaultViewAngle,
) {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    100,
  )
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  })
  const controls = new OrbitControls(camera, renderer.domElement)

  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)

  camera.position.set(0, 0.5, 2)

  scene.background = new THREE.Color(bg)
  console.log('backgorund: ', bg)
  scene.translateY(0.05)

  renderer.render(scene, camera)

  const light = new THREE.AmbientLight(0xffffff, 1)

  let fileExtension = filename.split('.')[1].toLowerCase()
  console.log('fileExtension: ', fileExtension)
  if (fileExtension === 'gltf' || fileExtension === 'glb') {
    StaticModelLoader(
      filename,
      canvas,
      camera,
      scene,
      filesize,
      renderer,
      defaultRotation,
      rotateAt,
    )
  } else if (fileExtension === 'fbx') {
    AnimatedModalLoader(scene)
  }

  const hemiSphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 0.1)
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.1)
  const shadowGroup = new THREE.Group()
  shadowGroup.position.y = -0.3
  scene.add(shadowGroup)
  scene.add(hemiSphereLight)
  scene.add(directionalLight)

  scene.add(light)

  window.addEventListener('resize', function (e) {
    console.log(
      'canvas width, widnow width: ',
      renderer.domElement.width,
      window.innerWidth,
    )
    if (renderer.domElement.width !== window.innerWidth) {
      renderer.setSize(window.innerWidth)
    }
  })

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement
    const width = canvas.clientWidth
    const height = canvas.clientHeight
    const needResize = canvas.width !== width || canvas.height !== height
    if (needResize) {
      renderer.setSize(width, height, false)
    }
    return needResize
  }

  function animate() {
    requestAnimationFrame(animate)
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement
      camera.aspect = canvas.clientWidth / canvas.clientHeight

      camera.updateProjectionMatrix()
    }
    controls.update()
    renderer.render(scene, camera)
  }
  animate()

  return { camera, scene }
}
