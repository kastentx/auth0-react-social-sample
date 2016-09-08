/* ===== ./src/views/Main/routes.js ===== */
import React from 'react'
import {Route, IndexRedirect} from 'react-router'
import AuthService from 'utils/AuthService'
import Container from './views/Main/Container'
import Home from './views/Main/Home/Home'
import Login from './views/Main/Login/Login'

const auth = new AuthService(__AUTH0_CLIENT_ID__, __AUTH0_DOMAIN__);

// onEnter callback to validate authentication in private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container} auth={auth}>
      <IndexRedirect to="/home" />
      <Route path="home" component={Home} onEnter={requireAuth} />
      <Route path="login" component={Login} />
    </Route>
  )
}

export default makeMainRoutes