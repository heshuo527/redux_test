//引入react核心库
import React from "react";
//引入ReactDOM
import {createRoot} from 'react-dom/client'
//引入App组件
import App from './App'
import store from "./redux/store";

//获取组件
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

//渲染到页面
root.render(
  <div>
      <App/>
  </div>
)

//状态改变时调用render
store.subscribe(() => {
  root.render(
    <div>
        <App/>
    </div>
  )
})