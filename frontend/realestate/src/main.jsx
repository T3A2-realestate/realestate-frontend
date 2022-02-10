import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
//UserProvider
import UserProvider from './utils/userContext'
ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
    <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
