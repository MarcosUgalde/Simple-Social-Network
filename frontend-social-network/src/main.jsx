import React from 'react'
import ReactDOM from 'react-dom/client'
import Auth from './pages/Auth/index.jsx'
import { Route, Switch } from 'wouter'
import Provider from './context/Provider.jsx'

const Main = () => {
  return (
    <Provider>
      <Switch>
        <Route path='/auth' component={Auth} />
      </Switch>
    </Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
