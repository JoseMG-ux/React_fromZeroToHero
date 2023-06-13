import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
//import FirstApp from './components/FirstApp.jsx'
import CounterApp from './components/CounterApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={0} />
  </React.StrictMode>
)