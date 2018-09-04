// @flow strict

import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Dashboard } from '../modules/Dashboard'
import { Login } from '../modules/Login'
import { Layout } from './_Layout'

export const App = () => (
  <Switch>
    <Route exact path='/login' component={Login} />
    <Layout>
      <Route exact path='/' component={Dashboard} />
    </Layout>
  </Switch>
)
