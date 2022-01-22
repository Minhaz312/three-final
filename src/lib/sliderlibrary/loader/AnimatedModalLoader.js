import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

export default function AnimatedModalLoader(scene) {
  const loader = new FBXLoader()
  loader.load('models/fbx/Tugboat_03.fbx', function (object) {
    console.log('object: ', object)
    // const mixer = new THREE.AnimationMixer(object)

    // const action = mixer.clipAction(object.animations[0])
    // action.play()

    // object.traverse(function (child) {
    //   if (child.isMesh) {
    //     child.castShadow = true
    //     child.receiveShadow = true
    //   }
    // })

    // scene.add(object)
  })
}
