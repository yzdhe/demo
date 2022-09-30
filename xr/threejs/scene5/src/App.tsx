/*
 * @Author: jack.lu
 * @Date: 2022-07-28 13:36:00
 * @LastEditTime: 2022-07-28 15:58:07
 * @LastEditors: jack.lu
 * @Description: your description
 * @FilePath: /demo/xr/threejs/scene4/src/App.tsx
 */

import React from 'react'
import { useRoutes } from 'react-router-dom'
import './App.css'
import Basics from './view/Basics'
import RenderStructure from './view/RenderStructure'

const App: React.FC = (): JSX.Element => {
  const routing = useRoutes([
    {
      path: '/',
      element: <Basics />
    },
    {
      path: 'RenderStructure',
      element: <RenderStructure />
    }
  ])
  return <>{routing}</>
}

export default App
