/*
 * @Author: jack.lu
 * @Date: 2022-07-28 13:36:00
 * @LastEditTime: 2022-07-28 15:20:20
 * @LastEditors: jack.lu
 * @Description: your description
 * @FilePath: /demo/xr/threejs/scene3/src/App.tsx
 */
import './App.css'
import React from 'react'
import MachineRoom from './components/MachineRoom'

// 机房对象
let room: MachineRoom
// canvas画布
let canvas: HTMLCanvasElement

class App extends React.Component {
  state = {
    // 信息面板
    planePos: {
      left: 0,
      top: 0
    },
    // 面板可见性
    planeDisplay: 'none',
    // 机柜信息
    curCabinet: {
      //名称
      name: 'Loading……',
      //温度
      temperature: 0,
      //容量
      capacity: 0,
      //服务器数量
      count: 0
    }
  }

  componentDidMount(): void {
    if (!canvas) return
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    room = new MachineRoom(canvas)
    room.loadGLTF('machineRoom.gltf')
    room.animate()

    //当鼠标划入机柜，显示信息面板
    room.onMouseOverCabinet = () => {
      this.setState({
        planeDisplay: 'block',
        curCabinet: {
          name: 'name' + (Math.random() * 100).toFixed(2),
          temperature: (Math.random() * 100).toFixed(2),
          capacity: (Math.random() * 100).toFixed(2),
          count: (Math.random() * 100).toFixed(2)
        }
      })
    }
    //当鼠标在机柜上移动，让信息面板随鼠标移动
    room.onMouseMoveCabinet = (left, top) => {
      this.setState({
        planePos: { left, top }
      })
    }
    //当鼠标划出机柜，隐藏信息面板
    room.onMouseOutCabinet = () => {
      this.setState({
        planeDisplay: 'none'
      })
    }
  }

  mouseMove({ clientX, clientY }) {
    room.selectCabinet(clientX, clientY)
  }
  render() {
    const {
      planePos: { left, top },
      planeDisplay: display,
      curCabinet: { name, temperature, capacity, count }
    } = this.state
    return (
      <div className="App" onMouseMove={this.mouseMove}>
        <canvas id="canvas" ref={ele => (canvas = ele)}></canvas>
        <div id="plane" style={{ left, top, display }}>
          <p>机柜名称：{name}</p>
          <p>机柜温度：{temperature}°</p>
          <p>
            使用情况：{count}/{capacity}
          </p>
        </div>
      </div>
    )
  }
}

export default App
