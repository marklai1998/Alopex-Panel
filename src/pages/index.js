// @flow strict

import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { Layout } from './_Layout'
import { Dashboard } from './Dashboard'
import { Login } from './Login'
import { Settings } from './Settings'

export const App = () => (
  <Switch>
    <Route exact path='/login' component={Login} />
    <Layout>
      <Route exact path='/dashboard' component={Dashboard} />
      <Route path='/settings' component={Settings} />
    </Layout>
    <Redirect to='/dashboard' />
  </Switch>
)
