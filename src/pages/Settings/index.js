// @flow strict

import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { About } from './About'

type Props = {
  match: {
    path: string
  }
}

export const Settings = ({ match: { path } }: Props) => (
  <Switch>
    <Route exact path={`${path}/about`} component={About} />
  </Switch>
)
