// @flow strict

import React from 'react'
import Loadable from 'react-loadable'

import { Loading } from '../../modules/_shared/components/Loading'
import { Scroll } from '../_Layout/Scroll'

const DashboardComponent = Loadable({
  loader: () => import('../../modules/Dashboard'),
  render (loaded, props) {
    const Component = loaded.Dashboard
    return <Component {...props} />
  },
  loading: Loading
})

export const Dashboard = () => (
  <Scroll>
    <DashboardComponent />
  </Scroll>
)
