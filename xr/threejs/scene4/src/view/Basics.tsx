/*
 * @Author: jack.lu
 * @Date: 2022-07-28 15:55:23
 * @LastEditTime: 2022-07-28 15:59:05
 * @LastEditors: jack.lu
 * @Description: your description
 * @FilePath: /demo/xr/threejs/scene4/src/view/Basics.tsx
 */
import React from 'react'
import { Link } from 'react-router-dom'

const Basics: React.FC = (): JSX.Element => {
  return (
    <nav style={{ width: '60%', margin: 'auto' }}>
      <h2>three 实例</h2>
      <ul>
        <li>
          <Link to="/RenderStructure">RenderStructure 渲染结构</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Basics
