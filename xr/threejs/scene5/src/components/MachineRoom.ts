/*
 * @Author: jack.lu
 * @Date: 2022-07-28 13:47:11
 * @LastEditTime: 2022-07-28 14:31:51
 * @LastEditors: jack.lu
 * @Description: MachineRoom
 * @FilePath: /demo/xr/threejs/sence3/src/components/MachineRoom.ts
 */

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  Texture,
  Mesh,
  MeshStandardMaterial,
  MeshBasicMaterial,
  TextureLoader,
  Color,
  Raycaster,
  Vector2
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// 射线投射器，避免鼠标悬着机柜时重复实例化
const raycaster = new Raycaster()
const pointer = new Vector2()

// GLTF 模型加载器
const gltfLoader = new GLTFLoader()
export default class MachineRoom {
  renderer: WebGLRenderer // 渲染器
  scene: Scene // 场景
  camera: PerspectiveCamera // 相机
  controls: OrbitControls // 轨道控制器
  modelPath: string // 存放模型文件的目录
  maps: Map<string, Texture> = new Map()

  cabinets: Mesh[] = [] // 所有机柜
  curCabinet: Mesh // 当前操作的机柜

  // 鼠标划入机柜事件
  onMouseOverCabinet = (cabinet: Mesh) => {}

  //鼠标在机柜上移动事件，参数为canvas画布上的坐标位
  onMouseMoveCabinet = (x: number, y: number) => {}

  // 鼠标划出机柜的事件
  onMouseOutCabinet = () => {}

  selectCabinet(x: number, y: number) {
    const { cabinets, renderer, camera, maps, curCabinet } = this
    const { width, height } = renderer.domElement

    // 鼠标的canvas坐标转裁剪坐标
    pointer.set((x / width) * 2 - 1, -(y / height) * 2 + 1)
    raycaster.setFromCamera(pointer, camera)

    // 选择机柜
    const intersect = raycaster.intersectObjects(cabinets)[0]
    let intersectObj = intersect ? (intersect.object as Mesh) : null
    // 若之前已有机柜被选择，且不等于当前所选择的机柜，取消之前选择的机柜的高亮
    if (curCabinet && curCabinet !== intersectObj) {
      const material = curCabinet.material as MeshBasicMaterial
      material.setValues({
        map: maps.get('cabinet.jpg')
      })
    }

    /*
    若当前所选对象不为空：
      触发鼠标在机柜上移动的事件。
      若当前所选对象不等于上一次所选对象：
        更新curCabinet。
        将模型高亮。
        触发鼠标划入机柜事件。
    否则若上一次所选对象存在：
      置空curCabinet。
      触发鼠标划出机柜事件。
  */
    if (intersectObj) {
      this.onMouseMoveCabinet(x, y)
      if (intersectObj !== curCabinet) {
        this.curCabinet = intersectObj
        const material = intersectObj.material as MeshBasicMaterial
        material.setValues({
          map: maps.get('cabinet-hover.jpg')
        })
        this.onMouseOverCabinet(intersectObj)
      }
    } else if (curCabinet) {
      this.curCabinet = null
      this.onMouseOutCabinet()
    }
  }

  // 初始化
  constructor(canvas: HTMLCanvasElement, modelPath: string = './models/') {
    this.renderer = new WebGLRenderer({ canvas })
    this.scene = new Scene()
    this.camera = new PerspectiveCamera(
      45,
      canvas.width / canvas.height,
      0.1,
      1000
    )
    this.camera.position.set(0, 10, 15)
    this.camera.lookAt(0, 0, 0)
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.modelPath = modelPath

    // 给机柜添加高亮贴图
    this.crtTexture('cabinet-hover.jpg')
  }

  // 加载GLTF模型
  loadGLTF(modelName: string = '') {
    gltfLoader.load(this.modelPath + modelName, ({ scene: { children } }) => {
      // 更改物料材质
      children.forEach((mesh: Mesh) => {
        const { map, color } = mesh.material as MeshStandardMaterial
        this.changeMat(mesh, map, color)
        if (mesh.name.includes('cabinet')) {
          this.cabinets.push(mesh)
        }
      })
      this.scene.add(...children)
    })
  }

  changeMat(mesh: Mesh, map: Texture, color: Color) {
    if (map) {
      mesh.material = new MeshBasicMaterial({
        map: this.crtTexture(map.name)
      })
    } else {
      mesh.material = new MeshBasicMaterial({ color })
    }
  }

  crtTexture(name: string) {
    let curTexture = this.maps.get(name)
    if (!curTexture) {
      curTexture = new TextureLoader().load(this.modelPath + name)
      curTexture.flipY = false
      curTexture.wrapS = 1000
      curTexture.wrapT = 1000
      this.maps.set(name, curTexture)
    }
    return curTexture
  }

  // 连续渲染
  animate() {
    this.renderer.render(this.scene, this.camera)
    requestAnimationFrame(() => {
      this.animate()
    })
  }
}
