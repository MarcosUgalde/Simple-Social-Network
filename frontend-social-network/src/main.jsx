import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Switch } from 'wouter'
import Provider from './context/Provider.jsx'
import Register from './pages/Register/index.jsx'
import Login from './pages/Login/index.jsx'
import Guard from './components/Guard/index.jsx'
import Feed from './pages/Feed/index.jsx'

const Main = () => {
  return (
    <Provider>
      <Switch>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/'>
          <Guard component={Feed} />
        </Route>
      </Switch>
    </Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
