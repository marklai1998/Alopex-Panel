// @flow strict

import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Layout } from './_Layout'
import { Dashboard } from './Dashboard'
import { Login } from './Login'

export const App = () => (
  <Switch>
    <Route exact path='/login' component={Login} />
    <Layout>
      <Route exact path='/' component={Dashboard} />
    </Layout>
  </Switch>
)
