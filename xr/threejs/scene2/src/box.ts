/*
 * @Author: jack.lu
 * @Date: 2022-07-04 16:18:49
 * @LastEditTime: 2022-07-04 16:31:27
 * @LastEditors: jack.lu
 * @Description: your description
 * @FilePath: /avr/threejs/s2/src/box.ts
 */
import {
  BoxGeometry,
  Mesh,
  MeshNormalMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from 'three'

const scene = new Scene()
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

const canvas = <HTMLCanvasElement>document.getElementById('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const renderer = new WebGLRenderer({ canvas })

const geometry = new BoxGeometry()
const material = new MeshNormalMaterial()
const cube = new Mesh(geometry, material)
scene.add(cube)

camera.position.z = 5

function animate() {
  requestAnimationFrame(animate)

  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  renderer.render(scene, camera)
}

animate()
