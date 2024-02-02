import React from 'react'
import ReactDOM from 'react-dom/client'
import Register from './pages/Register/index.jsx'

const Main = () => {
  return (
    <Register />
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
