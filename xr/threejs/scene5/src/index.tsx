/*
 * @Author: jack.lu
 * @Date: 2022-07-28 13:36:00
 * @LastEditTime: 2022-07-28 15:54:47
 * @LastEditors: jack.lu
 * @Description: your description
 * @FilePath: /demo/xr/threejs/scene4/src/index.tsx
 */
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
