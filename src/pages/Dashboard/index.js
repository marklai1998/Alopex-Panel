// @flow strict

import React from 'react'
import Loadable from 'react-loadable'

import { Loading } from '../../modules/_shared/components/Loading'
import { Scroll } from '../../modules/_shared/components/Scroll'

const DashboardComponent = Loadable({
  loader: () => import('../../modules/Dashboard'),
  render (Loaded, props) {
    return <Loaded.Dashboard {...props} />
  },
  loading: Loading
})

export const Dashboard = () => (
  <Scroll>
    <DashboardComponent />
  </Scroll>
)
