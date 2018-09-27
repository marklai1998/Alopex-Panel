// @flow strict

import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Layout } from '../modules/_Layout'
import { Dashboard } from './Dashboard'
import { ErrorPage } from './Error'
import { Login } from './Login'
import { Players } from './Players'
import { Settings } from './Settings'

export const App = () => (
  <Switch>
    <Route exact path='/login' component={Login} />
    <Layout>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/players' component={Players} />
        <Route path='/settings' component={Settings} />
        <Route component={ErrorPage} />
      </Switch>
    </Layout>
  </Switch>
)
