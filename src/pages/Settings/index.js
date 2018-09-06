// @flow strict

import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { About } from './About'

export const Settings = () => (
  <Switch>
    <Route exact path={'/settings/about'} component={About} />
  </Switch>
)
