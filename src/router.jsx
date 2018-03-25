import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

//import asyncComponent from './components/AsyncComponent'
//const App = asyncComponent(() => import())

import App from './components/App'
import StartPage from './components/pages/StartPage'
import ErrorNotFound from './components/NotFound'

export const appHistory = createHistory()

export const router = (
  <Router history={appHistory}>
    <>
      <Switch>
        <App>
          <Switch>
            <Route path="/" component={StartPage} />
            <Route component={ErrorNotFound} />
          </Switch>
        </App>
      </Switch>
    </>
  </Router>
)