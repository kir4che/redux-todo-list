import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'

import './styles.css'

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    {/* 將 Redux store 傳入 Provider，讓所有組件都能使用 store。 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)